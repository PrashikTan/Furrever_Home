import React from 'react';
import '../styles/PetDetail.css';
import GoldenRetriever from '../assets/GoldenRetriever.png'; // Make sure path is correct
import Bulldog from '../assets/Bulldog.png'; // Make sure path is correct
import Labrador from '../assets/Labrador.png'; // Make sure path is correct

const PetDetail = () => {
  return (
    <div className="pet-details-container">
      <div className="pet-list">
        <div className="pet-card">
          <img src={GoldenRetriever} alt="Golden Retriever" />
          <h3>Golden Retriever</h3>
          <p>3 years</p>
          <p>Golden Retrievers are friendly, intelligent, and devoted.</p>
          <button className="adopt-button">Adopt</button>
        </div>

        <div className="pet-card">
          <img src={Bulldog} alt="Bulldog" />
          <h3>Bulldog</h3>
          <p>1 year</p>
          <p>Bulldogs are known for their calm and friendly nature.</p>
          <button className="adopt-button">Adopt</button>
        </div>

        <div className="pet-card">
          <img src={Labrador} alt="Labrador" />
          <h3>Labrador Retriever</h3>
          <p>2 years</p>
          <p>Labradors are gentle, friendly, and good with families.</p>
          <button className="adopt-button">Adopt</button>
        </div>
      </div>
    </div>
  );
}

export default PetDetail;
