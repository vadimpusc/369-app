import { writable } from "svelte/store";

export const currentPath = writable(window.location.pathname || "/");

export function navigate(path) {
  if (path === window.location.pathname) return;
  history.pushState({}, "", path);
  currentPath.set(path);
}

window.addEventListener("popstate", () => {
  currentPath.set(window.location.pathname || "/");
});
