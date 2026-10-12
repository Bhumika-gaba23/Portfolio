import { EditorialSection } from './EditorialSection'
import { GraduationCap, MapPin, BookOpen, ArrowUpRight } from 'lucide-react'

export function EditorialJourney() {
  return <EditorialSection id="journey" number="04" label="Education">
    <div className="education-heading"><h2>A foundation<br /><span>for what comes next.</span></h2><p>Learning the principles.<br />Finding my own direction.</p></div>
    <div className="degree-panel">
      <aside className="degree-sidebar"><div className="degree-icon"><GraduationCap size={36} strokeWidth={1.3} /></div><span className="degree-status"><i /> Undergraduate</span><h3>Year 02</h3><p>Semester 03</p><div className="degree-location"><MapPin size={13} /> New Delhi</div><div className="degree-note">Computer science,<br />with curiosity at its core.</div></aside>
      <div className="degree-content"><div className="degree-kicker"><span>B.Tech / In progress</span><ArrowUpRight size={19} /></div><h3>Computer Science<br />& Engineering</h3><p className="degree-specialization">Artificial Intelligence & Machine Learning</p><div className="degree-institution"><strong>Delhi Technical Campus</strong><span>Guru Gobind Singh Indraprastha University</span></div><div className="degree-subjects"><div><BookOpen size={15} /><span>Academic focus</span></div><ul>{['Data Structures', 'Algorithms', 'Machine Learning', 'Deep Learning', 'NLP', 'DBMS'].map(subject => <li key={subject}>{subject}</li>)}</ul></div></div>
    </div>
  </EditorialSection>
}
