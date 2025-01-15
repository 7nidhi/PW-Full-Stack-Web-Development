import React from 'react'
import './Comp.css'

const Comp = (props) => {
  return (
    <div className="card">
    <img id='cat-image' src={props.image} alt={props.name}></img>
    <p className="cat-name">{props.name}</p>
    
    
    </div>
  )
}

export default Comp