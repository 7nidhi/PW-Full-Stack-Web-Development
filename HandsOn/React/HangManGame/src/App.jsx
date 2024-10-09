
import './App.css'
import Button from './components/Buttons/Button'

function App() {


  return (
    <div>
      <Button text="Click me" styleType='error' onClickHandler={()=>console.log("Click me")}/>
      <Button text="Click me1" styleType='warning' onClickHandler={()=>console.log("Click me1")}/>
      <Button text="Click me2" styleType='success' onClickHandler={()=>console.log("Click me2")}/>
      <Button text="Click me3" styleType='secondary' onClickHandler={()=>console.log("Click me3")}/>
    </div>
   
  )
}

export default App
