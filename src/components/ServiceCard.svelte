<script>
  import { navigate } from "../router";
  export let service;
  export let layout = "card"; // "card" or "row"
  export let linkType = "detail"; // "detail" or "order"

  function handleClick() {
    if (linkType === "detail") {
      navigate(`/service/${service.slug}`);
    } else {
      window.open(service.orderUrl, "_blank", "noopener");
    }
  }
</script>

<article class={`service-card service-card--${layout}`}>
  <button
    type="button"
    class="service-card-media"
    on:click={handleClick}
    aria-label={service.title}
  >
    <img src={service.image} alt={service.title} loading="lazy" />
  </button>

  <div class="service-card-body">
    {#if service.category}
      <p class="service-category">{service.category}</p>
    {/if}

    <h3 class="service-title">{service.title}</h3>

    {#if service.tagline}
      <p class="service-tagline">{service.tagline}</p>
    {/if}



    <div class="service-actions">
      <button type="button" class="btn-primary" on:click={handleClick}>
        {service.ctaLabel || "Get Started"}
      </button>

      {#if linkType === "detail"}
      {/if}
    </div>
  </div>
</article>

<style>
  .service-card {
  background: radial-gradient(circle at top left, #16233b, #060912);
  border-radius: var(--radius-xl);
  padding: 1.8rem;
  box-shadow: var(--shadow-soft);

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}


  .service-card-media {
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
  }

  .service-card-media img {
    width: 100%;
    border-radius: 1.25rem;
    object-fit: cover;
    display: block;
  }

  .service-category {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.65;
    margin-bottom: 0.25rem;
  }

  .service-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .service-tagline {
    font-size: 0.95rem;
    opacity: 0.85;
    margin-bottom: 1rem;
  }

  .service-description {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .service-actions {
  display: flex;
  justify-content: left;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}


  /* row layout for featured blocks if needed */
  .service-card--row {
    flex-direction: column;
  }

  @media (min-width: 900px) {
    .service-card--row {
      flex-direction: row;
      align-items: center;
    }

    .service-card--row .service-card-media {
      flex: 0 0 40%;
    }

    .service-card--row .service-card-body {
      flex: 1;
      padding-left: 2rem;
    }
  }
</style>
