
import { createContext, useState } from 'react';
import './App.css'
import ChildA from './components/ChildA'

//Step 1:Create Context
const UserContext = createContext();

//Step 2: wrap all the child inside a provider
//Step 3: pass value
//step 4: consume the value inside consumer

function App() {
  const [user,setUser]=useState({name:"Nidhi"});
  

  return (
    <>
    <UserContext.Provider value={user}>
    <ChildA/>
    </UserContext.Provider>
      
    </>
  )
}

export default App
export {UserContext}
