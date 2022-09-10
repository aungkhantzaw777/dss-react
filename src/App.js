import { useEffect, useState, useCallback } from 'react';
import { useCountdown } from './utils/useCountdown';
import { Button, Modal } from 'react-bootstrap'
import { PlayIcon, PauseIcon, ArrowPathRoundedSquareIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import AdjustTime from './component/AdjustTime';
// import { CSSTransitionGroup } from 'react-transition-group'  
import classes from './App.module.css'

function App() {
  const [isAddNew, setIsAddNew] = useState(false)
  const { isStop, onClickReset, timer, resumtTimer, stopTimer, chooseTime } = useCountdown()
  const [timeLength, setTimeLength] = useState('00:00')

  const handleTimeLength = useCallback((val => {
    setTimeLength(val)
  }), [timeLength])

  useEffect(() => {

  }, [timer])


  const closeModal = () => {
    setIsAddNew(false)
  }

  const handleAdjustTime = () => {
    let [minute, second] = timeLength.split(":")
    minute = parseInt(minute)
    second = parseInt(second)
    chooseTime(minute, second)
    setIsAddNew(false)

  }


  return (
    <div className={classes.App}>
      <h1 className='text-center fw-900'>Count Down Timer</h1>
      <div className={classes.timerwrap}>
        <h2 className={classes.timer_text}>
          
          {timer}
         
          {/* {timer} */}
        </h2>
        <div className={classes.actionWrap}>
          {
            isStop &&
            (
              <WrenchScrewdriverIcon onClick={() => setIsAddNew(true)} className={classes.icon_button} />
            )
          }
          {
            isStop ?
              (
                <button className={classes.btn_rounded} onClick={resumtTimer}>
                  <PlayIcon />
                </button>
              )
              :
              (
                <button className={classes.btn_rounded} onClick={stopTimer}><PauseIcon /></button>
              )
          }
          {
            isStop &&
            (
              <ArrowPathRoundedSquareIcon onClick={onClickReset} className={classes.icon_button} />
            )
          }

        </div>
      </div>

      <Modal show={isAddNew} onHide={closeModal}
        contentClassName={classes.modal_wrap} centered>
        <Modal.Header closeVariant="white" closeButton>
          <Modal.Title className='text-white'>Adjust Time Length</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdjustTime setValue={handleTimeLength} />
        </Modal.Body>
        <Modal.Footer>

          <Button onClick={handleAdjustTime} variant="primary">
            Set Up
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
