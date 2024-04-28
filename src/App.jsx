import React,{useState}from 'react'

import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar"
import Home from "./Pages/Home"
import VIdeo from "./Pages/VIdeo"

const App = () => {
  
const [sidebar,setSidebar]= useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element ={<VIdeo/>}/>

      </Routes>
    </div>
  )
}

export default App