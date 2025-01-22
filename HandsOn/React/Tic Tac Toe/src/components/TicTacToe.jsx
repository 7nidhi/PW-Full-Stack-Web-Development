import React from 'react'
import  '../components/TicTacToe.css'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'

const TicTacToe = () => {
  return (
    <div className='container'>
    <h1 className='tittle'>Tic Tac Toe By <span>React</span></h1>
    <div>
        Board
    </div>
    <button className='reset'>Reset</button>

    </div>
    
  )
}

export default TicTacToe