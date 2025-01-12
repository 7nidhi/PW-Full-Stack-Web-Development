
import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [time,setTime]=useState(0);
  let timeRef=useRef(null);
  function startTimer(){
    timeRef.current=setInterval(() => {
      setTime(time =>time+1);
    }, 1000);

  }
  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current=null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);

  }

  return (
   <div>
    <h1>Stopwatch:{time} seconds</h1>
    <button className='btnStart' onClick={startTimer}>Start</button>
    <br/> <br/>
    <button className='btnStop' onClick={stopTimer}>Stop</button>
    <br/><br/>
    <button className='btnReset' onClick={resetTimer}>Reset</button>
   </div>
  )
}

export default App
