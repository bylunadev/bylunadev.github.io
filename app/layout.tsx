import type { Metadata, Viewport } from 'next';
import { links } from './content/site';
import { LanguageProvider } from './i18n';
import './globals.css';

// Link previews and canonical URLs resolve against the published address (set by scripts/deploy.sh).
const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000';
const base = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`;

const title = 'Luana Menezes — Product Builder · Software · AI';
const description = 'Desenvolvo produtos digitais e sistemas inteligentes, conectando tecnologia, conhecimento e necessidades reais. Criadora do MEDLAB e da REPLAB. Buenos Aires, Argentina.';

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title,
  description,
  alternates: { canonical: './' },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['es_AR', 'en_US'],
    images: [{ url: 'og.jpg', width: 1200, height: 630, alt: 'Luana Menezes' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['og.jpg'] },
};

export const viewport: Viewport = { themeColor: '#fbfaf8' };

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luana Menezes',
  url: base,
  jobTitle: 'Product Builder · Software · AI',
  address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires', addressCountry: 'AR' },
  email: `mailto:${links.email}`,
  sameAs: [links.github, links.linkedin, 'https://medlab.com.ar', 'https://replab.com.ar'].filter(Boolean),
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Fundación H. A. Barceló' },
  knowsAbout: ['Product development', 'Software engineering', 'Artificial intelligence', 'Automation', 'Medicine'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR">
    <body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <LanguageProvider>{children}</LanguageProvider>
    </body>
  </html>;
}
