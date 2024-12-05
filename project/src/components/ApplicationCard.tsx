import React, { useState } from 'react';
import { AdoptionApplication } from '../types/adoption';
import { Clock, Edit2, Check, X, Trash2 } from 'lucide-react';
import { updateApplication, deleteApplication } from '../services/applicationService';

interface ApplicationCardProps {
  application: AdoptionApplication;
  onUpdate: (updatedApplication: AdoptionApplication) => void;
  onDelete: (applicationId: string) => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ 
  application, 
  onUpdate,
  onDelete
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(application.additionalNotes || '');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleUpdate = async () => {
    try {
      const updated = await updateApplication(application.id, { additionalNotes: notes });
      onUpdate(updated);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update application:', error);
    }
  };

  const handleDelete = async () => {
    if (!isDeleting) return setIsDeleting(true);
    
    try {
      await deleteApplication(application.id);
      onDelete(application.id);
    } catch (error) {
      console.error('Failed to delete application:', error);
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-charcoal">
            Application #{application.id}
          </h3>
          <p className="text-warm-grey">
            <Clock size={16} className="inline mr-2" />
            Submitted on {new Date(application.applicationDate).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm ${
            application.status === 'pending' ? 'bg-bright-yellow text-charcoal' :
            application.status === 'approved' ? 'bg-forest-green text-white' :
            'bg-red-500 text-white'
          }`}>
            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
          </span>
          <button
            onClick={handleDelete}
            className={`p-2 rounded-full hover:bg-red-50 ${
              isDeleting ? 'text-red-600' : 'text-warm-grey'
            }`}
            title={isDeleting ? 'Confirm deletion' : 'Delete application'}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-charcoal mb-2">Applicant Details</h4>
        <div className="text-warm-grey">
          <p>{application.applicantDetails.name}</p>
          <p>{application.applicantDetails.email}</p>
          <p>{application.applicantDetails.phone}</p>
          <p>{application.applicantDetails.address}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-charcoal">Additional Notes</h4>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="text-soft-blue hover:text-blue-700"
            >
              <Edit2 size={16} />
            </button>
          )}
        </div>
        {isEditing ? (
          <div className="mt-2">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border border-warm-grey rounded-md"
              rows={3}
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => setIsEditing(false)}
                className="p-2 text-warm-grey hover:text-charcoal"
              >
                <X size={16} />
              </button>
              <button
                onClick={handleUpdate}
                className="p-2 text-forest-green hover:text-green-700"
              >
                <Check size={16} />
              </button>
            </div>
          </div>
        ) : (
          <p className="text-warm-grey mt-2">{notes || 'No additional notes'}</p>
        )}
      </div>
    </div>
  );
};