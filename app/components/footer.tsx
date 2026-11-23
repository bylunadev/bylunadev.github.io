'use client';

import { links, site } from '../content/site';
import { useLang } from '../i18n';

export default function Footer() {
  const { lang } = useLang();
  return <footer className="site-footer">
    <p>© {new Date().getFullYear()} Luana Menezes · {site[lang].footer}</p>
    <p><a href={`mailto:${links.email}`}>{links.email}</a> · <a href={links.github} target="_blank" rel="noreferrer">GitHub</a></p>
  </footer>;
}
