
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/button';

function App() {
  const [count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1)
  }
  

  return (

    <div>
      <Button handleClick={handleClick} text="Click Me">

      <h1>{count}</h1>
      </Button>
    </div>
      
      
    
    
  )
}

export default App
