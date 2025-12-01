<script>
  import films from "../data/films.json";
  import TitleDetail from "../components/TitleDetail.svelte";
  import { navigate } from "../router";

  export let slug;

  const item = films.find((f) => f.slug === slug);

  function goBack() {
    navigate("/films");
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
    <h1>Film not found</h1>
    <button class="btn-primary" on:click={goBack}>
      Back to Films
    </button>
  </section>
{:else}
  <!-- Your existing film layout -->
  <TitleDetail item={item} kind="Film" />

  <!-- Trailer under the details -->
  {#if item.trailer}
    <section class="film-trailer">
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
    max-width: 900px; /* your requested width */
    margin: 0 auto;
  }

  .trailer-wrapper iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 16px;
    display: block;
  }
</style>
