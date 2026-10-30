import { useState } from 'react';
import { partners } from '../data/siteData.js';
function Logo({ p }) {
  const [ok, setOk] = useState(true);
  return <li>{ok ? <img src={p.src} alt={p.name} loading="lazy" onError={() => setOk(false)} /> : <span>{p.name}</span>}</li>;
}
export default function Partners() {
  return (
    <div className="partners">
      <h3>Trusted by industry leaders</h3>
      <ul>{partners.map((p) => <Logo key={p.name} p={p} />)}</ul>
    </div>
  );
}
