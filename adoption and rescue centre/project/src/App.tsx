import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdoptionPage from './pages/AdoptionPage';
import RescueCentrePage from './pages/RescueCentrePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdoptionPage />} />
        <Route path="/rescue" element={<RescueCentrePage />} />
      </Routes>
    </Router>
  );
}

export default App;