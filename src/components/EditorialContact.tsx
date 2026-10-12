import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { useState } from 'react'

export function EditorialContact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => { await navigator.clipboard.writeText('bhumikagaba997@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 1600) }
  return <section id="contact" className="contact-section">
    <div className="contact-meta">05 / Contact</div>
    <h2>Let’s build something <span>worth using.</span></h2>
    <div className="contact-row"><p>For projects, opportunities, or a thoughtful conversation about AI and the web.</p></div>
    <div className="contact-details">
      <div><span>Email</span><a href="mailto:bhumikagaba997@gmail.com">bhumikagaba997@gmail.com <ArrowUpRight size={15} /></a><button className="contact-copy" onClick={copy} aria-label="Copy email address">{copied ? <Check size={13} /> : <Copy size={13} />}{copied ? 'Copied' : 'Copy email'}</button></div>
      <div><span>GitHub</span><a href="https://github.com/Bhumika-gaba23" target="_blank" rel="noreferrer">Bhumika-gaba23 <ArrowUpRight size={15} /></a></div>
      <div><span>LinkedIn</span><a href="https://www.linkedin.com/in/bhumika-gaba-05182037a/" target="_blank" rel="noreferrer">Bhumika Gaba <ArrowUpRight size={15} /></a></div>
    </div>
    <footer><span>© {new Date().getFullYear()} Bhumika Gaba</span><span>Designed & developed with care</span></footer>
  </section>
}
