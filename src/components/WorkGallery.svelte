<script>
  import { onMount, onDestroy } from "svelte";

  export let title = "";
  export let intro = "";
  export let processTitle = "";
  export let processText = "";
  export let layout = "grid"; // "grid" or "masonry"
  export let items = []; // [{ thumb, full, alt }]

  let activeIndex = -1;

  function openLightbox(index) {
    activeIndex = index;
    lockScroll(true);
  }

  function closeLightbox() {
    activeIndex = -1;
    lockScroll(false);
  }

  function prev() {
    if (!items || items.length === 0) return;
    activeIndex = (activeIndex - 1 + items.length) % items.length;
  }

  function next() {
    if (!items || items.length === 0) return;
    activeIndex = (activeIndex + 1) % items.length;
  }

  function lockScroll(locked) {
    if (typeof document === "undefined") return;
    document.body.style.overflow = locked ? "hidden" : "";
  }

  function onKeyDown(e) {
    if (activeIndex === -1) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }

  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
  });

  onDestroy(() => {
    window.removeEventListener("keydown", onKeyDown);
    lockScroll(false);
  });

  $: safeItems = Array.isArray(items) ? items.filter(Boolean) : [];
  $: isMasonry = layout === "masonry";
</script>

<section class="work-wrap">
  <div class="container work-head">
    {#if title}
      <h1 class="work-title">{title}</h1>
    {/if}

    {#if intro}
      <p class="work-intro">{intro}</p>
    {/if}

    {#if processTitle || processText}
      <div class="work-process">
        {#if processTitle}
          <h2 class="work-process-title">{processTitle}</h2>
        {/if}
        {#if processText}
          <p class="work-process-text">{processText}</p>
        {/if}
      </div>
    {/if}
  </div>

  <div class="container">
    {#if safeItems.length === 0}
      <p class="work-empty">No work items yet.</p>
    {:else}
      {#if isMasonry}
        <div class="masonry">
          {#each safeItems as it, i}
            {#if it?.thumb}
              <button class="card" type="button" on:click={() => openLightbox(i)} aria-label="Open image">
                <img
                  src={it.thumb}
                  alt={it.alt || "Work example"}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            {/if}
          {/each}
        </div>
      {:else}
        <div class="grid">
          {#each safeItems as it, i}
            {#if it?.thumb}
              <button class="card" type="button" on:click={() => openLightbox(i)} aria-label="Open image">
               <div class="thumb">
  <img
    src={it.thumb}
    alt={it.alt || "Work example"}
    loading="lazy"
    decoding="async"
  />
</div>

              </button>
            {/if}
          {/each}
        </div>
      {/if}
    {/if}
  </div>

  {#if activeIndex !== -1}
    <div class="lightbox" role="dialog" aria-modal="true" tabindex="-1" on:click|self={closeLightbox} on:keydown={(e) => e.key === "Escape" && closeLightbox()}>
      <button class="lb-close" type="button" on:click={closeLightbox} aria-label="Close">×</button>

      <button class="lb-nav lb-prev" type="button" on:click={prev} aria-label="Previous">‹</button>

      <div class="lb-stage">
        <img
          src={safeItems[activeIndex]?.full || safeItems[activeIndex]?.thumb}
          alt={safeItems[activeIndex]?.alt || "Work example"}
        />
        {#if safeItems[activeIndex]?.alt}
          <p class="lb-caption">{safeItems[activeIndex].alt}</p>
        {/if}
      </div>

      <button class="lb-nav lb-next" type="button" on:click={next} aria-label="Next">›</button>
    </div>
  {/if}
</section>

<style>

/* Fixed poster aspect ratio for grid layout */
.grid .thumb {
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
}

.grid .thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;   /* fills the frame */
  display: block;
}

  .work-wrap {
    padding: 4rem 0 5rem;
  }

  .work-head {
    max-width: 980px;
    margin: 0 auto 2.5rem;
    text-align: center;
  }

  .work-title {
    font-size: clamp(2rem, 3.2vw, 3rem);
    margin: 0 0 1rem;
    letter-spacing: 0.01em;
  }

  .work-intro {
    margin: 0 auto;
    max-width: 820px;
    line-height: 1.7;
    opacity: 0.85;
    font-size: 1.05rem;
  }

  .work-process {
    margin: 2.25rem auto 0;
    padding: 1.5rem 1.5rem;
    max-width: 900px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(22, 30, 50, 0.45);
    border-radius: 1.2rem;
    backdrop-filter: blur(6px);
  }

  .work-process-title {
    margin: 0 0 0.75rem;
    font-size: 1.25rem;
    letter-spacing: 0.01em;
  }

  .work-process-text {
    margin: 0;
    line-height: 1.7;
    opacity: 0.85;
  }

  .work-empty {
    text-align: center;
    opacity: 0.75;
    padding: 2rem 0;
  }

  /* Cards */
  .card {
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    overflow: hidden;
    padding: 0;
    cursor: pointer;
    transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
    display: block;
    width: 100%;
  }

  .card:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.22);
    background: rgba(0, 0, 0, 0.25);
  }

  .card img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* Uniform grid */
  .grid {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 720px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
    }
  }

  @media (min-width: 1100px) {
    .grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  /* Masonry (CSS columns, great for mixed ratios) */
  .masonry {
    column-count: 2;
    column-gap: 1.25rem;
  }

  @media (min-width: 720px) {
    .masonry {
      column-count: 3;
      column-gap: 1.5rem;
    }
  }

  @media (min-width: 1100px) {
    .masonry {
      column-count: 4;
    }
  }

  .masonry .card {
    break-inside: avoid;
    margin: 0 0 1.25rem;
  }

  /* Lightbox */
  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: grid;
    grid-template-columns: 70px 1fr 70px;
    align-items: center;
    z-index: 9999;
    padding: 1rem;
  }

.lb-stage {
  max-width: none;
  margin: 0 auto;
  text-align: center;
}

.lb-stage img {
  width: auto;
  height: auto;

  max-width: 92vw;
  max-height: 88vh;

  object-fit: contain;
  display: block;
  margin: 0 auto;

  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.03);
}


  .lb-caption {
    margin: 0.9rem 0 0;
    opacity: 0.85;
    font-size: 0.95rem;
  }

  .lb-close {
    position: fixed;
    top: 16px;
    right: 18px;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    font-size: 26px;
    cursor: pointer;
  }

  .lb-nav {
    width: 54px;
    height: 54px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    font-size: 36px;
    cursor: pointer;
    display: grid;
    place-items: center;
    user-select: none;
  }

  .lb-prev {
    justify-self: center;
  }

  .lb-next {
    justify-self: center;
  }

  @media (max-width: 640px) {
    .lightbox {
      grid-template-columns: 54px 1fr 54px;
    }
    .lb-nav {
      width: 44px;
      height: 44px;
      font-size: 30px;
    }
  }
</style>
