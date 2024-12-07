import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Filters from '../components/adoption/Filters';
import PetGrid from '../components/adoption/PetGrid';

function AdoptionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar activePage="adoption" />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Companion
          </h1>
          <p className="text-lg text-gray-600">
            Every pet deserves a loving home. Our adoption process is designed to help you
            find the perfect match while ensuring the well-being of our furry friends.
            Use our search tools below to filter and find your new family member.
          </p>
        </div>

        <div className="space-y-8">
          <Filters onFilterChange={() => {}} />
          <PetGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AdoptionPage;