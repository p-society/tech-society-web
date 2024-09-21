import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Home/>
       <Footer/>
    </>
  )
}

export default App
