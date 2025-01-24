import React, { useState } from 'react'
import './add.css'
const Add = () => {
    const [num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");
    const [result, setResult] =useState();
    const handleFirstNum=(e) =>{
        const val1=e.target.value;
        setNum1(val1);
    }

    const handleSecondNum=(e) =>{
        const val2=e.target.value;
        setNum2(val2);

    }
    const handleResult=() =>{
        setResult(Number(num1)+Number(num2));

    }
    
  return (
    <div>
    <div className='container'>
    <input type='number' value={num1} placeholder='Enter First Number' onChange={handleFirstNum}></input>
    <button>+</button>
    <input type='number' value={num2} placeholder='Enter Second Number' onChange={handleSecondNum}></input>
    <button onClick={handleResult}> = </button>
    <input type='number' value={result} placeholder='Addition'></input>
        
    </div>
        


    </div>
  )
}

export default Add