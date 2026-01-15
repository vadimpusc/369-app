<script>
  import services from "../data/services.json";
  import { navigate } from "../router";

  export let slug;

  const item = services.find((s) => s.slug === slug);

  // accordion state for Q&A
  let openIndex = -1;

  function toggleQA(index) {
    openIndex = openIndex === index ? -1 : index;
  }
</script>

{#if !item}
  <section class="container" style="padding: 4rem 0;">
    <h1>Service not found</h1>
    <button class="btn-primary" on:click={() => navigate("/service")}>
      Back to Services
    </button>
  </section>
{:else}
  <!-- Main service section -->
  <section class="section service-detail">
    <div class="container service-detail-inner">
      <div class="service-detail-media">
        <img src={item.image} alt={item.title} />
      </div>

      <div class="service-detail-body">
        {#if item.category}
          <p class="service-category">{item.category}</p>
        {/if}

        <h1>{item.title}</h1>

        {#if item.tagline}
          <p class="service-tagline">{item.tagline}</p>
        {/if}

        <p class="service-description">
          {item.description}
        </p>

        <div class="service-detail-actions">
          <a
            href={item.orderUrl}
            class="btn-primary"
            target="_blank"
            rel="noopener"
          >
            {item.ctaLabel || "Order now"}
          </a>

          <button
            type="button"
            class="btn-secondary"
            on:click={() => navigate("/service")}
          >
            Back to all services
          </button>
        </div>
      </div>
    </div>
  </section>
  
{#if item.bannerImage && item.bannerTitle}
  <div class="service-qa-banner">
    <h2 class="service-qa-banner-title">
      {item.bannerTitle}
    </h2>

    {#if item["longer-description"]}
      <p class="service-qa-banner-description">
        {item["longer-description"]}
      </p>
    {/if}

    <img
      src={item.bannerImage}
      alt={item.bannerTitle}
      loading="lazy"
    />
  </div>
{/if}





  <!-- Q&A section underneath, centered -->
  {#if item.qa && item.qa.length > 0}
    <section class="section service-qa">
      <div class="container">
        <div class="service-qa-inner">
          <h3>Questions &amp; Answers</h3>

          <div class="qa-list">
            {#each item.qa as qa, index}
              <div class="qa-item">
                <button
                  type="button"
                  class="qa-toggle"
                  on:click={() => toggleQA(index)}
                >
                  <span>{qa.question}</span>
                  <span class="qa-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {#if openIndex === index}
                  <div class="qa-answer">
                    <p>{qa.answer}</p>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
  {/if}
{/if}

<style>
  .btn-secondary {
    padding: 0.75rem 1.75rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #fff;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 150ms ease;
    backdrop-filter: blur(4px);
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.18);
  }

  .service-detail-inner {
    display: grid;
    gap: 2.5rem;
    padding: 4rem 0;
  }

  .service-detail-media img {
    width: 100%;
    border-radius: 1.5rem;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 900px) {
    .service-detail-inner {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.4fr);
      align-items: center;
    }
  }

  .service-detail-body h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .service-category {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.7;
    margin-bottom: 0.4rem;
  }

  .service-tagline {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 1rem;
  }

  .service-description {
    font-size: 0.98rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .service-qa-banner-description {
  font-size: 0.98rem;
  line-height: 1.7;
  margin: 0 auto 1.5rem;  /* center with bottom spacing */
  max-width: 900px;        /* constrain width for readability */
  padding: 0 1.25rem;      /* small side padding on mobile */
  display: block;           /* make sure it shows */
  text-align: center;       /* optional: center text horizontally */
  opacity: 0.85;            /* subtle styling, optional */
}


  .service-detail-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  /* Q&A block underneath, centered */
  .service-qa {
    padding: 0 0 4rem;
  }

  .service-qa-inner {
    max-width: 750px;
    margin: 3.5rem auto 0;
  }

  .service-qa h3 {
    font-size: 1.6rem;
    margin-bottom: 1.8rem;
    text-align: center;
  }

  .qa-list {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .qa-item {
    background: rgba(22, 30, 50, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.9rem;
    overflow: hidden;
    backdrop-filter: blur(4px);
    transition: border-color 150ms ease, background 150ms ease;
  }

  .qa-item:hover {
    border-color: rgba(255, 255, 255, 0.25);
    background: rgba(22, 30, 50, 0.75);
  }

  .qa-toggle {
    width: 100%;
    padding: 1rem 1.25rem;
    background: transparent;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .qa-toggle span:first-child {
    text-align: left;
  }

  .qa-icon {
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 700;
    opacity: 0.9;
    transition: transform 150ms ease;
  }

  .qa-item:hover .qa-icon {
    opacity: 1;
  }

  .qa-answer {
    padding: 0 1.25rem 1rem 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .qa-answer p {
    margin: 0;
    color: #e4e7eb;
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .service-qa-banner {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  text-align: center;
  margin-bottom: 3.5rem;
}

.service-qa-banner-title {
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
}

.service-qa-banner img {
  width: 100%;           /* full width on small screens */
  max-width: 1800px;     /* limit width on large screens */
  height: auto;          /* maintain aspect ratio */
  display: block;
  margin: 0 auto;        /* center the image if narrower than container */
}


</style>
