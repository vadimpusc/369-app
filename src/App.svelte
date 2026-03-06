<script>
  import { derived } from "svelte/store";
  import { onMount } from "svelte";
  import {
    routePath,
    currentLocale,
    navigate,
    switchLocale,
    ensureLocaleInUrl,
    hrefFor
  } from "./router";

  import { setUiLocale, t } from "./lib/i18n";

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

  onMount(() => {
    ensureLocaleInUrl();
  });

  // Keep UI dictionary in sync with URL locale
  $: setUiLocale($currentLocale);

  const routeInfo = derived(routePath, ($path) => {
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

{#key $currentLocale}
<header class="srk-nav">
  <div class="container nav-inner">
    <!-- MOBILE: centered logo + hamburger (logo above hamburger) -->
    <div class="mobile-center">
      <a href={hrefFor("/")} on:click|preventDefault={() => go("/")} aria-label="San Roku Ku home">
        <img
          src={`${base}assets/logos/369.png`}
          alt="San Roku Ku"
          class="nav-logo mobile-top-logo"
        />
      </a>

      <button
        class="nav-left-btn"
        on:click={() => (mobileOpen = true)}
        aria-label="Open menu"
      >
        &#9776;
      </button>
    </div>

    <!-- Desktop logo -->
    <a href={hrefFor("/")} on:click|preventDefault={() => go("/")} aria-label="San Roku Ku home">
      <img
        src={`${base}assets/logos/369.png`}
        alt="San Roku Ku"
        class="nav-logo desktop-logo"
      />
    </a>

    <!-- Desktop links -->
    <nav class="nav-links desktop" aria-label="Main navigation">
      <a href={hrefFor("/about")} on:click|preventDefault={() => go("/about")}>{t("nav.about")}</a>
      <a href={hrefFor("/films")} on:click|preventDefault={() => go("/films")}>{t("nav.films")}</a>
      <a href={hrefFor("/documentaries")} on:click|preventDefault={() => go("/documentaries")}>{t("nav.documentaries")}</a>
      <a href={hrefFor("/series")} on:click|preventDefault={() => go("/series")}>{t("nav.series")}</a>
      <a href={hrefFor("/services")} on:click|preventDefault={() => go("/services")}>{t("nav.services")}</a>
      <a href={hrefFor("/contact")} on:click|preventDefault={() => go("/contact")}>{t("nav.contact")}</a>
    </nav>

    <!-- Desktop right (language only) -->
    <div class="nav-right desktop">
      <div class="lang-toggle" aria-label="Language">
        <button
          class:active={$currentLocale === "en"}
          on:click={() => switchLocale("en")}
        >
          {t("language.en")}
        </button>
        <button
          class:active={$currentLocale === "ja"}
          on:click={() => switchLocale("ja")}
        >
          {t("language.ja")}
        </button>
      </div>
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
      <a href={hrefFor("/about")} on:click|preventDefault={() => go("/about")}>{t("nav.about")}</a>
      <a href={hrefFor("/films")} on:click|preventDefault={() => go("/films")}>{t("nav.films")}</a>
      <a href={hrefFor("/documentaries")} on:click|preventDefault={() => go("/documentaries")}>{t("nav.documentaries")}</a>
      <a href={hrefFor("/series")} on:click|preventDefault={() => go("/series")}>{t("nav.series")}</a>
      <a href={hrefFor("/services")} on:click|preventDefault={() => go("/services")}>{t("nav.services")}</a>
      <a href={hrefFor("/contact")} on:click|preventDefault={() => go("/contact")}>{t("nav.contact")}</a>
    </nav>

    <div class="mobile-lang">
      <button
        class:active={$currentLocale === "en"}
        on:click={() => switchLocale("en")}
      >
        {t("language.en")}
      </button>
      <button
        class:active={$currentLocale === "ja"}
        on:click={() => switchLocale("ja")}
      >
        {t("language.ja")}
      </button>
    </div>
  </div>
</header>

<main>
  {#key $currentLocale + "|" + $routePath}
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
        <h1>{t("common.notFoundTitle")}</h1>
        <p>{t("common.notFoundText")}</p>
      </section>
    {/if}
  {/key}
</main>

<footer class="srk-footer">
  <div class="container footer-inner">
    <div class="footer-columns">
      <div class="footer-col">
        <h4>{t("footer.catalogue")}</h4>
        <a href={hrefFor("/films")} on:click|preventDefault={() => go("/films")}>
          {t("footer.filmCatalogue")}
        </a>
        <a href={hrefFor("/series")} on:click|preventDefault={() => go("/series")}>
          {t("footer.seriesCatalogue")}
        </a>
        <a
          href={hrefFor("/documentaries")}
          on:click|preventDefault={() => go("/documentaries")}
        >
          {t("footer.documentaryCatalogue")}
        </a>
        <a
          href={hrefFor("/submit-your-film")}
          on:click|preventDefault={() => go("/submit-your-film")}
        >
          {t("footer.submit")}
        </a>

        <a href="https://development.sanrokuku.com" rel="noopener noreferrer" target="_blank">
          {t("footer.development")}
        </a>
      </div>

      <div class="footer-col">
        <h4>{t("footer.studio")}</h4>
        <a href={hrefFor("/about")} on:click|preventDefault={() => go("/about")}>
          {t("footer.about")}
        </a>
        <a href={hrefFor("/services")} on:click|preventDefault={() => go("/services")}>
          {t("footer.servicesForProducers")}
        </a>
        <a
          href={hrefFor("/wedding-films")}
          on:click|preventDefault={() => go("/wedding-films")}
        >
          {t("footer.weddingFilms")}
        </a>
        <a
          href={hrefFor("/brand-films")}
          on:click|preventDefault={() => go("/brand-films")}
        >
          {t("footer.brandFilms")}
        </a>
        <a href={hrefFor("/jobs")} on:click|preventDefault={() => go("/jobs")}>
          {t("footer.workOpportunities")}
        </a>
        <a href={hrefFor("/contact")} on:click|preventDefault={() => go("/contact")}>
          {t("footer.contact")}
        </a>
      </div>

      <div class="footer-col">
        <h4>{t("footer.legal")}</h4>
        <a
          href={hrefFor("/terms-and-conditions")}
          on:click|preventDefault={() => go("/terms-and-conditions")}
        >
          {t("footer.terms")}
        </a>
        <a
          href={hrefFor("/refund-policy")}
          on:click|preventDefault={() => go("/refund-policy")}
        >
          {t("footer.refund")}
        </a>
        <a
          href={hrefFor("/privacy-policy")}
          on:click|preventDefault={() => go("/privacy-policy")}
        >
          {t("footer.privacy")}
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>All Rights Reserved © SAN ROKU KU</span>
    </div>
  </div>
</footer>
{/key}

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

.nav-links a,
.mobile-links a {
  color: var(--text-main);
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.85rem;
}


.nav-links a {
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

.nav-links a::after {
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

.nav-links a:hover::after {
  width: 100%;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.lang-toggle {
  display: inline-flex;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  overflow: hidden;
}

.lang-toggle button {
  border: none;
  background: transparent;
  color: var(--text-main);
  padding: 0.45rem 0.7rem;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  cursor: pointer;
}

.lang-toggle button.active {
  background: rgba(255, 255, 255, 0.12);
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
@media (max-width: 1024px) {
  .nav-links,
  .nav-right,
  .desktop-logo {
    display: none;
  }

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

  .nav-inner {
    justify-content: center;
  }

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

  .mobile-links a {
    text-decoration: none;
  }


  .mobile-lang {
    display: flex;
    gap: 0.8rem;
    margin-top: 2.2rem;
    justify-content: center;
  }

  .mobile-lang button {
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    background: transparent;
    color: var(--text-main);
    padding: 0.55rem 0.9rem;
    cursor: pointer;
  }

  .mobile-lang button.active {
    background: rgba(255, 255, 255, 0.12);
  }

  .mobile-overlay button {
    font-size: 1.2rem;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
  }
}

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

  .footer-columns {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  .footer-col h4 {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
  }

  .footer-col a {
    display: block;
    margin: 0.3rem 0;
    font-size: 0.82rem;
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
  }

  .footer-col a:hover {
    color: rgba(255, 255, 255, 0.85);
  }

  .footer-bottom {
    border-top: none;
    padding-top: 0.5rem;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
  }
}
</style>