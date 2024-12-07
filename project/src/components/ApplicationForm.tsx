import React, { useState } from 'react';
import { AdoptionApplication } from '../types/adoption';
import { X } from 'lucide-react';

interface ApplicationFormProps {
  onSubmit: (application: Partial<AdoptionApplication>) => void;
  onClose: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    petId: '',
    applicantDetails: {
      name: '',
      email: '',
      phone: '',
      address: ''
    },
    additionalNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      applicationDate: new Date().toISOString(),
      status: 'pending'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-warm-grey hover:text-charcoal"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-xl font-semibold text-charcoal mb-4">New Adoption Application</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Pet ID
            </label>
            <input
              type="text"
              value={formData.petId}
              onChange={(e) => setFormData({ ...formData, petId: e.target.value })}
              className="w-full p-2 border border-warm-grey rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.applicantDetails.name}
              onChange={(e) => setFormData({
                ...formData,
                applicantDetails: { ...formData.applicantDetails, name: e.target.value }
              })}
              className="w-full p-2 border border-warm-grey rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.applicantDetails.email}
              onChange={(e) => setFormData({
                ...formData,
                applicantDetails: { ...formData.applicantDetails, email: e.target.value }
              })}
              className="w-full p-2 border border-warm-grey rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={formData.applicantDetails.phone}
              onChange={(e) => setFormData({
                ...formData,
                applicantDetails: { ...formData.applicantDetails, phone: e.target.value }
              })}
              className="w-full p-2 border border-warm-grey rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Address
            </label>
            <textarea
              value={formData.applicantDetails.address}
              onChange={(e) => setFormData({
                ...formData,
                applicantDetails: { ...formData.applicantDetails, address: e.target.value }
              })}
              className="w-full p-2 border border-warm-grey rounded-md"
              required
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Additional Notes
            </label>
            <textarea
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              className="w-full p-2 border border-warm-grey rounded-md"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-soft-blue text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};