<script>
  import { loadCollection } from "../lib/content";
  import { navigate, currentLocale } from "../router";
  import { setSeo } from "../lib/seo";

  export let slug;

  $: services = loadCollection("services", $currentLocale);
  $: item = services.find((s) => s.slug === slug);

  // Locale-aware UI labels (no dependency on t() keys)
  $: labels =
    $currentLocale === "ja"
      ? {
          notFound: "サービスが見つかりません",
          back: "サービス一覧へ戻る",
          viewExamples: "制作例を見る",
          faq: "よくある質問",
          howItWorks: "制作の流れ",
          orderDefault: "注文する"
        }
      : {
          notFound: "Service not found",
          back: "Back to Services",
          viewExamples: "View Examples",
          faq: "Frequently Asked Questions",
          howItWorks: "How it works",
          orderDefault: "Order"
        };

  // Safe, dynamic SEO (won't crash if setSeo is missing fields)
  $: if (item) {
    setSeo({
      title: `${item.title} | San Roku Ku`,
      description: item.tagline || item.description || "",
      ogImage: item.image || ""
    });
  }

  // accordion state for Q&A
  let openIndex = -1;

  function toggleQA(index) {
    openIndex = openIndex === index ? -1 : index;
  }
</script>

{#if !item}
  <section class="container" style="padding: 4rem 0;">
    <h1>{labels.notFound}</h1>
    <button class="btn-primary" on:click={() => navigate("/service")}>
      {labels.back}
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
          {#if item.orderUrl}
            <a
              href={item.orderUrl}
              class="btn-primary"
              target="_blank"
              rel="noopener"
            >
              {item.ctaLabel || labels.orderDefault}
            </a>
          {/if}

          {#if item.viewWorkUrl}
            <a
              href={item.viewWorkUrl}
              class="btn-primary"
              target="_blank"
              rel="noopener"
            >
              {labels.viewExamples}
            </a>
          {/if}

          <button
            type="button"
            class="btn-secondary"
            on:click={() => navigate("/service")}
          >
            {labels.back}
          </button>
        </div>
      </div>
    </div>
  </section>

  {#if item.howItWorks && item.howItWorks.steps && item.howItWorks.steps.length > 0}
    <section class="section howitworks" aria-labelledby="howitworks-title">
      <div class="container">
        <div class="howitworks-inner">
          {#if item.howItWorks.kicker}
            <p class="howitworks-kicker">{item.howItWorks.kicker}</p>
          {/if}

          <h3 id="howitworks-title" class="howitworks-title">
            {item.howItWorks.title || labels.howItWorks}
          </h3>

          {#if item.howItWorks.subtitle}
            <p class="howitworks-subtitle">{item.howItWorks.subtitle}</p>
          {/if}

          <div class="howitworks-grid">
            {#each item.howItWorks.steps as step (step.title)}
              <article class="howitworks-card">
                <div class="howitworks-top">
                  <span class="howitworks-step" aria-hidden="true">
                    {step.number}
                  </span>
                  <h4 class="howitworks-heading">{step.title}</h4>
                </div>
                <p class="howitworks-text">{step.description}</p>
              </article>
            {/each}
          </div>
        </div>
      </div>

      <style>
        /* HOW IT WORKS (premium) */
        .howitworks { padding: clamp(56px, 8vw, 120px) 0; }

        .howitworks-inner {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .howitworks-kicker {
          margin: 0 0 8px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.75;
        }

        .howitworks-title {
          margin: 0 0 8px;
          font-size: clamp(26px, 3.6vw, 40px);
          line-height: 1.06;
          letter-spacing: -0.01em;
        }

        .howitworks-subtitle {
          margin: 0 auto 30px;
          max-width: 760px;
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.8;
        }

        .howitworks-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-top: 10px;
          text-align: left;
        }

        .howitworks-card {
          border-radius: 18px;
          padding: 26px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }

        .howitworks-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.16);
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.5);
        }

        .howitworks-top {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 12px;
        }

        .howitworks-step {
          display: inline-grid;
          place-items: center;
          width: 56px;
          height: 56px;
          border-radius: 999px;
          background: rgba(199, 162, 90, 0.10);
          border: 1px solid rgba(199, 162, 90, 0.18);
          font-weight: 700;
          letter-spacing: 0.06em;
          opacity: 0.95;
          flex: 0 0 auto;
        }

        .howitworks-heading {
          margin: 0;
          font-size: 18px;
          line-height: 1.2;
        }

        .howitworks-text {
          margin: 0;
          font-size: 15px;
          line-height: 1.9;
          opacity: 0.82;
        }

        @media (max-width: 900px) {
          .howitworks-grid { grid-template-columns: 1fr; }
          .howitworks-card { padding: 18px; }
          .howitworks-step { width: 48px; height: 48px; }
        }
      </style>
    </section>
  {/if}

  {#if item.serviceBannerImage1}
    <div class="service-banner service-banner-1">
      <img src={item.serviceBannerImage1} alt={item.title} loading="lazy" />
    </div>
  {/if}

  {#if item.serviceBannerImage2}
    <div class="service-banner service-banner-2">
      <img src={item.serviceBannerImage2} alt={item.title} loading="lazy" />
    </div>
  {/if}

  {#if item.serviceBannerImage3}
    <div class="service-banner service-banner-3">
      <img src={item.serviceBannerImage3} alt={item.title} loading="lazy" />
    </div>
  {/if}

  {#if item.serviceBannerImage4}
    <div class="service-banner service-banner-4">
      <img src={item.serviceBannerImage4} alt={item.title} loading="lazy" />
    </div>
  {/if}

  {#if item.serviceBannerImage5}
    <div class="service-banner service-banner-5">
      <img src={item.serviceBannerImage5} alt={item.title} loading="lazy" />
    </div>
  {/if}

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
          <h3>{labels.faq}</h3>

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
    font-size: 3rem;
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
    line-height: 1.7;
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
    margin: 0 auto 1.5rem;
    max-width: 840px;
    padding: 0 1.25rem;
    display: block;
    text-align: center;
    opacity: 0.85;
  }

  .service-detail-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

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
    font-size: clamp(.8rem, 3.5vw, 3rem);
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: 1.5rem;
    padding: 0 1.5rem;
  }

  .service-qa-banner img {
    width: 100%;
    max-width: 1800px;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .service-banner {
    width: 100%;
    margin: 3rem auto;
  }

  .service-banner img {
    width: 100%;
    height: auto;
    display: block;
  }

  .service-banner-1 img,
  .service-banner-2 img,
  .service-banner-3 img,
  .service-banner-4 img,
  .service-banner-5 img {
    max-width: 900px;
    margin: 0 auto;
    border-radius: 20px;
  }
</style>