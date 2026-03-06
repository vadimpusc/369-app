<script>
  import { navigate, hrefFor } from "../router";

  export let service;
  export let layout = "card";
  export let linkType = "detail";

  $: isExternal = linkType === "order" && !!service?.orderUrl;
  $: href = isExternal ? service.orderUrl : hrefFor(`/service/${service.slug}`);

  function handleClick(event) {
    if (isExternal) return;
    event.preventDefault();
    navigate(`/service/${service.slug}`);
  }
</script>

<a
  class={`service-card service-card--${layout}`}
  href={href}
  on:click={handleClick}
  target={isExternal ? "_blank" : undefined}
  rel={isExternal ? "noopener" : undefined}
>
  <div class="service-card-media">
    <img src={service.image} alt={service.title} loading="lazy" />
  </div>

  <div class="service-card-body">
    {#if service.category}
      <p class="service-category">{service.category}</p>
    {/if}

    <h3 class="service-title">{service.title}</h3>

    {#if service.tagline}
      <p class="service-tagline">{service.tagline}</p>
    {/if}
  </div>
</a>

<style>
  .service-card {
    background: radial-gradient(circle at top left, #16233b, #060912);
    border-radius: var(--radius-xl);
    padding: 1.8rem;
    box-shadow: var(--shadow-soft);

    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.2s ease;
    text-decoration: none;
    color: inherit;
  }

  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-medium);
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
