import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
