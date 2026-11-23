import type { Lang } from '../i18n';

export type Section = { body?: string[]; list?: string[]; chips?: string[]; diagram?: string[][]; image?: number };

type Localized = {
  category: string;
  summary: string;
  role: string;
  period: string;
  status: string;
  tags: string[];
  imageAlts: string[];
  sections: Section[];
};

export type Project = {
  slug: string;
  name: string;
  url: string;
  host: string;
  accent: 'brand' | 'ink' | 'rose';
  images: { src: string; width: number; height: number }[];
  i18n: Record<Lang, Localized>;
};

const medlabStack = ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Cloudflare Workers', 'D1', 'R2', 'Workers AI', 'Llama 3.3 70B', 'Deepgram Aura‑2', 'Better Auth', 'Zod', 'Vitest', 'GitHub Actions'];
const clinicStack = ['HTML', 'CSS', 'JavaScript', 'Vercel'];

export const projects: Project[] = [
  {
    slug: 'medlab',
    name: 'MEDLAB',
    url: 'https://medlab.com.ar',
    host: 'medlab.com.ar',
    accent: 'brand',
    images: [
      { src: '/work/medlab-oral.webp', width: 1600, height: 626 },
      { src: '/work/medlab-guide.webp', width: 1600, height: 674 },
      { src: '/work/medlab-practice.webp', width: 1600, height: 674 },
      { src: '/work/medlab-agenda.webp', width: 1600, height: 674 },
    ],
    i18n: {
      pt: {
        category: 'Medical Education Platform',
        summary: 'Plataforma de treino para exames orais de Medicina: guias por aula, perguntas com respostas modelo, flashcards com repetição espaçada e simulação oral com IA.',
        role: 'Criadora e fundadora',
        period: '2026 – hoje',
        status: 'No ar, com planos pagos e teste grátis',
        tags: ['Produto', 'IA aplicada', 'Educação médica'],
        imageAlts: [
          'Simulação oral com a Luna: a pergunta, o áudio da resposta, o que foi coberto, o que faltou e uma repergunta',
          'Guia de uma aula de Aparelho Locomotor, com imagem anatômica da mão e texto explicativo',
          'Perguntas por aula com resposta modelo e botões de autoavaliação',
          'Agenda semanal de estudo com sessões e revisões organizadas pelo MEDLAB',
        ],
        sections: [
          { body: ['O MEDLAB é um laboratório de treino para exames orais de Medicina, hoje com currículos da UNLP e da Fundación Barceló. O estudante lê a guia de cada aula, treina com perguntas e respostas modelo, revisa com flashcards, vê os erros mais comuns e pratica o oral com a Luna, a IA da plataforma, falando ou escrevendo.'], image: 0 },
          { body: ['Na Argentina, boa parte das provas de Medicina é oral. O estudante precisa explicar um tema em voz alta, com ordem e precisão, diante de um docente que repergunta. Os materiais disponíveis ajudam a ler e memorizar, mas quase nada treina a resposta falada nem mostra com clareza o que ficou faltando.'] },
          { body: ['Construir um avaliador de oral confiável sobre conteúdo médico sem deixar a IA inventar critérios. Manter centenas de aulas organizadas por faculdade, matéria e área sem retrabalho. E fazer isso funcionar como um produto pago, seguro e barato de operar.'] },
          { body: ['Sou criadora e fundadora. Defino o produto, desenho a interface, desenvolvo a aplicação, organizo o conteúdo e cuido da publicação e da operação.'] },
          { list: [
            'Começar pelo momento mais difícil, o oral, e organizar o resto do estudo em torno dele.',
            'Uma sequência clara por aula: estudar, praticar, corrigir e responder em voz alta.',
            'Teste grátis com a primeira aula de cada matéria e 3 perguntas à Luna. O resto abre com o plano.',
            'Ferramentas de rotina: agenda de estudo em PDF, Pomodoro com palavras cruzadas na pausa, painel de progresso, ranking e o podcast MEDLABCAST.',
          ], image: 1 },
          { body: [
            'O conteúdo médico vive num repositório próprio, ligado ao app como submodule Git: o app nunca altera o texto médico. Um manifesto central de currículo (disciplina → área → aula → 9 módulos) gera rotas, coleções, progresso e o oral.',
            'O site é gerado de forma estática e servido pela Cloudflare. Um Worker cuida só do que precisa de servidor: conta, sessão, acesso aos planos e chamadas de IA, com banco D1 e os áudios do podcast no R2.',
          ], diagram: [
            ['Repositório de conteúdo', 'Manifesto de currículo', 'Build estático + content:check'],
            ['Navegador', 'Cloudflare (arquivos estáticos)', 'Worker: conta, acesso, IA'],
            ['Worker', 'D1 · R2', 'Workers AI (avaliação e voz)'],
          ] },
          { list: [
            'A IA avalia, o código decide os limites. O examinador (Llama 3.3 70B no Workers AI) devolve um JSON validado por schema; itens que não existem no conteúdo são descartados e, se a resposta não serve, uma regra determinística decide entre verificar, repreguntar ou encerrar.',
            'Os critérios do oral vêm do próprio conteúdo: cada área tem um Blueprint com referências estáveis (por exemplo, anatomia/locomotor/aula-03#Q-35), conferidas a cada build.',
            'Uma aula nova não exige código: basta publicar o conteúdo e rodar o content:check.',
            'A voz da Luna usa síntese de voz (Deepgram Aura‑2), com limites diários de uso de IA por conta.',
          ], image: 2 },
          { chips: medlabStack },
          { list: [
            'Mais de 400 commits desde o fim de setembro de 2026.',
            'Cada push passa por testes, content:check, lint, checagem de tipos e build no GitHub Actions antes de publicar.',
            'Arquitetura, acesso, progresso e uma auditoria de segurança (outubro de 2026) documentados no próprio repositório.',
            'Redesenho completo da interface, planejado e executado em etapas.',
          ], image: 3 },
          { body: [
            'Estado atual: no ar em medlab.com.ar, com planos pagos e teste grátis, em espanhol e português. Currículo UNLP com 113 aulas, 1.774 flashcards e 4 matérias; Fundación Barceló com 75 aulas, 1.700 flashcards e 3 matérias. O Final Integrador ainda está em preparação.',
            'Aprendizado: separar conteúdo e código foi a decisão que mais poupou trabalho. Em temas sensíveis, a IA precisa de limites que possam ser verificados.',
          ] },
        ],
      },
      es: {
        category: 'Medical Education Platform',
        summary: 'Plataforma de entrenamiento para exámenes orales de Medicina: guías por clase, preguntas con respuestas modelo, flashcards con repaso espaciado y simulación oral con IA.',
        role: 'Creadora y fundadora',
        period: '2026 – hoy',
        status: 'En línea, con planes pagos y prueba gratis',
        tags: ['Producto', 'IA aplicada', 'Educación médica'],
        imageAlts: [
          'Simulación oral con Luna: la consigna, el audio de la respuesta, lo cubierto, lo que faltó y una repregunta',
          'Guía de una clase de Aparato Locomotor, con imagen anatómica de la mano y texto explicativo',
          'Preguntas por clase con respuesta modelo y botones de autoevaluación',
          'Agenda semanal de estudio con sesiones y repasos organizados por MEDLAB',
        ],
        sections: [
          { body: ['MEDLAB es un laboratorio de entrenamiento para exámenes orales de Medicina, hoy con currículos de la UNLP y de la Fundación Barceló. El estudiante lee la guía de cada clase, practica con preguntas y respuestas modelo, repasa con flashcards, ve los errores más comunes y entrena el oral con Luna, la IA de la plataforma, hablando o escribiendo.'], image: 0 },
          { body: ['En Argentina, gran parte de los exámenes de Medicina son orales. El estudiante tiene que explicar un tema en voz alta, con orden y precisión, frente a un docente que repregunta. Los materiales disponibles ayudan a leer y memorizar, pero casi nada entrena la respuesta hablada ni muestra con claridad lo que faltó.'] },
          { body: ['Construir un evaluador de orales confiable sobre contenido médico sin que la IA invente criterios. Mantener cientos de clases organizadas por facultad, materia y área sin retrabajo. Y que todo funcione como un producto pago, seguro y barato de operar.'] },
          { body: ['Soy creadora y fundadora. Defino el producto, diseño la interfaz, desarrollo la aplicación, organizo el contenido y me ocupo de la publicación y la operación.'] },
          { list: [
            'Empezar por el momento más difícil, el oral, y organizar el resto del estudio a su alrededor.',
            'Una secuencia clara por clase: estudiar, practicar, corregir y responder en voz alta.',
            'Prueba gratis con la primera clase de cada materia y 3 preguntas a Luna. El resto se abre con el plan.',
            'Herramientas de rutina: agenda de estudio en PDF, Pomodoro con crucigrama en la pausa, panel de progreso, ranking y el podcast MEDLABCAST.',
          ], image: 1 },
          { body: [
            'El contenido médico vive en un repositorio propio, conectado a la app como submodule de Git: la app nunca modifica el texto médico. Un manifiesto central de currículo (disciplina → área → clase → 9 módulos) genera rutas, colecciones, progreso y el oral.',
            'El sitio se genera de forma estática y lo sirve Cloudflare. Un Worker se ocupa solo de lo que necesita servidor: cuenta, sesión, acceso a los planes y llamadas a la IA, con base D1 y los audios del podcast en R2.',
          ], diagram: [
            ['Repositorio de contenido', 'Manifiesto de currículo', 'Build estático + content:check'],
            ['Navegador', 'Cloudflare (archivos estáticos)', 'Worker: cuenta, acceso, IA'],
            ['Worker', 'D1 · R2', 'Workers AI (evaluación y voz)'],
          ] },
          { list: [
            'La IA evalúa, el código pone los límites. El examinador (Llama 3.3 70B en Workers AI) devuelve un JSON validado por schema; los ítems que no existen en el contenido se descartan y, si la respuesta no sirve, una regla determinística decide entre verificar, repreguntar o cerrar.',
            'Los criterios del oral salen del propio contenido: cada área tiene un Blueprint con referencias estables (por ejemplo, anatomia/locomotor/aula-03#Q-35), verificadas en cada build.',
            'Una clase nueva no requiere código: alcanza con publicar el contenido y correr content:check.',
            'La voz de Luna usa síntesis de voz (Deepgram Aura‑2), con límites diarios de uso de IA por cuenta.',
          ], image: 2 },
          { chips: medlabStack },
          { list: [
            'Más de 400 commits desde fines de septiembre de 2026.',
            'Cada push pasa por tests, content:check, lint, chequeo de tipos y build en GitHub Actions antes de publicarse.',
            'Arquitectura, acceso, progreso y una auditoría de seguridad (octubre de 2026) documentados en el propio repositorio.',
            'Rediseño completo de la interfaz, planificado y ejecutado por etapas.',
          ], image: 3 },
          { body: [
            'Estado actual: en línea en medlab.com.ar, con planes pagos y prueba gratis, en español y portugués. Currículo UNLP con 113 clases, 1.774 flashcards y 4 materias; Fundación Barceló con 75 clases, 1.700 flashcards y 3 materias. El Final Integrador sigue en preparación.',
            'Aprendizaje: separar contenido y código fue la decisión que más trabajo ahorró. En temas sensibles, la IA necesita límites que se puedan verificar.',
          ] },
        ],
      },
      en: {
        category: 'Medical Education Platform',
        summary: 'A training platform for oral medical exams: lesson guides, questions with model answers, spaced-repetition flashcards and an AI oral-exam simulation.',
        role: 'Creator & founder',
        period: '2026 – present',
        status: 'Live, with paid plans and a free trial',
        tags: ['Product', 'Applied AI', 'Medical education'],
        imageAlts: [
          'Oral simulation with Luna: the prompt, the recorded answer, what was covered, what was missing and a follow-up question',
          'Lesson guide from the locomotor system, with an anatomical image of the hand and explanatory text',
          'Per-lesson questions with a model answer and self-assessment buttons',
          'Weekly study planner with sessions and reviews arranged by MEDLAB',
        ],
        sections: [
          { body: ['MEDLAB is a training lab for oral medical exams, currently with curricula for UNLP and Fundación Barceló. Students read each lesson’s guide, practise with questions and model answers, review with flashcards, see the most common mistakes and rehearse the oral exam with Luna, the platform’s AI, by speaking or typing.'], image: 0 },
          { body: ['In Argentina, many medical exams are oral. Students must explain a topic out loud, clearly and accurately, to an examiner who asks follow-up questions. Existing materials help with reading and memorising, but almost nothing trains the spoken answer or shows clearly what was missing.'] },
          { body: ['Build a reliable oral examiner on medical content without letting AI invent its own criteria. Keep hundreds of lessons organised by school, subject and area without rework. And make it all work as a paid product that is secure and cheap to run.'] },
          { body: ['I am the creator and founder. I define the product, design the interface, build the application, structure the content and run releases and operations.'] },
          { list: [
            'Start with the hardest moment, the oral exam, and organise the rest of studying around it.',
            'A clear sequence per lesson: study, practise, correct, then answer out loud.',
            'A free trial with the first lesson of each subject and 3 questions to Luna. Everything else opens with a plan.',
            'Everyday tools: a study planner exported to PDF, a Pomodoro timer with a crossword during breaks, a progress dashboard, rankings and the MEDLABCAST podcast.',
          ], image: 1 },
          { body: [
            'Medical content lives in its own repository, linked to the app as a Git submodule: the app never changes medical text. A central curriculum manifest (discipline → area → lesson → 9 modules) generates routes, collections, progress tracking and the oral exam.',
            'The site is statically generated and served by Cloudflare. A Worker handles only what needs a server: accounts, sessions, plan access and AI calls, with a D1 database and podcast audio in R2.',
          ], diagram: [
            ['Content repository', 'Curriculum manifest', 'Static build + content:check'],
            ['Browser', 'Cloudflare (static assets)', 'Worker: account, access, AI'],
            ['Worker', 'D1 · R2', 'Workers AI (grading and voice)'],
          ] },
          { list: [
            'AI grades, code sets the limits. The examiner (Llama 3.3 70B on Workers AI) returns JSON validated against a schema; items that do not exist in the content are discarded, and if the reply is unusable a deterministic rule decides whether to verify, follow up or close.',
            'Oral-exam criteria come from the content itself: each area has a Blueprint with stable references (for example anatomia/locomotor/aula-03#Q-35), checked on every build.',
            'A new lesson needs no code: publish the content and run content:check.',
            'Luna’s voice uses speech synthesis (Deepgram Aura‑2), with daily AI usage limits per account.',
          ], image: 2 },
          { chips: medlabStack },
          { list: [
            'More than 400 commits since late September 2026.',
            'Every push runs tests, content:check, lint, type checks and a build in GitHub Actions before release.',
            'Architecture, access, progress and a security audit (October 2026) documented in the repository.',
            'A full interface redesign, planned and delivered in stages.',
          ], image: 3 },
          { body: [
            'Current state: live at medlab.com.ar, with paid plans and a free trial, in Spanish and Portuguese. UNLP curriculum with 113 lessons, 1,774 flashcards and 4 subjects; Fundación Barceló with 75 lessons, 1,700 flashcards and 3 subjects. The Final Integrador exam is still in preparation.',
            'Takeaway: separating content from code saved the most work. In sensitive domains, AI needs limits that can be checked.',
          ] },
        ],
      },
    },
  },

  {
    slug: 'clinica-catarina-catunda',
    name: 'Clínica Catarina Catunda',
    url: 'https://catarinacatundafisioterapia.vercel.app',
    host: 'catarinacatundafisioterapia.vercel.app',
    accent: 'rose',
    images: [{ src: '/work/clinic-hero.webp', width: 1440, height: 900 }],
    i18n: {
      pt: {
        category: 'Web Presence & Development',
        summary: 'Site institucional de uma fisioterapeuta em Piedade, Jaboatão dos Guararapes (PE), centrado em reabilitação, autonomia e contato direto pelo WhatsApp.',
        role: 'Concepção, design e desenvolvimento',
        period: '2026',
        status: 'No ar',
        tags: ['Site institucional', 'Saúde', 'Multilíngue'],
        imageAlts: ['Página inicial do site: título “Mais movimento. Mais autonomia.” e a fisioterapeuta no consultório'],
        sections: [
          { body: ['Site de apresentação da fisioterapeuta Ana Catarina Catunda: quem ela é, o que atende, o espaço da clínica e um caminho direto para conversar e marcar pelo WhatsApp.'], image: 0 },
          { body: ['A profissional precisava de uma presença digital própria e confiável, que explicasse o atendimento a adultos e idosos e levasse a pessoa a uma conversa, sem depender só das redes sociais.'] },
          { body: ['Falar de saúde com clareza e responsabilidade: descrever os atendimentos sem prometer resultados, deixar o registro profissional visível e tornar o site fácil para pessoas idosas e suas famílias.'] },
          { body: ['Concepção, design e desenvolvimento do site.'] },
          { list: [
            'Uma mensagem central, mais movimento e mais autonomia, ligada à rotina de quem busca reabilitação.',
            'Um único próximo passo em toda a página: conversar pelo WhatsApp.',
            'Credencial à vista (CREFITO) e o aviso de que os recursos dependem de avaliação individual.',
          ] },
          { body: ['Site estático em HTML, CSS e JavaScript, sem framework, publicado na Vercel. Os textos dos três idiomas ficam em atributos data-i18n e são trocados no navegador.'], diagram: [['HTML + CSS + JS', 'Textos PT · ES · EN (data-i18n)', 'Vercel', 'WhatsApp']] },
          { list: [
            'Identidade própria da profissional, com Playfair Display, DM Sans e tons rosados, separada da minha.',
            'Link “pular para o conteúdo”, menu com aria-expanded e rótulos acessíveis.',
            'Página leve e sem dependências, pensada primeiro para o celular.',
            'Versões em português, espanhol e inglês.',
          ] },
          { chips: clinicStack },
          { body: ['A estrutura da página partiu do que a pessoa precisa saber antes de marcar: quem atende, o que atende, onde e como falar. Cada seção responde a uma dessas perguntas.'] },
          { body: [
            'Estado atual: no ar em catarinacatundafisioterapia.vercel.app. Não há métricas de acesso publicadas.',
            'Aprendizado: em saúde, um texto claro e responsável faz mais pela confiança do que efeitos visuais.',
          ] },
        ],
      },
      es: {
        category: 'Web Presence & Development',
        summary: 'Sitio institucional de una fisioterapeuta en Piedade, Jaboatão dos Guararapes (Brasil), centrado en rehabilitación, autonomía y contacto directo por WhatsApp.',
        role: 'Concepción, diseño y desarrollo',
        period: '2026',
        status: 'En línea',
        tags: ['Sitio institucional', 'Salud', 'Multilingüe'],
        imageAlts: ['Inicio del sitio: título “Mais movimento. Mais autonomia.” y la fisioterapeuta en el consultorio'],
        sections: [
          { body: ['Sitio de presentación de la fisioterapeuta Ana Catarina Catunda: quién es, qué atiende, el espacio de la clínica y un camino directo para conversar y reservar por WhatsApp.'], image: 0 },
          { body: ['La profesional necesitaba una presencia digital propia y confiable, que explicara la atención a adultos y personas mayores y llevara a una conversación, sin depender solo de las redes sociales.'] },
          { body: ['Hablar de salud con claridad y responsabilidad: describir las prestaciones sin prometer resultados, dejar visible la matrícula profesional y que el sitio fuera fácil para personas mayores y sus familias.'] },
          { body: ['Concepción, diseño y desarrollo del sitio.'] },
          { list: [
            'Un mensaje central, más movimiento y más autonomía, ligado a la rutina de quien busca rehabilitación.',
            'Un único próximo paso en toda la página: conversar por WhatsApp.',
            'Matrícula a la vista (CREFITO) y la aclaración de que los recursos dependen de una evaluación individual.',
          ] },
          { body: ['Sitio estático en HTML, CSS y JavaScript, sin framework, publicado en Vercel. Los textos de los tres idiomas están en atributos data-i18n y se cambian en el navegador.'], diagram: [['HTML + CSS + JS', 'Textos PT · ES · EN (data-i18n)', 'Vercel', 'WhatsApp']] },
          { list: [
            'Identidad propia de la profesional, con Playfair Display, DM Sans y tonos rosados, distinta de la mía.',
            'Link “saltar al contenido”, menú con aria-expanded y etiquetas accesibles.',
            'Página liviana y sin dependencias, pensada primero para el celular.',
            'Versiones en portugués, español e inglés.',
          ] },
          { chips: clinicStack },
          { body: ['La estructura partió de lo que una persona necesita saber antes de reservar: quién atiende, qué atiende, dónde y cómo contactarla. Cada sección responde a una de esas preguntas.'] },
          { body: [
            'Estado actual: en línea en catarinacatundafisioterapia.vercel.app. No hay métricas de visitas publicadas.',
            'Aprendizaje: en salud, un texto claro y responsable genera más confianza que los efectos visuales.',
          ] },
        ],
      },
      en: {
        category: 'Web Presence & Development',
        summary: 'Website for a physiotherapist in Piedade, Jaboatão dos Guararapes (Brazil), focused on rehabilitation, independence and direct contact on WhatsApp.',
        role: 'Concept, design and development',
        period: '2026',
        status: 'Live',
        tags: ['Website', 'Health', 'Multilingual'],
        imageAlts: ['Website homepage: the headline “Mais movimento. Mais autonomia.” and the physiotherapist in her treatment room'],
        sections: [
          { body: ['A website for physiotherapist Ana Catarina Catunda: who she is, what she treats, the clinic space and a direct path to talk and book on WhatsApp.'], image: 0 },
          { body: ['She needed a trustworthy web presence of her own that explained her work with adults and older people and led visitors to a conversation, without relying only on social media.'] },
          { body: ['Talk about health clearly and responsibly: describe the services without promising results, keep her professional registration visible and make the site easy for older people and their families.'] },
          { body: ['Concept, design and development of the website.'] },
          { list: [
            'One central message, more movement and more independence, tied to the daily life of people seeking rehabilitation.',
            'A single next step across the page: start a conversation on WhatsApp.',
            'Registration in plain sight (CREFITO) and a note that treatments depend on an individual assessment.',
          ] },
          { body: ['A static site in HTML, CSS and JavaScript, with no framework, deployed on Vercel. Text for all three languages lives in data-i18n attributes and is swapped in the browser.'], diagram: [['HTML + CSS + JS', 'PT · ES · EN text (data-i18n)', 'Vercel', 'WhatsApp']] },
          { list: [
            'Her own identity, with Playfair Display, DM Sans and rose tones, distinct from mine.',
            'A “skip to content” link, a menu with aria-expanded and accessible labels.',
            'A light page with no dependencies, designed mobile first.',
            'Portuguese, Spanish and English versions.',
          ] },
          { chips: clinicStack },
          { body: ['The page structure started from what someone needs to know before booking: who treats, what is treated, where, and how to get in touch. Each section answers one of those questions.'] },
          { body: [
            'Current state: live at catarinacatundafisioterapia.vercel.app. No traffic metrics are published.',
            'Takeaway: in health, clear and responsible writing builds more trust than visual effects.',
          ] },
        ],
      },
    },
  },
];

export const getProject = (slug: string) => projects.find(p => p.slug === slug);
