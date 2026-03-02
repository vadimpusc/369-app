<script>
  import { derived } from "svelte/store";
  import { currentPath, navigate } from "./router";

  import Home from "./pages/Home.svelte";
  import Films from "./pages/Films.svelte";
  import FilmDetail from "./pages/FilmDetail.svelte";
  import Series from "./pages/Series.svelte";
  import SeriesDetail from "./pages/SeriesDetail.svelte";
  import Documentaries from "./pages/Documentaries.svelte";
  import DocumentaryDetail from "./pages/DocumentaryDetail.svelte";
  import Jobs from "./pages/Jobs.svelte";
  import JobDetail from "./pages/JobDetail.svelte";
  import About from "./pages/About.svelte";
  import Services from "./pages/Services.svelte";
  import Contact from "./pages/Contact.svelte";
  import PrivacyPolicy from "./pages/PrivacyPolicy.svelte";
  import Terms from "./pages/Terms.svelte";
  import RefundPolicy from "./pages/RefundPolicy.svelte";
  import SubmitYourFilm from "./pages/SubmitYourFilm.svelte";
  import Strategy from "./pages/Strategy.svelte";

  import Service from "./pages/Service.svelte";
  import ServiceDetail from "./pages/ServiceDetail.svelte";

  // Work pages
  import WorkPosters from "./pages/WorkPosters.svelte";
  import WorkFilmhub from "./pages/WorkFilmhub.svelte";

  // Wedding Films page
  import WeddingFilms from "./pages/wedding-films.svelte";

  // Brand Films page
  import BrandFilms from "./pages/brand-films.svelte";

  const base = import.meta.env.BASE_URL;

  let mobileOpen = false;

  const routeInfo = derived(currentPath, ($path) => {
    if ($path === "/") return { page: "home" };

    // Work routes
    if ($path === "/work/posters") return { page: "workPosters" };
    if ($path === "/work/filmhub") return { page: "workFilmhub" };

    // Wedding Films route
    if ($path === "/wedding-films") return { page: "weddingFilms" };

    // Brand Films route
    if ($path === "/brand-films") return { page: "brandFilms" };

    if ($path === "/films") return { page: "films" };
    if ($path.startsWith("/films/"))
      return { page: "film", slug: $path.replace("/films/", "") };

    if ($path === "/series") return { page: "series" };
    if ($path.startsWith("/series/"))
      return { page: "seriesDetail", slug: $path.replace("/series/", "") };

    if ($path === "/documentaries") return { page: "documentaries" };
    if ($path.startsWith("/documentaries/"))
      return { page: "docDetail", slug: $path.replace("/documentaries/", "") };

    if ($path === "/jobs") return { page: "jobs" };
    if ($path.startsWith("/jobs/"))
      return { page: "jobDetail", slug: $path.replace("/jobs/", "") };

    if ($path === "/services") return { page: "services" };
    if ($path === "/service") return { page: "service" };
    if ($path.startsWith("/service/"))
      return { page: "serviceDetail", slug: $path.replace("/service/", "") };

    if ($path === "/about") return { page: "about" };
    if ($path === "/contact") return { page: "contact" };
    if ($path === "/privacy-policy") return { page: "privacy" };
    if ($path === "/terms-and-conditions") return { page: "terms" };
    if ($path === "/refund-policy") return { page: "refund" };
    if ($path === "/submit-your-film") return { page: "submit" };
    if ($path === "/strategy") return { page: "strategy" };

    return { page: "404" };
  });

  $: r = $routeInfo;

  function go(path) {
    mobileOpen = false;
    navigate(path);
  }
</script>

<header class="srk-nav">
  <div class="container nav-inner">
    <!-- MOBILE: centered logo + hamburger (logo above hamburger) -->
    <div class="mobile-center">
      <img
        src={`${base}assets/logos/369.png`}
        alt="San Roku Ku"
        class="nav-logo mobile-top-logo"
        on:click={() => go("/")}
      />

      <button
        class="nav-left-btn"
        on:click={() => (mobileOpen = true)}
        aria-label="Open menu"
      >
        &#9776;
      </button>
    </div>

    <!-- Desktop logo -->
    <img
      src={`${base}assets/logos/369.png`}
      alt="San Roku Ku"
      class="nav-logo desktop-logo"
      on:click={() => go("/")}
    />

    <!-- Desktop links -->
    <nav class="nav-links desktop" aria-label="Main navigation">
      <button on:click={() => go("/films")}>Films</button>
      <button on:click={() => go("/documentaries")}>Documentaries</button>
      <button on:click={() => go("/series")}>Series</button>
    </nav>

    <!-- Desktop contact -->
    <div class="nav-right desktop">
      <button class="btn-primary" on:click={() => go("/services")}>Our Services</button>
    </div>
  </div>

  <!-- Mobile menu overlay -->
  <div class="mobile-overlay" class:open={mobileOpen} aria-hidden={!mobileOpen}>
    <button
      class="close-btn"
      on:click={() => (mobileOpen = false)}
      aria-label="Close menu"
    >
      ×
    </button>

    <nav class="mobile-links" aria-label="Mobile navigation">
      <button on:click={() => go("/films")}>Films</button>
      <button on:click={() => go("/documentaries")}>Documentaries</button>
      <button on:click={() => go("/series")}>Series</button>
    </nav>

    <button class="contact-btn" on:click={() => go("/services")}>Our Services</button>
  </div>
</header>

<main>
  {#if r.page === "home"}
    <Home />
  {:else if r.page === "workPosters"}
    <WorkPosters />
  {:else if r.page === "workFilmhub"}
    <WorkFilmhub />
  {:else if r.page === "weddingFilms"}
    <WeddingFilms />
  {:else if r.page === "brandFilms"}
    <BrandFilms />
  {:else if r.page === "films"}
    <Films />
  {:else if r.page === "film"}
    <FilmDetail slug={r.slug} />
  {:else if r.page === "series"}
    <Series />
  {:else if r.page === "seriesDetail"}
    <SeriesDetail slug={r.slug} />
  {:else if r.page === "documentaries"}
    <Documentaries />
  {:else if r.page === "docDetail"}
    <DocumentaryDetail slug={r.slug} />
  {:else if r.page === "jobs"}
    <Jobs />
  {:else if r.page === "jobDetail"}
    <JobDetail slug={r.slug} />
  {:else if r.page === "services"}
    <Services />
  {:else if r.page === "service"}
    <Service />
  {:else if r.page === "serviceDetail"}
    <ServiceDetail slug={r.slug} />
  {:else if r.page === "about"}
    <About />
  {:else if r.page === "contact"}
    <Contact />
  {:else if r.page === "privacy"}
    <PrivacyPolicy />
  {:else if r.page === "terms"}
    <Terms />
  {:else if r.page === "refund"}
    <RefundPolicy />
  {:else if r.page === "submit"}
    <SubmitYourFilm />
  {:else if r.page === "strategy"}
    <Strategy />
  {:else}
    <section class="container" style="padding: 5rem 0;">
      <h1>Page Not Found</h1>
      <p>Sorry, this page does not exist.</p>
    </section>
  {/if}
</main>

<footer class="srk-footer">
  <div class="container footer-inner">
    <div class="footer-columns">
      <div class="footer-col">
        <h4>Catalogue</h4>
        <a href="/films" on:click|preventDefault={() => go("/films")}>Film Catalogue</a>
        <a href="/series" on:click|preventDefault={() => go("/series")}>Series Catalogue</a>
        <a href="/documentaries" on:click|preventDefault={() => go("/documentaries")}>Documentary Catalogue</a>
        <a href="/submit-your-film" on:click|preventDefault={() => go("/submit-your-film")}>Submit for Distribution</a>
        <a href="https://development.sanrokuku.com" rel="noopener noreferrer">Development Slate</a>
      </div>

      <div class="footer-col">
        <h4>Studio</h4>
        <a href="/about" on:click|preventDefault={() => go("/about")}>About Us</a>
        <a href="/services" on:click|preventDefault={() => go("/services")}>Services For Producers</a>
        <a href="/wedding-films" on:click|preventDefault={() => go("/wedding-films")}>Wedding Films</a>
        <a href="/brand-films" on:click|preventDefault={() => go("/brand-films")}>Brand Films</a>
        <a href="/jobs" on:click|preventDefault={() => go("/jobs")}>Work Opportunities</a>
        <a href="/contact" on:click|preventDefault={() => go("/contact")}>Contact Us</a>
      </div>

      <div class="footer-col">
        <h4>Legal</h4>
        <a href="/terms-and-conditions" on:click|preventDefault={() => go("/terms-and-conditions")}>Terms and Conditions</a>
        <a href="/refund-policy" on:click|preventDefault={() => go("/refund-policy")}>Refund Policy</a>
        <a href="/privacy-policy" on:click|preventDefault={() => go("/privacy-policy")}>Privacy Policy</a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>All Rights Reserved © SAN ROKU KU</span>
    </div>
  </div>
</footer>

<style>
/* ---------- NAVBAR ---------- */
.srk-nav {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(18px);
  background: radial-gradient(circle at top, rgba(16, 19, 32, 0.96), rgba(5, 6, 10, 0.98));
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  padding: 10px;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-logo {
  height: 50px;
  cursor: pointer;
}

/* Desktop nav */
.nav-links {
  display: flex;
  gap: 1.8rem;
}

.nav-links button {
  background: none;
  border: none;
  color: var(--text-main);
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.85rem;
  position: relative;
}

.nav-links button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.4rem;
  width: 0;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, #46d5ff, var(--accent));
  transition: width 160ms ease;
}

.nav-links button:hover::after {
  width: 100%;
}

.nav-right .btn-primary {
  font-weight: 600;
  font-size: 0.85rem;
}

/* Mobile centered block (logo above hamburger) */
.mobile-center {
  display: none;
}

/* Hamburger base (hidden on desktop) */
.nav-left-btn {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  line-height: 1;
}

/* ---------- MOBILE (iPad breakpoint) ---------- */
/* iPad portrait width is 768px, but you said "iPad size", so this uses 1024px */
@media (max-width: 1024px) {
  /* Hide desktop items */
  .nav-links,
  .nav-right,
  .desktop-logo {
    display: none;
  }

  /* Show centered mobile stack */
  .mobile-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
  }

  .mobile-center .nav-logo {
    margin-top: 50px;
    height: 64px;
  }

  .nav-left-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* Make the container center the mobile stack */
  .nav-inner {
    justify-content: center;
  }

  /* Overlay */
  .mobile-overlay {
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    inset: 0;
    background: #000;
    padding: 2rem 1rem;
    z-index: 50;
  }

  .mobile-overlay.open {
    display: flex;
    background: #000;
    height: 100vh;
  }

  .close-btn {
    font-size: 2rem !important;
    color: #fff;
    background: none;
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

  .mobile-links {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    text-align: center;
    margin-top: 4rem;
  }

  .mobile-overlay button {
    font-size: 1.2rem;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
  }

  .mobile-overlay .contact-btn {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    background: var(--accent);
    color: #fff;
    margin-bottom: 2rem;
  }
}

/* Desktop only: hide overlay regardless */
@media (min-width: 1025px) {
  .mobile-overlay {
    display: none !important;
  }
}

/* ---------- FOOTER ---------- */
.srk-footer {
  padding: 3rem 0 2rem;
  background: radial-gradient(circle at top, #050711, #010208);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  margin-top: 4rem;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.8rem;
}

.footer-col h4 {
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  color: var(--text-main);
}

.footer-col a {
  display: block;
  margin-bottom: 0.2rem;
  cursor: pointer;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  padding-top: 1rem;
}

/* ---------- CLEAN COMPACT MOBILE FOOTER ---------- */
@media (max-width: 1024px) {

  .srk-footer {
    padding: 2rem 0 1.2rem;
    margin-top: 2.5rem;
  }

  .footer-inner {
    gap: 1.8rem;
    text-align: center;
    font-size: 0.85rem;
  }

  /* Stack columns cleanly */
  .footer-columns {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  .footer-col h4 {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.85);
  }

  .footer-col a {
    display: block;
    margin: 0.3rem 0;
    font-size: 0.82rem;
    color: rgba(255,255,255,0.55);
    text-decoration: none;
  }

  .footer-col a:hover {
    color: rgba(255,255,255,0.85);
  }

  /* Bottom line minimal */
  .footer-bottom {
    border-top: none;
    padding-top: 0.5rem;
    font-size: 0.75rem;
    color: rgba(255,255,255,0.4);
  }

}
</style>