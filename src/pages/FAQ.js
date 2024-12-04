import React, { useState } from 'react';
import "../styles/FAQ.css";

const FAQ = () => {
  // State to keep track of which FAQ item is open
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Function to toggle the visibility of each FAQ item
  const toggleFAQ = (index) => {
    if (activeFAQ === index) {
      setActiveFAQ(null); // Close the FAQ if it's already open
    } else {
      setActiveFAQ(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="faq-container">
      <h1>Adoption FAQs</h1>
      <div className="separator"></div>

      <div className="faq-item">
        <h2 onClick={() => toggleFAQ(0)}>How does the adoption process work?</h2>
        {activeFAQ === 0 && (
          <div className="faq-content">
            <h3>STANDARD PROTOCOL FOR ADOPTION OF COMMUNITY ANIMALS</h3>
            <ul>
              <li><strong>Where can one adopt a dog/pup from?</strong> Dogs/pups can be adopted from shelters of SPCA or Animal Welfare Organizations (AWO) recognized by the AWBI or State Animal Welfare Board by issuing adoption certificates.</li>
              <li>If adopting a dog/pup from the street, adoption papers can be processed through Municipal Councils or any acting legal authority along with medical check-ups and vaccinations.</li>
              
              <h4>II. Who can adopt a dog/pup?</h4>
              <ul>
                <li>The person must be older than 18 years.</li>
                <li>The person must be of sound mind.</li>
                <li>The person must be capable of providing adequate care, including nutrition, veterinary care, and housing.</li>
              </ul>

              <h4>III. Documents to be submitted</h4>
              <ul>
                <li>House-check form</li>
                <li>Valid Government photo ID & address proof</li>
                <li>Completed adoption form</li>
                <li>Passport-size photograph</li>
              </ul>

              <h4>IV. Procedure</h4>
              <ul>
                <li>The House Check Form may be used for preliminary screening and eligibility evaluation.</li>
                <li>The adopter must take the dog/pup for a veterinary check-up and ensure vaccinations, deworming, and necessary medical treatment.</li>
                <li>If the dog/pup is mature, it must be spayed/neutered prior to adoption.</li>
                <li>After the evaluation, the adoption certificate will be issued along with care and maintenance guidance for the community animal.</li>
                <li>AWO/SPCA will maintain records of all adopted animals for 2 years.</li>
              </ul>

              <h4>V. Pet-friendly house</h4>
              <ul>
                <li>Balconies and windows must be netted to prevent pets from falling or escaping.</li>
                <li>Sharp or dangerous objects should be kept away from the pet’s reach.</li>
                <li>The adopting family must be informed about harmful plants, chemicals, and foods toxic to pets.</li>
                <li>Electrical fittings should be covered, and comfortable bedding should be provided for the pet.</li>
                <li>Pets must have free access to clean drinking water at all times.</li>
                <li>Pets should be provided with regular, species-appropriate meals.</li>
                <li>Dogs/puppies should be walked at least twice a day.</li>
              </ul>
            </ul>
          </div>
        )}
      </div>

      <div className="faq-item">
        <h2 onClick={() => toggleFAQ(1)}>What are the adoption fees?</h2>
        {activeFAQ === 1 && (
          <div className="faq-content">
            <p>
              Adoption fees vary depending on the type of pet, age, and location. Please check with your local adoption center for specific fee details.
            </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <h2 onClick={() => toggleFAQ(2)}>What if I can’t continue with adoption?</h2>
        {activeFAQ === 2 && (
          <div className="faq-content">
            <p>
              If for any reason you are unable to continue with the adoption, please contact us as soon as possible to discuss alternatives. We will work with you to ensure the pet’s well-being.
            </p>
          </div>
        )}
      </div>

      <div className="contact-support">
        <p>If you have further queries, please <a href="/contact" className="contact-link">Contact Support</a>.</p>
      </div>
    </div>
  );
};

export default FAQ;
