
import './App.css'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./components/pages/home"
import Reports from "./components/pages/Reports"
import Products from "./components/pages/Products"
import Container from "./components/layout/Container"

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
      <Container state={sidebar} >
        <Routes>
          <Route exact path="/" element={<Home   state={sidebar} />} />
          <Route exact path="/products" element={<Products state={sidebar} />} />
          <Route exact path="/reports" element={<Reports  state={sidebar} />} />
        </Routes>
      </Container>
    </Router>
    </>
  )
}

export default App
