import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
const portrait = await readFile(new URL('../public/portrait.webp', import.meta.url));

test('portfolio includes all three language variants', () => {
  for (const language of ['pt:', 'es:', 'en:']) assert.ok(page.includes(language));
});

test('email and WhatsApp links use the supplied contact details', () => {
  assert.ok(page.includes('luanamenezes10@icloud.com'));
  assert.equal((page.match(/https:\/\/wa\.me\/5491173692773/g) ?? []).length, 1);
});

test('page sections reveal as they enter the viewport', () => {
  assert.ok(page.includes('new IntersectionObserver'));
  assert.ok(page.includes('data-reveal'));
  assert.ok(page.includes("classList.add('is-visible')"));
});

test('the transparent portrait cutout is used in the site', () => {
  assert.ok(page.includes('/portrait.webp`}'));
  assert.equal(portrait.subarray(0, 4).toString('ascii'), 'RIFF');
  assert.equal(portrait.subarray(8, 12).toString('ascii'), 'WEBP');
  assert.ok(portrait.includes(Buffer.from('ALPH')), 'WebP keeps the transparent background');
});
