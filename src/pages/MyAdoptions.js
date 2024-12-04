import React, { useState, useEffect } from "react";
import "./MyAdoptions.css";

const MyAdoptions = () => {
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [pendingApplications, setPendingApplications] = useState([]);
  const [newAdoption, setNewAdoption] = useState({ name: "", type: "", date: "" });
  const [newApplication, setNewApplication] = useState({ name: "", type: "", date: "" });

  useEffect(() => {
    const storedAdoptedPets = JSON.parse(localStorage.getItem("adoptedPets")) || [];
    const storedPendingApplications = JSON.parse(localStorage.getItem("pendingApplications")) || [];
    setAdoptedPets(storedAdoptedPets);
    setPendingApplications(storedPendingApplications);
  }, []);

  useEffect(() => {
    localStorage.setItem("adoptedPets", JSON.stringify(adoptedPets));
    localStorage.setItem("pendingApplications", JSON.stringify(pendingApplications));
  }, [adoptedPets, pendingApplications]);

  // Valid pet types
  const validPetTypes = ["cats", "dogs", "hamsters", "parrots", "guinea pigs", "gold fish"];

  // Validation function
  const validateEntry = (entry) => {
    const currentDate = new Date().toISOString().split("T")[0];

    if (!entry.name || entry.name.length > 45) {
      alert("Pet name must not exceed 45 characters.");
      return false;
    }

    if (!validPetTypes.includes(entry.type.toLowerCase())) {
      alert(
        "Invalid pet type. Please choose from: cats, dogs, hamsters, parrots, guinea pigs, gold fish."
      );
      return false;
    }

    if (!entry.date || entry.date < currentDate) {
      alert("Date must not be before today's date.");
      return false;
    }

    return true;
  };

  const handleAddAdoption = () => {
    if (validateEntry(newAdoption)) {
      setAdoptedPets([...adoptedPets, newAdoption]);
      setNewAdoption({ name: "", type: "", date: "" });
    }
  };

  const handleAddApplication = () => {
    if (validateEntry(newApplication)) {
      setPendingApplications([...pendingApplications, newApplication]);
      setNewApplication({ name: "", type: "", date: "" });
    }
  };

  const handleDeleteAdoption = (index) => {
    const updatedList = [...adoptedPets];
    updatedList.splice(index, 1);
    setAdoptedPets(updatedList);
  };

  const handleDeleteApplication = (index) => {
    const updatedList = [...pendingApplications];
    updatedList.splice(index, 1);
    setPendingApplications(updatedList);
  };

  return (
    <div className="my-adoptions-container">
      <h1>My Adoptions</h1>
      <div className="separator"></div>

      {/* Adopted Pets Section */}
      <div className="adoption-box">
        <h2>Adopted Pets</h2>
        <div className="adoption-content">
          <ul>
            {adoptedPets.map((pet, index) => (
              <li key={index}>
                {pet.name} ({pet.type}) - Adopted on {pet.date}
                <button
                  className="delete-button"
                  onClick={() => handleDeleteAdoption(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="add-adoption-form">
            <input
              type="text"
              placeholder="Pet Name"
              value={newAdoption.name}
              onChange={(e) => setNewAdoption({ ...newAdoption, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Pet Type"
              value={newAdoption.type}
              onChange={(e) => setNewAdoption({ ...newAdoption, type: e.target.value })}
            />
            <input
              type="date"
              value={newAdoption.date}
              onChange={(e) => setNewAdoption({ ...newAdoption, date: e.target.value })}
            />
            <button className="add-button" onClick={handleAddAdoption}>
              Add Adoption
            </button>
          </div>
        </div>
      </div>

      {/* Pending Applications Section */}
      <div className="adoption-box">
        <h2>Pending Applications</h2>
        <div className="adoption-content">
          <ul>
            {pendingApplications.map((application, index) => (
              <li key={index}>
                {application.name} ({application.type}) - Submitted on {application.date}
                <button
                  className="delete-button"
                  onClick={() => handleDeleteApplication(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="add-application-form">
            <input
              type="text"
              placeholder="Pet Name"
              value={newApplication.name}
              onChange={(e) => setNewApplication({ ...newApplication, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Pet Type"
              value={newApplication.type}
              onChange={(e) => setNewApplication({ ...newApplication, type: e.target.value })}
            />
            <input
              type="date"
              value={newApplication.date}
              onChange={(e) => setNewApplication({ ...newApplication, date: e.target.value })}
            />
            <button className="add-button" onClick={handleAddApplication}>
              Add Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAdoptions;
