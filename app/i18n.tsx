'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export const languages = ['pt', 'es', 'en'] as const;
export type Lang = (typeof languages)[number];
const htmlLang: Record<Lang, string> = { pt: 'pt-BR', es: 'es-AR', en: 'en' };

type Ctx = { lang: Lang; setLang: (lang: Lang) => void };
const LangContext = createContext<Ctx>({ lang: 'pt', setLang: () => {} });

function readStored() {
  try { return window.localStorage.getItem('lang'); } catch { return null; }
}
function store(value: string) {
  try { window.localStorage.setItem('lang', value); } catch { /* storage unavailable */ }
}
const isLang = (value: string | null): value is Lang => !!value && (languages as readonly string[]).includes(value);

/** Language chosen by the visitor (saved), else the browser language, else Portuguese. */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt');

  useEffect(() => {
    // Runs once after hydration: browser-only preferences can't be read during the static render.
    const saved = readStored();
    const browser = navigator.language.slice(0, 2);
    const next: Lang = isLang(saved) ? saved : browser === 'es' || browser === 'en' ? browser : 'pt';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(next);
  }, []);

  useEffect(() => { document.documentElement.lang = htmlLang[lang]; }, [lang]);

  const setLang = useCallback((next: Lang) => { setLangState(next); store(next); }, []);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** Prefix for files in /public, so they also work under a GitHub Pages base path. */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

/** Adds `is-visible` to `[data-reveal]` elements as they scroll into view. */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'));
    if (!('IntersectionObserver' in window)) { items.forEach(item => item.classList.add('is-visible')); return; }
    document.documentElement.classList.add('js-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
