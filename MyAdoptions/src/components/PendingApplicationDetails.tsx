import React, { useState } from 'react';
import { Clock, Edit } from 'lucide-react';
import EditableApplicationForm from './EditableApplicationForm';

interface PendingApplicationDetailsProps {
  pet: {
    id: string;
    name: string;
    image: string;
    applicationDate: string;
    status: string;
  };
  applicationDetails: {
    applicantName: string;
    phone: string;
    email: string;
    address: string;
    reason: string;
  };
  onSave: () => void;
}

const PendingApplicationDetails: React.FC<PendingApplicationDetailsProps> = ({
  pet,
  applicationDetails,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedData: typeof applicationDetails) => {
    // In a real app, this would make an API call to update the data
    console.log('Saving updated data:', updatedData);
    onSave();
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-purple-900">{pet.name}</h4>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center text-purple-600 hover:text-purple-700"
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </button>
            )}
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Clock className="h-4 w-4 mr-1" />
            <span>Applied: {pet.applicationDate}</span>
          </div>
        </div>
      </div>

      {isEditing ? (
        <EditableApplicationForm
          initialData={applicationDetails}
          onSave={handleSave}
        />
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm font-medium text-gray-500">Full Name</h5>
              <p className="mt-1">{applicationDetails.applicantName}</p>
            </div>
            <div>
              <h5 className="text-sm font-medium text-gray-500">Phone</h5>
              <p className="mt-1">{applicationDetails.phone}</p>
            </div>
            <div>
              <h5 className="text-sm font-medium text-gray-500">Email</h5>
              <p className="mt-1">{applicationDetails.email}</p>
            </div>
            <div>
              <h5 className="text-sm font-medium text-gray-500">Address</h5>
              <p className="mt-1">{applicationDetails.address}</p>
            </div>
          </div>
          
          <div>
            <h5 className="text-sm font-medium text-gray-500">Reason for Adoption</h5>
            <p className="mt-1">{applicationDetails.reason}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingApplicationDetails;