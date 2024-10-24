import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Project from "./Components/Project/Project"
import Work_Experience from "./Components/Work_Exp/Work_Exp"
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Work_Experience/>
      <Contact/>
     

    </div>
  )
}

export default App
