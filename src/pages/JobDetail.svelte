<script>
  import { loadCollection } from "../lib/content";
  import { navigate, currentLocale } from "../router";
  import { setSeo } from "../lib/seo";

  export let slug;

  $: jobs = loadCollection("jobs", $currentLocale);
  $: job = jobs.find((j) => j.slug === slug);

  // Locale-aware UI labels
  $: labels =
    $currentLocale === "ja"
      ? {
          notFound: "求人が見つかりません",
          back: "求人一覧へ戻る",
          jobType: "雇用形態",
          location: "勤務地",
          responsibilities: "業務内容",
          requirements: "応募条件",
          howToApply: "応募方法"
        }
      : {
          notFound: "Job not found",
          back: "Back to Jobs",
          jobType: "Job Type",
          location: "Location",
          responsibilities: "Responsibilities",
          requirements: "Requirements",
          howToApply: "How To Apply"
        };

  // Dynamic SEO per job
  $: if (job) {
    setSeo({
      title: `${job.title} | Careers | San Roku Ku`,
      description: job.shortIntro || "",
      ogImage: ""
    });
  }
</script>

{#if !job}
  <section class="container" style="padding: 4rem 0;">
    <h1>{labels.notFound}</h1>
    <button class="btn-primary" on:click={() => navigate("/jobs")}>
      {labels.back}
    </button>
  </section>
{:else}
  <section class="container job-detail">
    <div class="job-shell">
      <p class="job-eyebrow">
        {labels.jobType}: {job.type}
      </p>
      <p class="job-eyebrow">
        {labels.location}: {job.location}
      </p>

      <h1>{job.title}</h1>

      <p class="job-intro">{job.shortIntro}</p>

      {#if job.responsibilities?.length}
        <h2>{labels.responsibilities}</h2>
        <ul>
          {#each job.responsibilities as item}
            <li>{item}</li>
          {/each}
        </ul>
      {/if}

      {#if job.requirements?.length}
        <h2>{labels.requirements}</h2>
        <ul>
          {#each job.requirements as item}
            <li>{item}</li>
          {/each}
        </ul>
      {/if}

      {#if job.howToApply?.length}
        <h2>{labels.howToApply}</h2>
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