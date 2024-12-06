import React from 'react';
import Navbar from './components/Navbar';
import AdoptionFAQs from './pages/AdoptionFAQs';
import ProtocolSection from './components/ProtocolSection';

function App() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      <ProtocolSection />
      <AdoptionFAQs />
    </div>
  );
}

export default App;