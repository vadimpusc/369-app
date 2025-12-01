<script>
  import jobs from "../data/jobs.json";
  import { navigate } from "../router";
</script>

<section class="container jobs-page">
  <header class="jobs-header">
    <h1>Work With Us</h1>
    <p>
      Freelance and project based roles with San Roku Ku and our slate of independent productions.
    </p>
  </header>

  <div class="jobs-list">
    {#each jobs as job}
      <article class="job-card" on:click={() => navigate(`/jobs/${job.slug}`)}>
        <h2>{job.title}</h2>
        <p class="job-meta">{job.type} · {job.location}</p>
        <p class="job-intro">{job.shortIntro}</p>
        <button class="job-btn">More Details</button>
      </article>
    {/each}
  </div>
</section>

<style>
  .jobs-page {
    padding: 3.5rem 0 4rem;
  }
  .jobs-header {
  text-align: center;
  max-width: 850px;
  margin: 0 auto;
  padding: 60px 20px;
}

.jobs-header h1 {
  font-size: 2.6rem;
  margin-bottom: 1rem;
}

.jobs-header p {
  font-size: 1.1rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 auto;
  max-width: 750px;
}

  .jobs-list {
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
  .job-card {
    border-radius: var(--radius-xl);
    padding: 1.8rem 2rem;
    background: radial-gradient(circle at top left, #16233b, #060912);
    box-shadow: var(--shadow-soft);
    cursor: pointer;
  }
  .job-card h2 {
    margin: 0 0 0.4rem;
  }
  .job-meta {
    margin: 0 0 0.9rem;
    color: var(--text-muted);
    font-size: 0.9rem;
  }
  .job-intro {
    margin: 0 0 1.1rem;
    color: var(--text-main);
  }
  .job-btn {
    border: none;
    border-radius: 999px;
    padding: 0.5rem 1.1rem;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
  }
</style>
