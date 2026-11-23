'use client';

import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
import GridGlow from './grid-glow';
import { projects } from './content/projects';
import { links, site } from './content/site';
import { asset, useLang, useReveal } from './i18n';

function WindowBar({ title }: { title: string }) {
  return <div className="win-bar"><span>{title}</span><span className="win-btns"><i /><i /><i /></span></div>;
}

const code = ['const luana = {', '  role: "product builder",', '  fields: ["health",', '    "software", "ai"],', '}'];
const terminal = ['research()', 'design()', 'build()', 'ship()'];

export default function Home() {
  const { lang } = useLang();
  const t = site[lang];
  useReveal([lang]);

  return <div className="site">
    <div className="grid" aria-hidden="true" />
    <GridGlow />
    <Header home />
    <main id="content" tabIndex={-1}>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy" data-reveal>
          <p className="kicker"><span aria-hidden="true" />{t.hero.kicker}</p>
          <h1 id="hero-title">LUANA<br />MENEZES<span>.</span></h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <p className="hero-text">{t.hero.text}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">{t.hero.work}<span aria-hidden="true">→</span></a>
            <a className="secondary-button" href="#contact">{t.hero.contact}</a>
          </div>
          <ul className="hero-meta">
            <li>{t.hero.location}</li>
            <li><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
            {links.linkedin && <li><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>}
            <li><a href={`mailto:${links.email}`}>E-mail</a></li>
          </ul>
        </div>

        <div className="portrait-stage" data-reveal data-reveal-delay="1">
          <div className="portrait-backdrop" aria-hidden="true" />
          <Image className="portrait" src={asset('/portrait.webp')} alt="Luana Menezes" fill priority sizes="(max-width: 760px) 94vw, 50vw" />
          <div className="float-card code-card" aria-hidden="true"><WindowBar title="luana.ts" /><code>{code.map((line, i) => <span key={i}><small>{i + 1}</small>{line}</span>)}</code></div>
          <div className="float-card terminal-card" aria-hidden="true"><WindowBar title="terminal" /><div className="terminal-body">{terminal.map(item => <span className="terminal-line" key={item}><b>&gt;</b> {item}</span>)}<span className="check">✓</span></div></div>
        </div>

        <dl className="hero-facts" data-reveal data-reveal-delay="2">
          {t.hero.facts.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
        </dl>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <p className="section-label" data-reveal><b>01</b>{t.about.label}</p>
        <div className="split">
          <h2 id="about-title" className="statement" data-reveal>{t.about.title}</h2>
          <div className="prose" data-reveal data-reveal-delay="1">
            {t.about.body.map(p => <p key={p}>{p}</p>)}
            <p className="aside">{t.about.note}</p>
          </div>
        </div>
      </section>

      <section className="section method" id="method" aria-labelledby="method-title">
        <p className="section-label" data-reveal><b>02</b>{t.method.label}</p>
        <div className="section-head" data-reveal>
          <h2 id="method-title">{t.method.title}</h2>
          <p>{t.method.intro}</p>
        </div>
        <ol className="flow">
          {t.method.steps.map((s, i) => <li key={s.name} data-reveal data-reveal-delay={String(i % 3)}>
            <span className="flow-index">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.name}</h3>
            <p>{s.text}</p>
          </li>)}
        </ol>
      </section>

      <section className="section skills" id="skills" aria-labelledby="skills-title">
        <p className="section-label" data-reveal><b>03</b>{t.skills.label}</p>
        <div className="section-head" data-reveal>
          <h2 id="skills-title">{t.skills.title}</h2>
          <p>{t.skills.intro}</p>
        </div>
        <div className="skill-grid">
          {t.skills.groups.map((g, i) => <article className="skill" key={g.title} data-reveal data-reveal-delay={String(i % 3)}>
            <h3><span>{String(i + 1).padStart(2, '0')}</span>{g.title}</h3>
            <p>{g.text}</p>
            <ul className="chips">{g.items.map(item => <li key={item}>{item}</li>)}</ul>
          </article>)}
        </div>
      </section>

      <section className="section work" id="work" aria-labelledby="work-title">
        <p className="section-label" data-reveal><b>04</b>{t.work.label}</p>
        <div className="section-head" data-reveal>
          <h2 id="work-title">{t.work.title}</h2>
          <p>{t.work.intro}</p>
        </div>
        <div className="work-list">
          {projects.map((p, i) => {
            const c = p.i18n[lang];
            const cover = p.images[0];
            const caseHref = asset(`/projetos/${p.slug}/`);
            return <article className={`work-item accent-${p.accent}`} key={p.slug} data-reveal>
              <a className="work-media" href={caseHref} tabIndex={-1} aria-hidden="true">
                <Image src={asset(cover.src)} alt="" width={cover.width} height={cover.height} sizes="(max-width: 900px) 92vw, 58vw" />
              </a>
              <div className="work-copy">
                <p className="work-meta"><span>{String(i + 1).padStart(2, '0')}</span>{c.category}</p>
                <h3><a href={caseHref}>{p.name}</a></h3>
                <p className="work-summary">{c.summary}</p>
                <dl className="work-facts">
                  <div><dt>{t.caseStudy.role}</dt><dd>{c.role}</dd></div>
                  <div><dt>{t.caseStudy.status}</dt><dd>{c.status}</dd></div>
                </dl>
                <div className="work-links">
                  <a className="primary-button" href={caseHref}>{t.work.read}<span aria-hidden="true">→</span></a>
                  <a className="text-link" href={p.url} target="_blank" rel="noreferrer">{p.host} ↗</a>
                </div>
              </div>
            </article>;
          })}
        </div>
      </section>

      <section className="section experience" id="experience" aria-labelledby="experience-title">
        <p className="section-label" data-reveal><b>05</b>{t.experience.label}</p>
        <h2 id="experience-title" className="sr-only">{t.experience.title}</h2>
        <div className="timeline-grid">
          {[[t.experience.education, t.experience.entries], [t.experience.practice, t.experience.practiceEntries]].map(([title, entries]) =>
            <div key={title as string} data-reveal>
              <h3 className="column-title">{title as string}</h3>
              <ol className="timeline">
                {(entries as typeof t.experience.entries).map(e => <li key={e.title}>
                  <p className="entry-top"><span>{e.tag}</span><span>{e.period}</span></p>
                  <h4>{e.title}</h4>
                  <p className="entry-org">{e.org}</p>
                  <p>{e.text}</p>
                </li>)}
              </ol>
            </div>)}
        </div>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <p className="section-label" data-reveal><b>06</b>{t.contact.label}</p>
        <h2 id="contact-title" data-reveal>{t.contact.title}</h2>
        <p className="contact-text" data-reveal>{t.contact.text}</p>
        <div className="contact-actions" data-reveal>
          <a className="primary-button" href={links.whatsapp} target="_blank" rel="noreferrer">{t.contact.whatsapp}<span aria-hidden="true">→</span></a>
          <a className="secondary-button" href={`mailto:${links.email}`}>{links.email}</a>
        </div>
        <ul className="contact-links" data-reveal>
          <li><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
          {links.linkedin && <li><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>}
          <li><a href={links.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a></li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>;
}
