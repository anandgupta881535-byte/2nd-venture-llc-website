import { useState } from 'react';
import { about } from '../data/siteData.js';
export default function About() {
  const [tab, setTab] = useState(about.tabs[0].id);
  const cur = about.tabs.find((t) => t.id === tab);
  return (
    <section id="about" className="sec">
      <div className="wrap split">
        <div>
          <h2>About Us</h2>
          <p className="big">{about.lead}</p>
        </div>
        <div className="panel">
          <div role="tablist" className="tabs v" aria-label="About 2nd Venture">
            {about.tabs.map((t) => (
              <button key={t.id} role="tab" id={`ab-${t.id}`} aria-selected={t.id === tab} aria-controls="ab-panel" onClick={() => setTab(t.id)}>{t.label}</button>
            ))}
          </div>
          <div role="tabpanel" id="ab-panel" aria-labelledby={`ab-${cur.id}`} className="tp" key={cur.id}>
            <h3>{cur.label}</h3><p>{cur.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
