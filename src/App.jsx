import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import FilterBar from './components/filterbar'

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <FilterBar/>
    </>
  )
}

export default App
