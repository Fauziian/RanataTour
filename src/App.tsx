import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Routes from './components/Routes';
import Reservation from './components/Reservation';
import PaymentFlow from './components/PaymentFlow';
import AboutEvent from './components/AboutEvent';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', color: '#E8E0D0' }}>
      {/* Film-grain noise overlay */}
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Routes />
      <Reservation />
      <PaymentFlow />
      <AboutEvent />
      <Footer />
    </div>
  );
}
