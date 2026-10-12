import { FileText, Menu, Moon, Sun, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = ['top', 'about', 'projects', 'contact']

export function Header({ theme, toggleTheme }: { theme: 'light' | 'dark'; toggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')

  useEffect(() => {
    let frame = 0
    const update = () => {
      let current = 'top'
      for (const id of links) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= 160) current = id
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 30) current = 'contact'
      setActive(current)
      frame = 0
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="site-header liquid-glass glass-header">
      <a href="#top" className="brand-mark">
        <span className="brand-monogram" aria-hidden="true">B</span><span>bhumika<span className="brand-dot">.</span><small>AI & ML / Developer</small></span>
      </a>
      <nav id="main-navigation" aria-label="Main navigation" className={`${open ? 'flex' : 'hidden'} site-nav`}>
        {links.map((link) => <a key={link} href={`#${link}`} className={active === link ? 'active' : ''} aria-current={active === link ? 'location' : undefined} onClick={() => { setActive(link); setOpen(false) }}>{active === link && <motion.span className="active-nav-pill" layoutId="active-nav" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}<span className="nav-label">{link === 'top' ? 'Home' : link.charAt(0).toUpperCase() + link.slice(1)}</span></a>)}
        <a href="https://drive.google.com/file/d/18CPBrv4RUVx8VloCZxPuA2QlXeTHFiSa/view" target="_blank" rel="noreferrer" className="resume-link"><FileText size={12} /> Resume</a>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
        {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
      </button>
      <button onClick={() => setOpen(!open)} className="menu-toggle" aria-controls="main-navigation" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={18} /> : <Menu size={18} />}</button>
    </header>
  )
}
