import { useState } from 'react'
import Comp from './components/comp'
import './App.css'
import cat1 from './assets/cat1.jpg'
import cat2 from './assets/cat2.jpg'
import cat3 from './assets/cat3.jpg'
import cat4 from './assets/cat4.jpg'


function App() {

  return (
    <div>
    <div id='cat-family'>Cat Family</div>
    <div className='container'>
    
      <Comp name="Katty" image={cat1} />
      <Comp name="Simmy" image={cat2}/>
      <Comp name="Linty" image={cat3}/>
      <Comp name="Mewvy" image={cat4}/>
    </div>
    </div>
  )
}

export default App
