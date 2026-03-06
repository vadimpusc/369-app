<script>
  import { currentLocale } from "../router";
  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  let loc = "uk";

  $: page =
    loadPageContent("brand-films", $currentLocale) ||
    loadPageContent("brand-films", "en");

  $: if (page?.seo) setSeo(page.seo);

  const emailBase =
    "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20a%20brand%20or%20corporate%20film.%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%20(16%3A9%2C%209%3A16%2C%201%3A1)%3A%0A%2D%20Estimated%20budget%3A%0A%0AThank%20you%2C";

  const packageEmails = {
    uk: {
      solo: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(UK)%20-%20Solo&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Solo%20package%20(UK).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C",
      crew: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(UK)%20-%20Crew&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Crew%20package%20(UK).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C",
      production: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(UK)%20-%20Production&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Production%20package%20(UK).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C"
    },
    usa: {
      solo: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(USA)%20-%20Solo&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Solo%20package%20(USA).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C",
      crew: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(USA)%20-%20Crew&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Crew%20package%20(USA).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C",
      production: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(USA)%20-%20Production&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Production%20package%20(USA).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C"
    },
    eu: {
      solo: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(Europe)%20-%20Solo&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Solo%20package%20(Europe).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C",
      crew: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(Europe)%20-%20Crew&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Crew%20package%20(Europe).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C",
      production: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(Europe)%20-%20Production&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Production%20package%20(Europe).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C"
    },
    jp: {
      solo: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(Japan)%20-%20Solo&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Solo%20package%20(Japan).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C",
      crew: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(Japan)%20-%20Crew&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Crew%20package%20(Japan).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C",
      production: "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(Japan)%20-%20Production&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Production%20package%20(Japan).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C"
    }
  };

  const packageOrder = ["solo", "crew", "production"];
  const locationOrder = ["uk", "usa", "eu", "jp"];

  const get = (obj, path, fallback = "") => {
    try {
      return path.split(".").reduce((acc, key) => acc?.[key], obj) ?? fallback;
    } catch {
      return fallback;
    }
  };

  $: availableLocations = locationOrder.filter((key) => page?.toggle?.[key] && page?.packages?.[key]);

  $: if (page && !availableLocations.includes(loc) && availableLocations.length) {
    loc = availableLocations[0];
  }

  function getPackageEmail(location, tier) {
    return packageEmails[location]?.[tier] || emailBase;
  }

  function getCtaLabel() {
    return loc === "jp"
      ? get(page, "labels.checkAvailability", "Check Availability")
      : get(page, "labels.requestQuote", "Request a Quote");
  }
</script>

<section class="container brand-page">
  <header class="brand-header">
    <p class="brand-kicker">{get(page, "hero.kicker", "Brand Films")}</p>
    <h1>{get(page, "hero.title", "")}</h1>
    <p class="brand-subtitle">{get(page, "hero.subtitle", "")}</p>

    <div class="brand-toggle" role="tablist" aria-label="Location toggle">
      {#each availableLocations as key}
        <button
          class="toggle-btn"
          class:is-active={loc === key}
          type="button"
          role="tab"
          aria-selected={loc === key}
          on:click={() => (loc = key)}
        >
          {get(page, `toggle.${key}`, key)}
        </button>
      {/each}
    </div>

    <div class="brand-cta-row">
      <p class="brand-cta-note">{get(page, "hero.note", "")}</p>
    </div>
  </header>

  {#if page?.packages?.[loc]}
    <section class="brand-loc is-visible" role="tabpanel" aria-label={`${get(page, `toggle.${loc}`, loc)} pricing`}>
      <div class="brand-grid">
        {#each packageOrder as tier, index}
          <article class="pkg-card" class:pkg-featured={tier === "crew"} aria-label={tier === "crew" ? "Featured package" : undefined}>
            {#if tier === "crew"}
              <div class="pkg-badge">{get(page, "labels.bestValue", "Best Value")}</div>
            {/if}

            <div class="pkg-top">
              <h2 class="pkg-name">{get(page, `packages.${loc}.${tier}.name`, "")}</h2>
              <p class="pkg-price">
                <span class="from">{get(page, "labels.from", "From")}</span>
                <span class="money">{get(page, `packages.${loc}.${tier}.price`, "")}</span>
              </p>
              <p class="pkg-meta">{get(page, `packages.${loc}.${tier}.meta`, "")}</p>
            </div>

            <ul class="pkg-list">
              {#each get(page, `packages.${loc}.${tier}.items`, []) as item}
                <li>{item}</li>
              {/each}
            </ul>

            <div class="pkg-bottom">
              <a
                class="srk-btn"
                class:srk-btn-primary={tier === "crew"}
                class:srk-btn-ghost={tier !== "crew"}
                href={getPackageEmail(loc, tier)}
              >
                {getCtaLabel()}
              </a>
            </div>
          </article>
        {/each}
      </div>

      <section class="brand-addons">
        <div class="addons-card">
          <h3>{get(page, "addons.title", "Add-ons")}</h3>
          <ul>
            {#each get(page, "addons.items", []) as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>

        <div class="addons-card">
          <h3>{get(page, "included.title", "What’s included")}</h3>
          <ul>
            {#each get(page, "included.items", []) as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
      </section>
    </section>
  {/if}

  <p class="brand-note">
    {get(page, "footerNote", "Travel, permits, complex locations, or tight deadlines can affect quotes.")}
  </p>
</section>

<style>
  .brand-page {
    padding: 3.8rem 0 4.2rem;
  }

  .brand-header {
    text-align: center;
    max-width: 980px;
    margin: 0 auto;
    padding: 60px 20px 30px;
  }

  .brand-kicker {
    letter-spacing: 0.22em;
    text-transform: uppercase;
    font-size: 0.78rem;
    color: var(--text-muted);
    margin: 0 0 0.7rem;
  }

  .brand-header h1 {
    font-size: clamp(2.1rem, 4vw, 3rem);
    margin: 0 0 0.9rem;
    line-height: 1.1;
  }

  .brand-subtitle {
    font-size: 1.08rem;
    line-height: 1.55;
    margin: 0 auto;
    max-width: 860px;
    color: rgba(255, 255, 255, 0.86);
  }

  .brand-toggle {
    margin: 1.6rem auto 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
    border: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.34);
    flex-wrap: wrap;
    justify-content: center;
  }

  .toggle-btn {
    border: 0;
    cursor: pointer;
    border-radius: 999px;
    padding: 12px 18px;
    min-height: 44px;
    font-size: 0.95rem;
    line-height: 1;
    color: rgba(255, 255, 255, 0.78);
    background: transparent;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
    outline: none;
    user-select: none;
    white-space: nowrap;
  }

  .toggle-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.96);
  }

  .toggle-btn.is-active {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.08));
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: #fff;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  .brand-cta-row {
    margin-top: 1.4rem;
    display: grid;
    gap: 0.6rem;
    justify-items: center;
  }

  .brand-cta-note {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-muted);
  }

  .brand-loc {
    margin-top: 2.2rem;
  }

  .brand-grid {
    margin-top: 1.2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.6rem;
  }

  .pkg-card {
    position: relative;
    background: radial-gradient(circle at top left, #16233b, #060912);
    border-radius: var(--radius-xl);
    padding: 1.6rem 1.8rem 1.4rem;
    box-shadow: var(--shadow-soft);
    border: 1px solid rgba(255, 255, 255, 0.10);
    line-height: 1.55;
  }

  .pkg-featured {
    background: radial-gradient(circle at top left, #1c2d52, #070a14);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 0 26px rgba(255, 255, 255, 0.06), var(--shadow-soft);
    transform: translateY(-2px);
  }

  .pkg-badge {
    position: absolute;
    top: 14px;
    right: 14px;
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 8px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(8px);
  }

  .pkg-top {
    display: grid;
    gap: 0.35rem;
    margin-bottom: 0.85rem;
  }

  .pkg-name {
    margin: 0;
    font-size: 1.35rem;
    text-align: left;
  }

  .pkg-price {
    margin: 0;
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.9);
  }

  .pkg-price .from {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.68);
    margin-right: 6px;
  }

  .pkg-price .money {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .pkg-meta {
    margin: 0.15rem 0 0;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.68);
  }

  .pkg-list {
    margin: 0;
    padding-left: 1.15rem;
    font-size: 0.98rem;
    color: rgba(255, 255, 255, 0.86);
  }

  .pkg-bottom {
    margin-top: 1.1rem;
    display: flex;
    justify-content: flex-start;
  }

  .brand-addons {
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.2rem;
  }

  .addons-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: var(--radius-xl);
    padding: 1.4rem 1.6rem;
    box-shadow: var(--shadow-soft);
  }

  .addons-card h3 {
    margin: 0 0 0.6rem;
    font-size: 1.15rem;
    text-align: center;
  }

  .addons-card ul {
    margin: 0;
    padding-left: 1.15rem;
    color: rgba(255, 255, 255, 0.84);
    list-style: none;
  }

  .brand-note {
    margin: 2rem auto 0;
    max-width: 900px;
    text-align: center;
    font-size: 0.88rem;
    color: var(--text-muted);
    line-height: 1.5;
    padding: 0 20px;
  }

  .srk-btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    font-weight: 500;
    backdrop-filter: blur(6px);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.4);
    transition: 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .srk-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 0 22px rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
  }

  .srk-btn-primary {
    background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.06));
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 0 auto;
  }

  .srk-btn-ghost {
    background: rgba(255, 255, 255, 0.05);
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    .brand-toggle {
      width: 100%;
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      border-radius: 24px;
    }

    .toggle-btn {
      width: 100%;
      justify-self: stretch;
      text-align: center;
    }
  }
</style>