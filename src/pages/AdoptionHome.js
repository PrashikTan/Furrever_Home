import React from 'react';
import '../styles/AdoptionHome.css';
import FAQs from './FAQ';
import SuccessStories from './successstories';

function AdoptionHome() {
  return (
    <div className="adoption-home">
    
      {/* <section className="hero-section">
        <div className="hero-content">
          <h1>ANIMALS NEED Your Help!</h1>
          <button className="donate-btn">DONATE NOW!</button>
        </div>
      </section> */}
      <section className="intro">
        <h1>Bring a New Pet Home</h1>
        <h2>"Ensuring Happy, Healthy Pets with Love, Care, and Nutrition"</h2>
      </section>
      <section>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="src/assets/bulldog.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="src/assets/bulldog.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="src/assets/bulldog.jpeg" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
      </section>
      {/* <section className="quick-links">
        <h2>Quick Links</h2>
        <a href="petlist.html" className="btn btn-primary">Pet List</a>
        <a href="faqs.html" className="btn btn-secondary">FAQs</a>
      </section> */}
      <FAQs />
      <SuccessStories />
    </div>
  );
}

export default AdoptionHome;
