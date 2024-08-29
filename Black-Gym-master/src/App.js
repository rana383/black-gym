import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}

export default App;