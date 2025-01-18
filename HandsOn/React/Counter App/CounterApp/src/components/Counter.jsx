import React from 'react'
import { useState } from 'react';
const Counter = () => {
  const [count,setCount]=useState(0);
  const increament=() =>{
    setCount(count+1);
  };
  const decreament =()=>{
    if(!count ==0)
    setCount(count-1);
  };
  const reset=()=>{
    setCount(0);
  };
  return (
    
    
    <div>
    <h1>{count}</h1>
    <button onClick={increament}>Increament</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decreament}>Decreament</button>
    </div>
  )
}

export default Counter