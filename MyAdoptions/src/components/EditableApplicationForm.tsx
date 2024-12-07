import React, { useState } from 'react';
import { User, Phone, Mail, Home, Save } from 'lucide-react';

interface ApplicationDetails {
  applicantName: string;
  phone: string;
  email: string;
  address: string;
  reason: string;
}

interface EditableApplicationFormProps {
  initialData: ApplicationDetails;
  onSave: (data: ApplicationDetails) => void;
}

const EditableApplicationForm: React.FC<EditableApplicationFormProps> = ({
  initialData,
  onSave,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <div className="relative">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <User className="h-4 w-4 text-purple-600 mr-2" />
            Full Name
          </label>
          <input
            type="text"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>

        <div className="relative">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Phone className="h-4 w-4 text-purple-600 mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>

        <div className="relative">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Mail className="h-4 w-4 text-purple-600 mr-2" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>

        <div className="relative">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Home className="h-4 w-4 text-purple-600 mr-2" />
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reason for Adoption
          </label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditableApplicationForm;