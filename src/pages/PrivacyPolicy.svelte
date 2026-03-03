<script>
  import { currentLocale } from "../router";
  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  $: page =
    loadPageContent("privacy-policy", $currentLocale) ||
    loadPageContent("privacy-policy", "en");

  $: if (page?.seo) setSeo(page.seo);
</script>

<section class="container legal-page">
  <h1>{page?.title ?? ""}</h1>

  <p>{page?.intro ?? ""}</p>

  {#each page?.sections ?? [] as s}
    <h2>{s.heading}</h2>

    {#if s.paragraphs}
      {#each s.paragraphs as p}
        <p>{@html p}</p>
      {/each}
    {/if}

    {#if s.bullets}
      <ul>
        {#each s.bullets as b}
          <li>{@html b}</li>
        {/each}
      </ul>
    {/if}

    {#if s.paragraphs2}
      {#each s.paragraphs2 as p}
        <p>{@html p}</p>
      {/each}
    {/if}
  {/each}
</section>

<style>
  .legal-page {
    padding: 3.5rem 0 4rem;
    max-width: 720px;
  }
  .legal-page h1 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  .legal-page h2 {
    margin-top: 1.8rem;
    margin-bottom: 0.6rem;
    font-size: 1.1rem;
  }
  .legal-page p,
  .legal-page li {
    font-size: 0.95rem;
    color: var(--text-main);
  }
  .legal-page ul {
    padding-left: 1.3rem;
  }
</style>