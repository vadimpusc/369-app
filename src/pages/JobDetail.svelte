<script>
  import jobs from "../data/jobs.json";
  import { navigate } from "../router";

  export let slug;
  const job = jobs.find((j) => j.slug === slug);
</script>

{#if !job}
  <section class="container" style="padding: 4rem 0;">
    <h1>Job not found</h1>
    <button class="btn-primary" on:click={() => navigate("/jobs")}>
      Back to Jobs
    </button>
  </section>
{:else}
  <section class="container job-detail">
    <div class="job-shell">
      <p class="job-eyebrow">Job Type: {job.type}</p>
      <p class="job-eyebrow">Location: {job.location}</p>
      <h1>{job.title}</h1>

      <p class="job-intro">{job.shortIntro}</p>

      {#if job.responsibilities?.length}
        <h2>Responsibilities</h2>
        <ul>
          {#each job.responsibilities as item}
            <li>{item}</li>
          {/each}
        </ul>
      {/if}

      {#if job.requirements?.length}
        <h2>Requirements</h2>
        <ul>
          {#each job.requirements as item}
            <li>{item}</li>
          {/each}
        </ul>
      {/if}

      {#if job.howToApply?.length}
        <h2>How To Apply</h2>
        <ul>
          {#each job.howToApply as item}
            <li>{item}</li>
          {/each}
        </ul>
      {/if}
    </div>
  </section>
{/if}

<style>
  .job-detail {
    padding: 3.5rem 0 4rem;
  }
  .job-shell {
    border-radius: var(--radius-xl);
    padding: 2.3rem 2.4rem 2.5rem;
    background: radial-gradient(circle at top left, #16233b, #060912);
    box-shadow: var(--shadow-soft);
  }
  .job-eyebrow {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin: 0 0 0.2rem;
  }
  h1 {
    margin-top: 0.4rem;
    margin-bottom: 1rem;
    font-size: clamp(2rem, 3vw, 2.6rem);
  }
  h2 {
    margin-top: 1.6rem;
    margin-bottom: 0.6rem;
  }
  ul {
    padding-left: 1.3rem;
    margin: 0;
  }
  li {
    margin-bottom: 0.35rem;
  }
</style>
