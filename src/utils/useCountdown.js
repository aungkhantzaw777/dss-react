import { useEffect, useRef, useState, useCallback } from 'react';

const useCountdown = () => {
  const timeRef = useRef(null);

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
    let { total, minutes, seconds }
      = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }
  const clearTimer = useCallback((e) => {

    if (timeRef.current) clearInterval(timeRef.current);
    const interval = setInterval(() => {
      startTimer(e);
    }, 1000)
    timeRef.current = interval;
  }, [timeRef])
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
      clearInterval(timeRef.current)
      setIsStop(true)
    }
  }, [timer])
  const onClickReset = () => {
    setTimer("5:00")
    clearTimer(getDeadTime());
    setIsStop(false)
  }

  const stopTimer = () => {
    setIsStop(true)
    clearInterval(timeRef.current)
  }

  const resumtTimer = () => {
    setIsStop(false)
    let [minutes, seconds] = timer.split(":")

    let total = minutes * 60 + parseInt(seconds)
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + total);
    clearTimer(deadline)
  }
  const chooseTime = (min, sec) => {
    setTimer(
      (min > 9 ? min : '0' + min) + ':'
      + (sec > 9 ? sec : '0' + sec)
      )
    
  }
  return {
    resumtTimer,
    onClickReset,
    stopTimer,
    isStop,
    timer,
    chooseTime
  }

};

export { useCountdown };
