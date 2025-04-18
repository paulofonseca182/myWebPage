import React from 'react'
import About from '../Components/About/About.jsx'
import Header from '../Components/Header/Header.jsx'
import NavBar from '../Components/NavBar/NavBar.jsx'
import Skills from '../Components/Skills/Skills.jsx'
import Experience from '../Components/Experience/Experience.jsx'
import Training from '../Components/Training/Training.jsx'
import Certificates from '../Components/Certificates/Certificates.jsx'
import Contact from '../Components/Contact/Contact.jsx'

function Developer() {
  return (
    <div>
    <NavBar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Training />
      <Certificates />
      <Contact />
    </div>
  )
}

export default Developer
