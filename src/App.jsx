
import './App.css'
import About from './components/about/About'
import Contact from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Headers from './components/header/Header'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <Headers />
      <Hero />
      <About /> 
      <Projects /> 
      <Skills />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App
