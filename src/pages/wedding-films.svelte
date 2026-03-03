<script>
  import { currentLocale } from "../router";
  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  let loc = "uk"; // "uk" | "jp"

  const emailBase =
    "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20Request&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20a%20wedding%20film.%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%2D%20Package%20interest%3A%0A%0AThank%20you%2C";

  const emailUKEssential =
    "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(UK)%20-%20Essential&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Essential%20package%20(UK).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C";

  const emailUKSignature =
    "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(UK)%20-%20Signature&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Signature%20package%20(UK).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C";

  const emailUKDirectors =
    "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(UK)%20-%20Director%27s%20Cut&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Director%27s%20Cut%20package%20(UK).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C";

  const emailJPEssential =
    "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(Japan)%20-%20Essential&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Essential%20package%20(Japan).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C";

  const emailJPSignature =
    "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(Japan)%20-%20Signature&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Signature%20package%20(Japan).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C";

  const emailJPDirectors =
    "mailto:newbusiness@sanrokuku.com?subject=Wedding%20Film%20Availability%20(Japan)%20-%20Director%27s%20Cut&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20to%20check%20availability%20for%20the%20Director%27s%20Cut%20package%20(Japan).%0A%0A%2D%20Date%3A%0A%2D%20Location%3A%0A%2D%20Venue%3A%0A%2D%20Coverage%20hours%3A%0A%0AThank%20you%2C";

  $: page =
    loadPageContent("wedding-films", $currentLocale) ||
    loadPageContent("wedding-films", "en");

  $: if (page?.seo) setSeo(page.seo);

  $: hero = page?.hero || {};
  $: common = page?.common || {};
  $: pkgs = page?.packages || {};
</script>

<section class="container wedding-page">
  <header class="wedding-header">
    <p class="wedding-kicker">{hero.kicker ?? ""}</p>
    <h1>{hero.title ?? ""}</h1>
    <p class="wedding-subtitle">{hero.subtitle ?? ""}</p>

    <div class="wedding-toggle" role="tablist" aria-label="Location toggle">
      <button
        class="toggle-btn"
        class:is-active={loc === "uk"}
        type="button"
        aria-selected={loc === "uk"}
        on:click={() => (loc = "uk")}
      >
        {hero.toggleUk ?? "United Kingdom"}
      </button>

      <button
        class="toggle-btn"
        class:is-active={loc === "jp"}
        type="button"
        aria-selected={loc === "jp"}
        on:click={() => (loc = "jp")}
      >
        {hero.toggleJp ?? "Japan"}
      </button>
    </div>

    <div class="wedding-cta-row">
      <p class="wedding-cta-note">{hero.note ?? ""}</p>
    </div>
  </header>

  {#if loc === "uk"}
    <section class="wedding-loc is-visible" role="tabpanel" aria-label="United Kingdom pricing">
      <div class="wedding-grid">
        <article class="pkg-card">
          <div class="pkg-top">
            <h2 class="pkg-name">{pkgs?.essential?.name ?? "Essential"}</h2>
            <p class="pkg-price">
              <span class="from">{common.from ?? "From"}</span>
              <span class="money">{pkgs?.essential?.ukPrice ?? "£1,450"}</span>
            </p>
          </div>
          <ul class="pkg-list">
            {#each pkgs?.essential?.bullets ?? [] as b}
              <li>{b}</li>
            {/each}
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-ghost" href={emailUKEssential}>
              {common.checkAvailability ?? "Check Availability"}
            </a>
          </div>
        </article>

        <article class="pkg-card pkg-featured" aria-label="Featured package">
          <div class="pkg-badge">{pkgs?.signature?.badge ?? "Most Popular"}</div>
          <div class="pkg-top">
            <h2 class="pkg-name">{pkgs?.signature?.name ?? "Signature"}</h2>
            <p class="pkg-price">
              <span class="from">{common.from ?? "From"}</span>
              <span class="money">{pkgs?.signature?.ukPrice ?? "£1,950"}</span>
            </p>
          </div>
          <ul class="pkg-list">
            {#each pkgs?.signature?.bullets ?? [] as b}
              <li>{b}</li>
            {/each}
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-primary" href={emailUKSignature}>
              {common.checkAvailability ?? "Check Availability"}
            </a>
          </div>
        </article>

        <article class="pkg-card">
          <div class="pkg-top">
            <h2 class="pkg-name">{pkgs?.directors?.name ?? "Director’s Cut"}</h2>
            <p class="pkg-price">
              <span class="from">{common.from ?? "From"}</span>
              <span class="money">{pkgs?.directors?.ukPrice ?? "£2,600"}</span>
            </p>
          </div>
          <ul class="pkg-list">
            {#each pkgs?.directors?.bullets ?? [] as b}
              <li>{b}</li>
            {/each}
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-ghost" href={emailUKDirectors}>
              {common.checkAvailability ?? "Check Availability"}
            </a>
          </div>
        </article>
      </div>

      <section class="wedding-addons">
        <div class="addons-card">
          <h3>{common.addonsTitle ?? "Add-ons"}</h3>
          <ul>
            {#each page?.addons ?? [] as a}
              <li>{a}</li>
            {/each}
          </ul>
        </div>

        <div class="addons-card">
          <h3>{common.expectTitle ?? "What to expect"}</h3>
          <ul>
            {#each page?.expect ?? [] as e}
              <li>{e}</li>
            {/each}
          </ul>
        </div>
      </section>
    </section>
  {:else}
    <section class="wedding-loc is-visible" role="tabpanel" aria-label="Japan pricing">
      <div class="wedding-grid">
        <article class="pkg-card">
          <div class="pkg-top">
            <h2 class="pkg-name">{pkgs?.essential?.name ?? "Essential"}</h2>
            <p class="pkg-price">
              <span class="from">{common.from ?? "From"}</span>
              <span class="money">{pkgs?.essential?.jpPrice ?? "¥220,000"}</span>
            </p>
          </div>
          <ul class="pkg-list">
            {#each pkgs?.essential?.bullets ?? [] as b}
              <li>{b}</li>
            {/each}
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-ghost" href={emailJPEssential}>
              {common.checkAvailability ?? "Check Availability"}
            </a>
          </div>
        </article>

        <article class="pkg-card pkg-featured" aria-label="Featured package">
          <div class="pkg-badge">{pkgs?.signature?.badge ?? "Most Popular"}</div>
          <div class="pkg-top">
            <h2 class="pkg-name">{pkgs?.signature?.name ?? "Signature"}</h2>
            <p class="pkg-price">
              <span class="from">{common.from ?? "From"}</span>
              <span class="money">{pkgs?.signature?.jpPrice ?? "¥290,000"}</span>
            </p>
          </div>
          <ul class="pkg-list">
            {#each pkgs?.signature?.bullets ?? [] as b}
              <li>{b}</li>
            {/each}
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-primary" href={emailJPSignature}>
              {common.checkAvailability ?? "Check Availability"}
            </a>
          </div>
        </article>

        <article class="pkg-card">
          <div class="pkg-top">
            <h2 class="pkg-name">{pkgs?.directors?.name ?? "Director’s Cut"}</h2>
            <p class="pkg-price">
              <span class="from">{common.from ?? "From"}</span>
              <span class="money">{pkgs?.directors?.jpPrice ?? "¥380,000"}</span>
            </p>
          </div>
          <ul class="pkg-list">
            {#each pkgs?.directors?.bullets ?? [] as b}
              <li>{b}</li>
            {/each}
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-ghost" href={emailJPDirectors}>
              {common.checkAvailability ?? "Check Availability"}
            </a>
          </div>
        </article>
      </div>

      <section class="wedding-addons">
        <div class="addons-card">
          <h3>{common.addonsTitle ?? "Add-ons"}</h3>
          <ul>
            {#each page?.addons ?? [] as a}
              <li>{a}</li>
            {/each}
          </ul>
        </div>

        <div class="addons-card">
          <h3>{common.expectTitle ?? "What to expect"}</h3>
          <ul>
            {#each page?.expect ?? [] as e}
              <li>{e}</li>
            {/each}
          </ul>
        </div>
      </section>
    </section>
  {/if}

  <p class="wedding-note">{page?.finalNote ?? ""}</p>
</section>

<style>
  /* your CSS stays exactly the same */
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
    gap: 8px;
    padding: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(8px);
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.45);
  }

  .toggle-btn {
    border: 0;
    cursor: pointer;
    border-radius: 999px;
    padding: 10px 16px;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
    background: transparent;
    transition: 0.2s ease;
    outline: none;
    user-select: none;
  }

  .toggle-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.95);
  }

  .toggle-btn.is-active {
    background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.06));
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: #fff;
    box-shadow: 0 0 18px rgba(255, 255, 255, 0.06);
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
    text-align: left;
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
</style>