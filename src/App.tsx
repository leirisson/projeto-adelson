import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Services />
      <Benefits />
      <About />
      <Partners />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;