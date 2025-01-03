import React, { useState } from 'react'
import "./Counter.css"

function Counter() {
  const [count,setCount]=useState(0)
  return (
    <div className='counter-countainer'>
    <p>You have clicked {count} times</p>
    <button id='btn' onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  )
}

export default Counter