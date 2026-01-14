<script>
  import films from "../data/films.json";
  import { navigate } from "../router";

  const slides = films.slice(0, 4).map((film) => ({
    title: film.title,
    logline: film.logline,
    image: film.heroImage || film.poster,
    slug: film.slug
  }));

  let index = 0;
  const total = slides.length;

  function show(i) {
    index = (i + total) % total;
  }

  function next() {
    show(index + 1);
  }

  function prev() {
    show(index - 1);
  }

  const autoplayMs = 7000;
  let interval;

  function startAutoplay() {
    clearInterval(interval);
    if (total > 1) {
      interval = setInterval(next, autoplayMs);
    }
  }

  function stopAutoplay() {
    clearInterval(interval);
  }

  startAutoplay();
</script>

<section
  class="hero"
  on:mouseenter={stopAutoplay}
  on:mouseleave={startAutoplay}
>
  {#each slides as slide, i}
    <div class:active={i === index} class="hero-slide">
      <img src={slide.image} alt={slide.title} loading="lazy" />
      <div class="hero-overlay">
        <div class="container hero-content">
          <div>
            <p class="eyebrow">Feature Film</p>
            <h1>{slide.title}</h1>
            <p class="logline">{slide.logline}</p>
            <div class="hero-actions">
              <button
                class="btn-primary"
                on:click={() => navigate(`/films/${slide.slug}`)}
              >
                View Film
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}

  {#if total > 1}
    <button class="hero-arrow left" on:click={prev} aria-label="Previous">
      ‹
    </button>
    <button class="hero-arrow right" on:click={next} aria-label="Next">
      ›
    </button>

    <div class="hero-dots">
  {#each slides as _, i}
  <button
    class:active={i === index}
    on:click={() => show(i)}
    aria-label={`Go to slide ${i + 1}`}
  ></button>
{/each}
    </div>
  {/if}
</section>

<section class="container section centered-section">
<h2 class="section-title">Your Production Partner in Japan and the US</h2>
<p class="section-subtitle">
  San Roku Ku is a production and post production partner working between Japan and the United States. We produce original films and support international productions filming in Japan, helping teams navigate local systems, crews, and cultural differences with clarity and efficiency. Our focus is making cross border filmmaking practical and transparent.
</p>

  <button class="btn-primary" on:click={() => navigate("/services")}>
    Learn More
  </button>
</section>

<section class="container section">
  <h2 class="section-title">Latest Releases</h2>
  <p class="section-subtitle">
   Discover our newest films, from our slate of independent and studio productions.
  </p>

  <div class="film-strip">
    {#each films.slice(0, 6) as film}
      <div
        class="film-strip-item"
        on:click={() => navigate(`/films/${film.slug}`)}
      >
        <div class="poster-frame">
          <img src={film.poster} alt={film.title} loading="lazy" />
        </div>
        <p class="film-title">{film.title}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: min(90vh, 900px);
    overflow: hidden;
  }
  .hero-slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: scale(1.03);
    transition: opacity 600ms ease, transform 600ms ease;
  }
  .hero-slide.active {
    opacity: 1;
    transform: scale(1);
    z-index: 1;
  }
  .hero-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: saturate(1.2) contrast(1.05);
  }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0.4) 40%,
      rgba(0, 0, 0, 0.85) 100%
    );
    display: flex;
    align-items: center;
  }
  .hero-content {
    padding-bottom: 3rem;
  }
  .eyebrow {
    font-size: 0.8rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #b0c4ff;
    margin-bottom: 0.5rem;
  }
  h1 {
    font-size: clamp(2.6rem, 4vw, 3.4rem);
    margin: 0 0 0.75rem;
  }
  .logline {
    max-width: 520px;
    color: var(--text-muted);
    font-size: 1rem;
  }
  .hero-actions {
    margin-top: 1.6rem;
  }
  .hero-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: rgba(5, 6, 10, 0.46);
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;
  }
  .hero-arrow.left {
    left: 1.6rem;
  }
  .hero-arrow.right {
    right: 1.6rem;
  }
  .hero-dots {
    position: absolute;
    bottom: 1.6rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.55rem;
  }
  .hero-dots button {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    border: none;
    background: rgba(255, 255, 255, 0.42);
    cursor: pointer;
    opacity: 0.45;
    transition: opacity 150ms ease, width 150ms ease;
  }
  .hero-dots button.active {
    width: 18px;
    opacity: 1;
    background: linear-gradient(90deg, #55f0ff, var(--accent));
  }
  .section {
    padding: 3.5rem 0 2.5rem;
  }
  .section-title {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
    text-align: center;
  }
  .section-subtitle {
    margin-top: 0;
    color: var(--text-muted);
    -width: 560px;
    text-align: center;
  }
  .film-strip {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.4rem;
  }
  .film-strip-item {
    cursor: pointer;
  }
  .film-title {
    margin-top: 0.65rem;
    font-size: 0.92rem;
    font-weight: 500;
  }


.centered-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  margin: 0 auto;
  max-width: 900px;
  padding: 60px 20px;

  /* elegant subtle glow around the section */
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(0, 0, 0, 0) 70%
  );

  border-radius: 20px;
}

.centered-section .section-title {
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(80, 150, 255, 0.25);
  margin: 0 auto;
}

.centered-section .section-subtitle {
  margin: 0 auto;
  max-width: 750px;
  line-height: 1.65;
  font-size: 1.1rem;
  color: #c9d2df;

  /* soft ambient glow under text */
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
}

/* glow button already looks good, we just enhance it lightly */
.centered-section .btn-primary {
  margin-top: 1rem;
  padding: 0.85rem 2.4rem;
  font-size: 1.05rem;
  border-radius: 50px;

  /* slight outer ring to make it look premium */
  box-shadow:
    0 0 30px rgba(80, 150, 255, 0.5),
    0 0 8px rgba(80, 150, 255, 0.4) inset;
}


</style>
