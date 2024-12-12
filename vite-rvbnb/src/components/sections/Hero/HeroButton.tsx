import React from 'react';
import { Button } from '../../ui/Button';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export const HeroButton: React.FC = () => {
  const handleExplore = () => {
    // Smooth scroll to the How It Works section
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: '#how-it-works',
        offsetY: 80, // Offset for fixed header
      },
      ease: 'power3.inOut'
    });
  };

  return (
    <Button 
      size="lg" 
      onClick={handleExplore}
      className="
        relative overflow-hidden
        bg-gradient-to-r from-blue-500 to-blue-700
        hover:from-blue-600 hover:to-blue-800
        text-white
        transform hover:scale-105
        transition-all duration-300
        shadow-lg hover:shadow-xl
        group
      "
    >
      <span className="relative z-10 flex items-center gap-2">
        Start Your Journey
        <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
      </span>
      <div 
        className="
          absolute inset-0 
          bg-gradient-to-r from-blue-600 to-blue-800
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      />
    </Button>
  );
};