# Auditoria e direção do portfólio (23/11/2026)

## Fase 1 · Auditoria

**Stack atual:** Next.js 16 (export estático), React 19, TypeScript, CSS próprio
(sem framework), publicado no GitHub Pages pela branch `gh-pages`
(`npm run deploy`). Página única em PT/ES/EN, troca de idioma no navegador.

### Conteúdo
- O posicionamento é "Medicina × Engenharia de Software". Isso apresenta uma
  estudante com dois interesses, não uma pessoa que concebe e entrega produtos.
- Os projetos aparecem como cards de link. Não há problema, papel, decisões,
  arquitetura nem estado real. Quem visita não vê *como* o trabalho foi feito.
- Os números do MEDLAB estão desatualizados. O site mostra 75 aulas e 1.700
  flashcards (Barceló). Hoje existem também 113 aulas e 1.774 flashcards (UNLP).
- A REPLAB aparece como "assistentes de IA e automações", sem mostrar o que
  já foi construído: assistente de WhatsApp com agenda, app de conteúdo e
  diagnóstico.
- A clínica aparece só como foto, sem o que foi entregue.
- Não há seção de método nem de competências, e não há links para GitHub ou
  LinkedIn.
- O texto em ES e EN diverge do PT (são versões diferentes, não traduções).

### Estrutura e implementação
- Tudo fica num único `page.tsx` de 300 linhas com textos misturados ao layout.
  Fica difícil manter e impossível criar páginas de projeto.
- Não há páginas por projeto, então não dá para compartilhar um estudo de caso.
- A foto da clínica vem de um servidor de terceiros (`floot.app`). Se ele sair
  do ar, a imagem quebra.
- SEO: há título, descrição e imagem de compartilhamento, mas faltam `canonical`,
  dados estruturados (Person) e `sitemap`.
- Acessibilidade: o foco é visível e os botões de idioma têm `aria-pressed`.
  Faltam um link "pular para o conteúdo" e `<main>` separado do rodapé. O
  rodapé hoje é o próprio contato, dentro do `<main>`.
- No celular, o menu de 5 itens rola de lado. Com mais seções, isso não
  escala.

### O que funciona e deve ficar
- A identidade clara e editorial: papel claro, preto, laranja `#f2570a`,
  Manrope, DM Sans e DM Mono, grade de 40px com quadrados que acendem.
- O monograma LM, o retrato recortado e os cartões de código e terminal.
- Os três idiomas, as animações discretas ao rolar e o respeito a
  `prefers-reduced-motion`.

## O que foi verificado nos repositórios (base dos textos)

| Projeto | Fontes | Fatos usados |
| --- | --- | --- |
| MEDLAB | `labmedar/medlab-app`, `docs/architecture.md`, medlab.com.ar | Next.js 16 estático, Cloudflare Workers + D1 + R2, Better Auth, Zod, Vitest, CI no GitHub Actions; conteúdo em repositório separado (submodule) e currículo central (manifesto); oral avaliado por Llama 3.3 70B (Workers AI) com schema e decisão determinística de reserva; voz da Luna com Deepgram Aura‑2; 113 aulas e 1.774 flashcards (UNLP) e 75 aulas e 1.700 flashcards (Barceló); planos pagos e teste grátis; 425 commits desde 30/09/2026 |
| REPLAB | `replab-app`, `replab-bot`, replab.com.ar | app de conteúdo (entrevista de 21 perguntas → guia da conta; conteúdo do dia pela API do Claude com saída validada; métricas pela API oficial do Instagram); assistente de WhatsApp multi‑cliente (Worker + D1, agenda por tool use com validação no servidor, sem agendamento duplicado, segredos cifrados, passagem para humano); diagnóstico gratuito online. Limitações declaradas no próprio README (busca de nicho ainda com dados de exemplo; tool use testado só com modelo simulado) |
| Clínica | site publicado | HTML, CSS e JavaScript sem framework, em PT/ES/EN, menu acessível, link "pular para o conteúdo", contato por WhatsApp, publicado na Vercel |

Não usei métricas de usuários, faturamento ou clientes, porque não há dados
verificáveis. Também não incluí LinkedIn, porque o endereço não está em nenhum
lugar verificável. Ele entra em `app/content/site.ts` (`links.linkedin`) quando
existir.

## Fase 2 · Direção estratégica

**Posicionamento:** PRODUCT BUILDER · SOFTWARE · AI.
"Desenvolvo produtos digitais e sistemas inteligentes, conectando tecnologia,
conhecimento e necessidades reais."

**Narrativa:** Medicina é o lugar onde ela aprendeu a investigar problemas
complexos antes de agir. O software é como ela transforma isso em produto. A
prova são três sistemas no ar, cada um com decisões explicadas.

**Arquitetura de informação**

```
/                          início
  01 Hero                  nome, posicionamento, Buenos Aires, GitHub, e-mail, WhatsApp
  02 Sobre                 trajetória interdisciplinar
  03 Como penso            PROBLEM → RESEARCH → SYSTEM DESIGN → DEVELOPMENT → VALIDATION → ITERATION
  04 Como trabalho         6 áreas de competência, só tecnologias usadas nos projetos
  05 Projetos              MEDLAB, REPLAB, Clínica Catarina Catunda (com capturas reais)
  06 Trajetória            formação em andamento × experiência prática
  07 Contato
/projetos/medlab/          estudo de caso (10 seções)
/projetos/replab/          estudo de caso
/projetos/clinica-catarina-catunda/  estudo de caso
```

**Direção visual:** mantém a base clara e editorial e ganha mais hierarquia.
Títulos maiores, numeração de seções, grade editorial assimétrica (rótulo à
esquerda, conteúdo à direita), capturas reais em moldura simples e um fluxo de
método em linha.
