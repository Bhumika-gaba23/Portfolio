import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveHorizontal } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../data'
import { Reveal } from './Reveal'

export function Projects() {
  const [[active, direction], setActive] = useState([0, 0])
  const paginate = (step: number) => setActive(([current]) => [(current + step + projects.length) % projects.length, step])
  const project = projects[active]
  const marks = ['rings', 'lines', 'frames', 'diamond']

  return <section id="projects" className="section-shell overflow-hidden border-t border-white/[.08]">
    <Reveal className="section-label"><span>02</span><p>Work / Selected</p></Reveal>
    <div className="section-content min-w-0">
      <Reveal><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="section-title">Ideas in <span>motion.</span></h2><p className="max-w-sm font-mono text-[10px] leading-5 text-stone-600">Drag or swipe through project concepts. Full case studies and repositories will replace these placeholders.</p></div></Reveal>
      <Reveal className="mt-14">
        <div className="mb-5 flex items-center justify-between"><div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-stone-600"><MoveHorizontal size={14} /> Swipe to explore</div><div className="flex items-center gap-2"><button onClick={() => paginate(-1)} className="carousel-button" aria-label="Previous project"><ArrowLeft size={15} /></button><button onClick={() => paginate(1)} className="carousel-button" aria-label="Next project"><ArrowRight size={15} /></button></div></div>
        <div className="relative min-h-[560px] md:min-h-[480px]">
          <div className="absolute inset-x-5 bottom-0 top-5 border border-white/[.04] bg-[#0e0f11]" /><div className="absolute inset-x-2.5 bottom-2.5 top-2.5 border border-white/[.06] bg-[#0f1012]" />
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.article key={project.title} custom={direction} variants={{ enter: (d: number) => ({ x: d >= 0 ? 160 : -160, opacity: 0, rotate: d >= 0 ? 2 : -2 }), center: { x: 0, opacity: 1, rotate: 0 }, exit: (d: number) => ({ x: d >= 0 ? -160 : 160, opacity: 0, rotate: d >= 0 ? -2 : 2 }) }} initial="enter" animate="center" exit="exit" transition={{ type: 'spring', stiffness: 240, damping: 28 }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={.72} onDragEnd={(_, info) => { if (info.offset.x < -70 || info.velocity.x < -450) paginate(1); else if (info.offset.x > 70 || info.velocity.x > 450) paginate(-1) }} className="absolute inset-0 grid cursor-grab overflow-hidden border border-white/[.09] bg-[#111215] active:cursor-grabbing md:grid-cols-[.88fr_1.12fr]">
              <div className="relative min-h-[220px] overflow-hidden border-b border-white/[.08] bg-[#0d0e10] md:min-h-0 md:border-b-0 md:border-r"><div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:28px_28px]" /><div className={`project-visual ${marks[active]}`}><i /><i /><i /></div><span className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[.16em] text-stone-700">Visual study / {project.number}</span></div>
              <div className="flex flex-col p-7 md:p-10"><div className="flex items-start justify-between"><span className="font-mono text-[9px] text-emerald-400">{project.number} / 04</span><ArrowUpRight className="text-stone-700" size={18} /></div><div className="my-auto py-10"><span className="font-mono text-[9px] uppercase tracking-[.14em] text-stone-600">{project.category}</span><h3 className="mt-4 text-4xl font-semibold tracking-[-.05em] text-stone-200 md:text-5xl">{project.title}</h3><p className="mt-5 max-w-lg text-xs leading-6 text-stone-500">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.stack.map(tag => <span key={tag} className="rounded-full bg-white/[.035] px-3 py-1.5 font-mono text-[9px] text-stone-500">{tag}</span>)}</div></div><div className="flex gap-5 border-t border-white/[.06] pt-5 font-mono text-[9px]"><span className="cursor-not-allowed text-stone-700">[ Live Demo ]</span><span className="cursor-not-allowed text-stone-700">[ Source Code ]</span></div></div>
            </motion.article>
          </AnimatePresence>
        </div>
        <div className="mt-7 flex items-center gap-3">{projects.map((p, index) => <button key={p.title} onClick={() => setActive([index, index > active ? 1 : -1])} className={`h-px transition-all duration-300 ${index === active ? 'w-12 bg-emerald-400' : 'w-6 bg-white/10 hover:bg-white/30'}`} aria-label={`Show ${p.title}`} />)}<span className="ml-2 font-mono text-[9px] text-stone-700">0{active + 1} / 04</span></div>
      </Reveal>
    </div>
  </section>
}
