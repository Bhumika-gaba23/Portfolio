import { skillGroups } from '../data'
import { Reveal } from './Reveal'

export function Skills() {
  return <section id="skills" className="section-shell border-t border-white/[.08]"><Reveal className="section-label"><span>03</span><p>Stack / Focus</p></Reveal><div className="section-content"><Reveal><h2 className="section-title">Tools for turning<br /><span>questions into systems.</span></h2></Reveal><div className="mt-14 border-t border-white/[.08]">{skillGroups.map((group, i) => <Reveal key={group.label} delay={i * .07} className="grid gap-6 border-b border-white/[.08] py-8 md:grid-cols-[.65fr_1fr] md:items-start"><div className="flex gap-5"><span className="font-mono text-[9px] text-emerald-400">0{i + 1}</span><h3 className="text-lg font-medium tracking-tight text-stone-300">{group.label}</h3></div><div className="flex flex-wrap gap-x-6 gap-y-3">{group.skills.map(skill => <span key={skill} className="font-mono text-[10px] text-stone-500 transition hover:translate-x-0.5 hover:text-rose-300">{skill}</span>)}</div></Reveal>)}</div></div></section>
}
