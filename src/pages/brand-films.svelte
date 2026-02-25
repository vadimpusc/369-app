<script>
  let loc = "uk"; // "uk" | "jp"

  // Base enquiry
  const emailBase =
    "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20a%20brand%20or%20corporate%20film.%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%20(16%3A9%2C%209%3A16%2C%201%3A1)%3A%0A%2D%20Estimated%20budget%3A%0A%0AThank%20you%2C";

  // UK
  const emailUKSolo =
    "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(UK)%20-%20Solo&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Solo%20package%20(UK).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C";

  const emailUKCrew =
    "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(UK)%20-%20Crew&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Crew%20package%20(UK).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C";

  const emailUKProduction =
    "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(UK)%20-%20Production&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Production%20package%20(UK).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C";

  // JP
  const emailJPSolo =
    "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(Japan)%20-%20Solo&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Solo%20package%20(Japan).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C";

  const emailJPCrew =
    "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(Japan)%20-%20Crew&body=Hi%20San%20Roku%20Ku%2C%0A%0A%27d%20like%20a%20quote%20for%20the%20Crew%20package%20(Japan).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C";

  const emailJPProduction =
    "mailto:newbusiness@sanrokuku.com?subject=Brand%20Film%20Enquiry%20(Japan)%20-%20Production&body=Hi%20San%20Roku%20Ku%2C%0A%0AI%27d%20like%20a%20quote%20for%20the%20Production%20package%20(Japan).%0A%0A%2D%20Company%3A%0A%2D%20Project%20goal%3A%0A%2D%20Shoot%20date(s)%3A%0A%2D%20Location%3A%0A%2D%20Deliverables%3A%0A%0AThank%20you%2C";
</script>

<section class="container brand-page">
  <header class="brand-header">
    <p class="brand-kicker">Brand Films</p>
    <h1>Premium promos for brands that care about craft.</h1>
    <p class="brand-subtitle">
      Director-led production for corporate, promo, and social campaigns. Choose your location to view pricing.
    </p>

    <div class="brand-toggle" role="tablist" aria-label="Location toggle">
      <button
        class="toggle-btn"
        class:is-active={loc === "uk"}
        type="button"
        aria-selected={loc === "uk"}
        on:click={() => (loc = "uk")}
      >
        United Kingdom
      </button>

      <button
        class="toggle-btn"
        class:is-active={loc === "jp"}
        type="button"
        aria-selected={loc === "jp"}
        on:click={() => (loc = "jp")}
      >
        Japan
      </button>
    </div>

    <div class="brand-cta-row">
      <p class="brand-cta-note">Clear pricing. Limited monthly capacity to protect quality.</p>
    </div>
  </header>

  {#if loc === "uk"}
    <!-- LOCATION: UK -->
    <section class="brand-loc is-visible" role="tabpanel" aria-label="United Kingdom pricing">
      <div class="brand-grid">
        <article class="pkg-card">
          <div class="pkg-top">
            <h2 class="pkg-name">Solo</h2>
            <p class="pkg-price"><span class="from">From</span> <span class="money">£950</span></p>
            <p class="pkg-meta">Half-day shoot (up to 4 hours)</p>
          </div>
          <ul class="pkg-list">
            <li>One shooter, camera + audio basics</li>
            <li>Ideal for offices, interviews, events</li>
            <li>1x hero edit (60 to 120 seconds)</li>
            <li>2x social cutdowns (9:16 or 1:1)</li>
            <li>Online delivery</li>
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-ghost" href={emailUKSolo}>Request a Quote</a>
          </div>
        </article>

        <article class="pkg-card pkg-featured" aria-label="Featured package">
          <div class="pkg-badge">Best Value</div>
          <div class="pkg-top">
            <h2 class="pkg-name">Crew</h2>
            <p class="pkg-price"><span class="from">From</span> <span class="money">£2,750</span></p>
            <p class="pkg-meta">Full-day shoot (up to 10 hours)</p>
          </div>
          <ul class="pkg-list">
            <li>Small crew (producer + camera + sound)</li>
            <li>Lighting for interviews and key scenes</li>
            <li>1x hero film (90 seconds to 3 minutes)</li>
            <li>4x social cutdowns</li>
            <li>Basic brand graphics and subtitles</li>
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-primary" href={emailUKCrew}>Request a Quote</a>
          </div>
        </article>

        <article class="pkg-card">
          <div class="pkg-top">
            <h2 class="pkg-name">Production</h2>
            <p class="pkg-price"><span class="from">From</span> <span class="money">£6,900</span></p>
            <p class="pkg-meta">Designed for launches and campaigns</p>
          </div>
          <ul class="pkg-list">
            <li>Larger crew (director + DP + sound + lighting)</li>
            <li>Pre-production planning and shot design</li>
            <li>1x hero film (2 to 5 minutes)</li>
            <li>8x social deliverables</li>
            <li>Advanced motion graphics option</li>
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-ghost" href={emailUKProduction}>Request a Quote</a>
          </div>
        </article>
      </div>

      <section class="brand-addons">
        <div class="addons-card">
          <h3>Add-ons</h3>
          <ul>
            <li>Second camera operator</li>
            <li>Drone (where permitted)</li>
            <li>Voice-over recording</li>
            <li>Motion graphics and titles</li>
            <li>Subtitles (EN, JP)</li>
            <li>Extra deliverables for paid ads</li>
          </ul>
        </div>

        <div class="addons-card">
          <h3>What’s included</h3>
          <ul>
            <li>Simple process, clear schedule, calm set</li>
            <li>Cinematic lighting and natural colour</li>
            <li>Professional audio priorities</li>
            <li>Deliverables optimised for web and social</li>
          </ul>
        </div>
      </section>
    </section>
  {:else}
    <!-- LOCATION: JP -->
    <section class="brand-loc is-visible" role="tabpanel" aria-label="Japan pricing">
      <div class="brand-grid">
        <article class="pkg-card">
          <div class="pkg-top">
            <h2 class="pkg-name">Solo</h2>
            <p class="pkg-price"><span class="from">From</span> <span class="money">¥150,000</span></p>
            <p class="pkg-meta">Half-day shoot (up to 4 hours)</p>
          </div>
          <ul class="pkg-list">
            <li>One shooter, camera + audio basics</li>
            <li>Ideal for offices, interviews, events</li>
            <li>1x hero edit (60 to 120 seconds)</li>
            <li>2x social cutdowns (9:16 or 1:1)</li>
            <li>Online delivery</li>
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-ghost" href={emailJPSolo}>Check Availability</a>
          </div>
        </article>

        <article class="pkg-card pkg-featured" aria-label="Featured package">
          <div class="pkg-badge">Best Value</div>
          <div class="pkg-top">
            <h2 class="pkg-name">Crew</h2>
            <p class="pkg-price"><span class="from">From</span> <span class="money">¥420,000</span></p>
            <p class="pkg-meta">Full-day shoot (up to 10 hours)</p>
          </div>
          <ul class="pkg-list">
            <li>Small crew (producer + camera + sound)</li>
            <li>Lighting for interviews and key scenes</li>
            <li>1x hero film (90 seconds to 3 minutes)</li>
            <li>4x social cutdowns</li>
            <li>Basic brand graphics and subtitles</li>
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-primary" href={emailJPCrew}>Check Availability</a>
          </div>
        </article>

        <article class="pkg-card">
          <div class="pkg-top">
            <h2 class="pkg-name">Production</h2>
            <p class="pkg-price"><span class="from">From</span> <span class="money">¥980,000</span></p>
            <p class="pkg-meta">Designed for launches and campaigns</p>
          </div>
          <ul class="pkg-list">
            <li>Larger crew (director + DP + sound + lighting)</li>
            <li>Pre-production planning and shot design</li>
            <li>1x hero film (2 to 5 minutes)</li>
            <li>8x social deliverables</li>
            <li>Advanced motion graphics option</li>
          </ul>
          <div class="pkg-bottom">
            <a class="srk-btn srk-btn-ghost" href={emailJPProduction}>Check Availability</a>
          </div>
        </article>
      </div>

      <section class="brand-addons">
        <div class="addons-card">
          <h3>Add-ons</h3>
          <ul>
            <li>Second camera operator</li>
            <li>Drone (where permitted)</li>
            <li>Voice-over recording</li>
            <li>Motion graphics and titles</li>
            <li>Subtitles (EN, JP)</li>
            <li>Extra deliverables for paid ads</li>
          </ul>
        </div>

        <div class="addons-card">
          <h3>What’s included</h3>
          <ul>
            <li>Simple process, clear schedule, calm set</li>
            <li>Cinematic lighting and natural colour</li>
            <li>Professional audio priorities</li>
            <li>Deliverables optimised for web and social</li>
          </ul>
        </div>
      </section>
    </section>
  {/if}

  <p class="brand-note">
    Travel, permits, complex locations, or tight deadlines can affect quotes.
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
</style>