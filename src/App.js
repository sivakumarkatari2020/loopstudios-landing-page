import React from 'react';
import HeroSection from './components/HeroSection.js';
import SectionTwo from './components/SectionTwo.js';
import SectionThree from './components/SectionThree';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
