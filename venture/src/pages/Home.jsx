import { useEffect, useState } from 'react';
import { slides, commitment, offerIntro } from '../data/siteData.js';
import Partners from '../components/Partners.jsx';
export default function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy" aria-live="polite">
          <h1 key={i} className="swap">{s.title}</h1>
          <p key={`p${i}`} className="swap lead">{s.sub}</p>
          <a className="btn" href="#contact">{s.cta}</a>
          <div className="dots" role="tablist" aria-label="Hero messages">
            {slides.map((_, n) => (
              <button key={n} role="tab" aria-selected={n === i} aria-label={`Message ${n + 1}`} onClick={() => setI(n)} />
            ))}
          </div>
        </div>
        <svg className="meet" viewBox="0 0 400 300" aria-hidden="true">
          <path className="arc a" d="M10 270 C 90 270, 140 150, 200 150" />
          <path className="arc b" d="M390 270 C 310 270, 260 150, 200 150" />
          <path className="arc c" d="M200 150 L200 30" />
          <circle cx="200" cy="150" r="9" className="node" />
          <circle cx="10" cy="270" r="6" className="end" /><circle cx="390" cy="270" r="6" className="end" />
          <text x="10" y="294">Talent</text><text x="352" y="294">Vision</text>
        </svg>
      </div>
      <div className="wrap hero-low">
        <blockquote><h2>Our Commitment</h2><p>{commitment}</p></blockquote>
        <div className="offer"><h2>What We Offer</h2><p>{offerIntro}</p></div>
      </div>
      <div className="wrap"><Partners /></div>
    </section>
  );
}
