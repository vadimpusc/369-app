<script>
  import { currentLocale } from "../router";
  import { loadPageContent } from "../lib/pageContent";
  import { setSeo } from "../lib/seo";

  $: page =
    loadPageContent("submit-your-film", $currentLocale) ||
    loadPageContent("submit-your-film", "en");

  $: if (page?.seo) setSeo(page.seo);
</script>

<section class="container submit-page">
  <header class="submit-header">
    <h1>{page?.hero?.title ?? ""}</h1>
    <p>{page?.hero?.intro ?? ""}</p>
  </header>

  <section class="criteria">
    <div class="card">
      <h2>{page?.cards?.lookingForTitle ?? ""}</h2>
      <ul>
        {#each page?.cards?.lookingFor ?? [] as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>

    <div class="card">
      <h2>{page?.cards?.notAcceptTitle ?? ""}</h2>
      <ul>
        {#each page?.cards?.notAccept ?? [] as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </section>

  <p class="note">{page?.note ?? ""}</p>
</section>

<div class="submit-btn-container">
  <a href={page?.cta?.href ?? "https://tally.so/r/81NdJ5"} target="_blank" class="srk-btn" rel="noopener noreferrer">
    {page?.cta?.text ?? ""}
  </a>
</div>

<style>
.submit-btn-container {
  text-align: center;
}

.srk-btn {
  display: inline-block;
  padding: 12px 36px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  backdrop-filter: blur(6px);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.4);
  transition: 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.srk-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 22px rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}

  .submit-page {
    padding: 3.5rem 0 4rem;
  }
.submit-header {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
}

.submit-header h1 {
  font-size: 2.6rem;
  margin-bottom: 1rem;
}

.submit-header p {
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 900px;
}

  .criteria {
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.6rem;
  }
  .card {
    background: radial-gradient(circle at top left, #16233b, #060912);
    border-radius: var(--radius-xl);
    padding: 1.6rem 1.8rem;
    box-shadow: var(--shadow-soft);
    line-height: 1.5;
  }
  .card h2 {
    font-size: 1.3rem;
    text-align: center;
    margin: 0 0 0.6rem;
  }
  .card ul {
    margin: 0;
    padding-left: 1.3rem;
    font-size: 1rem;
  }
  .submit-form {
    margin-top: 3rem;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }
  .submit-form h2 {
    margin: 0 0 0.8rem;
  }
  .submit-form input,
  .submit-form select,
  .submit-form textarea {
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: #05060a;
    padding: 0.8rem 1rem;
    color: var(--text-main);
    font-size: 0.95rem;
    outline: none;
  }
  .submit-form textarea {
    border-radius: 18px;
    resize: vertical;
    min-height: 120px;
  }
  .note {
    margin-top: 1.5rem;
    font-size: 0.85rem;
    color: var(--text-muted);
    text-align: center;
  }
</style>