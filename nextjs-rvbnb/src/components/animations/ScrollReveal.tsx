'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1,
  distance = 50,
  className
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.registerPlugin(ScrollTrigger);

    // Initial state
    const initialProps = {
      opacity: 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0
    };

    gsap.set(element, initialProps);

    // Create animation
    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, delay, duration, distance]);

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
}