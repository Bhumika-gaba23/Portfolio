const workflows: Record<string, string[]> = {
  Defnet: ['Network graph', 'Simulated policies', 'Patch priorities'],
  StudyFlow: ['Plan coursework', 'Focus sessions', 'Track progress'],
  synQ: ['Upload data', 'Ask a question', 'Explore insights'],
  'MindSpend Labs': ['Track spending', 'Discover patterns', 'Explore insights'],
  'Data Canvas': ['Explore data', 'Find patterns', 'Visualize insights'],
}

export function ProjectIllustration({ title }: { title: string }) {
  const steps = workflows[title] ?? ['Explore', 'Build', 'Refine']
  return <div className="project-illustration">
    <svg viewBox="0 0 360 180" fill="none" aria-hidden="true">
      {title === 'Defnet' ? <>
        <path className="diagram-line" d="M85 85L155 35L240 55L295 120L200 150L85 85M155 35L200 150L240 55L85 85" />
        {[[85,85],[155,35],[240,55],[295,120],[200,150]].map(([x,y],i) => <circle className="diagram-node" cx={x} cy={y} r="10" key={i} />)}
        <circle className="diagram-pulse" cx="155" cy="35" r="17" />
      </> : title === 'StudyFlow' ? <>
        <rect className="diagram-frame" x="78" y="25" width="205" height="130" rx="14" />
        <path className="diagram-line" d="M78 58H283M107 91L113 97L126 80M107 127L113 133L126 116M148 91H253M148 127H225" />
        <circle className="diagram-node" cx="283" cy="58" r="9" />
      </> : <>
        <path className="diagram-frame" d="M70 30V155H295" />
        {[45,82,110,68,130].map((height,i) => <rect className="diagram-bar" key={i} x={95+i*38} y={155-height} width="20" height={height} rx="5" />)}
        <path className="diagram-line" d="M105 100L143 80L181 48L219 65L257 22" />
      </>}
    </svg>
    <div className="diagram-workflow">{steps.map((step,i) => <div className="diagram-step" key={step}>{i > 0 && <span aria-hidden="true">→</span>}<p>{step}</p></div>)}</div>
  </div>
}
