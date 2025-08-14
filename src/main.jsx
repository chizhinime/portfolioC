import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Projects />
    <Skills />
    <About />
    <Contact />
    <Footer />
  </StrictMode>,
)
