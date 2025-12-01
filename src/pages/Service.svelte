<script>
  import services from "../data/services.json";
  import ServiceCard from "../components/ServiceCard.svelte";
</script>

<section class="container services-page">
  <header class="services-header">
    <h1>Creative Services for Filmmakers</h1>
    <p>
      Order poster design, Filmhub graphics, and trailer editing directly online.
      Upload your materials and receive delivery within a few days.
    </p>
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
    line-height: 1.65;
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
    justify-content: center; /* center even with 1 service */
    gap: 2rem;

    /* 5 columns, each ~300px wide */
    grid-template-columns: repeat(5, minmax(300px, 1fr));

    /* controls total maximum width */
    max-width: 1700px;
    margin-left: auto;
    margin-right: auto;
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
