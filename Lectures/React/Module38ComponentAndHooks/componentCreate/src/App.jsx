import UserCard from "./components/UserCard"
import "./App.css"
import cat from "./assets/cat.jpg"
import cat2 from "./assets/cat2.jpg"
import cat3 from "./assets/cat3.jpg"


function App() {
  

  return (
    <div className="container">
      <UserCard name="Kitty" desc="Catty1" image={cat} style={{"border-radius":"10px"}}/>
      <UserCard name="Chitty" desc="Catty2" image={cat2} style={{"border-radius":"10px"}}/>
      <UserCard name="Missy" desc="Catty3" image={cat3} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
