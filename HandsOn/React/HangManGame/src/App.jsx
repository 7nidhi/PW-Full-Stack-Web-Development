
import './App.css'
import Button from './components/Buttons/Button'

function App() {


  return (
    <div>
      <Button text="Click me" onClickHandler={()=>console.log("Click me")}/>
      <Button text="Click me1" onClickHandler={()=>console.log("Click me1")}/>
      <Button text="Click me2" onClickHandler={()=>console.log("Click me2")}/>
      <Button text="Click me3" onClickHandler={()=>console.log("Click me3")}/>
    </div>
   
  )
}

export default App
