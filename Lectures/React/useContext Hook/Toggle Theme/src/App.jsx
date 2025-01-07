
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';


const ThemeContext=createContext();
function App() {
  const[theme,setTheme]=useState('light');
  
  

  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div id='container' style={{background:theme==='light'?"beige":"black"}}>
    <ChildA/>

    </div>
    
      
    </ThemeContext.Provider>

      
    </>
  )
}

export default App
export {ThemeContext}
