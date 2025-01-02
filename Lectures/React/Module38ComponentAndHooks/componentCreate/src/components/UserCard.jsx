import React from 'react'
import cat from '../assets/cat.jpg'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-card'>{props.name}</p>
        <img id='user-image' src={cat} alt='Cat'></img>
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard