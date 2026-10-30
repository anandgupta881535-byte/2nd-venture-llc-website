import { useState } from 'react';
import { site, thanks } from '../data/siteData.js';
const empty = { name: '', email: '', phone: '', message: '' };
export default function Contact() {
  const [f, setF] = useState(empty);
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!f.name.trim()) x.name = 'Enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) x.email = 'Enter a valid email address.';
    if (f.message.trim().length < 10) x.message = 'Tell us a little more (at least 10 characters).';
    setErr(x);
    if (Object.keys(x).length) return;
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone || '-'}\n\n${f.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Enquiry from ' + f.name)}&body=${encodeURIComponent(body)}`;
    setSent(true); setF(empty);
  };
  const field = (k, label, type = 'text') => (
    <label>{label}
      <input type={type} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? `e-${k}` : undefined} />
      {err[k] && <span id={`e-${k}`} className="err">{err[k]}</span>}
    </label>
  );
  return (
    <section id="contact" className="sec tint">
      <div className="wrap split">
        <div>
          <h2>Let’s Get In Touch</h2>
          <p className="big">{thanks}</p>
          <dl className="info">
            <dt>Phone</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd>
            <dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
          </dl>
        </div>
        <form onSubmit={submit} noValidate>
          {field('name', 'Full name')}
          {field('email', 'Email address', 'email')}
          {field('phone', 'Phone (optional)', 'tel')}
          <label>How can we help?
            <textarea rows="5" value={f.message} onChange={set('message')} aria-invalid={!!err.message} />
            {err.message && <span className="err">{err.message}</span>}
          </label>
          <button className="btn" type="submit">Send message</button>
          {sent && <p className="ok" role="status">Your email app has opened with the message ready to send.</p>}
        </form>
      </div>
    </section>
  );
}
