import React from 'react'
import './LoginSignup.css'
import  user_icon from '../assets'
import password_icon from '../assets'
import email_icon from '../assets'


const LoginSignup = () => {
  return (
    <div className='container'>
    <div className='header'>
    <div className='text'>Sign Up</div>
    <div className='under-line'></div>
    </div>
    <div className='inputs'>
        <div className='input'>
            <img src={user_icon} alt=''></img>
            <input type='text'></input>
        </div>
        <div className='input'>
            <img src={email_icon} alt=''></img>
            <input type='email'></input>
        </div>
        <div className='input'>
            <img src={password_icon} alt=''></img>
            <input type='password'></input>
        </div>

    </div>


    </div>
  )
}

export default LoginSignup