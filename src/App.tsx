import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Preview from './components/Preview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Hero />
      <Features />
      <Preview />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;