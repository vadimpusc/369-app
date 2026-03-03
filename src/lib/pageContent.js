// src/lib/pageContent.js
const modules = import.meta.glob("../pages-content/*/*.json", { eager: true });

export function loadPageContent(slug, locale) {
  const key = `../pages-content/${locale}/${slug}.json`;
  const mod = modules[key];
  if (!mod) return null;
  return mod.default ?? mod;
}