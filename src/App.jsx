import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import FilterBar from './components/filterbar'
import PromptsPage from './prompts/PromptsPage'
import Footer from './components/Footer'
import SupportButton from './components/Payment'

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <PromptsPage/>
    <Footer/>
    <SupportButton
    theme="light"
    upiId="srajangupta220@okhdfc"
    payeeName="Srajan Gupta"
    upiMsg="Keep the project alive 💖"
    buyMeCoffeeUrl="https://buymeacoffee.com/creation22"
    />

    </>
  )
}

export default App
