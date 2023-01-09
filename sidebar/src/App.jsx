
import './App.css'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/home"
import Reports from "./pages/Reports"
import Products from "./pages/Products"

import {useState, useEffect } from "react"


function App() {

  const [sidebar, setSidebar] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
      window.addEventListener("resize", function() {
          setWindowWidth(window.innerWidth)
      })
  }, [])

  function showSidebar(){
    setSidebar(prevSidebar => !prevSidebar)
  }


  function closeSidebar(){
    if(windowWidth < 941){
      setSidebar(prevSidebar => !prevSidebar)
      return
    }

  }
 
  return (
    <>
    <Router>
      <Navbar sidebar={showSidebar} closeBar={closeSidebar} state={sidebar}/>
      <Routes>
        <Route exact path="/" element={<Home   state={sidebar} />} />
        <Route exact path="/products" element={<Products state={sidebar} />} />
        <Route exact path="/reports" element={<Reports  state={sidebar} />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
