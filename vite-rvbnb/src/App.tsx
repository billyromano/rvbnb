import React from 'react';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { Interactive } from './components/sections/Interactive';
import { Lifestyle } from './components/sections/Lifestyle';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Navigation } from './components/layout/Navigation';
import { WebGLBackground } from './components/three/WebGLBackground';

function App() {
  return (
    <div className="relative">
      <WebGLBackground />
      <Navigation />
      <Hero />
      <HowItWorks />
      <Interactive />
      <Lifestyle />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;