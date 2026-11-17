'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import GridGlow from './grid-glow';

type Project = {
  name: string;
  url: string;
  host: string;
  role: string;
  tagline: string;
  description: string;
  stats: [string, string][];
  tags: string[];
};

type Step = { tag: string; title: string; place: string; text: string };

const copy = {
  pt: {
    nav: ['Início', 'Projetos', 'Trajetória', 'Sobre', 'Contato'],
    label: 'PORTFÓLIO',
    field: 'MEDICINA × ENGENHARIA DE SOFTWARE',
    intro: 'Estudo Medicina e desenvolvo software para enfrentar problemas que exigem mais do que uma solução pronta. Uno investigação cuidadosa e engenharia para transformar necessidades reais em produtos digitais.',
    projectsButton: 'Ver projetos',
    aboutButton: 'Discutir uma ideia',
    proof: [['2', 'projetos publicados'], ['75', 'aulas de Medicina'], ['1.700', 'flashcards de revisão']] as [string, string][],
    projects: 'PROJETOS NO AR',
    visit: 'Visitar site',
    projectList: [
      {
        name: 'MEDLAB', url: 'https://medlab.com.ar', host: 'medlab.com.ar', role: 'Criadora e fundadora',
        tagline: 'Um ambiente de estudo médico que transforma conteúdo em prática de recuperação.',
        description: 'O MEDLAB reúne aulas e flashcards com repetição espaçada. Com a Luna, estudantes podem praticar respostas orais, receber perguntas de aprofundamento e identificar temas que merecem revisão.',
        stats: [['75', 'aulas'], ['1.700', 'flashcards'], ['3', 'matérias']],
        tags: ['IA', 'Educação médica', 'Produto digital'],
      },
      {
        name: 'REPLAB', url: 'https://replab.com.ar', host: 'replab.com.ar', role: 'Criadora e fundadora',
        tagline: 'Automação construída a partir do processo, não de uma fórmula pronta.',
        description: 'A REPLAB desenvolve assistentes de IA para WhatsApp, automações e integrações sob medida para clínicas, comércios e equipes de logística. O trabalho começa por entender a operação e onde a tecnologia pode reduzir atritos.',
        stats: [['4', 'linhas de produto'], ['AR · BR', 'atuação']],
        tags: ['Agentes de IA', 'Automação', 'Integrações'],
      },
    ] as Project[],
    path: 'TRAJETÓRIA',
    steps: [
      { tag: 'MEDICINA', title: 'Fundación H. A. Barceló', place: 'Buenos Aires, Argentina', text: 'Graduação em Medicina, com interesse especial em neurocirurgia e geriatria.' },
      { tag: 'DESENVOLVIMENTO WEB', title: 'The Odin Project', place: 'Online · Open source', text: 'Formação prática em desenvolvimento web, aprendendo a construir projetos reais do zero.' },
    ] as Step[],
    about: 'SOBRE MIM',
    aboutText: 'Sou Luana. Na Medicina, estudo sistemas complexos a partir do corpo e da experiência de cada pessoa. Na engenharia, construo ferramentas com a mesma pergunta em mente: que problema resolvem, para quem e em que condições?',
    aboutMore: 'Tenho interesse em neurocirurgia, geriatria e qualidade de vida. Em tecnologia, meu foco é compreender o contexto antes de propor uma ferramenta — seja para apoiar o estudo médico, seja para tornar processos de trabalho mais claros e consistentes. Quero criar soluções úteis, com limites e objetivos bem definidos.',
    interests: ['Neurocirurgia', 'Geriatria', 'Qualidade de vida', 'IA', 'Desenvolvimento web'],
    contact: 'CONTATO',
    contactText: 'Que desafio você gostaria de tornar mais claro, acessível ou eficiente com tecnologia?',
    contactSub: 'Estou aberta a conversas sobre produto, pesquisa e parcerias em saúde e tecnologia.',
    whatsapp: 'Falar pelo WhatsApp',
    code: ['const portfolio = {', '  domains: ["health",', '    "software"],', '  focus: "people"', '}'],
    terminal: ['build()', 'test()', 'deploy()'],
    caption: 'PORTFÓLIO',
    rights: 'Feito com cuidado em Buenos Aires.',
  },
  es: {
    nav: ['Inicio', 'Proyectos', 'Trayectoria', 'Sobre mí', 'Contacto'],
    label: 'PORTAFOLIO',
    field: 'MEDICINA × INGENIERÍA DE SOFTWARE',
    intro: 'Estudio Medicina y desarrollo software para abordar problemas que no se resuelven con una fórmula prefabricada. Combino investigación cuidadosa e ingeniería para convertir necesidades reales en productos digitales.',
    projectsButton: 'Ver proyectos',
    aboutButton: 'Conversemos sobre una idea',
    proof: [['2', 'proyectos publicados'], ['75', 'clases de Medicina'], ['1.700', 'flashcards de repaso']] as [string, string][],
    projects: 'PROYECTOS ONLINE',
    visit: 'Visitar sitio',
    projectList: [
      {
        name: 'MEDLAB', url: 'https://medlab.com.ar', host: 'medlab.com.ar', role: 'Creadora y fundadora',
        tagline: 'Un espacio de estudio médico que convierte contenidos en práctica de recuperación.',
        description: 'MEDLAB reúne clases y flashcards con repetición espaciada. Con Luna, los estudiantes pueden practicar respuestas orales, recibir preguntas de profundización e identificar temas que necesitan repaso.',
        stats: [['75', 'aulas'], ['1.700', 'flashcards'], ['3', 'materias']],
        tags: ['IA', 'Educación médica', 'Producto digital'],
      },
      {
        name: 'REPLAB', url: 'https://replab.com.ar', host: 'replab.com.ar', role: 'Creadora y fundadora',
        tagline: 'Automatización diseñada a partir del proceso, no de una fórmula prefabricada.',
        description: 'REPLAB desarrolla asistentes de IA para WhatsApp, automatizaciones e integraciones a medida para clínicas, comercios y equipos de logística. El trabajo empieza por entender la operación y detectar dónde la tecnología puede reducir fricciones.',
        stats: [['4', 'líneas de producto'], ['AR · BR', 'presencia']],
        tags: ['Agentes de IA', 'Automatización', 'Integraciones'],
      },
    ] as Project[],
    path: 'TRAYECTORIA',
    steps: [
      { tag: 'MEDICINA', title: 'Fundación H. A. Barceló', place: 'Buenos Aires, Argentina', text: 'Carrera de Medicina, con especial interés en la neurocirugía y la geriatría.' },
      { tag: 'DESARROLLO WEB', title: 'The Odin Project', place: 'Online · Open source', text: 'Formación práctica en desarrollo web, aprendiendo a construir proyectos reales desde cero.' },
    ] as Step[],
    about: 'SOBRE MÍ',
    aboutText: 'Soy Luana. En Medicina, estudio sistemas complejos desde el cuerpo y la experiencia de cada persona. En ingeniería, construyo herramientas con la misma pregunta: qué problema resuelven, para quién y en qué condiciones.',
    aboutMore: 'Me interesan la neurocirugía, la geriatría y la calidad de vida. En tecnología, mi foco es comprender el contexto antes de proponer una herramienta, ya sea para apoyar el estudio médico o para hacer más claros y consistentes los procesos de trabajo. Busco crear soluciones útiles, con objetivos y límites bien definidos.',
    interests: ['Neurocirugía', 'Geriatría', 'Calidad de vida', 'IA', 'Desarrollo web'],
    contact: 'CONTACTO',
    contactText: '¿Qué desafío te gustaría volver más claro, accesible o eficiente con tecnología?',
    contactSub: 'Estoy abierta a conversar sobre producto, investigación y alianzas en salud y tecnología.',
    whatsapp: 'Escribime por WhatsApp',
    code: ['const portfolio = {', '  domains: ["health",', '    "software"],', '  focus: "people"', '}'],
    terminal: ['build()', 'test()', 'deploy()'],
    caption: 'PORTAFOLIO',
    rights: 'Hecho con cuidado en Buenos Aires.',
  },
  en: {
    nav: ['Home', 'Projects', 'Journey', 'About', 'Contact'],
    label: 'PORTFOLIO',
    field: 'MEDICINE × SOFTWARE ENGINEERING',
    intro: 'I study medicine and build software to address problems that need more than an off-the-shelf answer. I bring careful inquiry and engineering together to turn real needs into digital products.',
    projectsButton: 'View projects',
    aboutButton: 'Discuss an idea',
    proof: [['2', 'published projects'], ['75', 'medical lessons'], ['1,700', 'review flashcards']] as [string, string][],
    projects: 'LIVE PROJECTS',
    visit: 'Visit site',
    projectList: [
      {
        name: 'MEDLAB', url: 'https://medlab.com.ar', host: 'medlab.com.ar', role: 'Creator & founder',
        tagline: 'A medical learning space that turns content into active recall practice.',
        description: 'MEDLAB brings together lessons and spaced-repetition flashcards. With Luna, students can practise oral answers, receive follow-up questions and identify topics that need further review.',
        stats: [['75', 'lessons'], ['1,700', 'flashcards'], ['3', 'subjects']],
        tags: ['AI', 'Medical education', 'Digital product'],
      },
      {
        name: 'REPLAB', url: 'https://replab.com.ar', host: 'replab.com.ar', role: 'Creator & founder',
        tagline: 'Automation designed around the work, not a one-size-fits-all formula.',
        description: 'REPLAB builds WhatsApp AI assistants, automations and custom integrations for clinics, shops and logistics teams. The work starts by understanding the operation and where technology can reduce friction.',
        stats: [['4', 'product lines'], ['AR · BR', 'markets']],
        tags: ['AI agents', 'Automation', 'Integrations'],
      },
    ] as Project[],
    path: 'JOURNEY',
    steps: [
      { tag: 'MEDICINE', title: 'Fundación H. A. Barceló', place: 'Buenos Aires, Argentina', text: 'Medical degree, with a special interest in neurosurgery and geriatrics.' },
      { tag: 'WEB DEVELOPMENT', title: 'The Odin Project', place: 'Online · Open source', text: 'Hands-on web development training, learning by building real projects from scratch.' },
    ] as Step[],
    about: 'ABOUT ME',
    aboutText: 'I study medicine to understand complex systems through the body and each person’s experience. In engineering, I build tools guided by the same questions: what problem do they solve, for whom, and under what conditions?',
    aboutMore: 'My interests include neurosurgery, geriatrics and quality of life. In technology, I try to understand the context before proposing a tool, whether it supports medical learning or makes work processes clearer and more consistent. I aim to build useful solutions with well-defined goals and limits.',
    interests: ['Neurosurgery', 'Geriatrics', 'Quality of life', 'AI', 'Web development'],
    contact: 'CONTACT',
    contactText: 'What challenge would you like to make clearer, more accessible or more efficient with technology?',
    contactSub: 'I’m open to conversations about products, research and partnerships in health and technology.',
    whatsapp: 'Chat on WhatsApp',
    code: ['const portfolio = {', '  domains: ["health",', '    "software"],', '  focus: "people"', '}'],
    terminal: ['build()', 'test()', 'deploy()'],
    caption: 'PORTFOLIO',
    rights: 'Made with care in Buenos Aires.',
  },
};

type Language = keyof typeof copy;
const languages = ['pt', 'es', 'en'] as const;
const htmlLang: Record<Language, string> = { pt: 'pt-BR', es: 'es-AR', en: 'en' };
const sectionIds = ['home', 'projects', 'journey', 'about', 'contact'];

function readStored(key: string) {
  try { return window.localStorage.getItem(key); } catch { return null; }
}
function store(key: string, value: string) {
  try { window.localStorage.setItem(key, value); } catch { /* storage unavailable */ }
}

function WindowBar({ title }: { title: string }) {
  return <div className="win-bar"><span>{title}</span><span className="win-btns"><i /><i /><i /></span></div>;
}

export default function Home() {
  const [lang, setLang] = useState<Language>('pt');
  const [active, setActive] = useState('home');
  const t = copy[lang];

  // Restore the visitor's language (falls back to the browser language).
  useEffect(() => {
    // Runs once after hydration: browser-only preferences can't be read during server render.
    const savedLang = readStored('lang');
    const browserLang = navigator.language.slice(0, 2);
    const nextLang: Language = savedLang && savedLang in copy ? savedLang as Language
      : browserLang === 'es' || browserLang === 'en' ? browserLang : 'pt';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLang(nextLang);
  }, []);

  useEffect(() => { document.documentElement.lang = htmlLang[lang]; }, [lang]);

  const chooseLang = (l: Language) => { setLang(l); store('lang', l); };

  // Highlight the menu item of the section currently on screen.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sectionIds.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    document.documentElement.classList.add('js-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -36px 0px' });
    items.forEach(item => observer.observe(item));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('js-ready');
    };
  }, []);

  return <main className="site">
    <div className="grid" aria-hidden="true" />
    <GridGlow />
    <header className="topbar">
      <a className="monogram" href="#home" aria-label="Luana Menezes">LM<span>.</span></a>
      <nav aria-label="Menu">{t.nav.map((item, i) => <a className={active === sectionIds[i] ? 'selected' : ''} key={sectionIds[i]} href={`#${sectionIds[i]}`}>{item}</a>)}</nav>
      <div className="header-tools">
        <div className="languages" role="group" aria-label="Idioma / Language">{languages.map(l => <button className={lang === l ? 'active' : ''} aria-pressed={lang === l} key={l} onClick={() => chooseLang(l)}>{l.toUpperCase()}</button>)}</div>
      </div>
    </header>

    <section className="hero" id="home">
      <div className="hero-copy" data-reveal>
        <p className="portfolio-label">{t.label}<span /></p>
        <h1>LUANA<br/>MENEZES<span>.</span></h1>
        <p className="field">{t.field}</p>
        <p className="intro">{t.intro}</p>
        <div className="hero-actions"><a className="primary-button" href="#projects">{t.projectsButton}<span>→</span></a><a className="secondary-button" href="#contact">{t.aboutButton}</a></div>
        <dl className="hero-proof">{t.proof.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}</dl>
      </div>

      <div className="portrait-stage" data-reveal data-reveal-delay="1">
        <div className="pixel-backdrop" aria-hidden="true" />
        <Image className="portrait" src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/portrait.webp`} alt="Luana Menezes" fill priority sizes="(max-width: 760px) 94vw, 56vw" />
        <div className="float-card code-card" aria-hidden="true"><WindowBar title="portfolio.js" /><code>{t.code.map((line, i) => <span key={i}><small>{i + 1}</small>{line}</span>)}</code></div>
        <div className="float-card equation-card" aria-hidden="true"><WindowBar title="growth.tex" /><div className="equation-body"><span className="equation">dP<br/><small>dt</small></span><span className="equals">=</span><span className="formula">rP (1 − <i>P<br/>K</i>)</span></div></div>
        <div className="float-card terminal-card" aria-hidden="true"><WindowBar title="terminal" /><div className="terminal-body">{t.terminal.map(item => <span className="terminal-line" key={item}><b>&gt;</b> {item}</span>)}<span className="check">✓</span></div></div>
        <span className="portrait-caption">LUANA MENEZES — {t.caption}</span>
      </div>
    </section>

    <section className="section projects" id="projects">
      <p className="section-label" data-reveal><b>01</b> {t.projects}</p>
      <div className="project-grid">
        {t.projectList.map((p, i) => <a className={`project-card project-${p.name.toLowerCase()}`} href={p.url} target="_blank" rel="noreferrer" key={p.name} data-reveal data-reveal-delay={String(i)}>
          <div className="project-top"><span>0{i + 1} — {p.role}</span><span className="project-host">{p.host}</span></div>
          <h2>{p.name}<sup>↗</sup></h2>
          <p className="project-tagline">{p.tagline}</p>
          <p className="project-description">{p.description}</p>
          <dl className="project-stats">{p.stats.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}</dl>
          <div className="project-bottom"><ul className="tags">{p.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><span className="visit">{t.visit} →</span></div>
        </a>)}
      </div>
    </section>

    <section className="section journey" id="journey">
      <p className="section-label" data-reveal><b>02</b> {t.path}</p>
      <ol className="timeline">
        {t.steps.map((s, i) => <li key={s.title} data-reveal data-reveal-delay={String(i)}>
          <span className="step-tag">{s.tag}</span>
          <h3>{s.title}</h3>
          <p className="step-place">{s.place}</p>
          <p>{s.text}</p>
        </li>)}
      </ol>
    </section>

    <section className="section about" id="about"><p className="section-label" data-reveal><b>03</b> {t.about}</p><div className="about-grid"><p className="about-copy" data-reveal data-reveal-delay="1">{t.aboutText}</p><div className="about-more" data-reveal data-reveal-delay="2"><p>{t.aboutMore}</p><ul className="tags interests">{t.interests.map(item => <li key={item}>{item}</li>)}</ul></div></div></section>
    <footer className="section contact" id="contact"><p className="section-label" data-reveal><b>04</b> {t.contact}</p><h2 data-reveal data-reveal-delay="1">{t.contactText}</h2><p className="contact-sub" data-reveal data-reveal-delay="1">{t.contactSub}</p><div className="contact-actions" data-reveal data-reveal-delay="2"><a className="primary-button" href="https://wa.me/5491173692773" target="_blank" rel="noreferrer">{t.whatsapp} <span>→</span></a><a className="secondary-button" href="mailto:luanamenezes10@icloud.com">luanamenezes10@icloud.com</a></div><p className="rights">© {new Date().getFullYear()} Luana Menezes · {t.rights}</p></footer>
  </main>;
}
