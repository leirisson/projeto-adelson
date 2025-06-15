import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Differentials from './components/Differentials';
import QualityServices from './components/QualityServices';
import EnvironmentServices from './components/EnvironmentServices';
import SafetyServices from './components/SafetyServices';
import About from './components/About';
import SocialProof from './components/SocialProof';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Differentials />
      <QualityServices />
      <EnvironmentServices />
      <SafetyServices />
      <About />
      <SocialProof />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;