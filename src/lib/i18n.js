import { writable, get } from "svelte/store";
import { DEFAULT_LOCALE } from "../router";

// Load UI dictionaries at build time (no fetch, GitHub Pages-safe)
// Files live at: src/i18n/<locale>.json
const dictionaries = import.meta.glob("../i18n/*.json", { eager: true });

function loadDict(locale) {
  const key = `../i18n/${locale}.json`;
  const mod = dictionaries[key];
  return (mod && mod.default) || null;
}

export const uiLocale = writable(DEFAULT_LOCALE);
export const uiDict = writable(loadDict(DEFAULT_LOCALE) || {});

export function setUiLocale(locale) {
  const dict = loadDict(locale) || loadDict(DEFAULT_LOCALE) || {};
  uiLocale.set(locale);
  uiDict.set(dict);
}

function getByPath(obj, path) {
  if (!obj) return undefined;
  const parts = String(path).split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) cur = cur[p];
    else return undefined;
  }
  return cur;
}

// Simple translation helper:
// t("nav.films") -> string
// t("home.hero", { name: "..." }) -> replaces {name}
export function t(key, vars = undefined) {
  const dict = get(uiDict);
  const raw = getByPath(dict, key);
  if (typeof raw !== "string") return String(raw ?? key);

  if (!vars) return raw;
  return raw.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}
