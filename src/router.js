import { writable } from "svelte/store";

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

export const currentPath = writable(normalizePath(window.location.pathname));

export function navigate(path) {
  const normalized = normalizePath(path);
  const newUrl = base + normalized; // e.g. "/369-app/films"
  history.pushState({}, "", newUrl);
  currentPath.set(normalized);
}

window.addEventListener("popstate", () => {
  currentPath.set(normalizePath(window.location.pathname));
});
