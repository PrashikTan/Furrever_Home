import React from 'react';
import { Heart } from 'lucide-react';

interface PetCardProps {
  name: string;
  image: string;
  breed: string;
  age: string;
  size: string;
  available: boolean;
}

const PetCard = ({ name, image, breed, age, size, available }: PetCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
            available ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {available ? 'Available' : 'Pending'}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="mt-2 space-y-1">
          <p className="text-sm text-gray-600">Breed: {breed}</p>
          <p className="text-sm text-gray-600">Age: {age}</p>
          <p className="text-sm text-gray-600">Size: {size}</p>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Adopt
          </button>
          <button className="p-2 text-gray-400 hover:text-red-500 border rounded-md">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;