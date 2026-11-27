import type { Metadata } from 'next';
import Guide from './guide';

const title = 'Seu 1º site no ar · Guia grátis | Luana Menezes';
const description = 'Do zero ao link funcionando, sem pagar nada. Com o que pode ir num site público e o mínimo de segurança. Em português e espanhol.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'guia/' },
  openGraph: { title, description, type: 'article' },
};

export default function Page() {
  return <Guide />;
}
