import type { Metadata } from 'next';
import './globals.css';

// Link previews resolve against the published address (set by the Pages workflow).
const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000';

const description = 'Estudante de Medicina em Buenos Aires e desenvolvedora. Criadora e fundadora do MEDLAB e da REPLAB.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`),
  title: 'Luana Menezes — Medicina & Engenharia de Software',
  description,
  openGraph: {
    title: 'Luana Menezes — Medicina & Engenharia de Software',
    description,
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['es_AR', 'en_US'],
    images: [{ url: 'og.jpg', width: 1200, height: 630, alt: 'Luana Menezes' }],
  },
  twitter: { card: 'summary_large_image', title: 'Luana Menezes', description, images: ['og.jpg'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
