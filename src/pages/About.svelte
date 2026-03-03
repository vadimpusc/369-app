<script>
  import { currentLocale } from "../router";
  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  const base = import.meta.env.BASE_URL;

  // Load page data for current locale, fall back to English
  $: page =
    loadPageContent("about", $currentLocale) ||
    loadPageContent("about", "en");

  // Apply SEO (title + meta description)
  $: if (page?.seo) setSeo(page.seo);
</script>

<section class="container about-page">
  <header class="about-header">
    <div class="fade-in-image">
      <img
        src={`${base}assets/logos/369.png`}
        alt={page?.hero?.logoAlt ?? "San Roku Ku"}
      />
    </div>

    <h1>{page?.hero?.title ?? ""}</h1>

    <p>
      {page?.hero?.intro ?? ""}
    </p>
  </header>

  <section class="grid">
    {#each page?.cards ?? [] as card}
      <article class="card">
        <h2>{card.title}</h2>
        <p>{card.text}</p>
      </article>
    {/each}
  </section>
</section>

<style>
.about-page {
  padding: 3.5rem 0 4rem;
}
.about-header {
  text-align: center;
  max-width: 850px;
  margin: 0 auto;
  padding: 60px 20px;
}
.about-header h1 {
  font-size: 2.6rem;
  margin-bottom: 1rem;
}
.about-header p {
  font-size: 1.1rem;
  line-height: 1.65;
  margin: 0 auto;
  max-width: 750px;
}

/* Grid cards */
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  justify-content: center;
  margin-top: 2.6rem;
}

.card {
  flex: 0 1 430px;
  max-width: 340px;
  background: radial-gradient(circle at top left, #16233b, #060912);
  border-radius: var(--radius-xl);
  padding: 1.6rem 1.8rem;
  box-shadow: var(--shadow-soft);
}

.card h2 {
  font-size: 1rem;
  text-align: center;
  margin: 0 0 0.5rem;
}
.card p {
  margin: 0;
  line-height: 1.5;
  font-size: 0.92rem;
}

/* Founder */
.founder {
  margin-top: 3.2rem;
  line-height: 1.5;
}
.founder-inner {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1.6rem;
  align-items: center;
  background: #05060a;
  border-radius: var(--radius-xl);
  padding: 1.8rem 2rem;
  box-shadow: var(--shadow-soft);
}
.avatar-wrap {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.role {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}
@media (max-width: 700px) {
  .founder-inner {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* Call to Action */
.cta {
  text-align: center;
  margin-top: 2.6rem;
}
.services-note {
  color: var(--text-muted);
  max-width: 640px;
  margin: 0 auto 1rem;
  text-align: center;
  font-size: 0.95rem;
  padding: 20px;
  line-height: 1.5;
}

.fade-in-image {
  display: flex;
  justify-content: center;
}

.fade-in-image img {
  max-width: 200px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  opacity: 0;
  animation: fadeIn 4.2s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>