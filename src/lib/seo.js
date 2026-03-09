// src/lib/seo.js

export const SITE_URL = "https://sanrokuku.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/seo/og-default.jpg`;

function setTag(selector, attr, value) {
  let tag = document.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    const key = selector.includes("property") ? "property" : "name";
    tag.setAttribute(key, attr);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", value);
}

function setLink(rel, href, hreflang = null) {
  const selector = `link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ""}`;
  let link = document.querySelector(selector);

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    if (hreflang) link.setAttribute("hreflang", hreflang);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

export function setSeo(seo = {}) {

  const path = window.location.pathname;
  const canonical = SITE_URL + path;

  const altEN = SITE_URL + path.replace(/^\/ja(?=\/|$)/, "/en");
  const altJA = SITE_URL + path.replace(/^\/en(?=\/|$)/, "/ja");

  const title = seo.title || "";
  const description = seo.description || "";
  const ogImage = seo.ogImage || DEFAULT_OG_IMAGE;
  const type = seo.type || "website";

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

  setLink("canonical", canonical);

  setLink("alternate", altEN, "en");
  setLink("alternate", altJA, "ja");
  setLink("alternate", altEN, "x-default");

  setTag('meta[property="og:title"]', "og:title", title);
  setTag('meta[property="og:description"]', "og:description", description);
  setTag('meta[property="og:url"]', "og:url", canonical);
  setTag('meta[property="og:type"]', "og:type", type);
  setTag('meta[property="og:image"]', "og:image", ogImage);

  setTag('meta[name="twitter:card"]', "twitter:card", "summary_large_image");
  setTag('meta[name="twitter:title"]', "twitter:title", title);
  setTag('meta[name="twitter:description"]', "twitter:description", description);
  setTag('meta[name="twitter:image"]', "twitter:image", ogImage);
}