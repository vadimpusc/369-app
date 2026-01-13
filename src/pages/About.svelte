<section class="container about-page">

  <!-- Header -->
  <header class="about-header">
    <h1>San Roku Ku</h1>
    <p>
      San Roku Ku is an international film production company specializing in bold, cinematic storytelling across Europe, Japan and the United States. 
      We produce original films and help international productions navigate the unique challenges of shooting abroad. 
      We believe that bridging cultures leads to richer stories and unforgettable cinema. 
      Whether you’re an indie filmmaker or a studio, we’re here to bring your vision to life.
    </p>
  </header>

  <!-- Services Grid -->
  <section class="grid">
    <article class="card">
      <h2>Local Knowledge in Europe, Japan and the US</h2>
      <p>
        We know the ins and outs of filming abroad, from permits to cultural nuances. 
        Whether you’re navigating Tokyo streets or US studio logistics, we make your shoot efficient and hassle-free.
      </p>
    </article>

    <article class="card">
      <h2>A Bridge Between Cultures</h2>
      <p>
        Language and cultural barriers can slow down any production. We speak both Japanese and English fluently and specialize in connecting international filmmakers with local talent, crews, and locations.
      </p>
    </article>

    <article class="card">
      <h2>Full Production Support</h2>
      <p>
        From concept development to post-production, we handle the complex details so you can focus on creativity. Our team ensures every phase of production is organized, efficient, and on schedule.
      </p>
    </article>

    <article class="card">
      <h2>Trusted Network of Professionals</h2>
      <p>
        Years of experience have built a reliable network of local crews and vendors in Europe, Japan and the US. 
        When you work with us, you gain access to trusted professionals who can execute your vision flawlessly.
      </p>
    </article>

    <article class="card">
      <h2>Efficient Problem Solving</h2>
      <p>
        Unexpected challenges are part of filmmaking. Our team thrives under pressure and knows how to find practical solutions quickly, keeping your production on track.
      </p>
    </article>

    <article class="card">
      <h2>Quality and Vision-Driven</h2>
      <p>
        We care about making films that resonate internationally. Every project is approached with attention to detail and a commitment to cinematic excellence.
      </p>
    </article>
  </section>

  <!-- Founder Section -->
  <section class="founder">
    <div class="founder-inner">
      <div class="avatar-wrap">
        <img src="assets/stills/hank-orion.jpg" alt="Hank Orion" />
      </div>
      <div>
        <h2>Hank Orion</h2>
        <p class="role">Founder, Director, Producer, Screenwriter</p>
        <p>
          Founded by filmmaker Hank Orion, San Roku Ku was born from a passion for telling stories that transcend borders. 
          With years of experience producing films in Japan, Europe and the US, Hank understands the challenges of international productions - from local regulations to finding the right crew and is dedicated to making every project run smoothly while maintaining its creative vision.
        </p>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <div class="cta">
    <p class="services-note">
      Get in touch and let’s create something extraordinary together.
    </p>
    <a href="mailto:newbusiness@sanrokuku.com?subject=Film%20Production%20Inquiry" class="btn-primary">Contact Us</a>
  </div>

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
  margin: 0 auto;
  max-width: 750px;
}

/* Grid cards */
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

/* Founder */
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

/* Call to Action */
.cta {
  text-align: center;
  margin-top: 2.6rem;
}
.services-note {
  color: var(--text-muted);
  max-width: 640px;
  margin: 0 auto 1rem;
  text-align: center;
  font-size: 0.95rem;
}
</style>
