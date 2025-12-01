<script>
  import services from "../data/services.json";
  import ServiceCard from "./ServiceCard.svelte";

  export let serviceSlug = null;

  const featured =
    services.find((s) => s.slug === serviceSlug) ||
    services.find((s) => s.featured) ||
    services[0];
</script>

{#if featured}
  <section class="section featured-service">
    <div class="container featured-service-inner">
      <div class="featured-copy">
        <p class="eyebrow">Online Services</p>
        <h2>Need fast creative support for your film?</h2>
        <p>
          Order artwork and trailers tailored to your project. Simple online
          booking, quick turnaround, all built for independent filmmakers.
        </p>
      </div>

      <ServiceCard service={featured} layout="row" linkType="detail" />
    </div>
  </section>
{/if}

<style>
  .featured-service-inner {
    display: grid;
    gap: 2rem;
    align-items: center;
    padding: 4rem 0;
  }

  @media (min-width: 900px) {
    .featured-service-inner {
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);
    }
  }

  .featured-copy h2 {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }

  .featured-copy p {
    font-size: 0.98rem;
    line-height: 1.6;
  }
</style>
