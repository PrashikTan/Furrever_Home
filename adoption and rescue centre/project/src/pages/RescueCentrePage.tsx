import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import IntroSection from '../components/rescue/IntroSection';
import RescueCentreList from '../components/rescue/RescueCentreList';
import TestimonialSection from '../components/rescue/TestimonialSection';
import VolunteerSection from '../components/rescue/VolunteerSection';

function RescueCentrePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar activePage="rescue" />
      
      <main className="flex-grow">
        <IntroSection />
        <RescueCentreList />
        <TestimonialSection />
        <VolunteerSection />
      </main>

      <Footer />
    </div>
  );
}

export default RescueCentrePage;