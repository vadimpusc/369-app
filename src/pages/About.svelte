<section class="container about-page">
  <header class="about-header">
    <h1>Your Global Production Partner</h1>
    <p>
      San Roku Ku is an international film production company founded by director and producer
      Hank Orion. We work across independent and studio level productions, bridging bold creative
      ideas with world class technical execution.
    </p>
  </header>

  <section class="grid">
    <article class="card">
      <h2>Development & Script Consulting</h2>
      <p>
        Story shaping, script notes, and development support to align your creative vision with
        market potential and the realities of production.
      </p>
    </article>

    <article class="card">
      <h2>Full Production & Crew Support</h2>
      <p>
        End to end production and on set management, with access to trusted crew across the
        United Kingdom, Europe, and Japan.
      </p>
    </article>

    <article class="card">
      <h2>Post Production & Editing</h2>
      <p>
        Picture edit, colour, sound, and mastering for SDR, HDR, DCP, and OTT deliveries,
        with a focus on cinematic storytelling and quality control.
      </p>
    </article>

    <article class="card">
      <h2>Graphic Design & Key Art</h2>
      <p>
        Posters, motion key art, and stills packages optimised for festivals, platforms, and
        campaigns, tailored to your film and audience.
      </p>
    </article>

    <article class="card">
      <h2>Web & App Experiences</h2>
      <p>
        Modern, audience focused digital experiences for filmmakers and studios, from landing
        pages to simple tools that support your releases.
      </p>
    </article>

    <article class="card">
      <h2>Distribution Strategy & Marketing Assets</h2>
      <p>
        Strategy, deliverables, and creative materials that position your film for platforms,
        festivals, and global audiences.
      </p>
    </article>
  </section>

  <section class="founder">
    <div class="founder-inner">
      <div class="avatar-wrap">
        <img src="assets/stills/hank-orion.jpg" alt="Hank Orion" />
      </div>
      <div>
        <h2>Hank Orion</h2>
        <p class="role">Founder, Director, Producer, Screenwriter</p>
        <p>
          The name San Roku Ku, Japanese for 369, reflects our philosophy of creativity,
          harmony, and transformation. Inspired by numerology, it hints at new beginnings
          and the power of manifesting bold visions through cinema.
        </p>
      </div>
    </div>
  </section>
</section>

<style>
  .about-page {
    padding: 3.5rem 0 4rem;
  }
.about-header {
  text-align: center;
  max-width: 850px;
  margin: 0 auto;
  padding: 60px 20px;
}

.about-header h1 {
  font-size: 2.6rem;
  margin-bottom: 1rem;
}

.about-header p {
  font-size: 1.1rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 auto;
  max-width: 750px;
}

  .grid {
    margin-top: 2.6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1.6rem;
  }
  .card {
    background: radial-gradient(circle at top left, #16233b, #060912);
    border-radius: var(--radius-xl);
    padding: 1.6rem 1.8rem;
    box-shadow: var(--shadow-soft);
  }
  .card h2 {
    font-size: 1rem;
    margin: 0 0 0.5rem;
  }
  .card p {
    margin: 0;
    font-size: 0.92rem;
  }
  .founder {
    margin-top: 3.2rem;
  }
  .founder-inner {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 1.6rem;
    align-items: center;
    background: #05060a;
    border-radius: var(--radius-xl);
    padding: 1.8rem 2rem;
    box-shadow: var(--shadow-soft);
  }
  .avatar-wrap {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    overflow: hidden;
  }
  .avatar-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .role {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--text-muted);
    font-size: 0.9rem;
  }
  @media (max-width: 700px) {
    .founder-inner {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>
