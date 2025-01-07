import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import './ChildB.css'


const ChildB = () => {
    const {theme,setTheme}=useContext(ThemeContext);
    function toggleTheme(){
        if (theme==='light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
  return (
    <div>
    <button id='btn' onClick={toggleTheme}>
        Change Theme
    </button>

    </div>
  )
}

export default ChildB