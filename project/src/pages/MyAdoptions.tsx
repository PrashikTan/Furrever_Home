import React, { useEffect, useState } from 'react';
import { Pet, AdoptionApplication } from '../types/adoption';
import { AdoptedPetCard } from '../components/AdoptedPetCard';
import { ApplicationCard } from '../components/ApplicationCard';
import { ApplicationForm } from '../components/ApplicationForm';
import { Navbar } from '../components/Navbar';
import { fetchUserAdoptions } from '../services/adoptionService';
import { fetchPendingApplications, createApplication } from '../services/applicationService';
import { PawPrint, Clock, Plus } from 'lucide-react';

export const MyAdoptions: React.FC = () => {
  const [adoptedPets, setAdoptedPets] = useState<Pet[]>([]);
  const [pendingApplications, setPendingApplications] = useState<AdoptionApplication[]>([]);
  const [activeTab, setActiveTab] = useState<'adopted' | 'pending'>('adopted');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [pets, applications] = await Promise.all([
          fetchUserAdoptions(),
          fetchPendingApplications(),
        ]);
        setAdoptedPets(pets);
        setPendingApplications(applications);
      } catch (err) {
        setError('Failed to load adoption data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleApplicationUpdate = (updatedApplication: AdoptionApplication) => {
    setPendingApplications(prev =>
      prev.map(app => app.id === updatedApplication.id ? updatedApplication : app)
    );
  };

  const handleApplicationDelete = (applicationId: string) => {
    setPendingApplications(prev =>
      prev.filter(app => app.id !== applicationId)
    );
  };

  const handleApplicationCreate = async (application: Partial<AdoptionApplication>) => {
    try {
      const newApplication = await createApplication(application);
      setPendingApplications(prev => [...prev, newApplication]);
      setShowApplicationForm(false);
    } catch (error) {
      console.error('Failed to create application:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-soft-blue"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-off-white p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-charcoal">My Adoptions</h1>
          {activeTab === 'pending' && (
            <button
              onClick={() => setShowApplicationForm(true)}
              className="flex items-center px-4 py-2 bg-soft-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus size={20} className="mr-2" />
              New Application
            </button>
          )}
        </div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('adopted')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'adopted'
                ? 'bg-soft-blue text-white'
                : 'bg-white text-warm-grey hover:bg-gray-50'
            }`}
          >
            <PawPrint size={20} className="mr-2" />
            Adopted Pets ({adoptedPets.length})
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'pending'
                ? 'bg-soft-blue text-white'
                : 'bg-white text-warm-grey hover:bg-gray-50'
            }`}
          >
            <Clock size={20} className="mr-2" />
            Pending Applications ({pendingApplications.length})
          </button>
        </div>

        {activeTab === 'adopted' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adoptedPets.map(pet => (
              <AdoptedPetCard key={pet.id} pet={pet} />
            ))}
            {adoptedPets.length === 0 && (
              <div className="col-span-full text-center py-12 bg-white rounded-lg">
                <p className="text-warm-grey">You haven't adopted any pets yet.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {pendingApplications.map(application => (
              <ApplicationCard
                key={application.id}
                application={application}
                onUpdate={handleApplicationUpdate}
                onDelete={handleApplicationDelete}
              />
            ))}
            {pendingApplications.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-warm-grey">No pending applications.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {showApplicationForm && (
        <ApplicationForm
          onSubmit={handleApplicationCreate}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </div>
  );
};