
import './App.css'
import AnimalCard from './components/AnimalCard'
import cat from './assets/cat.jpg'
import dog from './assets/dog.jpg'
import tiger from './assets/tiger.jpg'
import elephant from './assets/elephant.jpg'


function App() {
  

  return (
    <div className='container'>
    <AnimalCard name="Cat" desc="This is Cat." image={cat}/>
    <AnimalCard name="Dog" desc="This is Dog." image={dog}/>
    <AnimalCard name="Tiger" desc="This is Tiger." image={tiger}/>
    <AnimalCard name="Elephant" desc="This is Elephant." image={elephant}/>

    </div>
    
    
  )
}

export default App
