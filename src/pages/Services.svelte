<script>
  import { currentLocale, hrefFor } from "../router";
  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  $: page =
    loadPageContent("services", $currentLocale) ||
    loadPageContent("services", "en");

  $: if (page?.seo) setSeo(page.seo);

  function localizedHref(href = "#") {
    if (!href || href === "#") return href;
    if (/^(https?:|mailto:|tel:)/.test(href)) return href;
    return hrefFor(href);
  }
</script>

<section class="container services-page">
  <!-- Our Online Services -->
  <section class="services-section">
    <header class="services-header">
      <h1>{page?.online?.title ?? ""}</h1>
      <p>{page?.online?.intro ?? ""}</p>
    </header>

    <div class="cta">
      <a href={localizedHref(page?.online?.ctaHref ?? "/service")} class="btn-primary">
        {page?.online?.ctaText ?? ""}
      </a>
    </div>
  </section>

  <div class="section-divider"></div>

{#if false}
  <!-- Day-Rate Video Shoots -->
  <section class="services-section">
    <header class="services-header">
      <h1>Day-Rate Video Shoots (Japan Only)</h1>
      <p>
        Perfect for small projects, promotional videos, interviews, and social media content. Every shoot is tailored to your needs. If your project is outside Japan, please contact us, and we will do our best to accommodate your shoot.
      </p>
    </header>

    <div class="block">
      <table class="shoots-table">
        <thead>
          <tr>
            <th>Package</th>
            <th>Duration</th>
            <th>Starting Price</th>
            <th>What’s Included</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Package">Half-Day Shoot</td>
            <td data-label="Duration">up to 4 hours</td>
            <td data-label="Starting Price">¥120,000〜</td>
            <td data-label="What’s Included">
              Filming only, basic crew (camera + assistant), standard equipment (camera + lighting)
            </td>
          </tr>
          <tr>
            <td data-label="Package">Full-Day Shoot</td>
            <td data-label="Duration">up to 8 hours</td>
            <td data-label="Starting Price">¥200,000〜</td>
            <td data-label="What’s Included">
              Filming + director/producer support, basic crew (camera + assistant + lighting), standard location coordination
            </td>
          </tr>
        </tbody>
      </table>

      <h3 class="addons-header">Optional Add-Ons</h3>
      <div class="addons-grid">
        <div class="addon">Casting (Japanese / international talent)</div>
        <div class="addon">Location scouting & permits</div>
        <div class="addon">Post-production (editing, color grading, sound)</div>
        <div class="addon">Hair, makeup & wardrobe styling</div>
        <div class="addon">Transport & logistics</div>
        <div class="addon">Drone / specialty camera equipment</div>
        <div class="addon">On-set translator / production assistant</div>
      </div>

      <div class="cta">
        <a href="mailto:newbusiness@sanrokuku.com?subject=Day-Rate%20Video%20Shoot" class="btn-primary">
          Get an Estimate
        </a>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>
{/if}

  <!-- Our Film Production Services -->
  <section class="services-section">
    <header class="services-header">
      <h1>{page?.production?.title ?? ""}</h1>
      <p>{page?.production?.intro ?? ""}</p>
    </header>

    <section class="grid">
      {#each page?.production?.cards ?? [] as card}
        <article class="card">
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </article>
      {/each}
    </section>

    <p class="services-note">
      {page?.production?.note ?? ""}
    </p>

    <div class="cta">
      <a href={localizedHref(page?.production?.ctaEstimateHref ?? "#")} class="btn-primary">
        {page?.production?.ctaEstimateText ?? ""}
      </a>
      <p>{page?.production?.ctaOrText ?? ""}</p>
      <a href={localizedHref(page?.production?.ctaCallHref ?? "/strategy")} class="btn-primary">
        {page?.production?.ctaCallText ?? ""}
      </a>
    </div>
  </section>

{#if false}
  <div class="section-divider"></div>
{/if}

  <!-- Other Services -->
  <section class="services-section">
    <header class="services-header">
      <h1>{page?.other?.title ?? ""}</h1>
      <p>{page?.other?.intro ?? ""}</p>
    </header>

    <section class="grid">
      {#each page?.other?.cards ?? [] as card}
        <article class="card">
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </article>
      {/each}
    </section>

    <div class="cta">
      <a href={localizedHref(page?.other?.ctaEstimateHref ?? "#")} class="btn-primary">
        {page?.other?.ctaEstimateText ?? ""}
      </a>
    </div>
  </section>
</section>

<style>
  /* keep your CSS exactly as-is */
  .services-page {
    padding: 3.5rem 0 4rem;
  }

  .services-section {
    padding: 3rem 1rem;
    margin-bottom: 3rem;
    border-radius: var(--radius-xl);
    background: transparent;
  }

  .section-divider {
    height: 1px;
    background: rgba(255,255,255,0.03);
    margin: 3rem 0;
    width: 100%;
  }

  .services-header h1 {
    font-size: 2.1rem;
    margin-bottom: 0.4rem;
    text-align: center;
    line-height: 1.5;
  }

  .services-header p {
    color: var(--text-muted);
    max-width: 640px;
    margin: 0.2rem auto 0;
    text-align: center;
    line-height: 1.5;
  }

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

  .shoos-table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-size: 0.92rem;
    line-height: 1.5;
  }

  .shoots-table th,
  .shoots-table td {
    border: 1px solid #444;
    padding: 0.9rem;
    text-align: left;
  }

  .shoots-table th {
    background: radial-gradient(circle at top left, #16233b, #060912);
    color: #fff;
  }

  .shoots-table td {
    background: #0d172c;
  }

  .addons-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    justify-content: center;
    margin-top: 2.6rem;
    line-height: 1.5;
  }

  .addon {
    background: radial-gradient(circle at top left, #1b2a4b, #0a0f1d);
    color: #fff;
    padding: 0.8rem 1rem;
    border-radius: 0.8rem;
    font-size: 0.88rem;
    text-align: center;
    box-shadow: var(--shadow-soft);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .addon:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.5);
    cursor: pointer;
  }

  .addons-header {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.1rem;
  }

  .btn-primary.small {
    padding: 0.55rem 1.3rem;
    font-size: 0.86rem;
  }

  .block {
    margin-top: 3.5rem;
  }

  .cta {
    text-align: center;
    margin-top: 2.6rem;
  }

  .services-note {
    color: var(--text-muted);
    max-width: 640px;
    margin: 2rem auto 0;
    text-align: center;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .shoots-table {
      border: 0;
    }

    .shoots-table thead {
      display: none;
    }

    .shoots-table,
    .shoots-table tbody,
    .shoots-table tr,
    .shoots-table td {
      display: block;
      width: 100%;
    }

    .shoots-table tr {
      margin-bottom: 1.6rem;
      background: radial-gradient(circle at top left, #16233b, #060912);
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: var(--shadow-soft);
    }

    .shoots-table td {
      border: none;
      padding: 0.75rem 1rem;
      background: transparent;
      font-size: 0.9rem;
    }

    .shoots-table td:not(:last-child) {
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .shoots-table td::before {
      content: attr(data-label);
      display: block;
      font-size: 0.72rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 0.25rem;
    }
  }
</style>