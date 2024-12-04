import React from "react";
import "../styles/PetCard.css";

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <div className="pet-details">
        <h3>{pet.name}</h3>
        <p>
          <strong>Breed:</strong> {pet.breed}
        </p>
        <p>
          <strong>Age:</strong> {pet.age} years
        </p>
        <p>
          <strong>Size:</strong> {pet.size}
        </p>
        <p>
          <strong>Location:</strong> {pet.location}
        </p>
        <p>
          <strong>Status:</strong> {pet.availability}
        </p>
        <button className="view-details-button">View Details</button>
      </div>
    </div>
  );
};

export default PetCard;






