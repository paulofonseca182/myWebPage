import './App.css'
import About from './Components/About/About.jsx'
import Header from './Components/Header/Header.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import React from 'react'
import Skills from './Components/Skills/Skills.jsx'

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Skills />
    </div>
  )
}

export default App
