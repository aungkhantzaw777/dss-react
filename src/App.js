import { useEffect, useRef, useState, useCallback } from 'react';
import './App.css';
import { useCountdown } from './utils/useCountdown';

function App() {
  const [isAddNew, setIsAddNew] = useState(false)

  const { isStop, onClickReset, timer, resumtTimer, stopTimer } = useCountdown()
  
  return (
    <div className="App">


      <h2>{timer}</h2>
      <button onClick={() => setIsAddNew(true)}>Choose Time Length</button>
      <button onClick={onClickReset}>reset</button>
      {
        isStop ?
          (
            <button onClick={resumtTimer}>start</button>
          )
          :
          (
            <button onClick={stopTimer}>Stop</button>
          )
      }

      {
        isAddNew &&
        (
          <div id="new" className="overlay">
            <a href="#" onClick={() => setIsAddNew(false)} className="cancel"></a>
            <div className="modal">
              <h1 >Choose Time</h1>
              <div>

                <select>
                  <option>Minutes</option>
                  {[...Array(60)].map((e, index) => (
                    <option key={index}>{index+1}</option>
                  )
                  )}
                </select>
                <select>
                  <option>Seconds</option>
                  {[...Array(60)].map((e, index) => (
                    <option key={index}>{index+1}</option>
                  )
                  )}
                </select>
              </div>
              <a href="#" onClick={() => setIsAddNew(false)} className="close">&times;</a>
            </div>
          </div>
        )

      }




    </div>
  );
}

export default App;
