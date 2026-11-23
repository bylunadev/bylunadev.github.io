import type { Lang } from '../i18n';

export const links = {
  email: 'luanamenezes10@icloud.com',
  whatsapp: 'https://wa.me/5491173692773',
  github: 'https://github.com/luanacbmenezes-lab',
  /** Leave empty until there is a public profile: the link is hidden while empty. */
  linkedin: '',
};

export const sectionIds = ['about', 'method', 'skills', 'work', 'experience', 'contact'] as const;

type Pair = [string, string];
type Skill = { title: string; text: string; items: string[] };
type Entry = { tag: string; title: string; org: string; period: string; status: string; text: string };

export type SiteCopy = {
  nav: string[];
  skip: string;
  menu: [string, string];
  hero: { kicker: string; lead: string; text: string; location: string; work: string; contact: string; facts: Pair[] };
  about: { label: string; title: string; body: string[]; note: string };
  method: { label: string; title: string; intro: string; steps: { name: string; text: string }[] };
  skills: { label: string; title: string; intro: string; groups: Skill[]; note: string };
  work: { label: string; title: string; intro: string; read: string; visit: string };
  experience: { label: string; title: string; education: string; practice: string; entries: Entry[]; practiceEntries: Entry[] };
  contact: { label: string; title: string; text: string; whatsapp: string; email: string };
  footer: string;
  caseStudy: { back: string; labels: string[]; role: string; period: string; status: string; link: string; next: string; gallery: string };
};

const stepNames = ['Problem', 'Research', 'System design', 'Development', 'Validation', 'Iteration'];
const skillNames = ['Software Engineering', 'Product Development', 'Artificial Intelligence', 'Automation & Integrations', 'UX/UI', 'Digital Strategy'];
const caseLabels = ['Project overview', 'The problem', 'The challenge', 'My role', 'Product strategy', 'System architecture', 'Design decisions', 'Technologies', 'Development process', 'Results & learnings'];

const engineering = ['TypeScript', 'React 19', 'Next.js 16', 'Node.js', 'Cloudflare Workers', 'D1 · R2', 'Better Auth', 'Zod', 'Vitest', 'GitHub Actions'];
const ai = ['Claude API (Anthropic)', 'Cloudflare Workers AI', 'Llama 3.3 70B', 'Deepgram Aura‑2', 'Structured output', 'Tool use'];
const integrations = ['WhatsApp Business Cloud API', 'Instagram API (Meta)', 'Webhooks', 'Cron', 'iCalendar (.ics)', 'Hotmart'];
const ux = ['Design tokens', 'Tailwind CSS 4', 'Responsive', 'Accessibility', 'Motion'];

export const site: Record<Lang, SiteCopy> = {
  pt: {
    nav: ['Sobre', 'Método', 'Competências', 'Projetos', 'Trajetória', 'Contato'],
    skip: 'Pular para o conteúdo',
    menu: ['Abrir menu', 'Fechar menu'],
    hero: {
      kicker: 'PRODUCT BUILDER · SOFTWARE · AI',
      lead: 'Desenvolvo produtos digitais e sistemas inteligentes, conectando tecnologia, conhecimento e necessidades reais.',
      text: 'Concebo, projeto e coloco no ar produtos completos: do entendimento do problema à arquitetura, ao código e à operação. Hoje, uma plataforma de treino para exames orais de Medicina, sistemas de IA e automação para negócios e sites para profissionais de saúde.',
      location: 'Buenos Aires, Argentina',
      work: 'Ver projetos',
      contact: 'Entrar em contato',
      facts: [['3', 'produtos no ar'], ['113', 'aulas no currículo UNLP do MEDLAB'], ['400+', 'commits no MEDLAB desde setembro']],
    },
    about: {
      label: 'SOBRE',
      title: 'A Medicina me ensinou a investigar antes de intervir. A engenharia me deu os meios para construir.',
      body: [
        'Estudo Medicina na Fundación H. A. Barceló, em Buenos Aires, e engenharia de software de forma autodidata. As duas áreas pedem o mesmo rigor: observar com cuidado, levantar hipóteses, decidir com critério e acompanhar o resultado.',
        'O MEDLAB nasceu assim. Eu conhecia por dentro a dificuldade de se preparar para um exame oral e construí a ferramenta que faltava. Na REPLAB, aplico o mesmo método aos negócios: entender a operação antes de propor tecnologia.',
        'Trabalho de ponta a ponta, do produto e da arquitetura ao código, ao conteúdo e à publicação. Uso IA onde ela resolve um problema concreto, com limites claros e verificação no servidor.',
      ],
      note: 'Na Medicina, meus interesses são neurocirurgia e geriatria, em especial a qualidade de vida das pessoas idosas.',
    },
    method: {
      label: 'COMO PENSO',
      title: 'Um processo, do problema ao sistema em uso.',
      intro: 'O mesmo raciocínio de um caso clínico, aplicado a produto: primeiro entender, depois intervir, sempre verificar.',
      steps: [
        { name: stepNames[0], text: 'Definir o problema real, para quem ele existe e em que condições. Sem isso, qualquer solução é palpite.' },
        { name: stepNames[1], text: 'Estudar o contexto: quem usa, o que já existe, que dados e restrições há. No MEDLAB, a bibliografia e o formato de cada exame oral.' },
        { name: stepNames[2], text: 'Modelar antes de programar: entidades, fluxos, fonte de verdade e a fronteira entre o que a IA sugere e o que o código garante.' },
        { name: stepNames[3], text: 'Construir em ciclos curtos, com tipos, testes e verificações automáticas desde o primeiro dia.' },
        { name: stepNames[4], text: 'Conferir com a realidade: testes, revisão de conteúdo, uso real e as limitações documentadas com honestidade.' },
        { name: stepNames[5], text: 'Melhorar a partir do que aprendi. O MEDLAB passou por um redesenho completo e por uma auditoria de segurança.' },
      ],
    },
    skills: {
      label: 'COMO TRABALHO',
      title: 'Competências aplicadas em produtos reais.',
      intro: 'Tudo o que aparece aqui está em uso nos projetos abaixo.',
      groups: [
        { title: skillNames[0], text: 'Aplicações web tipadas e testadas, com backend serverless, autenticação e integração contínua.', items: engineering },
        { title: skillNames[1], text: 'Do problema ao produto no ar: escopo, arquitetura de conteúdo, onboarding, planos e controle de acesso.', items: ['Arquitetura de informação', 'Modelagem de conteúdo', 'Onboarding', 'Planos e acesso', 'Produtos multilíngues'] },
        { title: skillNames[2], text: 'IA aplicada com limites: saída validada por schema, ferramentas controladas pelo código, teto de custo e alternativa quando o modelo falha.', items: ai },
        { title: skillNames[3], text: 'Sistemas que conversam entre si: mensagens, agenda, métricas e pagamentos conectados à operação.', items: integrations },
        { title: skillNames[4], text: 'Interfaces claras, responsivas e acessíveis, com um sistema visual próprio para cada produto.', items: ux },
        { title: skillNames[5], text: 'Posicionamento, páginas de produto e funis que começam por entender o cliente.', items: ['Posicionamento', 'Landing pages', 'Diagnóstico como porta de entrada', 'Conteúdo para Instagram'] },
      ],
      note: 'Em formação contínua, sem certificações declaradas.',
    },
    work: {
      label: 'PROJETOS SELECIONADOS',
      title: 'Três produtos no ar, cada um com seu estudo de caso.',
      intro: 'Problema, decisões, arquitetura e o estado real de cada projeto.',
      read: 'Ler estudo de caso',
      visit: 'Abrir site',
    },
    experience: {
      label: 'TRAJETÓRIA',
      title: 'Formação e prática.',
      education: 'Formação',
      practice: 'Experiência prática',
      entries: [
        { tag: 'MEDICINA', title: 'Medicina', org: 'Fundación H. A. Barceló · Buenos Aires', period: 'Em andamento', status: 'em andamento', text: 'Curso de Medicina, com interesse em neurocirurgia e geriatria.' },
        { tag: 'ENGENHARIA DE SOFTWARE', title: 'Engenharia de Software', org: 'Autodidata · CS50 de Harvard (edX), The Odin Project e projetos próprios', period: 'Em andamento', status: 'em andamento', text: 'Formação autodidata em engenharia de software, seguindo a trilha de cursos CS50 de Harvard, online pelo edX, e o currículo do The Odin Project, aplicada na construção dos meus próprios produtos.' },
      ],
      practiceEntries: [
        { tag: 'PRODUTO · IA', title: 'MEDLAB', org: 'Criadora e fundadora', period: '2026 — hoje', status: 'no ar', text: 'Concepção, design, desenvolvimento, conteúdo e operação da plataforma de treino para exames orais.' },
        { tag: 'IA · AUTOMAÇÃO', title: 'REPLAB', org: 'Criadora e fundadora', period: '2026 — hoje', status: 'no ar', text: 'Assistente de WhatsApp com agenda, sistema de conteúdo para Instagram e diagnóstico online para negócios.' },
        { tag: 'WEB', title: 'Clínica Catarina Catunda', org: 'Projeto web', period: '2026', status: 'no ar', text: 'Concepção, design e desenvolvimento do site institucional da fisioterapeuta.' },
      ],
    },
    contact: {
      label: 'CONTATO',
      title: 'Tem um produto, sistema ou processo para construir?',
      text: 'Estou aberta a oportunidades profissionais, projetos, parcerias e conversas sobre produto, software e IA, especialmente em saúde e educação.',
      whatsapp: 'Conversar pelo WhatsApp',
      email: 'Enviar e-mail',
    },
    footer: 'Buenos Aires, Argentina.',
    caseStudy: { back: 'Todos os projetos', labels: caseLabels, role: 'Papel', period: 'Período', status: 'Estado', link: 'Site', next: 'Próximo projeto', gallery: 'Capturas do produto publicado' },
  },

  es: {
    nav: ['Sobre mí', 'Método', 'Competencias', 'Proyectos', 'Trayectoria', 'Contacto'],
    skip: 'Saltar al contenido',
    menu: ['Abrir menú', 'Cerrar menú'],
    hero: {
      kicker: 'PRODUCT BUILDER · SOFTWARE · AI',
      lead: 'Desarrollo productos digitales y sistemas inteligentes que conectan tecnología, conocimiento y necesidades reales.',
      text: 'Concibo, diseño y pongo en línea productos completos: desde entender el problema hasta la arquitectura, el código y la operación. Hoy, una plataforma de entrenamiento para exámenes orales de Medicina, sistemas de IA y automatización para negocios y sitios para profesionales de la salud.',
      location: 'Buenos Aires, Argentina',
      work: 'Ver proyectos',
      contact: 'Contactarme',
      facts: [['3', 'productos en línea'], ['113', 'clases en el currículo UNLP de MEDLAB'], ['400+', 'commits en MEDLAB desde septiembre']],
    },
    about: {
      label: 'SOBRE MÍ',
      title: 'La Medicina me enseñó a investigar antes de intervenir. La ingeniería me dio los medios para construir.',
      body: [
        'Estudio Medicina en la Fundación H. A. Barceló, en Buenos Aires, e ingeniería de software de forma autodidacta. Las dos áreas piden el mismo rigor: observar con atención, plantear hipótesis, decidir con criterio y seguir el resultado.',
        'Así nació MEDLAB. Conocía desde adentro lo difícil que es prepararse para un examen oral y construí la herramienta que faltaba. En REPLAB aplico el mismo método a los negocios: entender la operación antes de proponer tecnología.',
        'Trabajo de punta a punta, del producto y la arquitectura al código, el contenido y la publicación. Uso IA donde resuelve un problema concreto, con límites claros y verificación en el servidor.',
      ],
      note: 'En Medicina me interesan la neurocirugía y la geriatría, en especial la calidad de vida de las personas mayores.',
    },
    method: {
      label: 'CÓMO PIENSO',
      title: 'Un proceso, del problema al sistema en uso.',
      intro: 'El mismo razonamiento de un caso clínico, aplicado a producto: primero entender, después intervenir, siempre verificar.',
      steps: [
        { name: stepNames[0], text: 'Definir el problema real, para quién existe y en qué condiciones. Sin eso, cualquier solución es una suposición.' },
        { name: stepNames[1], text: 'Estudiar el contexto: quién lo usa, qué existe, qué datos y restricciones hay. En MEDLAB, la bibliografía y el formato de cada examen oral.' },
        { name: stepNames[2], text: 'Modelar antes de programar: entidades, flujos, fuente de verdad y el límite entre lo que la IA sugiere y lo que el código garantiza.' },
        { name: stepNames[3], text: 'Construir en ciclos cortos, con tipos, tests y verificaciones automáticas desde el primer día.' },
        { name: stepNames[4], text: 'Contrastar con la realidad: tests, revisión de contenido, uso real y las limitaciones documentadas con honestidad.' },
        { name: stepNames[5], text: 'Mejorar a partir de lo aprendido. MEDLAB pasó por un rediseño completo y por una auditoría de seguridad.' },
      ],
    },
    skills: {
      label: 'CÓMO TRABAJO',
      title: 'Competencias aplicadas en productos reales.',
      intro: 'Todo lo que aparece acá se usa en los proyectos de abajo.',
      groups: [
        { title: skillNames[0], text: 'Aplicaciones web tipadas y testeadas, con backend serverless, autenticación e integración continua.', items: engineering },
        { title: skillNames[1], text: 'Del problema al producto en línea: alcance, arquitectura de contenido, onboarding, planes y control de acceso.', items: ['Arquitectura de información', 'Modelado de contenido', 'Onboarding', 'Planes y acceso', 'Productos multilingües'] },
        { title: skillNames[2], text: 'IA aplicada con límites: salida validada por schema, herramientas controladas por el código, tope de costo y alternativa cuando el modelo falla.', items: ai },
        { title: skillNames[3], text: 'Sistemas que se hablan entre sí: mensajes, agenda, métricas y pagos conectados a la operación.', items: integrations },
        { title: skillNames[4], text: 'Interfaces claras, responsivas y accesibles, con un sistema visual propio para cada producto.', items: ux },
        { title: skillNames[5], text: 'Posicionamiento, páginas de producto y embudos que empiezan por entender al cliente.', items: ['Posicionamiento', 'Landing pages', 'Diagnóstico como puerta de entrada', 'Contenido para Instagram'] },
      ],
      note: 'En formación continua, sin certificaciones declaradas.',
    },
    work: {
      label: 'PROYECTOS SELECCIONADOS',
      title: 'Tres productos en línea, cada uno con su caso de estudio.',
      intro: 'Problema, decisiones, arquitectura y el estado real de cada proyecto.',
      read: 'Leer caso de estudio',
      visit: 'Abrir sitio',
    },
    experience: {
      label: 'TRAYECTORIA',
      title: 'Formación y práctica.',
      education: 'Formación',
      practice: 'Experiencia práctica',
      entries: [
        { tag: 'MEDICINA', title: 'Medicina', org: 'Fundación H. A. Barceló · Buenos Aires', period: 'En curso', status: 'en curso', text: 'Carrera de Medicina, con interés en neurocirugía y geriatría.' },
        { tag: 'INGENIERÍA DE SOFTWARE', title: 'Ingeniería de Software', org: 'Autodidacta · CS50 de Harvard (edX), The Odin Project y proyectos propios', period: 'En curso', status: 'en curso', text: 'Formación autodidacta en ingeniería de software, siguiendo la serie de cursos CS50 de Harvard, en línea por edX, y el currículo de The Odin Project, aplicada en la construcción de mis propios productos.' },
      ],
      practiceEntries: [
        { tag: 'PRODUCTO · IA', title: 'MEDLAB', org: 'Creadora y fundadora', period: '2026 — hoy', status: 'en línea', text: 'Concepción, diseño, desarrollo, contenido y operación de la plataforma de entrenamiento para exámenes orales.' },
        { tag: 'IA · AUTOMATIZACIÓN', title: 'REPLAB', org: 'Creadora y fundadora', period: '2026 — hoy', status: 'en línea', text: 'Asistente de WhatsApp con agenda, sistema de contenido para Instagram y diagnóstico en línea para negocios.' },
        { tag: 'WEB', title: 'Clínica Catarina Catunda', org: 'Proyecto web', period: '2026', status: 'en línea', text: 'Concepción, diseño y desarrollo del sitio institucional de la fisioterapeuta.' },
      ],
    },
    contact: {
      label: 'CONTACTO',
      title: '¿Tenés un producto, sistema o proceso para construir?',
      text: 'Estoy abierta a oportunidades profesionales, proyectos, alianzas y conversaciones sobre producto, software e IA, en especial en salud y educación.',
      whatsapp: 'Escribirme por WhatsApp',
      email: 'Enviar e-mail',
    },
    footer: 'Buenos Aires, Argentina.',
    caseStudy: { back: 'Todos los proyectos', labels: caseLabels, role: 'Rol', period: 'Período', status: 'Estado', link: 'Sitio', next: 'Próximo proyecto', gallery: 'Capturas del producto publicado' },
  },

  en: {
    nav: ['About', 'Method', 'Skills', 'Work', 'Background', 'Contact'],
    skip: 'Skip to content',
    menu: ['Open menu', 'Close menu'],
    hero: {
      kicker: 'PRODUCT BUILDER · SOFTWARE · AI',
      lead: 'I build digital products and intelligent systems that connect technology, knowledge and real needs.',
      text: 'I conceive, design and ship complete products, from understanding the problem to architecture, code and operations. Today: a training platform for oral medical exams, AI and automation systems for businesses, and websites for health professionals.',
      location: 'Buenos Aires, Argentina',
      work: 'View work',
      contact: 'Get in touch',
      facts: [['3', 'products live'], ['113', 'lessons in MEDLAB’s UNLP curriculum'], ['400+', 'MEDLAB commits since September']],
    },
    about: {
      label: 'ABOUT',
      title: 'Medicine taught me to investigate before intervening. Engineering gave me the means to build.',
      body: [
        'I study medicine at Fundación H. A. Barceló in Buenos Aires, and I am a self-taught software engineering student. Both fields demand the same rigour: observe carefully, form hypotheses, decide with judgement and follow the outcome.',
        'That is how MEDLAB started. I knew first-hand how hard it is to prepare for an oral exam, so I built the tool that was missing. At REPLAB I apply the same method to businesses: understand the operation before proposing technology.',
        'I work end to end, from product and architecture to code, content and release. I use AI where it solves a concrete problem, with clear limits and server-side checks.',
      ],
      note: 'In medicine, I am most drawn to neurosurgery and geriatrics, especially the quality of life of older people.',
    },
    method: {
      label: 'HOW I THINK',
      title: 'One process, from problem to system in use.',
      intro: 'The reasoning of a clinical case, applied to product: understand first, then intervene, and always verify.',
      steps: [
        { name: stepNames[0], text: 'Define the real problem, who has it and under which conditions. Without that, any solution is a guess.' },
        { name: stepNames[1], text: 'Study the context: who uses it, what already exists, which data and constraints apply. For MEDLAB, the bibliography and the format of each oral exam.' },
        { name: stepNames[2], text: 'Model before coding: entities, flows, source of truth, and the line between what AI suggests and what code guarantees.' },
        { name: stepNames[3], text: 'Build in short cycles, with types, tests and automated checks from day one.' },
        { name: stepNames[4], text: 'Check against reality: tests, content review, real use, and limitations documented honestly.' },
        { name: stepNames[5], text: 'Improve from what was learned. MEDLAB went through a full redesign and a security audit.' },
      ],
    },
    skills: {
      label: 'HOW I WORK',
      title: 'Skills applied in real products.',
      intro: 'Everything listed here is in use in the projects below.',
      groups: [
        { title: skillNames[0], text: 'Typed, tested web applications with a serverless backend, authentication and continuous integration.', items: engineering },
        { title: skillNames[1], text: 'From problem to live product: scope, content architecture, onboarding, plans and access control.', items: ['Information architecture', 'Content modelling', 'Onboarding', 'Plans & access', 'Multilingual products'] },
        { title: skillNames[2], text: 'Applied AI with limits: schema-validated output, tools controlled by code, cost caps and a fallback when the model fails.', items: ai },
        { title: skillNames[3], text: 'Systems that talk to each other: messaging, scheduling, metrics and payments connected to operations.', items: integrations },
        { title: skillNames[4], text: 'Clear, responsive and accessible interfaces, with a visual system of its own for each product.', items: ux },
        { title: skillNames[5], text: 'Positioning, product pages and funnels that start by understanding the customer.', items: ['Positioning', 'Landing pages', 'Diagnostic as entry point', 'Instagram content'] },
      ],
      note: 'Continuously learning; no certifications claimed.',
    },
    work: {
      label: 'SELECTED WORK',
      title: 'Three products live, each with its case study.',
      intro: 'Problem, decisions, architecture and the real state of each project.',
      read: 'Read case study',
      visit: 'Open site',
    },
    experience: {
      label: 'EXPERIENCE & BACKGROUND',
      title: 'Education and practice.',
      education: 'Education',
      practice: 'Hands-on experience',
      entries: [
        { tag: 'MEDICINE', title: 'Medicine', org: 'Fundación H. A. Barceló · Buenos Aires', period: 'In progress', status: 'in progress', text: 'Medical degree, with an interest in neurosurgery and geriatrics.' },
        { tag: 'SOFTWARE ENGINEERING', title: 'Software Engineering', org: 'Self-taught · Harvard CS50 (edX), The Odin Project and my own projects', period: 'In progress', status: 'in progress', text: 'Self-taught software engineering, following Harvard’s CS50 course series online via edX and The Odin Project curriculum, applied to building my own products.' },
      ],
      practiceEntries: [
        { tag: 'PRODUCT · AI', title: 'MEDLAB', org: 'Creator & founder', period: '2026 — present', status: 'live', text: 'Concept, design, development, content and operations of the oral-exam training platform.' },
        { tag: 'AI · AUTOMATION', title: 'REPLAB', org: 'Creator & founder', period: '2026 — present', status: 'live', text: 'WhatsApp assistant with scheduling, an Instagram content system and an online diagnostic for businesses.' },
        { tag: 'WEB', title: 'Catarina Catunda Clinic', org: 'Web project', period: '2026', status: 'live', text: 'Concept, design and development of the physiotherapist’s website.' },
      ],
    },
    contact: {
      label: 'CONTACT',
      title: 'Have a product, system or process to build?',
      text: 'I am open to professional opportunities, projects, partnerships and conversations about product, software and AI, especially in health and education.',
      whatsapp: 'Message on WhatsApp',
      email: 'Send an email',
    },
    footer: 'Buenos Aires, Argentina.',
    caseStudy: { back: 'All work', labels: caseLabels, role: 'Role', period: 'Period', status: 'Status', link: 'Website', next: 'Next project', gallery: 'Screenshots of the live product' },
  },
};
