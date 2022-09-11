import { useEffect, useRef, useState } from 'react';

const useCountdown = () => {
  const runningTimeRef = useRef(null);
  const progressRef = useRef(0)
  const initialTime = useRef('05:00')

  const [timer, setTimer] = useState('05:00');
  const [isStop, setIsStop] = useState(false)

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);

    return {
      total, minutes, seconds
    };
  }

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    let start = parseInt(initialTime.current.split(':')[0]) * 60 + parseInt(initialTime.current.split(':')[1])
    let cur = minutes * 60 + seconds
    progressRef.current = ((cur - start) * 100) / (0 - start)
    console.log(progressRef.current)
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const clearTimer = (e) => {

    if (runningTimeRef.current) clearInterval(runningTimeRef.current);
    if (runningTimeRef.current && isStop) clearInterval(runningTimeRef.current)
    const interval = setInterval(() => {
      startTimer(e);
    }, 1000)
    runningTimeRef.current = interval;
  }

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 300);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  useEffect(() => {
    if(timer === '00:00'){
      clearInterval(runningTimeRef.current)
      setIsStop(true)
    }
  }, [timer])

  const onClickReset = () => {
    setTimer("05:00")
    initialTime.current = "05:00"

    clearTimer(getDeadTime());
    setIsStop(false)
    progressRef.current = 0
  }

  const stopTimer = () => {
    setIsStop(true)
    clearInterval(runningTimeRef.current)
  }

  const calculateResumeTime = (min, sec) => {
    let total = min * 60 + parseInt(sec)
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + total);
    clearTimer(deadline)
  }

  const resumeTimer = () => {
    setIsStop(false)
    let [minutes, seconds] = timer.split(":")

    calculateResumeTime(minutes, seconds)
  }
  

  const chooseTime = (min, sec) => {
    let selectTime = (min > 9 ? min : '0' + min) + ':'
    + (sec > 9 ? sec : '0' + sec)
    setTimer(selectTime)
    initialTime.current = selectTime
    progressRef.current = 0

    calculateResumeTime(min, sec)
    setIsStop(false)

  }


  return {
    resumeTimer,
    onClickReset,
    stopTimer,
    isStop,
    timer,
    chooseTime,
    progressRef
  }

};

export { useCountdown };
