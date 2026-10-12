import { EditorialSection } from './EditorialSection'
import { ArrowUpRight, ScanEye, MessageSquareText, ChartNoAxesCombined, PanelsTopLeft } from 'lucide-react'
import { NeuralArtwork } from './NeuralArtwork'

const icons = [ScanEye, MessageSquareText, ChartNoAxesCombined, PanelsTopLeft]

const focus = [
  ['01', 'Computer vision', 'Understanding images, visual features, and the connection between model predictions and real-world inputs.'],
  ['02', 'Language & meaning', 'Exploring how text can be represented, classified, and turned into useful signals through NLP.'],
  ['03', 'Data & evaluation', 'Building foundations in data preparation, choosing appropriate metrics, and understanding model limitations.'],
  ['04', 'Applied AI interfaces', 'Connecting intelligent systems to clear interfaces that help people understand and use their output.'],
]

export function AIFocus() {
  return <EditorialSection id="focus" number="ML" label="Learning directions">
    <div className="learning-heading"><h2>Curiosity is<br /><span>the starting point.</span></h2><p>Currently learning machine learning.<br />These are the directions I'd like to explore.</p></div>
    <div className="learning-composition">
      <aside className="learning-feature"><span className="learning-feature-label"><i /> My learning notebook</span><div className="learning-art"><NeuralArtwork /></div><h3>Making sense<br />of the possibilities.</h3><p>Connecting my frontend background with the foundations of AI & ML, one idea at a time.</p><a href="https://github.com/Bhumika-gaba23" target="_blank" rel="noreferrer">Follow my journey <ArrowUpRight size={15} /></a></aside>
      <div className="learning-topics">{focus.map(([number, title, description], index) => {
        const Icon = icons[index]
        return <article className="learning-topic" key={number}><div className="learning-topic-top"><Icon size={25} strokeWidth={1.3} /><span>{number} / To explore</span></div><h3>{title}</h3><p>{description}</p></article>
      })}</div>
    </div>
  </EditorialSection>
}
