import React, { useState } from 'react'
import './TempConvertor.css'
const TempConvertor = () => {
  const [celcius,setCelcius]=useState("");
  const [fahrenheit,setFahrenheit]=useState("");
  const handleCelciusChange=(e) =>{
    const temp=e.target.value;
    setCelcius(temp);
    setFahrenheit(temp===""?"":(temp*9)/5+32); 


  }


  return (
    <div>
      <div className='container'>
        <input type='number' placeholder='Celcius' value={celcius} onChange={handleCelciusChange}></input>
        <input type='number' placeholder='Fahrenheit' value={fahrenheit}></input>
      </div>
    </div>
  )

}
export default TempConvertor