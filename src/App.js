import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieModal from './components/CookieModal';

function App() {
  const [showCookieModal, setShowCookieModal] = useState(true);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      {showCookieModal && (
        <CookieModal onClose={() => setShowCookieModal(false)} />
      )}
    </div>
  );
}

export default App;