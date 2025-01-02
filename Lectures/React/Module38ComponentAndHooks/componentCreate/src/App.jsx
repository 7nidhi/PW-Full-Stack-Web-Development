import UserCard from "./components/UserCard"
import "./App.css"
function App() {
  

  return (
    <div className="container">
      <UserCard name="Cat1" desc="Catty1"/>
      <UserCard name="Cat2" desc="Catty2"/>
      <UserCard name="Cat3"/>
    </div>
  )
}

export default App
