import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../../content/projects';
import CaseStudy from './case-study';

export const dynamicParams = false;
export const generateStaticParams = () => projects.map(p => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  const c = p.i18n.pt;
  const title = `${p.name} · ${c.category} | Luana Menezes`;
  return {
    title,
    description: c.summary,
    alternates: { canonical: `projetos/${p.slug}/` },
    openGraph: { title, description: c.summary, type: 'article', images: [{ url: p.images[0].src.slice(1), width: p.images[0].width, height: p.images[0].height, alt: c.imageAlts[0] }] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  return <CaseStudy slug={slug} />;
}
