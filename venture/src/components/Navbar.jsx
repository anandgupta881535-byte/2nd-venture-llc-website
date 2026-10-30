import { useState } from 'react';
import { nav, site } from '../data/siteData.js';
export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="brand" aria-label={site.name}>
          {logoOk ? <img src={site.logo} alt={site.name} onError={() => setLogoOk(false)} /> : <b>2nd Venture</b>}
        </a>
        <button className="burger" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={open ? 'links open' : 'links'}>
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'on' : ''}
               aria-current={active === n.id ? 'true' : undefined} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
