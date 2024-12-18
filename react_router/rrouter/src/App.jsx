import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cont from './components/Cont'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:'/contact',
      element:<><Navbar/><Cont/></>
    },
    {
      path:'/about',
      element:<><Navbar/><About/></>
    },
    {
      path:'/user/:username',
      element:<><Navbar/><User/></>
      // http://localhost:5173/user/sneh
      //type in search bar
    }
  ])
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App
