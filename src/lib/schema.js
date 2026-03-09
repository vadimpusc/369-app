const SITE_URL = "https://sanrokuku.com";

function absoluteUrl(path) {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path}`;
}

function cleanArray(value) {
  if (!Array.isArray(value)) return [];
  return value.filter(Boolean);
}

function removeEmpty(obj) {
  if (!obj || typeof obj !== "object") return obj;

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (Array.isArray(value)) {
      obj[key] = value.filter(Boolean);
      if (obj[key].length === 0) delete obj[key];
      return;
    }

    if (value && typeof value === "object") {
      removeEmpty(value);
      if (Object.keys(value).length === 0) delete obj[key];
      return;
    }

    if (value === undefined || value === null || value === "") {
      delete obj[key];
    }
  });

  return obj;
}

function yearToDatePublished(year) {
  if (!year) return undefined;
  return `${year}-01-01`;
}

function minutesToISO(minutes) {
  if (!minutes || Number.isNaN(Number(minutes))) return undefined;
  return `PT${Number(minutes)}M`;
}

function buildPerson(person) {
  if (!person) return null;

  if (typeof person === "string") {
    return {
      "@type": "Person",
      name: person
    };
  }

  if (typeof person === "object") {
    return removeEmpty({
      "@type": "Person",
      name: person.name || "",
      url: person.url || undefined,
      sameAs: cleanArray(person.sameAs)
    });
  }

  return null;
}

function buildVideoObject(item, label = "Trailer") {
  if (!item?.trailer) return null;

  return removeEmpty({
    "@type": "VideoObject",
    name: `${item.title || "Untitled"} ${label}`,
    description: item.logline || item.description || "",
    thumbnailUrl: absoluteUrl(
      item.poster || item.image || item.heroImage || item.bannerImage || ""
    ),
    embedUrl: toEmbed(item.trailer),
    uploadDate: item.trailerUploadDate || yearToDatePublished(item.year),
    duration: item.trailerDuration || undefined
  });
}

export function clearSchema() {
  if (typeof document === "undefined") return;

  document
    .querySelectorAll('script[data-schema="true"]')
    .forEach((el) => el.remove());
}

export function injectSchema(data) {
  if (typeof document === "undefined" || !data) return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-schema", "true");
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function breadcrumbSchema(items = []) {
  if (!items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function movieSchema(item) {
  if (!item) return null;

  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "Movie",
    name: item.title || "",
    description: item.logline || item.description || "",
    image: absoluteUrl(item.poster || item.image || item.heroImage || ""),
    genre: cleanArray(item.genres),
    duration: minutesToISO(item.durationMinutes),
    datePublished: yearToDatePublished(item.year),
    countryOfOrigin: cleanArray(item.countries).map((country) => ({
      "@type": "Country",
      name: country
    })),
    trailer: buildVideoObject(item, "Trailer") || undefined,
    director: item.credits?.director ? buildPerson(item.credits.director) : undefined,
    producer: item.credits?.producer ? buildPerson(item.credits.producer) : undefined,
    actor: cleanArray(item.credits?.starring).map(buildPerson),
    productionCompany: {
      "@type": "Organization",
      name: "San Roku Ku",
      url: SITE_URL
    }
  });
}

export function tvSeriesSchema(item) {
  if (!item) return null;

  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "TVSeries",
    name: item.title || "",
    description: item.logline || item.description || "",
    image: absoluteUrl(item.poster || item.image || item.heroImage || ""),
    genre: cleanArray(item.genres),
    datePublished: yearToDatePublished(item.year),
    countryOfOrigin: cleanArray(item.countries).map((country) => ({
      "@type": "Country",
      name: country
    })),
    trailer: buildVideoObject(item, "Trailer") || undefined,
    director: item.credits?.director ? buildPerson(item.credits.director) : undefined,
    producer: item.credits?.producer ? buildPerson(item.credits.producer) : undefined,
    actor: cleanArray(item.credits?.starring).map(buildPerson),
    numberOfEpisodes: item.numberOfEpisodes || undefined,
    numberOfSeasons: item.numberOfSeasons || undefined,
    productionCompany: {
      "@type": "Organization",
      name: "San Roku Ku",
      url: SITE_URL
    }
  });
}

export function serviceSchema(item) {
  if (!item) return null;

  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title || "",
    description: item.tagline || item.description || "",
    image: absoluteUrl(item.image || item.bannerImage || ""),
    serviceType: item.category || item.title || "Creative Service",
    areaServed: item.areaServed || "Worldwide",
    provider: {
      "@type": "Organization",
      name: "San Roku Ku",
      url: SITE_URL
    }
  });
}

export function faqSchema(qa = []) {
  if (!Array.isArray(qa) || qa.length === 0) return null;

  const entities = qa
    .filter((item) => item?.question && item?.answer)
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }));

  if (!entities.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entities
  };
}

export function toEmbed(url) {
  if (!url) return null;

  let x = url.trim();

  if (x.includes("youtu.be/")) {
    const id = x.split("youtu.be/")[1].split(/[?&]/)[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (x.includes("watch?v=")) {
    return x.replace("watch?v=", "embed/");
  }

  return x;
}