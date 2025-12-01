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

  // new JSON-driven services pages
  import Service from "./pages/Service.svelte";
  import ServiceDetail from "./pages/ServiceDetail.svelte";

  const routeInfo = derived(currentPath, ($path) => {
    if ($path === "/") return { page: "home" };

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

    // existing Services page (for producers)
    if ($path === "/services") return { page: "services" };

    // new JSON-based service system
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

  // subscribe to the derived store
  $: r = $routeInfo;

  function go(path) {
    navigate(path);
  }
</script>

<header class="srk-nav">
  <div class="container nav-inner">
    <button class="nav-left-btn" on:click={() => go("/")}>
      <img src="/assets/logos/369.png" alt="San Roku Ku" class="nav-logo" />
    </button>
    <nav class="nav-links">
      <button on:click={() => go("/films")}>Films</button>
      <button on:click={() => go("/documentaries")}>Documentaries</button>
      <button on:click={() => go("/series")}>Series</button>
    </nav>
    <div class="nav-right">
      <button class="btn-primary" on:click={() => go("/contact")}>
        Contact Us
      </button>
    </div>
  </div>
</header>

<main>
  {#if r.page === "home"}
    <Home />
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

  <!-- new JSON-driven services list and detail -->
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
      <h1>Page not found</h1>
      <p>Sorry, this page does not exist.</p>
    </section>
  {/if}
</main>

<footer class="srk-footer">
  <div class="container footer-inner">
    <div class="footer-columns">
      <div class="footer-col">
        <h4>Catalogue</h4>
        <a
          href="/films"
          on:click|preventDefault={() => go("/films")}
          >Film Catalogue</a
        >
        <a
          href="/series"
          on:click|preventDefault={() => go("/series")}
          >Series Catalogue</a
        >
        <a
          href="/documentaries"
          on:click|preventDefault={() => go("/documentaries")}
          >Documentary Catalogue</a
        >
        <a
          href="/submit-your-film"
          on:click|preventDefault={() => go("/submit-your-film")}
          >Submit Your Film</a
        >
      </div>
      <div class="footer-col">
        <h4>Studio</h4>
        <a href="/about" on:click|preventDefault={() => go("/about")}
          >About Us</a
        >
        <a
          href="/services"
          on:click|preventDefault={() => go("/services")}
          >Services For Producers</a
        >
        <a href="/jobs" on:click|preventDefault={() => go("/jobs")}
          >Work Opportunities</a
        >
        <a href="/contact" on:click|preventDefault={() => go("/contact")}
          >Contact Us</a
        >
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a
          href="/terms-and-conditions"
          on:click|preventDefault={() => go("/terms-and-conditions")}
          >Terms and Conditions</a
        >
        <a
          href="/refund-policy"
          on:click|preventDefault={() => go("/refund-policy")}
          >Refund Policy</a
        >
        <a
          href="/privacy-policy"
          on:click|preventDefault={() => go("/privacy-policy")}
          >Privacy Policy</a
        >
      </div>
    </div>
    <div class="footer-bottom">
      <span>All Rights Reserved © SAN ROKU KU</span>
    </div>
  </div>
</footer>

<style>
  .srk-nav {
    position: sticky;
    top: 0;
    z-index: 40;
    backdrop-filter: blur(18px);
    background: radial-gradient(
      circle at top,
      rgba(16, 19, 32, 0.96),
      rgba(5, 6, 10, 0.98)
    );
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }
  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
  }
  .nav-left-btn {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
  .nav-logo {
    height: 40px;
  }
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
</style>
