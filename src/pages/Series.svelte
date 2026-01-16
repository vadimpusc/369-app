<script>
  import series from "../data/series.json";
  import { navigate } from "../router";

  function openSeries(slug) {
    navigate(`/series/${slug}`);
  }
</script>

<section class="titles-page">
  <div class="container">

    <div class="titles-grid">
      {#each series as show}
        <button
          type="button"
          class="title-card"
          on:click={() => openSeries(show.slug)}
        >
          <div class="poster-shell">
<img
  src={show.poster}
  alt={`${show.title} poster`}
  loading="lazy"
/>
          </div>
          <div class="title-meta">
            <h2>{show.title}</h2>
            <p class="meta-line">
              {show.genres.join(", ").toUpperCase()} · {show.year}
            </p>
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>
<div style="max-width: 800px; margin: 40px auto 0; text-align: center; font-weight: 600; font-size: 1.1rem;">
  We are actively developing new series. If you are a filmmaker or production company with a series to submit for distribution,
  <a href="https://sanrokuku.com/submit-your-film" style="text-decoration: underline;">
    click here to submit
  </a>.
</div>

<style>
  .titles-page {
    padding: 3.5rem 0 4rem;
  }

.titles-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin: 0 auto;
  padding: 40px 0;
}

.titles-header h1 {
  font-size: 2.1rem;
  margin-bottom: 0.4rem;
  text-align: center;
}

.titles-header p {
  color: var(--text-muted);
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.6;
}


  /* grid - max 5 per row desktop, then wrap */
  .titles-grid {
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1rem;
  }

  @media (max-width: 1200px) {
    .titles-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .titles-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 520px) {
    .titles-grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

.title-card {
  display: block;
  width: 100%;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  border-radius: 18px;
  transition: transform 180ms ease, box-shadow 220ms ease;
}

  .title-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 40px 5px rgba(72, 180, 255, 0.2);
  }


  .poster-shell {
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 18px;
    overflow: hidden;
    background: #050509;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .poster-shell img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .title-meta {
    margin-top: 0.8rem;
  }

  .title-meta h2 {
    font-size: 1rem;
    margin: 0 0 0.2rem;
  }

  .meta-line {
    margin: 0;
    font-size: 0.82rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.09em;
  }
</style>
