import { useState } from 'react';
import { why } from '../data/siteData.js';
export default function WhyChooseUs() {
  const [n, setN] = useState(0);
  return (
    <section id="offer" className="sec dark">
      <div className="wrap">
        <h2>Why Choose Us</h2>
        <div className="why">
          <ul role="tablist" aria-orientation="vertical">
            {why.map((w, k) => (
              <li key={w.title}>
                <button role="tab" aria-selected={k === n} onClick={() => setN(k)} onMouseEnter={() => setN(k)}>{w.title}</button>
              </li>
            ))}
          </ul>
          <article role="tabpanel" key={n} className="tp">
            <h3>{why[n].title}</h3><p>{why[n].text}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
