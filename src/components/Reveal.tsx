import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 70, damping: 16 } },
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-70px' }} transition={{ delay }}>
      {children}
    </motion.div>
  )
}
