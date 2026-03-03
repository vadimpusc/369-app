<script>
  import { currentLocale } from "../router";
  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  $: page =
    loadPageContent("terms-and-conditions", $currentLocale) ||
    loadPageContent("terms-and-conditions", "en");

  $: if (page?.seo) setSeo(page.seo);
</script>

<section class="container legal-page">
  <h1>{page?.title ?? ""}</h1>

  <p>{page?.intro ?? ""}</p>

  {#each page?.sections ?? [] as sec}
    <h2>{sec.heading}</h2>

    {#if sec.type === "list"}
      <ul>
        {#each sec.items ?? [] as item}
          <li>{item}</li>
        {/each}
      </ul>
    {:else}
      {#each sec.items ?? [] as para}
        <p>{para}</p>
      {/each}
    {/if}
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
  p,
  li {
    font-size: 0.95rem;
  }
  ul {
    padding-left: 1.3rem;
  }
</style>