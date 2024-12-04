import React from "react";
import "../styles/PetCenters.css"; // Make sure PetCenters.css is in the 'styles' folder

function PetCenters() {
  const centers = [
    { name: "Happy Paws Shelter", location: "Mumbai", contact: "123-456-7890" },
    { name: "Careful Tails", location: "Pune", contact: "987-654-3210" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Nearby Pet Centers</h2>
      {centers.map((center, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          <h3>{center.name}</h3>
          <p>Location: {center.location}</p>
          <p>Contact: {center.contact}</p>
        </div>
      ))}
    </div>
  );
}

export default PetCenters;
