import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { NeuralArtwork } from './NeuralArtwork'

const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: .5 } } }

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: .1 } } }} className="hero-inner">
        <motion.div variants={item} className="availability"><span /> Available for ML & Web Projects</motion.div>
        <motion.p variants={item} className="hero-index">Portfolio / Bhumika Gaba / 2026</motion.p>
        <motion.div variants={item} className="tech-object" aria-hidden="true">
          <NeuralArtwork />
        </motion.div>
        <h1 className="hero-title">Bhumika<span className="hero-name-dot">.</span><span className="hero-statement">Full-stack developer.<br />CSE (AI & ML) student.</span></h1>
        <motion.div variants={item} className="hero-lower">
          <p>I’m a CSE (AI & ML) student interested in turning data-driven models into useful products. My work pairs technical foundations with calm, clear interfaces.</p>
          <div className="hero-actions"><a href="#projects">View projects <ArrowRight size={14} /></a><a href="mailto:bhumikagaba997@gmail.com">Get in touch <ArrowUpRight size={13} /></a></div>
        </motion.div>
        <motion.div variants={item} className="hero-socials"><span>Elsewhere</span><a href="https://github.com/Bhumika-gaba23" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/bhumika-gaba-05182037a/" target="_blank" rel="noreferrer">LinkedIn</a></motion.div>
      </motion.div>
    </section>
  )
}
