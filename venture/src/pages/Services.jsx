import { useState } from 'react';
import { categories, services } from '../data/siteData.js';
export default function Services() {
  const [cat, setCat] = useState('all');
  const list = services.filter((s) => cat === 'all' || s.cat === cat);
  return (
    <section id="services" className="sec">
      <div className="wrap">
        <h2>Services</h2>
        <div role="tablist" className="tabs h" aria-label="Filter services">
          {categories.map((c) => (
            <button key={c.id} role="tab" aria-selected={cat === c.id} onClick={() => setCat(c.id)}>{c.label}</button>
          ))}
        </div>
        <div className="grid" role="tabpanel">
          {list.map((s) => (
            <article key={s.title} className={`card ${s.cat}`}>
              <h3>{s.title}</h3><p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
