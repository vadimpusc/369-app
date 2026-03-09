<script>
  import StreamingButtons from "./StreamingButtons.svelte";
  import { currentLocale } from "../router";
  import { t } from "../lib/i18n";

  export let item;
  export let kind;

  function getKindLabel(kind) {
    const normalized = String(kind || "").toLowerCase();

    if (normalized === "film") return t("detail.kinds.film");
    if (normalized === "series") return t("detail.kinds.series");
    if (normalized === "documentary") return t("detail.kinds.documentary");

    return kind;
  }

  function formatMetaParts(item, kind, locale) {
    const parts = [];

    if (item?.genres?.length) parts.push(item.genres.join(", "));
    if (item?.countries?.length) parts.push(item.countries.join(", "));
    if (item?.year) parts.push(String(item.year));

    if (String(kind || "").toLowerCase() === "series") {
      if (item?.seasons) {
        if (locale === "ja") {
          parts.push(`${item.seasons}${t("detail.units.seasons")}`);
        } else {
          parts.push(
            `${item.seasons} ${item.seasons > 1 ? t("detail.units.seasons") : t("detail.units.season")}`
          );
        }
      }

      if (item?.episodes) {
        if (locale === "ja") {
          parts.push(`${item.episodes}${t("detail.units.episodes")}`);
        } else {
          parts.push(`${item.episodes} ${t("detail.units.episodes")}`);
        }
      }
    } else if (item?.durationMinutes) {
      if (locale === "ja") {
        parts.push(`${item.durationMinutes}${t("detail.units.minutes")}`);
      } else {
        parts.push(`${item.durationMinutes} ${t("detail.units.minutes")}`);
      }
    }

    return parts;
  }

  $: kindLabel = getKindLabel(kind);
  $: metaParts = formatMetaParts(item, kind, $currentLocale);
</script>

<section class="title-hero">
  <div class="container hero-layout">
    <div class="hero-poster">
      <div class="poster-frame">
        <img src={item.poster} alt={item.title} />
      </div>
    </div>

    <div class="hero-info">
      <p class="eyebrow">{kindLabel}</p>
      <h1>{item.title}</h1>
      <p class="hero-meta">{metaParts.join(" · ")}</p>

      <p class="logline">{item.logline}</p>

      <div class="credits">
        {#if item.credits?.director}
          <p><strong>{t("detail.fields.director")}:</strong> {item.credits.director}</p>
        {/if}

        {#if item.credits?.creator}
          <p><strong>{t("detail.fields.creator")}:</strong> {item.credits.creator}</p>
        {/if}

        {#if item.credits?.showrunner}
          <p><strong>{t("detail.fields.showrunner")}:</strong> {item.credits.showrunner}</p>
        {/if}

        {#if item.credits?.producer}
          <p><strong>{t("detail.fields.producer")}:</strong> {item.credits.producer}</p>
        {/if}

        {#if item.credits?.starring}
          <p><strong>{t("detail.fields.starring")}:</strong> {item.credits.starring.join(", ")}</p>
        {/if}
      </div>

      <StreamingButtons platforms={item.platforms} />
    </div>
  </div>
</section>

<style>
  .title-hero {
    padding: 3.5rem 0 3rem;
    background: radial-gradient(circle at top left, #111830, #060712);
  }

  .hero-layout {
    display: grid;
    grid-template-columns: minmax(0, 260px) minmax(0, 1fr);
    gap: 2.5rem;
    align-items: center;
  }

  .eyebrow {
    font-size: 0.75rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #b0c4ff;
    margin-bottom: 0.3rem;
  }

  h1 {
    margin: 0 0 0.4rem;
    font-size: clamp(2rem, 3vw, 2.6rem);
  }

  .hero-meta {
    margin: 0 0 1.1rem;
    color: var(--text-muted);
    font-size: 0.92rem;
  }

  .logline {
    max-width: 600px;
    margin-bottom: 1.3rem;
  }

  .credits p {
    margin: 0.25rem 0;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .hero-layout {
      grid-template-columns: minmax(0, 1fr);
      text-align: center;
    }

    .hero-poster {
      width: 90%;
      margin: 0 auto 1.5rem;
      max-width: none;
    }

    .poster-frame img {
      width: 100%;
      height: auto;
      display: block;
    }

    .hero-info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .logline {
      max-width: 90%;
    }
  }
</style>