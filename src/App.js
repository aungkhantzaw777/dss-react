import { useEffect, useRef, useState, useCallback } from 'react';
import { useCountdown } from './utils/useCountdown';
import { Button, Modal, Form, Card } from 'react-bootstrap'
import { PlayIcon, PauseIcon, ArrowPathRoundedSquareIcon, PlusIcon, ArrowUpIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import AdjustTime from './component/AdjustTime';
import classes from './App.module.css'


function App() {
  const [isAddNew, setIsAddNew] = useState(false)
  const { isStop, onClickReset, timer, resumtTimer, stopTimer } = useCountdown()
  const timeRef = useRef()
  const [timeLength, setTimeLength] = useState('00:00')

  const handleTimeLengthIncreate = (val) => {
    // console.log(val)
    setTimeLength(val)
  }

  useEffect(() => {

  }, [timer])


  const closeModal = () => {
    setIsAddNew(false)
  }



  return (
    <div className={classes.App}>
      <div className={classes.timerwrap}>
        <h2 className={classes.timer_text}>{timer}</h2>
        <div className={classes.actionWrap}>
          
          <PlusIcon onClick={() => setIsAddNew(true)} className={classes.icon_button} />
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
          <ArrowPathRoundedSquareIcon onClick={onClickReset} className={classes.icon_button} />

        </div>
      </div>



      <Modal show={isAddNew} onHide={closeModal}
        contentClassName={classes.modal_wrap} centered>
        <Modal.Header closeVariant="white" closeButton>
          <Modal.Title className='text-white'>Adjust Time Length</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdjustTime setValue={handleTimeLengthIncreate} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
