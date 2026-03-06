<script>
  import { currentLocale } from "../router";
  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  let loc = "uk";

  const emailBase =
    "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20Request&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20a%20wedding%20film.%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%2D%20Package%20interest%3A%0A%0AThank%20you%2C";

  const packageEmails = {
    uk: {
      essential:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(UK)%20-%20Essential&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Essential%20package%20(UK).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C",
      signature:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(UK)%20-%20Signature&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Signature%20package%20(UK).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C",
      directors:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(UK)%20-%20Director%27s%20Cut&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Director%27s%20Cut%20package%20(UK).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C"
    },
    usa: {
      essential:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(USA)%20-%20Essential&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Essential%20package%20(USA).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C",
      signature:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(USA)%20-%20Signature&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Signature%20package%20(USA).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C",
      directors:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(USA)%20-%20Director%27s%20Cut&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Director%27s%20Cut%20package%20(USA).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C"
    },
    eu: {
      essential:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(Europe)%20-%20Essential&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Essential%20package%20(Europe).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C",
      signature:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(Europe)%20-%20Signature&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Signature%20package%20(Europe).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C",
      directors:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(Europe)%20-%20Director%27s%20Cut&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Director%27s%20Cut%20package%20(Europe).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C"
    },
    jp: {
      essential:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(Japan)%20-%20Essential&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Essential%20package%20(Japan).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C",
      signature:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(Japan)%20-%20Signature&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Signature%20package%20(Japan).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C",
      directors:
        "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(Japan)%20-%20Director%27s%20Cut&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Director%27s%20Cut%20package%20(Japan).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C"
    }
  };

  const packageOrder = ["essential", "signature", "directors"];
  const locationOrder = ["uk", "usa", "eu", "jp"];

  const get = (obj, path, fallback = "") => {
    try {
      return path.split(".").reduce((acc, key) => acc?.[key], obj) ?? fallback;
    } catch {
      return fallback;
    }
  };

  $: page =
    loadPageContent("wedding-films", $currentLocale) ||
    loadPageContent("wedding-films", "en");

  $: if (page?.seo) setSeo(page.seo);

  $: availableLocations = locationOrder.filter((key) => page?.toggle?.[key]);

  $: if (page && !availableLocations.includes(loc) && availableLocations.length) {
    loc = availableLocations[0];
  }

  function getPackageEmail(location, tier) {
    return packageEmails[location]?.[tier] || emailBase;
  }
</script>

<section class="container wedding-page">
  <header class="wedding-header">
    <p class="wedding-kicker">{get(page, "hero.kicker", "")}</p>
    <h1>{get(page, "hero.title", "")}</h1>
    <p class="wedding-subtitle">{get(page, "hero.subtitle", "")}</p>

    <div class="wedding-toggle" role="tablist" aria-label="Location toggle">
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

    <div class="wedding-cta-row">
      <p class="wedding-cta-note">{get(page, "hero.note", "")}</p>
    </div>
  </header>

  <section class="wedding-loc is-visible" aria-label={`${get(page, `toggle.${loc}`, loc)} pricing`}>
    <div class="wedding-grid">
      {#each packageOrder as tier}
        <article class="pkg-card" class:pkg-featured={tier === "signature"} aria-label={tier === "signature" ? "Featured package" : undefined}>
          {#if tier === "signature"}
            <div class="pkg-badge">{get(page, `packages.${tier}.badge`, "Most Popular")}</div>
          {/if}

          <div class="pkg-top">
            <h2 class="pkg-name">{get(page, `packages.${tier}.name`, "")}</h2>
            <p class="pkg-price">
              <span class="from">{get(page, "common.from", "From")}</span>
              <span class="money">{get(page, `packages.${tier}.prices.${loc}`, "")}</span>
            </p>
          </div>

          <ul class="pkg-list">
            {#each get(page, `packages.${tier}.bullets`, []) as b}
              <li>{b}</li>
            {/each}
          </ul>

          <div class="pkg-bottom">
            <a
              class="srk-btn"
              class:srk-btn-primary={tier === "signature"}
              class:srk-btn-ghost={tier !== "signature"}
              href={getPackageEmail(loc, tier)}
            >
              {get(page, "common.checkAvailability", "Check Availability")}
            </a>
          </div>
        </article>
      {/each}
    </div>

    <section class="wedding-addons">
      <div class="addons-card">
        <h3>{get(page, "common.addonsTitle", "Add-ons")}</h3>
        <ul>
          {#each get(page, "addons", []) as a}
            <li>{a}</li>
          {/each}
        </ul>
      </div>

      <div class="addons-card">
        <h3>{get(page, "common.expectTitle", "What to expect")}</h3>
        <ul>
          {#each get(page, "expect", []) as e}
            <li>{e}</li>
          {/each}
        </ul>
      </div>
    </section>
  </section>

  <p class="wedding-note">{get(page, "finalNote", "")}</p>
</section>

<style>
  .wedding-page {
    padding: 3.8rem 0 4.2rem;
  }

  .wedding-header {
    text-align: center;
    max-width: 980px;
    margin: 0 auto;
    padding: 60px 20px 30px;
  }

  .wedding-kicker {
    letter-spacing: 0.22em;
    text-transform: uppercase;
    font-size: 0.78rem;
    color: var(--text-muted);
    margin: 0 0 0.7rem;
  }

  .wedding-header h1 {
    font-size: clamp(2.1rem, 4vw, 3rem);
    margin: 0 0 0.9rem;
    line-height: 1.1;
  }

  .wedding-subtitle {
    font-size: 1.08rem;
    line-height: 1.55;
    margin: 0 auto;
    max-width: 860px;
    color: rgba(255, 255, 255, 0.86);
  }

  .wedding-toggle {
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

  .wedding-cta-row {
    margin-top: 1.4rem;
    display: grid;
    gap: 0.6rem;
    justify-items: center;
  }

  .wedding-cta-note {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-muted);
  }

  .wedding-loc {
    margin-top: 2.2rem;
  }

  .wedding-grid {
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

  .wedding-addons {
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

  .wedding-note {
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
    .wedding-toggle {
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