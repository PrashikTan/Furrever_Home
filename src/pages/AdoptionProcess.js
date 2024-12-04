import React from 'react';
import '../styles/AdoptionProcess.css';
import { Link } from 'react-router-dom';

function AdoptionProcess() {
  return (
    <div className="adoption-process">
      
      <p>Follow these simple steps to bring a new member into your family!</p>
      <div className="process-grid">
        <div className="process-step">
          <Link to="/browse-pets" className="process-btn">Browse Pet List</Link>
          <p>Explore our list of pets available for adoption and find your perfect match.</p>
        </div>
        <div className="process-step">
          <Link to="/fill-form" className="process-btn">Fill Form</Link>
          <p>Complete the adoption form to provide your details and preferences.</p>
        </div>
        <div className="process-step">
          <Link to="/home-verification" className="process-btn">Home Verification</Link>
          <p>Schedule a home visit to ensure a safe and suitable environment for the pet.</p>
        </div>
        <div className="process-step">
          <Link to="/finalize-adoption" className="process-btn">Finalize Adoption</Link>
          <p>Finish the adoption process and welcome your new pet into your home.</p>
        </div>
      </div>
    </div>
  );
}

export default AdoptionProcess;
