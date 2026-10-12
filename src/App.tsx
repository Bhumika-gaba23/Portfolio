import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { EditorialAbout } from './components/EditorialAbout'
import { EditorialProjects, WinkboothNotes } from './components/EditorialProjects'
import { EditorialJourney } from './components/EditorialJourney'
import { EditorialContact } from './components/EditorialContact'
import { AIFocus } from './components/AIFocus'
import { CursorFollower } from './components/CursorFollower'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('portfolio-theme-v2')
    if (saved === 'light' || saved === 'dark') return saved
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme-v2', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101012' : '#f6f2e9')
  }, [theme])

  return <><CursorFollower /><Header theme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} /><main><Hero /><EditorialAbout /><EditorialProjects /><WinkboothNotes /><AIFocus /><EditorialJourney /><EditorialContact /></main></>
}

export default App
import { useEffect, useState } from 'react'
