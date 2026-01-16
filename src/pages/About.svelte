<section class="container about-page">

  <!-- Header -->
  <header class="about-header">
  <div class="fade-in-image">
  <img src="assets/logos/369.png" alt="San Roku Ku - Film Production Company in United States and Japan" />
</div>
    <h1>San Roku Ku</h1>
<p>
  San Roku Ku is a production company focused on bold, cinematic storytelling. 
  We produce original films and support international productions filming abroad, with a deep understanding of the creative, logistical, and cultural realities of shooting in Japan and the US. 
  We believe that strong cross cultural collaboration leads to more honest and memorable cinema. 
  From independent filmmakers to established studios, we help bring visions to the screen.
</p>


  </header>

<!-- Services Grid -->
<section class="grid">
  <article class="card">
    <h2>Local Knowledge</h2>
    <p>
      We understand the realities of filming across borders, from permits and unions to local customs and workflows. 
      Whether you are navigating Tokyo locations or US based production systems, we help keep your shoot efficient and focused.
    </p>
  </article>

  <article class="card">
    <h2>A Bridge Between Cultures</h2>
    <p>
      Language and cultural gaps can slow down productions. We work fluently in both Japanese and English and specialize in connecting international filmmakers with local crews, talent, and locations in Japan and the US.
    </p>
  </article>

  <article class="card">
    <h2>End to End Production Support</h2>
    <p>
      From early development through post production, we manage the practical details so you can concentrate on storytelling. 
      Our approach keeps productions organized, transparent, and creatively aligned from start to finish.
    </p>
  </article>

  <article class="card">
    <h2>Trusted Local Networks</h2>
    <p>
      Through years of on the ground experience, we have built reliable relationships with crews, vendors, and partners in Japan and the US. 
      Working with us gives you direct access to professionals who understand both local expectations and international standards.
    </p>
  </article>

  <article class="card">
    <h2>Clear and Practical Problem Solving</h2>
    <p>
      Challenges are inevitable in filmmaking. We stay calm under pressure and focus on practical solutions that keep productions moving forward without compromising creative intent.
    </p>
  </article>

  <article class="card">
    <h2>Vision Driven and Film Focused</h2>
    <p>
      Every project is approached with care for story, craft, and long term value. We focus on making films that travel well internationally while staying grounded in strong cinematic vision.
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
  Founded by filmmaker Hank Orion, San Roku Ku brings years of experience producing films in Europe, UK, Japan and the United States. 
</p>

    </div>
  </div>
</section>

  <!-- Call to Action -->
  <div class="cta">
 <p class="services-note">
  Have questions or want to say hello? Get in touch with us - we’d love to hear from you.
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
  display: flex;
  flex-wrap: wrap;         /* allow multiple rows */
  gap: 1.6rem;             /* space between cards */
  justify-content: center;  /* centers the whole cards in each row, including last row */
  margin-top: 2.6rem;
}

.card {
  flex: 0 1 430px;         /* base width 230px, can shrink if needed */
  max-width: 340px;        /* prevents cards from stretching too much */
  background: radial-gradient(circle at top left, #16233b, #060912);
  border-radius: var(--radius-xl);
  padding: 1.6rem 1.8rem;
  box-shadow: var(--shadow-soft);
}

.card h2 {
  font-size: 1rem;
  text-align: center;
  margin: 0 0 0.5rem;
}
.card p {
  margin: 0;
  line-height: 1.5;
  font-size: 0.92rem;
}

/* Founder */
.founder {
  margin-top: 3.2rem;
  line-height: 1.5;
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
  padding: 20px;
  line-height: 1.5;
}

.fade-in-image {
  display: flex;
  justify-content: center;   /* center horizontally */
}

.fade-in-image img {
  max-width: 200px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;    
  
  
  /* Start invisible */
  opacity: 0;

  /* Fade-in animation */
  animation: fadeIn 4.2s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
