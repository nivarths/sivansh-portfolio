import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import './App.css'
import "./index.css"
import { Projects } from './components/sections/Projects'
import { RevealOnScroll } from './components/RevealOnScroll'
import { Contact } from './components/sections/Contact'
import { StarsBackground } from './components/StarsBackground'
import { Footer } from './components/Footer'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <StarsBackground />
        <Home />
        <About />
        <Projects />
        <RevealOnScroll />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
