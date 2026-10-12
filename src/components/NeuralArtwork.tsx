const layers = [
  [{ x: 45, y: 100 }, { x: 45, y: 150 }, { x: 45, y: 200 }],
  [{ x: 120, y: 70 }, { x: 120, y: 125 }, { x: 120, y: 180 }, { x: 120, y: 235 }],
  [{ x: 195, y: 100 }, { x: 195, y: 150 }, { x: 195, y: 200 }],
  [{ x: 270, y: 150 }],
]

export function NeuralArtwork() {
  return <div className="neural-artwork" aria-hidden="true">
    <div className="neural-art-heading"><span>Learning, connected.</span><small>AI / ML</small></div>
    <svg viewBox="0 0 315 300" fill="none">
      <ellipse className="network-orbit" cx="157" cy="150" rx="145" ry="108" />
      {layers.slice(0, -1).flatMap((layer, index) => layer.flatMap((node, source) => layers[index + 1].map((next, target) => <path className="network-link" key={`${index}-${source}-${target}`} d={`M${node.x} ${node.y}L${next.x} ${next.y}`} />)))}
      <path className="network-signal" d="M45 150L120 125L195 150L270 150" />
      {layers.flatMap((layer, index) => layer.map((node, position) => <g key={`${index}-${position}`}><circle className="network-node" cx={node.x} cy={node.y} r={index === 3 ? 12 : 7} /><circle className="network-center" cx={node.x} cy={node.y} r="2" /></g>))}
      <text x="45" y="282" textAnchor="middle">INPUT</text><text x="157" y="282" textAnchor="middle">LEARN</text><text x="270" y="282" textAnchor="middle">OUTPUT</text>
    </svg>
    <div className="neural-art-caption"><i /> A little curiosity. A lot of connections.</div>
  </div>
}
