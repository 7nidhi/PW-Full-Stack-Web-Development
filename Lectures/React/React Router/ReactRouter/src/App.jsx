
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComponent from './components/ParamComponent';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

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
    
        </div>,
        children:[
          {
            path:'courses',
            element:
            <div>
              <Courses/>
            </div>
          },
          {
            path:'mock-test',
            element:
            <div>
              <MockTest/>
            </div>
          },
          {
            path:'reports',
            element:
            <div>
              <Reports/>
            </div>
          }
        ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComponent/>
      </div>
    },
    {
      path:'*',
      element:
      <NotFound/>
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
