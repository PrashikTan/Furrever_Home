import React, { useState } from 'react';
import { Calendar, Clock, Edit } from 'lucide-react';
import Modal from './ui/Modal';
import PendingApplicationDetails from './PendingApplicationDetails';

interface Pet {
  id: string;
  name: string;
  image: string;
  status: 'adopted' | 'pending';
  adoptionDate?: string;
  applicationDate: string;
}

interface AdoptionCardProps {
  pet: Pet;
  onEdit: (id: string) => void;
}

const mockApplicationDetails = {
  applicantName: "John Doe",
  phone: "(555) 123-4567",
  email: "john.doe@example.com",
  address: "123 Main St, Anytown, USA",
  reason: "I've always wanted a pet companion and can provide a loving home with plenty of space and attention."
};

const AdoptionCard = ({ pet, onEdit }: AdoptionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    onEdit(pet.id);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={pet.image} 
          alt={pet.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-purple-900">{pet.name}</h3>
            <span className={`px-3 py-1 rounded-full text-sm ${
              pet.status === 'adopted' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {pet.status.charAt(0).toUpperCase() + pet.status.slice(1)}
            </span>
          </div>
          
          <div className="space-y-2 text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Application: {pet.applicationDate}</span>
            </div>
            {pet.adoptionDate && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Adopted: {pet.adoptionDate}</span>
              </div>
            )}
          </div>

          {pet.status === 'pending' && (
            <button
              onClick={handleEdit}
              className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              <Edit className="h-4 w-4 mr-2" />
              View Application
            </button>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Pending Application Details"
      >
        <PendingApplicationDetails
          pet={pet}
          applicationDetails={mockApplicationDetails}
          onSave={handleSave}
        />
      </Modal>
    </>
  );
};

export default AdoptionCard;