
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComponent from './components/ParamComponent';

const router=createBrowserRouter(
  [
    {path:"/",
      element:
        <div>
          <Navbar/>
          <Home/>
        </div>
      
    },
    {
      path:"/about",
      element:
      <div>
          <Navbar/>
          <About/>
        </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
          <Navbar/>
          <Dashboard/>
    
        </div>
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComponent/>
      </div>
    }
   

  ]
)

function App() {
  

  return (
    <div>
    <RouterProvider router={router}/>

    </div>
      
  
  )
}

export default App
