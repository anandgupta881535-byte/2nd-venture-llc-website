import { site, nav } from '../data/siteData.js';
export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <p>© {site.year} {site.name}. All rights reserved.</p>
        <nav aria-label="Footer">{nav.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}</nav>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}
