import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import ContactPage from './components/contact/ContactPage';

function App() {
  return (
    <Layout>
      <Hero />
      <ContactPage />
    </Layout>
  );
}

export default App;