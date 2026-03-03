import { writable, get } from "svelte/store";

// GitHub Pages base: "/" in dev, "/369-app/" in production
const rawBase = import.meta.env.BASE_URL || "/";
const base = rawBase.replace(/\/$/, ""); // "/369-app" or ""

function normalizePath(pathname) {
  // remove origin and query/hash if someone passes a full URL
  const url = new URL(pathname, window.location.origin);
  let path = url.pathname;

  // strip the base folder, so "/369-app/films" becomes "/films"
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || "/";
  }

  // ensure leading slash
  if (!path.startsWith("/")) {
    path = "/" + path;
  }

  // remove trailing slash except root
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return path;
}

// Optional: prevent browser from restoring scroll on back/forward
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export const currentPath = writable(normalizePath(window.location.pathname));

// Locale routing
export const SUPPORTED_LOCALES = ["en", "ja"]; // add more here
export const DEFAULT_LOCALE = "en";

function splitLocale(path) {
  const parts = path.split("/").filter(Boolean); // ["en","films"]
  const maybeLocale = parts[0];
  if (SUPPORTED_LOCALES.includes(maybeLocale)) {
    const rest = "/" + parts.slice(1).join("/");
    return { locale: maybeLocale, routePath: rest === "/" ? "/" : rest };
  }
  return { locale: DEFAULT_LOCALE, routePath: path };
}

export const currentLocale = writable(DEFAULT_LOCALE);
export const routePath = writable("/");

currentPath.subscribe(($path) => {
  const { locale, routePath: rp } = splitLocale($path);
  currentLocale.set(locale);
  routePath.set(rp);
});

export function hrefFor(path, locale = get(currentLocale)) {
  const rp = path?.startsWith("/") ? path : "/" + String(path || "");
  const normalized = normalizePath("/" + locale + rp);
  return base + normalized;
}

export function navigate(path) {
  const locale = get(currentLocale) || DEFAULT_LOCALE;
  const rp = path?.startsWith("/") ? path : "/" + String(path || "");
  const normalized = normalizePath("/" + locale + rp);
  const newUrl = base + normalized; // e.g. "/369-app/en/films"
  history.pushState({}, "", newUrl);
  currentPath.set(normalized);

  // Force top on route change
  scrollToTop();
}

window.addEventListener("popstate", () => {
  currentPath.set(normalizePath(window.location.pathname));

  // Force top on back/forward
  scrollToTop();
});

export function switchLocale(nextLocale) {
  const loc = SUPPORTED_LOCALES.includes(nextLocale) ? nextLocale : DEFAULT_LOCALE;
  const rp = get(routePath) || "/";
  const normalized = normalizePath("/" + loc + rp);
  history.pushState({}, "", base + normalized);
  currentPath.set(normalized);
  scrollToTop();
}

// If someone lands on a non-locale URL ("/films"), rewrite it to "/en/films".
export function ensureLocaleInUrl() {
  const cp = get(currentPath);
  const parts = cp.split("/").filter(Boolean);
  const hasLocale = SUPPORTED_LOCALES.includes(parts[0]);
  if (hasLocale) return;

  const normalized = normalizePath("/" + DEFAULT_LOCALE + cp);
  history.replaceState({}, "", base + normalized);
  currentPath.set(normalized);
}

// Work routes for your gallery pages
export const WORK_POSTERS_PATH = "/work/posters";
export const WORK_FILMHUB_PATH = "/work/filmhub";