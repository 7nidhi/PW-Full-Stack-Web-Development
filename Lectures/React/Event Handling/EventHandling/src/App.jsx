
import './App.css'

function App() {
  function handleClick(){
    alert("I am clicked....")

  }
  function handleMouseOver(){
    alert("I am on paragraph.")

  }
  function handleInputChnge(e){
    console.log("Value till now:",e.target.value)

  }
  function handleSubmit(e){
    e.preventDefault();
    alert("Form Submited.");
  }
  

  return (
    <div>

      <p onMouseOver={handleMouseOver}style={{border:"1px solid black"}}>
       I am Home Page.</p>


      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChnge}></input>
        <button type='submit' >Submit</button>
      </form>

      <button onClick={handleClick}>
        Click Me
      </button>

      
      
    </div>
    
  )
}

export default App
