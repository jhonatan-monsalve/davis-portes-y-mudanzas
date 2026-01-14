
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustSection from './components/TrustSection';
import AreaSection from './components/AreaSection';
import BudgetCTA from './components/BudgetCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustSection />
        <AreaSection />
        <BudgetCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
