import React from 'react';
import Navbar from './components/Navbar';
import MyAdoptions from './pages/MyAdoptions';

function App() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      <MyAdoptions />
    </div>
  );
}

export default App;