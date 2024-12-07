import React from 'react';
import { Search } from 'lucide-react';

const Filters = ({ onFilterChange }: { onFilterChange: (filters: any) => void }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search pets by name..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <select className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">All Breeds</option>
          <option value="labrador">Labrador</option>
          <option value="german-shepherd">German Shepherd</option>
          <option value="golden-retriever">Golden Retriever</option>
        </select>

        <select className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">All Ages</option>
          <option value="puppy">Puppy</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>

        <select className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">All Sizes</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <select className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">All Locations</option>
          <option value="new-york">New York</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
        </select>

        <select className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">Availability</option>
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="adopted">Adopted</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;