'use client';

import { useEffect, useState } from 'react';
import { sectionIds, site } from '../content/site';
import { asset, languages, useLang } from '../i18n';

/** Sticky header. On the home page links are in-page anchors; elsewhere they lead back home. */
export default function Header({ home = false }: { home?: boolean }) {
  const { lang, setLang } = useLang();
  const t = site[lang];
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const href = (id: string) => (home ? `#${id}` : asset(`/#${id}`));

  // Highlight the menu item of the section on screen (home page only).
  useEffect(() => {
    if (!home || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['home', ...sectionIds].forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [home]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return <>
    <a className="skip-link" href="#content">{t.skip}</a>
    <header className={`topbar${open ? ' menu-open' : ''}`}>
      <a className="monogram" href={home ? '#home' : asset('/')} aria-label="Luana Menezes">LM<span>.</span></a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="site-nav" aria-label={open ? t.menu[1] : t.menu[0]} onClick={() => setOpen(o => !o)}><span /><span /></button>
      <nav id="site-nav" aria-label="Menu">
        {t.nav.map((item, i) => <a key={sectionIds[i]} href={href(sectionIds[i])} aria-current={active === sectionIds[i] ? 'location' : undefined} onClick={() => setOpen(false)}>{item}</a>)}
      </nav>
      <div className="languages" role="group" aria-label="Idioma / Language">
        {languages.map(l => <button className={lang === l ? 'active' : ''} aria-pressed={lang === l} key={l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
      </div>
    </header>
  </>;
}
