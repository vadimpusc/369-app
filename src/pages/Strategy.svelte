<script>
  import { onMount } from "svelte";
  import { currentLocale } from "../router";

  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  const CAL_SRC = "https://app.cal.com/embed/embed.js";
  const NS = "369-15-minute-consultation";

  $: page =
    loadPageContent("strategy", $currentLocale) ||
    loadPageContent("strategy", "en");

  $: if (page?.seo) setSeo(page.seo);

  function loadScriptOnce(src, id) {
    return new Promise((resolve, reject) => {
      const existing = document.getElementById(id);
      if (existing) return resolve(true);

      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.id = id;
      s.onload = () => resolve(true);
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function initCalInline() {
    if (!window.Cal) return;

    window.Cal("init", NS, { origin: "https://app.cal.com" });

    window.Cal.ns[NS]("inline", {
      elementOrSelector: "#my-cal-inline-369-15-minute-consultation",
      config: { layout: "month_view", theme: "dark" },
      calLink: "hankorion/369-15-minute-consultation"
    });

    window.Cal.ns[NS]("ui", {
      theme: "dark",
      hideEventTypeDetails: true,
      layout: "month_view"
    });
  }

  onMount(async () => {
    try {
      await loadScriptOnce(CAL_SRC, "cal-embed-js");
      initCalInline();
    } catch (e) {
      console.error("Failed to load Cal embed:", e);
    }
  });
</script>

<section class="container contact-page">
  <header class="contact-header">
    <h1>{page?.hero?.title ?? ""}</h1>
    <p>{page?.hero?.intro ?? ""}</p>
  </header>

  <!-- Cal inline embed -->
  <div id="my-cal-inline-369-15-minute-consultation" style="width:100%;height:100%;overflow:hidden;"></div>

  <style>
    #my-cal-inline-369-15-minute-consultation {
      background: transparent !important;
    }
    #my-cal-inline-369-15-minute-consultation iframe {
      background: transparent !important;
      color-scheme: dark;
    }
  </style>
</section>

<style>
  .contact-page {
    padding: 3.5rem 0 4rem;
  }
  .contact-header {
    text-align: center;
    max-width: 850px;
    margin: 0 auto;
    padding: 60px 20px;
  }

  .contact-header h1 {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }

  .contact-header p {
    font-size: 1.1rem;
    line-height: 1.65;
    color: var(--text-muted);
    margin: 0 auto;
    max-width: 750px;
  }

  .contact-form {
    margin-top: 2.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    max-width: 640px;
  }
  .contact-form input,
  .contact-form select,
  .contact-form textarea {
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: #05060a;
    padding: 0.8rem 1rem;
    color: var(--text-main);
    font-size: 0.95rem;
    outline: none;
  }
  .contact-form textarea {
    border-radius: 18px;
    resize: vertical;
    min-height: 140px;
  }
  .note {
    margin-top: 1.3rem;
    font-size: 0.85rem;
    color: var(--text-muted);
    text-align: center;
  }
</style>