import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FilterBar from './components/filterbar'
import PromptsPage from './prompts/PromptsPage'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <PromptsPage/>
    <Footer/>
    </>
  )
}

export default App
