import { DEFAULT_LOCALE } from "../router";

// Locale content loader for collections.
// Put your JSON here:
//   src/data/en/films.json
//   src/data/ja/films.json
//   ...
// This uses Vite's import.meta.glob so it works on GitHub Pages (no fetch).

const modules = import.meta.glob("../data/*/*.json", { eager: true });

function pick(locale, kind) {
  const key = `../data/${locale}/${kind}.json`;
  const mod = modules[key];
  return (mod && mod.default) || null;
}

export function loadCollection(kind, locale) {
  return (
    pick(locale, kind) ||
    pick(DEFAULT_LOCALE, kind) ||
    []
  );
}
