<section class="container submit-page">
  <header class="submit-header">
    <h1>Submit Your Film</h1>
    <p>
      We work with distributors worldwide to help independent films reach audiences and travel
      across territories. If you have a completed feature or series, you can submit it for
      consideration below.
    </p>
  </header>

  <section class="criteria">
    <div class="card">
      <h2>What We Are Looking For</h2>
      <ul>
        <li>Feature films of 90 minutes or longer.</li>
        <li>Documentaries of 40 minutes or longer.</li>
        <li>TV or web series with episodes around 20 minutes or longer.</li>
      </ul>
    </div>
    <div class="card">
      <h2>We Are Not Able To Accept</h2>
      <ul>
        <li>Short films.</li>
        <li>Films already widely released or sold in key territories.</li>
        <li>Screenplay submissions or pitches without a completed film.</li>
      </ul>
    </div>
  </section>

 
  <p class="note">
   If you do not hear from us within seven business days, please assume that your film was
    not selected at this time. Thank you for your understanding.
  </p>
</section>

<style>
  .submit-page {
    padding: 3.5rem 0 4rem;
  }
.submit-header {
  text-align: center;
  max-width: 850px;
  margin: 0 auto;
  padding: 60px 20px;
}

.submit-header h1 {
  font-size: 2.6rem;
  margin-bottom: 1rem;
}

.submit-header p {
  font-size: 1.1rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 auto;
  max-width: 800px;
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
