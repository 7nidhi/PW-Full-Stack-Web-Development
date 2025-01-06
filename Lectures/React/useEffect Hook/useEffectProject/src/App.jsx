
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  const [total,setTotal]=useState(1)
  //first- side effet function
  //second- clean-up function
  //third- comma seperated list will update, first will run immedietlly


//variation 1-
//runs on evry render
//   useEffect(() => {
//     alert("I will run on each rendor")
      
// })
 
  //Variation 2-
  //thats run on only first render
  // useEffect(() => {
  //   alert("I will run only first render");
  // }, [])

  //variation 3-
  //
  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count])

  //Variation 4-
  //Multiple dependencies
  // useEffect(() => {
  //   alert("i will run every time when count/total is updated.")
    
  // }, [count,total])

  //Variation 5-
  //add clean up function-when count is unmoint from UI
  useEffect(() => {
    alert("Count is updated")
  
    return () => {
      alert("Count is unmount from UI")
    }
  }, [count])
  
  
  
   function handleClick(){
    setCount(count+1);
    
  }
  function handleClickTotal(){
    setTotal(total+1);

  }
  

  return (
    <div>
    <button onClick={handleClick}>
      Update Count
    </button>
    <br/>
    Count is:{count}
    <br/>
    <button onClick={handleClickTotal}>
      Update Total
    </button>
    <br/>
    Total is:{total}
    </div>
    
  )
}

export default App
