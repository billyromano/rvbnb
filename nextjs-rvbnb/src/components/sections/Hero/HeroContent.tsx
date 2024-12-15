'use client';

import { HeroButton } from './HeroButton';
import { useAnimation } from '@/hooks/useAnimation';

export function HeroContent() {
  const contentRef = useAnimation<HTMLDivElement>('fadeInUp');

  return (
    <div ref={contentRef} className="hero-content text-center text-black px-4 z-10">
      <h1 className="text-6xl font-bold mb-6">
        Your Adventure Awaits
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Experience the freedom of the open road with RVbnb. 
        Find the perfect RV for your next journey, connect with trusted owners, 
        and create unforgettable memories.
      </p>
      <HeroButton />
    </div>
  );
}