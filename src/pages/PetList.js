import React, { useState } from "react";
import PetCard from "../styles/PetCard.css";
import "../styles/PetList.css";
import labrador from "../assets/labrador.jpeg";
import persianCat from "../assets/persian_cat.jpeg";
import bulldog from "../assets/bulldog.jpeg";
import siberianCat from "../assets/siberian_cat.jpeg";
import beagle from "../assets/beagle.jpeg";
import ragdollCat from "../assets/ragdoll_cat.jpeg";
import germanShepherd from "../assets/german_shepherd.jpeg";
import maineCoon from "../assets/maine_coon.jpeg";
import poodle from "../assets/poodle.jpeg";  // Added Poodle image

const PetList = () => {
  const petData = [
    { id: 1, name: "Buddy", breed: "Labrador", age: 3, size: "Large", location: "Pune", availability: "Available", image: labrador },
    { id: 2, name: "Bella", breed: "Persian Cat", age: 2, size: "Small", location: "Mumbai", availability: "Available", image: persianCat },
    { id: 3, name: "Rocky", breed: "Bulldog", age: 5, size: "Medium", location: "Delhi", availability: "Adopted", image: bulldog },
    { id: 4, name: "Mittens", breed: "Siberian Cat", age: 1, size: "Small", location: "Bangalore", availability: "Available", image: siberianCat },
    { id: 5, name: "Shadow", breed: "Beagle", age: 4, size: "Medium", location: "Chennai", availability: "Available", image: beagle },
    { id: 6, name: "Luna", breed: "Ragdoll Cat", age: 3, size: "Small", location: "Hyderabad", availability: "Adopted", image: ragdollCat },
    { id: 7, name: "Max", breed: "German Shepherd", age: 6, size: "Large", location: "Kolkata", availability: "Available", image: germanShepherd },
    { id: 8, name: "Whiskers", breed: "Maine Coon", age: 4, size: "Medium", location: "Jaipur", availability: "Available", image: maineCoon },
    { id: 9, name: "Charlie", breed: "Poodle", age: 2, size: "Small", location: "Mumbai", availability: "Available", image: poodle },  // New pet added here
  ];

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    breed: "",
    age: "",
    size: "",
    location: "",
    availability: "",
  });

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredPets = petData.filter((pet) => {
    return (
      pet.name.toLowerCase().includes(search) &&
      (filters.breed === "" || pet.breed === filters.breed) &&
      (filters.age === "" || pet.age === Number(filters.age)) &&
      (filters.size === "" || pet.size === filters.size) &&
      (filters.location === "" || pet.location === filters.location) &&
      (filters.availability === "" || pet.availability === filters.availability)
    );
  });

  return (
    <div className="pet-list-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for pets by name or breed..."
        value={search}
        onChange={handleSearch}
      />
      <div className="filters">
        <select name="breed" value={filters.breed} onChange={handleFilterChange}>
          <option value="">All Breeds</option>
          <option value="Labrador">Labrador</option>
          <option value="Persian Cat">Persian Cat</option>
          <option value="Bulldog">Bulldog</option>
          <option value="Siberian Cat">Siberian Cat</option>
          <option value="Beagle">Beagle</option>
          <option value="Ragdoll Cat">Ragdoll Cat</option>
          <option value="German Shepherd">German Shepherd</option>
          <option value="Maine Coon">Maine Coon</option>
          <option value="Poodle">Poodle</option> {/* Added Poodle filter */}
        </select>
        <select name="size" value={filters.size} onChange={handleFilterChange}>
          <option value="">All Sizes</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <select name="location" value={filters.location} onChange={handleFilterChange}>
          <option value="">All Locations</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Jaipur">Jaipur</option>
        </select>
        <select
          name="availability"
          value={filters.availability}
          onChange={handleFilterChange}
        >
          <option value="">All Statuses</option>
          <option value="Available">Available</option>
          <option value="Adopted">Adopted</option>
        </select>
      </div>
      <div className="pet-list">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        ) : (
          <p>No pets found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default PetList;






