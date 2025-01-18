import React, { use, useState } from 'react'

const ToggleText = () => {
    const[visible,setVisible]=useState(true);
    const isShow =() =>{
        setVisible(true);
    }
    const isHide=()=>{
        setVisible(false);
    }
  return (
    <div>
    {visible && <h1>Toggle</h1> }
    <div>
        <button onClick={isShow}>Show</button>
        <button onClick={isHide}>Hide</button>
    </div>
    </div>
  )
}

export default ToggleText