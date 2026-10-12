const items = ['Machine Learning', 'Computer Vision', 'Natural Language', 'Data Systems', 'React Interfaces', 'Thoughtful UX']

export function TechTicker() {
  return <div className="ticker border-y border-white/[.07] bg-[#0e0f11] py-4" aria-label="Focus areas"><div className="ticker-track">{[...items, ...items].map((item, index) => <span key={`${item}-${index}`} className="flex items-center gap-6 whitespace-nowrap font-mono text-[9px] uppercase tracking-[.16em] text-stone-600"><i className={index % 3 === 0 ? 'h-1 w-1 bg-rose-400' : 'h-1 w-1 bg-emerald-400'} />{item}</span>)}</div></div>
}
