import { EditorialSection } from './EditorialSection'

const languages = [
  { name: 'HTML', icon: 'html5/html5-original.svg' },
  { name: 'CSS', icon: 'css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'C', icon: 'c/c-original.svg' },
  { name: 'C++', icon: 'cplusplus/cplusplus-original.svg' },
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'Java', icon: 'java/java-original.svg' },
]

export function EditorialSkills() {
  return <EditorialSection id="skills" number="03" label="Technical focus">
    <h2 className="editorial-heading">Frontend first.<br /><span>Always learning.</span></h2>
    <p className="focus-intro">Frontend developer with a foundation in programming and a growing interest in machine learning.</p>
    <div className="skills-ledger">
      {[{ label: '01 / Web foundations', description: 'The languages behind my frontend work.', items: languages.slice(0, 3) }, { label: '02 / Programming languages', description: 'My foundation for solving problems in code.', items: languages.slice(3) }].map(group => <div className="skills-ledger-row" key={group.label}>
        <div className="skills-ledger-caption"><span>{group.label}</span><p>{group.description}</p></div>
        <ul className="language-list">{group.items.map(language => <li key={language.name}>
          <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${language.icon}`} alt="" width="28" height="28" loading="lazy" onError={event => { event.currentTarget.style.visibility = 'hidden' }} />
          <span>{language.name}</span>
        </li>)}</ul>
      </div>)}
      <div className="skills-ledger-row learning-row"><div className="skills-ledger-caption"><span>03 / In progress</span><p>Building on my CSE AI/ML studies.</p></div><div className="learning-detail"><span className="learning-status">Currently learning</span><h3>Machine learning</h3><p>Exploring how data and algorithms can turn a question into a useful prediction.</p></div></div>
    </div>
  </EditorialSection>
}
