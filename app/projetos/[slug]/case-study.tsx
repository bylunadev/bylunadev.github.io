'use client';

import Image from 'next/image';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { getProject, projects, type Section } from '../../content/projects';
import { site } from '../../content/site';
import GridGlow from '../../grid-glow';
import { asset, useLang, useReveal } from '../../i18n';

function Diagram({ rows }: { rows: string[][] }) {
  return <div className="diagram" role="list">
    {rows.map((row, r) => <ol className="diagram-row" key={r} role="listitem">
      {row.map((node, i) => <li key={node + i}>{node}</li>)}
    </ol>)}
  </div>;
}

export default function CaseStudy({ slug }: { slug: string }) {
  const { lang } = useLang();
  const t = site[lang];
  const p = getProject(slug)!;
  const c = p.i18n[lang];
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  useReveal([lang, slug]);

  const figure = (index: number) => {
    const img = p.images[index];
    if (!img) return null;
    return <figure className="case-figure" data-reveal>
      <Image src={asset(img.src)} alt={c.imageAlts[index]} width={img.width} height={img.height} sizes="(max-width: 900px) 92vw, 1100px" priority={index === 0} />
      <figcaption>{t.caseStudy.gallery} · {p.host}</figcaption>
    </figure>;
  };

  const renderSection = (s: Section, i: number) => <section className="case-section" key={i} aria-labelledby={`s${i}`}>
    <h2 id={`s${i}`} className="case-label" data-reveal><b>{String(i + 1).padStart(2, '0')}</b>{t.caseStudy.labels[i]}</h2>
    <div className="case-body" data-reveal>
      {s.body?.map(text => <p key={text}>{text}</p>)}
      {s.list && <ul className="case-list">{s.list.map(item => <li key={item}>{item}</li>)}</ul>}
      {s.chips && <ul className="chips chips-lg">{s.chips.map(item => <li key={item}>{item}</li>)}</ul>}
      {s.diagram && <Diagram rows={s.diagram} />}
    </div>
    {s.image !== undefined && figure(s.image)}
  </section>;

  return <div className={`site case accent-${p.accent}`}>
    <div className="grid" aria-hidden="true" />
    <GridGlow />
    <Header />
    <main id="content" tabIndex={-1}>
      <article>
        <header className="case-hero">
          <a className="back-link" href={asset('/#work')}>← {t.caseStudy.back}</a>
          <p className="kicker" data-reveal><span aria-hidden="true" />{c.category.toUpperCase()}</p>
          <h1 data-reveal>{p.name}<span>.</span></h1>
          <p className="case-summary" data-reveal>{c.summary}</p>
          <dl className="case-facts" data-reveal>
            <div><dt>{t.caseStudy.role}</dt><dd>{c.role}</dd></div>
            <div><dt>{t.caseStudy.period}</dt><dd>{c.period}</dd></div>
            <div><dt>{t.caseStudy.status}</dt><dd>{c.status}</dd></div>
            <div><dt>{t.caseStudy.link}</dt><dd><a href={p.url} target="_blank" rel="noreferrer">{p.host} ↗</a></dd></div>
          </dl>
        </header>
        {c.sections.map(renderSection)}
      </article>

      <nav className="case-next" aria-label={t.caseStudy.next}>
        <a href={asset(`/projetos/${next.slug}/`)}>
          <span>{t.caseStudy.next}</span>
          <strong>{next.name} →</strong>
          <small>{next.i18n[lang].category}</small>
        </a>
      </nav>
    </main>
    <Footer />
  </div>;
}
