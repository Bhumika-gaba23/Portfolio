import { ArrowUpRight, Braces, Code2, Sparkles } from 'lucide-react'
import { EditorialSection } from './EditorialSection'

export function EditorialAbout() {
  return <EditorialSection id="about" number="01" label="About me">
    <h2 className="editorial-heading">A curious mind.<br /><span>A builder at heart.</span></h2>
    <div className="about-personal-layout">
      <figure className="about-portrait"><img src="/bhumika.avif" alt="Bhumika holding a bouquet of flowers" loading="lazy" /><figcaption><span>Bhumika Gaba</span><small>Full-stack developer / CSE AI & ML student</small></figcaption></figure>
    <div className="about-copy">
      <p className="about-lead">Hi, I'm Bhumika, a full-stack developer and second-year CSE student specializing in AI & Machine Learning at Delhi Technical Campus, GGSIPU.</p>
      <div className="about-body"><p>I enjoy turning ideas into web experiences with HTML, CSS, and JavaScript. Winkbooth is my first project: a playful photo booth that brings a creative idea to life in the browser.</p><p>My programming foundation includes C, C++, Python, and Java. I'm currently learning machine learning and exploring how it can connect with the interfaces I build.</p><p>I'm looking forward to learning through new projects and collaborating with people who enjoy building useful, thoughtful software.</p></div>
    </div>
    </div>
    <article className="leadership-card leadership-with-photo">
      <a className="leadership-poster" href="/gfg-bhumika.png" target="_blank" rel="noreferrer" aria-label="View full GeeksforGeeks Tech Head poster"><img src="/gfg-bhumika.png" alt="Bhumika's Technical Head poster for the GeeksforGeeks DTC Campus Body, 2026–2027" loading="lazy" /></a>
      <div className="leadership-content"><span>Campus leadership / 2026–2027</span><h3>Tech Head</h3><p>GeeksforGeeks Campus Body</p><small>Delhi Technical Campus</small><a href="/gfg-bhumika.png" target="_blank" rel="noreferrer">View announcement ↗</a></div>
    </article>
    <div className="about-skills">
      <div className="skills-showcase-heading"><div><span className="skills-kicker">A growing toolkit / 03</span><h3>What I work with<span>.</span></h3></div><p>Tools I use today, and the ideas I’m exploring next.</p></div>
      <div className="skills-showcase-grid">
        <article className="skill-feature skill-feature-frontend"><div className="skill-card-top"><span className="skill-card-icon"><Code2 size={18} /></span><span className="skill-card-index">01 / BUILD</span></div><div><h4>Frontend development</h4><p>Turning thoughtful ideas into clear, responsive experiences.</p></div><ul className="skill-pills">{['HTML', 'CSS', 'JavaScript'].map(skill => <li key={skill}>{skill}</li>)}</ul><span className="skill-card-mark" aria-hidden="true">&lt;/&gt;</span></article>
        <article className="skill-feature skill-feature-languages"><div className="skill-card-top"><span className="skill-card-icon"><Braces size={18} /></span><span className="skill-card-index">02 / CODE</span></div><div><h4>Programming languages</h4><p>Building a broad foundation across languages and paradigms.</p></div><ul className="skill-pills">{['C', 'C++', 'Python', 'Java'].map(skill => <li key={skill}>{skill}</li>)}</ul><span className="skill-language-note">Curiosity, in every syntax.</span></article>
        <article className="skill-feature skill-feature-learning"><div className="skill-card-top"><span className="skill-card-icon"><Sparkles size={18} /></span><span className="skill-card-index">03 / IN PROGRESS</span></div><div className="learning-card-copy"><span className="learning-status"><i /> Currently learning</span><h4>Machine learning</h4><p>Exploring how models can turn data into useful, human-centered experiences.</p></div><a className="learning-card-link" href="#focus">Follow my learning journey <ArrowUpRight size={14} /></a><div className="learning-orbit" aria-hidden="true"><i /><i /><i /></div></article>
      </div>
    </div>
    <dl className="facts"><div><dt>Studying</dt><dd>B.Tech CSE (AI & ML)</dd></div><div><dt>Current focus</dt><dd>Full-stack development</dd></div><div><dt>Academic field</dt><dd>Artificial intelligence & machine learning</dd></div></dl>
  </EditorialSection>
}
