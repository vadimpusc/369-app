<script>
  import { loadCollection } from "../lib/content";
  import TitleDetail from "../components/TitleDetail.svelte";
  import { navigate, currentLocale } from "../router";
  import { setSeo } from "../lib/seo";
  import {
    clearSchema,
    injectSchema,
    movieSchema,
    breadcrumbSchema,
    toEmbed
  } from "../lib/schema";

  export let slug;

  $: documentaries = loadCollection("documentaries", $currentLocale);
  $: item = documentaries.find((d) => d.slug === slug);

  function goBack() {
    navigate("/documentaries");
  }

  $: labels =
    $currentLocale === "ja"
      ? {
          notFound: "ドキュメンタリーが見つかりません",
          back: "ドキュメンタリー一覧へ戻る",
          trailer: "予告編"
        }
      : {
          notFound: "Documentary not found",
          back: "Back to Documentaries",
          trailer: "Trailer"
        };

  $: if (item) {
    setSeo({
      title: `${item.title} | Documentary | San Roku Ku`,
      description: item.logline || item.description || "",
      ogImage: item.poster || ""
    });

    clearSchema();

    injectSchema(movieSchema(item));
    injectSchema(
      breadcrumbSchema([
        { name: "Home", url: `https://sanrokuku.com/${$currentLocale}` },
        {
          name: "Documentaries",
          url: `https://sanrokuku.com/${$currentLocale}/documentaries`
        },
        { name: item.title, url: `https://sanrokuku.com${window.location.pathname}` }
      ])
    );
  }
</script>

{#if !item}
  <section class="container" style="padding: 4rem 0;">
    <h1>{labels.notFound}</h1>
    <button class="btn-primary" on:click={goBack}>
      {labels.back}
    </button>
  </section>
{:else}
  <TitleDetail item={item} kind="Documentary" />

  {#if item.trailer}
    <section class="doc-trailer">
      <h2>{labels.trailer}</h2>

      <div class="trailer-wrapper">
        <iframe
          src={toEmbed(item.trailer)}
          title={`${item.title} trailer`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  {/if}
{/if}

<style>
  .doc-trailer {
    margin: 3rem auto 4rem;
    text-align: center;
  }

  .doc-trailer h2 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  .trailer-wrapper {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }

  .trailer-wrapper iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 16px;
    display: block;
  }
</style>