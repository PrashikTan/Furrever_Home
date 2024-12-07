import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import AdoptionCard from '../components/AdoptionCard';
import { PawPrint, Clock } from 'lucide-react';

// Mock data - in a real app, this would come from an API
const mockPets = {
  adopted: [
    {
      id: '1',
      name: 'Max',
      image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
      status: 'adopted',
      applicationDate: '2024-01-15',
      adoptionDate: '2024-02-01'
    },
    {
      id: '2',
      name: 'Luna',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
      status: 'adopted',
      applicationDate: '2024-02-01',
      adoptionDate: '2024-02-15'
    }
  ],
  pending: [
    {
      id: '3',
      name: 'Buddy',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
      status: 'pending',
      applicationDate: '2024-03-01'
    }
  ]
} as const;

const MyAdoptions = () => {
  const [activeTab, setActiveTab] = useState('adopted');

  const handleEdit = (id: string) => {
    // In a real app, this would navigate to an edit form
    console.log('Edit application:', id);
  };

  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-purple-900">My Adoptions</h1>
          <div className="bg-purple-100 px-4 py-2 rounded-lg flex items-center">
            <Clock className="h-5 w-5 text-purple-600 mr-2" />
            <span className="text-purple-900">Last updated: Today</span>
          </div>
        </div>

        <Tabs defaultValue="adopted" className="space-y-6">
          <TabsList className="bg-white p-1 rounded-lg shadow-sm">
            <TabsTrigger
              value="adopted"
              className="flex items-center space-x-2"
              onClick={() => setActiveTab('adopted')}
            >
              <PawPrint className="h-5 w-5" />
              <span>Adopted Pets ({mockPets.adopted.length})</span>
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="flex items-center space-x-2"
              onClick={() => setActiveTab('pending')}
            >
              <Clock className="h-5 w-5" />
              <span>Pending Applications ({mockPets.pending.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="adopted" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockPets.adopted.map((pet) => (
                <AdoptionCard
                  key={pet.id}
                  pet={pet}
                  onEdit={handleEdit}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockPets.pending.map((pet) => (
                <AdoptionCard
                  key={pet.id}
                  pet={pet}
                  onEdit={handleEdit}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyAdoptions;