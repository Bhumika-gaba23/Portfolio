import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import { EditorialSection } from './EditorialSection'
import { ProjectIllustration } from './ProjectIllustration'

export function WinkboothNotes() {
  return <aside className="winkbooth-notes"><span>Behind Winkbooth / Product notes</span><dl className="project-notes"><div><dt>Purpose</dt><dd>Turn captured moments into printable photo strips.</dd></div><div><dt>Experience</dt><dd>A playful photo booth that runs in the browser.</dd></div><div><dt>Available now</dt><dd>A deployed product visitors can explore and try.</dd></div></dl></aside>
}

export function EditorialProjects() {
  return <EditorialSection id="projects" number="02" label="Selected work"><div className="section-intro"><h2 className="editorial-heading">Projects, <span>made real.</span></h2><p>Scroll through a growing body of work across interactive web experiences and machine learning.</p></div><div className="project-stack">{projects.map((project, index) => <motion.article className="stacked-project" style={{ top: `${88 + index * 12}px`, zIndex: index + 1 }} key={project.title} initial={{ opacity: 0, y: 28, scale: .985 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5, ease: 'easeOut' }}><div className="stacked-copy"><div className="stacked-meta"><span>{project.number} / 04</span><span>{project.category}</span></div><div><h3>{project.title}<ArrowUpRight size={18} /></h3><p>{project.description}</p><div className="plain-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="stacked-actions">{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveUrl.includes('github.com') ? 'View source code' : 'Visit live website'} <ArrowUpRight size={12} /></a> : <span>Case study in progress</span>}<small>{project.liveUrl ? (project.liveUrl.includes('github.com') ? 'Source available' : 'Live / 2026') : 'Concept / 2026'}</small></div></div><div className="stacked-media">{project.image ? <a href={project.liveUrl ?? '#'} target="_blank" rel="noreferrer"><img src={project.image} alt={`${project.title} website homepage`} loading="lazy" /></a> : <ProjectIllustration title={project.title} />}<div className="media-caption">{project.image ? 'Live product interface' : 'Workflow illustration / Not a product screenshot'}</div></div></motion.article>)}</div></EditorialSection>
}
