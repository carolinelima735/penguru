import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LearningPath from './components/LearningPath';
import CommandSection from './components/CommandSection';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LearningPath />
      <Features />
      <CommandSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;