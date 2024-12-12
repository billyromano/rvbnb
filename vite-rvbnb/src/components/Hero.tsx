import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RvIcon } from './icons/RvIcon';
import { Button } from './ui/Button';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="hero-content text-center text-white px-4">
        <RvIcon className="w-20 h-20 mx-auto mb-8" />
        <h1 className="text-6xl font-bold mb-6">Welcome to RVbnb</h1>
        <p className="text-xl mb-8">Your next adventure begins with the perfect RV</p>
        <Button size="lg">
          Start Your Journey
        </Button>
      </div>
    </div>
  );
};