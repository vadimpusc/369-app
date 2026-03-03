<script>
  import { currentLocale } from "../router";
  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  $: page =
    loadPageContent("refund-policy", $currentLocale) ||
    loadPageContent("refund-policy", "en");

  $: if (page?.seo) setSeo(page.seo);
</script>

<section class="container legal-page">
  <h1>{page?.title ?? ""}</h1>

  <p>{page?.intro ?? ""}</p>

  {#each page?.sections ?? [] as s}
    <h2>{s.heading}</h2>

    {#each s.paragraphs ?? [] as p}
      <p>{@html p}</p>
    {/each}
  {/each}
</section>

<style>
  .legal-page {
    padding: 3.5rem 0 4rem;
    max-width: 720px;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  h2 {
    margin-top: 1.8rem;
    margin-bottom: 0.6rem;
    font-size: 1.1rem;
  }
  p {
    font-size: 0.95rem;
  }
</style>