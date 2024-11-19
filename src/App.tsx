import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Preview from './components/Preview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ChatInterface from './components/ChatInterface';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {isChatOpen ? (
        <ChatInterface onClose={() => setIsChatOpen(false)} />
      ) : (
        <>
          <Header />
          <Hero onTryDemo={() => setIsChatOpen(true)} />
          <Features />
          <Preview />
          <Testimonials />
          <Pricing />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;