<script>
  import { loadCollection } from "../lib/content";
  import { currentLocale } from "../router";
  import ServiceCard from "../components/ServiceCard.svelte";

  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  $: services = loadCollection("services", $currentLocale);

  $: page =
    loadPageContent("service", $currentLocale) ||
    loadPageContent("service", "en");

  $: if (page?.seo) setSeo(page.seo);
</script>

<section class="container services-page">
  <header class="services-header">
    <h1>{page?.hero?.title ?? "Our Online Services"}</h1>
    <p>{page?.hero?.intro ?? ""}</p>
  </header>

  <section class="services-grid">
    {#each services as service}
      <ServiceCard {service} layout="card" linkType="detail" />
    {/each}
  </section>
</section>

<style>
  /* Page padding (kept exactly as before) */
  .services-page {
    padding: 3.5rem 0 4rem;
  }

  .services-header {
    text-align: center;
    max-width: 850px;
    margin: 0 auto;
    padding: 60px 20px;
  }

  .services-header h1 {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }

  .services-header p {
    font-size: 1.1rem;
    line-height: 1.5;
    color: var(--text-muted);
    max-width: 750px;
    margin: 0 auto;
  }

  /* ------------------------------------------
     SERVICES GRID (300px columns on desktop)
     ------------------------------------------ */

  .services-grid {
    margin-top: 2.6rem;

    display: grid;
    justify-content: center;
    gap: 2rem;

    /* keep the card size fixed */
    grid-template-columns: repeat(auto-fit, 300px);

    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
  }

  @media (max-width: 1600px) {
    .services-grid {
      grid-template-columns: repeat(4, minmax(300px, 1fr));
    }
  }

  @media (max-width: 1300px) {
    .services-grid {
      grid-template-columns: repeat(3, minmax(280px, 1fr));
    }
  }

  @media (max-width: 900px) {
    .services-grid {
      grid-template-columns: repeat(2, minmax(260px, 1fr));
    }
  }

  @media (max-width: 550px) {
    .services-grid {
      grid-template-columns: repeat(1, minmax(260px, 1fr));
    }
  }
</style>