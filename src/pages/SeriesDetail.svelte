<script>
  import series from "../data/series.json";
  import TitleDetail from "../components/TitleDetail.svelte";
  import { navigate } from "../router";

  export let slug;

  const item = series.find((s) => s.slug === slug);

  // Convert YouTube URL to embed
  function toEmbed(url) {
    if (!url) return null;

    let x = url.trim();

    // Standard watch URL
    x = x.replace("watch?v=", "embed/");

    // Short youtu.be link
    if (x.includes("youtu.be/")) {
      const id = x.split("youtu.be/")[1].split(/[?&]/)[0];
      x = `https://www.youtube.com/embed/${id}`;
    }

    return x;
  }
</script>

{#if !item}
  <section class="container" style="padding: 4rem 0;">
    <h1>Series not found</h1>
    <button class="btn-primary" on:click={() => navigate("/series")}>
      Back to Series
    </button>
  </section>
{:else}
  <TitleDetail item={item} kind="Series" />

  {#if item.trailer}
    <section class="series-trailer">
      <h2>Trailer</h2>

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
  .series-trailer {
    margin: 3rem auto 4rem;
    text-align: center;
  }

  .series-trailer h2 {
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
