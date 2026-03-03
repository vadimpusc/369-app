// src/lib/seo.js
export function setSeo(seo = {}) {
  const title = seo.title || "";
  const description = seo.description || "";

  if (title) document.title = title;

  if (description) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }

  // Optional OG image support if you add it to JSON later
  if (seo.ogImage) {
    let og = document.querySelector('meta[property="og:image"]');
    if (!og) {
      og = document.createElement("meta");
      og.setAttribute("property", "og:image");
      document.head.appendChild(og);
    }
    og.setAttribute("content", seo.ogImage);
  }
}