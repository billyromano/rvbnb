import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeroContent } from './HeroContent';
import { RvIcon } from '../icons/RvIcon';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const background = backgroundRef.current;
    
    if (!hero || !background) return;

    // Initial animation timeline
    const tl = gsap.timeline();

    // Animate background
    tl.fromTo(background,
      { 
        scale: 1.1,
        opacity: 0 
      },
      { 
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out'
      }
    );

    // Create scroll-based parallax effect
    gsap.to(background, {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        ref={backgroundRef}
        className="absolute inset-0 opacity-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
        <RvIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] text-white/5 pointer-events-none" />
      </div>
      <HeroContent />
    </div>
  );
};