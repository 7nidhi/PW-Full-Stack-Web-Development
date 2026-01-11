import React, { useState } from 'react'

const ShowText = () => {
    const [showText,setShowText]=useState(false);
  return (
    <div>
    <button onClick={
        ()=>{setShowText(!showText)}}>
        {showText? "Hide":"Show"}
    </button>
    {showText && <p>This is Toggled Text.</p>}

    </div>
  )
}

export default ShowText