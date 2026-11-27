'use client';

import Footer from '../components/footer';
import Header from '../components/header';
import GridGlow from '../grid-glow';
import { asset, useLang, useReveal } from '../i18n';

const copy = {
  pt: {
    back: 'Voltar ao início',
    kicker: 'GUIA GRÁTIS',
    title: 'Seu 1º site no ar',
    summary: 'Do zero ao link funcionando, sem pagar nada. Com o que pode ir num site público e o mínimo de segurança.',
    facts: [['Formato', 'PDF · 17 páginas'], ['Tempo', 'Cerca de 1 hora'], ['Custo', 'Grátis'], ['Para quem', 'Quem nunca publicou um site']],
    list: [
      'Um teste de três perguntas para saber o nível de cuidado que o seu site precisa.',
      'Prompts prontos para criar e revisar o site, com as regras de segurança incluídas.',
      'O passo a passo para colocar o site no ar de graça, com cadeado (https).',
      'O que pode e o que não pode ir num site aberto ao público.',
      'Modelo de política de privacidade e checklist de segurança mínima.',
    ],
    pt: 'Baixar em português',
    es: 'Descargar en español',
  },
  es: {
    back: 'Volver al inicio',
    kicker: 'GUÍA GRATIS',
    title: 'Tu 1er sitio online',
    summary: 'De cero al link funcionando, sin pagar nada. Con lo que puede ir en un sitio público y la seguridad mínima.',
    facts: [['Formato', 'PDF · 17 páginas'], ['Tiempo', 'Más o menos 1 hora'], ['Costo', 'Gratis'], ['Para quién', 'Quien nunca publicó un sitio']],
    list: [
      'Un test de tres preguntas para saber cuánto cuidado necesita tu sitio.',
      'Prompts listos para crear y revisar el sitio, con las reglas de seguridad incluidas.',
      'El paso a paso para poner el sitio online gratis, con candado (https).',
      'Lo que puede y lo que no puede ir en un sitio abierto al público.',
      'Modelo de política de privacidad y checklist de seguridad mínima.',
    ],
    pt: 'Baixar em português',
    es: 'Descargar en español',
  },
  en: {
    back: 'Back to home',
    kicker: 'FREE GUIDE',
    title: 'Your first website online',
    summary: 'From zero to a working link, for free. Including what can go on a public website and the security basics. Available in Portuguese and Spanish.',
    facts: [['Format', 'PDF · 17 pages'], ['Time', 'About 1 hour'], ['Cost', 'Free'], ['For', 'First-time website builders']],
    list: [
      'A three-question test to know how much care your website needs.',
      'Ready-made prompts to create and review the site, with security rules built in.',
      'Step by step to publish the site for free, with a padlock (https).',
      'What can and cannot go on a website open to the public.',
      'A privacy policy template and a basic security checklist.',
    ],
    pt: 'Download in Portuguese',
    es: 'Download in Spanish',
  },
};

export default function Guide() {
  const { lang } = useLang();
  const c = copy[lang];
  useReveal([lang]);

  return <div className="site case">
    <div className="grid" aria-hidden="true" />
    <GridGlow />
    <Header />
    <main id="content" tabIndex={-1}>
      <article>
        <header className="case-hero">
          <a className="back-link" href={asset('/')}>← {c.back}</a>
          <p className="kicker" data-reveal><span aria-hidden="true" />{c.kicker}</p>
          <h1 data-reveal>{c.title}<span>.</span></h1>
          <p className="case-summary" data-reveal>{c.summary}</p>
          <div className="hero-actions" data-reveal>
            <a className="primary-button" href={asset('/guia/seu-1o-site-no-ar.pdf')} download>{c.pt}<span aria-hidden="true">↓</span></a>
            <a className="secondary-button" href={asset('/guia/tu-1er-sitio-online.pdf')} download>{c.es}</a>
          </div>
          <dl className="case-facts" data-reveal style={{ marginTop: 48 }}>
            {c.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </header>
        <section className="case-section" aria-label={c.kicker}>
          <div className="case-body" data-reveal>
            <ul className="case-list">{c.list.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>
      </article>
    </main>
    <Footer />
  </div>;
}
