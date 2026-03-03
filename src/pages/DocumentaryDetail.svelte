<script>
  import { loadCollection } from "../lib/content";
  import TitleDetail from "../components/TitleDetail.svelte";
  import { navigate, currentLocale } from "../router";
  import { setSeo } from "../lib/seo";

  export let slug;

  $: documentaries = loadCollection("documentaries", $currentLocale);
  $: item = documentaries.find((d) => d.slug === slug);

  // Locale-aware UI labels
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

  // Dynamic SEO per documentary
  $: if (item) {
    setSeo({
      title: `${item.title} | Documentary | San Roku Ku`,
      description: item.logline || item.description || "",
      ogImage: item.poster || ""
    });
  }

  // Convert normal YouTube URL into embed URL
  function toEmbed(url) {
    if (!url) return null;

    let x = url.trim();

    x = x.replace("watch?v=", "embed/");

    if (x.includes("youtu.be/")) {
      const id = x.split("youtu.be/")[1].split(/[?&]/)[0];
      x = `https://www.youtube.com/embed/${id}`;
    }

    return x;
  }
</script>

{#if !item}
  <section class="container" style="padding: 4rem 0;">
    <h1>{labels.notFound}</h1>
    <button class="btn-primary" on:click={() => navigate("/documentaries")}>
      {labels.back}
    </button>
  </section>
{:else}
  <!-- Detail Layout -->
  <TitleDetail item={item} kind="Documentary" />

  <!-- Trailer Section -->
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