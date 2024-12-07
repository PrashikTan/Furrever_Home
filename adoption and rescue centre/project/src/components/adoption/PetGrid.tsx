import React from 'react';
import PetCard from './PetCard';

const SAMPLE_PETS = [
  {
    name: "Luna",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    breed: "German Shepherd",
    age: "2 years",
    size: "Large",
    available: true
  },
  {
    name: "Max",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    breed: "Golden Retriever",
    age: "4 months",
    size: "Medium",
    available: true
  },
  {
    name: "Bella",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
    breed: "Labrador",
    age: "1 year",
    size: "Large",
    available: false
  },
  {
    name: "Charlie",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    breed: "Husky",
    age: "3 years",
    size: "Large",
    available: true
  },
  {
    name: "Lucy",
    image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48",
    breed: "Border Collie",
    age: "6 months",
    size: "Medium",
    available: true
  },
  {
    name: "Rocky",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    breed: "Rottweiler",
    age: "4 years",
    size: "Large",
    available: true
  }
];

const PetGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SAMPLE_PETS.map((pet, index) => (
        <PetCard key={index} {...pet} />
      ))}
    </div>
  );
};

export default PetGrid;