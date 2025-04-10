import './App.css'
import React from 'react'
import Developer from './Pages/developer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/developer" element={<Developer />} />
    </Routes>
  )
}

export default App;
