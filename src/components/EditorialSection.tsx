import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function EditorialSection({ id, number, label, children }: { id?: string; number: string; label: string; children: ReactNode }) {
  return <motion.section id={id} className="editorial-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .5, ease: 'easeOut' }}><div className="section-meta"><span>{number}</span><p>{label}</p></div><div className="editorial-content">{children}</div></motion.section>
}
