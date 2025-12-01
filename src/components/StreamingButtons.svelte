<script>
  export let platforms = [];
</script>

{#if platforms && platforms.length}
  <div class="platform-row">
    {#each platforms as platform}
      {#if platform.url}
        <a
          class="platform-btn"
          href={platform.url}
          target="_blank"
          rel="noopener"
        >
          {#if platform.logo}
            <img src={platform.logo} alt={platform.label} />
          {:else}
            <span>{platform.label}</span>
          {/if}
        </a>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .platform-row {
    margin-top: 1.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }
  .platform-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.1rem 0.1rem;
    border-radius: 999px;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.7);
  }
  .platform-btn img {
    height: 32px;
    display: block;
  }
  .platform-btn span {
    color: #111;
    font-size: 0.8rem;
    font-weight: 600;
  }
</style>
