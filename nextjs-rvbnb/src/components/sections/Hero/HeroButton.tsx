'use client';

import { Button } from '@/components/ui/Button';
import { ArrowDown } from 'lucide-react';
import { scrollToSection } from '@/lib/gsap';

export function HeroButton() {
  const handleExplore = () => {
    scrollToSection('#how-it-works');
  };

  return (
    <Button 
      size="lg" 
      onClick={handleExplore}
      className="group relative overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2">
        Start Your Journey
        <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
      </span>
      <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
    </Button>
  );
}