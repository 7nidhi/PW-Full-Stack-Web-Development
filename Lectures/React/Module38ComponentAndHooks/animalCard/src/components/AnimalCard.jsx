import React from 'react'
import './AnimalCard.css'
import cat from '../assets/cat.jpg'


const AnimalCard = (props) => {
  return (
    <div className='user-container'>
    <p id='user-name'>{props.name}</p>
    <img id='user-image' src={props.image} alt={props.name}></img>
    <p id='user-desc'>{props.desc}</p>

    </div>
  )
}

export default AnimalCard