import UserCard from "./components/UserCard"
import "./App.css"
import cat from "./assets/cat.jpg"
import cat2 from "./assets/cat2.jpg"
import cat3 from "./assets/cat3.jpg"


function App() {
  

  return (
    <div className="container">
      <UserCard name="Kitty" desc="Catty1" image={cat}/>
      <UserCard name="Chitty" desc="Catty2" image={cat2}/>
      <UserCard name="Missy" desc="Catty3" image={cat3}/>
    </div>
  )
}

export default App
