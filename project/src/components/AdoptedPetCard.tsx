import React from 'react';
import { Pet } from '../types/adoption';
import { Heart, Calendar } from 'lucide-react';

interface AdoptedPetCardProps {
  pet: Pet;
}

export const AdoptedPetCard: React.FC<AdoptedPetCardProps> = ({ pet }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={pet.imageUrl}
        alt={pet.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-charcoal">{pet.name}</h3>
          <span className="flex items-center text-forest-green">
            <Heart size={18} className="mr-1" />
            Adopted
          </span>
        </div>
        <div className="text-warm-grey">
          <p>{pet.breed} • {pet.species}</p>
          <p className="flex items-center mt-2">
            <Calendar size={16} className="mr-2" />
            {pet.age} years old
          </p>
        </div>
      </div>
    </div>
  );
};