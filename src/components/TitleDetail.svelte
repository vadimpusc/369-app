<script>
  import StreamingButtons from "./StreamingButtons.svelte";

  export let item;  // film, series, or documentary
  export let kind;  // "Film", "Series", "Documentary"

  const metaParts = [];

  if (item.genres) metaParts.push(item.genres.join(", "));
  if (item.countries) metaParts.push(item.countries.join(", "));
  if (item.year) metaParts.push(String(item.year));

  if (kind === "Series") {
    if (item.seasons)
      metaParts.push(`${item.seasons} season${item.seasons > 1 ? "s" : ""}`);
    if (item.episodes)
      metaParts.push(`${item.episodes} eps`);
  } else if (item.durationMinutes) {
    metaParts.push(`${item.durationMinutes} min`);
  }
</script>

<section class="title-hero">
  <div class="container hero-layout">
    <div class="hero-poster">
      <div class="poster-frame">
        <img src={item.poster} alt={item.title} />
      </div>
    </div>

    <div class="hero-info">
      <p class="eyebrow">{kind}</p>
      <h1>{item.title}</h1>
      <p class="hero-meta">{metaParts.join(" · ")}</p>

      <p class="logline">{item.logline}</p>

      <div class="credits">
        {#if item.credits?.director}
          <p><strong>Director:</strong> {item.credits.director}</p>
        {/if}
        {#if item.credits?.creator}
          <p><strong>Creator:</strong> {item.credits.creator}</p>
        {/if}
        {#if item.credits?.showrunner}
          <p><strong>Showrunner:</strong> {item.credits.showrunner}</p>
        {/if}
        {#if item.credits?.producer}
          <p><strong>Producer:</strong> {item.credits.producer}</p>
        {/if}
        {#if item.credits?.starring}
          <p><strong>Starring:</strong> {item.credits.starring.join(", ")}</p>
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
  @media (max-width: 800px) {
    .hero-layout {
      grid-template-columns: minmax(0, 1fr);
    }
    .hero-poster {
      max-width: 220px;
    }
  }
</style>
