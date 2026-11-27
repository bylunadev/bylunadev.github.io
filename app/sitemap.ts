import type { MetadataRoute } from 'next';
import { projects } from './content/projects';

export const dynamic = 'force-static';

const base = (process.env.SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/guia/`, priority: 0.9 },
    ...projects.map(p => ({ url: `${base}/projetos/${p.slug}/`, priority: 0.8 })),
  ];
}
