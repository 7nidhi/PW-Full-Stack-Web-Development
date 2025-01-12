
import { useEffect, useReducer, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount]=useState(0);
  let val=useRef(0);
  let btnRef=useRef();

  function handleInc(){
    val.current=val.current+1;
    console.log("value of val is:",val.current);
    setCount(count+1);
  }

  useEffect(() => {
    console.log("Render again");  
  })
  function changeColor(){
    btnRef.current.style.backgroundColor="red";

  }
  

  return (
    <div>
      <button ref={btnRef} onClick={handleInc}>INC</button>
      <br/>
      <br/>
      <button onClick={changeColor}>Change Color of 1st Button</button>
      <br/> <br/>
      <div>Count:{count}</div>
      

    </div>
  )
}

export default App
