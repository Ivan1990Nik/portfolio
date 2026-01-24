

import { useEffect } from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Headers from './components/header/Header'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

function App() {


 useEffect(() => {
    fetch('/api/hello') // ← ✅ ТОЛЬКО ОТНОСИТЕЛЬНЫЙ ПУТЬ!
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then(data => {
        console.log('✅ API ответ:', data.message) // → "API работает"
      })
      .catch(err => {
        console.error('❌ Ошибка при запросе API:', err.message)
      })
  }, [])

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
