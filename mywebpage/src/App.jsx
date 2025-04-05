import './App.css'
import About from './Components/About/About.jsx'
import Header from './Components/Header/Header.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import React from 'react'
import Skills from './Components/Skills/Skills.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Training from './Components/Training/Training.jsx'
import Certificates from './Components/Certificates/Certificates.jsx'

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Training />
      <Certificates />
    </div>
  )
}

export default App
