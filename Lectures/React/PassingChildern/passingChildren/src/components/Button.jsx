import React from 'react'

const Button = (props) => {
  return (
   <>
    {props.children}
     <button onClick={props.handleClick}>
    {props.text} 
    </button>
   </>
  )
}

export default Button 