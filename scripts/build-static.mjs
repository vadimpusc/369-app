import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, 'dist');
const SITE_URL = 'https://sanrokuku.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/seo/og-default.jpg`;
const BUILD_DATE = new Date().toISOString();
const LOCALES = ['en', 'ja'];
const DEFAULT_LOCALE = 'en';

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function stripTrailingSlash(url) {
  return url !== '/' && url.endsWith('/') ? url.slice(0, -1) : url;
}

function routeToUrl(routePath) {
  if (routePath === '/') return `${SITE_URL}/${DEFAULT_LOCALE}/`;
  return `${SITE_URL}${routePath}`;
}

function routeToFsPath(routePath) {
  const clean = routePath.replace(/^\//, '');
  if (!clean) return path.join(DIST_DIR, DEFAULT_LOCALE, 'index.html');
  return path.join(DIST_DIR, clean, 'index.html');
}

function setHtmlLang(html, lang) {
  return html.replace(/<html[^>]*lang="[^"]*"/i, `<html lang="${lang}"`);
}

function injectHead(html, tags, preserved = '') {
  return html.replace(/<head>([\s\S]*?)<\/head>/i, `<head>\n${tags}${preserved ? `\n${preserved}` : ''}\n</head>`);
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHead({ title, description, canonical, alternateEn, alternateJa, xDefault, ogImage, lang }) {
  const tags = [
    '  <meta charset="UTF-8" />',
    `  <title>${escapeHtml(title)}</title>`,
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    `  <meta name="description" content="${escapeHtml(description)}" />`,
    `  <link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `  <link rel="alternate" hreflang="en" href="${escapeHtml(alternateEn)}" />`,
    `  <link rel="alternate" hreflang="ja" href="${escapeHtml(alternateJa)}" />`,
    `  <link rel="alternate" hreflang="x-default" href="${escapeHtml(xDefault)}" />`,
    `  <meta property="og:title" content="${escapeHtml(title)}" />`,
    `  <meta property="og:description" content="${escapeHtml(description)}" />`,
    '  <meta property="og:type" content="website" />',
    `  <meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `  <meta property="og:image" content="${escapeHtml(ogImage || DEFAULT_OG_IMAGE)}" />`,
    `  <meta name="twitter:card" content="summary_large_image" />`,
    `  <meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `  <meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `  <meta name="twitter:image" content="${escapeHtml(ogImage || DEFAULT_OG_IMAGE)}" />`,
    `  <meta name="theme-color" content="#05060a" />`,
    `  <script>(function(){var path=window.location.pathname;if(path==='/'){window.location.replace('/en/');return;}if(!path.startsWith('/en')&&!path.startsWith('/ja')&&!path.includes('.')){window.location.replace('/en'+path);}})();</script>`
  ];

  return tags.join('\n');
}

function loadPageContent(locale, slug) {
  const filePath = path.join(ROOT, 'src', 'pages-content', locale, `${slug}.json`);
  return fs.existsSync(filePath) ? readJson(filePath) : null;
}

function loadCollection(locale, kind) {
  const filePath = path.join(ROOT, 'src', 'data', locale, `${kind}.json`);
  return fs.existsSync(filePath) ? readJson(filePath) : [];
}

const staticSlugs = fs
  .readdirSync(path.join(ROOT, 'src', 'pages-content', DEFAULT_LOCALE))
  .filter((name) => name.endsWith('.json'))
  .map((name) => name.replace(/\.json$/, ''));

const dynamicKinds = {
  films: {
    prefix: '/films/',
    title: (item) => `${item.title} | Film | San Roku Ku`,
    description: (item) => item.logline || item.description || '',
    image: (item) => item.poster || item.heroImage || ''
  },
  series: {
    prefix: '/series/',
    title: (item) => `${item.title} | Series | San Roku Ku`,
    description: (item) => item.logline || item.description || '',
    image: (item) => item.poster || item.heroImage || ''
  },
  documentaries: {
    prefix: '/documentaries/',
    title: (item) => `${item.title} | Documentary | San Roku Ku`,
    description: (item) => item.logline || item.description || '',
    image: (item) => item.poster || item.heroImage || ''
  },
  jobs: {
    prefix: '/jobs/',
    title: (item) => `${item.title} | Work Opportunities | San Roku Ku`,
    description: (item) => item.shortIntro || '',
    image: () => ''
  },
  services: {
    prefix: '/service/',
    title: (item) => `${item.title} | San Roku Ku`,
    description: (item) => item.tagline || item.description || '',
    image: (item) => item.image || item.bannerImage || ''
  }
};

const alternateRouteSet = new Set();
const routeEntries = [];

for (const locale of LOCALES) {
  for (const slug of staticSlugs) {
    const page = loadPageContent(locale, slug);
    if (!page) continue;
    const routePath = slug === 'home' ? `/${locale}/` : `/${locale}/${slug}`;
    alternateRouteSet.add(stripTrailingSlash(routePath));
    routeEntries.push({
      routePath,
      locale,
      type: 'static',
      seo: page.seo || {}
    });
  }

  for (const [kind, config] of Object.entries(dynamicKinds)) {
    const items = loadCollection(locale, kind);
    for (const item of items) {
      if (!item?.slug) continue;
      const routePath = `/${locale}${config.prefix}${item.slug}`;
      alternateRouteSet.add(stripTrailingSlash(routePath));
      routeEntries.push({
        routePath,
        locale,
        type: 'dynamic',
        seo: {
          title: config.title(item),
          description: config.description(item),
          ogImage: config.image(item)
        }
      });
    }
  }
}

const indexTemplate = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');
const builtHeadInner = (indexTemplate.match(/<head>([\s\S]*?)<\/head>/i)?.[1] || '');
const preservedHeadTags = builtHeadInner
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => /\/assets\//.test(line) || /type="module"/.test(line) || /rel="modulepreload"/.test(line) || /rel="stylesheet"/.test(line))
  .join('\n  ');

for (const entry of routeEntries) {
  const counterpartPath = entry.routePath.replace(/^\/(en|ja)(?=\/|$)/, `/${entry.locale === 'en' ? 'ja' : 'en'}`);
  const hasCounterpart = alternateRouteSet.has(stripTrailingSlash(counterpartPath));
  const enPath = entry.locale === 'en' ? entry.routePath : hasCounterpart ? counterpartPath : entry.routePath;
  const jaPath = entry.locale === 'ja' ? entry.routePath : hasCounterpart ? counterpartPath : entry.routePath;
  const canonical = routeToUrl(entry.routePath);
  const alternateEn = routeToUrl(enPath);
  const alternateJa = routeToUrl(jaPath);
  const xDefault = routeToUrl(enPath);
  const title = entry.seo.title || 'San Roku Ku | Production Company';
  const description = entry.seo.description || 'San Roku Ku is a production company creating bold cinematic storytelling.';
  const ogImage = entry.seo.ogImage || DEFAULT_OG_IMAGE;

  let html = indexTemplate;
  html = setHtmlLang(html, entry.locale);
  html = injectHead(
    html,
    buildHead({
      title,
      description,
      canonical,
      alternateEn,
      alternateJa,
      xDefault,
      ogImage,
      lang: entry.locale
    }),
    preservedHeadTags ? `  ${preservedHeadTags}` : ''
  );

  const outPath = routeToFsPath(entry.routePath);
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, html, 'utf8');
}

fs.copyFileSync(path.join(DIST_DIR, 'index.html'), path.join(DIST_DIR, '404.html'));

const sitemapEntries = routeEntries
  .sort((a, b) => a.routePath.localeCompare(b.routePath))
  .map((entry) => {
    const counterpartPath = entry.routePath.replace(/^\/(en|ja)(?=\/|$)/, `/${entry.locale === 'en' ? 'ja' : 'en'}`);
    const hasCounterpart = alternateRouteSet.has(stripTrailingSlash(counterpartPath));
    const enPath = entry.locale === 'en' ? entry.routePath : hasCounterpart ? counterpartPath : entry.routePath;
    const jaPath = entry.locale === 'ja' ? entry.routePath : hasCounterpart ? counterpartPath : entry.routePath;
    const loc = routeToUrl(entry.routePath);
    const alternateEn = routeToUrl(enPath);
    const alternateJa = routeToUrl(jaPath);
    const xDefault = routeToUrl(enPath);

    return `  <url>\n    <loc>${escapeHtml(loc)}</loc>\n    <lastmod>${BUILD_DATE}</lastmod>\n    <xhtml:link rel="alternate" hreflang="en" href="${escapeHtml(alternateEn)}" />\n    <xhtml:link rel="alternate" hreflang="ja" href="${escapeHtml(alternateJa)}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeHtml(xDefault)}" />\n  </url>`;
  })
  .join('\n\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n\n${sitemapEntries}\n\n</urlset>\n`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`Generated ${routeEntries.length} prerendered route files and sitemap.xml`);
