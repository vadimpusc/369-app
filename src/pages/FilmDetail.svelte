<script>
  import { loadCollection } from "../lib/content";
  import TitleDetail from "../components/TitleDetail.svelte";
  import { navigate, currentLocale } from "../router";
  import { setSeo } from "../lib/seo";

  export let slug;

  $: films = loadCollection("films", $currentLocale);
  $: item = films.find((f) => f.slug === slug);

  function goBack() {
    navigate("/films");
  }

  // Locale-aware UI labels
  $: labels =
    $currentLocale === "ja"
      ? {
          notFound: "作品が見つかりません",
          back: "映画一覧へ戻る",
          trailer: "予告編"
        }
      : {
          notFound: "Film not found",
          back: "Back to Films",
          trailer: "Trailer"
        };

  // Dynamic SEO per film
  $: if (item) {
    setSeo({
      title: `${item.title} | Film | San Roku Ku`,
      description: item.logline || item.description || "",
      ogImage: item.poster || ""
    });
  }

  // Converts any YouTube URL into an embed URL
  function toEmbed(url) {
    if (!url) return null;

    let x = url.trim();

    // Standard watch URL
    x = x.replace("watch?v=", "embed/");

    // Short youtu.be links
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
    <button class="btn-primary" on:click={goBack}>
      {labels.back}
    </button>
  </section>
{:else}
  <!-- Your existing film layout -->
  <TitleDetail item={item} kind="Film" />

  <!-- Trailer under the details -->
  {#if item.trailer}
    <section class="film-trailer">
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
  .film-trailer {
    margin: 3rem auto 4rem;
    text-align: center;
  }

  .film-trailer h2 {
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