import ChildComponent from '../components/childComponent';
import { useCallback, useState } from 'react'
import './App.css'

function App() {
   const [count,setCount]=useState(0);
  // function handleClick(){
  //   setCount(count+1);
  // }
  const handleClick=useCallback(() => {
      setCount(count+1);
    },
    [count],
  )
  
  

  return (
    <div>
    <div>
      Count:{count}
    </div>
    <br/><br/>
    <div>
      <button onClick={handleClick}>
      Increment
    </button>
    </div>
    <br/><br/>
    <div>
      <ChildComponent 
      buttonName="Click me!"
        handleClick={handleClick}
      />
    </div>
    
    
    </div>
  )
}

export default App
