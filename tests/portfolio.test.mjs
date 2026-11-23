import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import test from 'node:test';

const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const page = await read('app/page.tsx');
const site = await read('app/content/site.ts');
const projects = await read('app/content/projects.ts');
const i18n = await read('app/i18n.tsx');
const portrait = await readFile(new URL('../public/portrait.webp', import.meta.url));

test('site copy exists in all three languages', () => {
  for (const file of [site, projects]) for (const language of ['pt:', 'es:', 'en:']) assert.ok(file.includes(language));
});

test('contact details are the supplied ones', () => {
  assert.ok(site.includes("email: 'luanamenezes10@icloud.com'"));
  assert.ok(site.includes("whatsapp: 'https://wa.me/5491173692773'"));
  assert.ok(site.includes("github: 'https://github.com/bylunadev'"));
});

test('the home page has the eight planned sections', () => {
  for (const id of ['home', 'about', 'method', 'skills', 'work', 'experience', 'contact']) assert.ok(page.includes(`id="${id}"`), id);
  assert.ok(page.includes('<Footer'));
});

test('every project has a case study with ten sections and existing images', async () => {
  const slugs = [...projects.matchAll(/slug: '([^']+)'/g)].map(m => m[1]);
  assert.deepEqual(slugs, ['medlab', 'replab', 'clinica-catarina-catunda']);
  const sources = [...projects.matchAll(/src: '([^']+)'/g)].map(m => m[1]);
  for (const src of sources) await stat(new URL(`../public${src}`, import.meta.url));
  const { projects: list } = await import('../app/content/projects.ts').catch(() => ({ projects: null }));
  if (list) for (const p of list) for (const lang of ['pt', 'es', 'en']) assert.equal(p.i18n[lang].sections.length, 10, `${p.slug}/${lang}`);
});

test('sections reveal as they enter the viewport', () => {
  assert.ok(i18n.includes('new IntersectionObserver'));
  assert.ok(i18n.includes("classList.add('is-visible')"));
  assert.ok(page.includes('data-reveal'));
});

test('the transparent portrait cutout is used in the site', () => {
  assert.ok(page.includes("asset('/portrait.webp')"));
  assert.equal(portrait.subarray(0, 4).toString('ascii'), 'RIFF');
  assert.equal(portrait.subarray(8, 12).toString('ascii'), 'WEBP');
  assert.ok(portrait.includes(Buffer.from('ALPH')), 'WebP keeps the transparent background');
});
