import { Suspense } from 'react';
import {
  Hero,
  Features,
  HowItWorks,
  Interactive,
  Lifestyle,
  Pricing,
  FAQ,
  Contact
} from '@/components/sections';
import { Navigation } from '@/components/layout/Navigation';
import { WebGLBackground } from '@/components/three/WebGLBackground';
import { TestimonialsContainer } from '@/components/sections/Testimonials/TestimonialsContainer';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function Home() {
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
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialsContainer />
      </Suspense>
      <FAQ />
      <Contact />
    </div>
  );
}