import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Cocktails from './Components/Cocktails'
import About from './Components/About'
import Menu from './Components/Menu'
import Contact from './Components/Contact'
// import HomePage from './Components/Homepage'
// import Gsaptext from './Components/Gsaptext'
// import Gsaptrigger from './Components/Gsaptrigger'
// import TestGSAP from './Components/TeastGSAP'
// import TestStaggers from './Components/TestStaggers'


gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {
  return (
<>
<main>
  <Navbar />
  <Hero />
  <Cocktails />
  <About />
  <Menu />
  <Contact />
</main>
</>
  )
}

export default App
