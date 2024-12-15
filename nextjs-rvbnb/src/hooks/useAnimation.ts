'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type AnimationType = 'fadeIn' | 'fadeInUp' | 'slideIn' | 'scaleIn';
type SlideDirection = 'left' | 'right' | 'up' | 'down';

interface AnimationOptions {
  direction?: SlideDirection;
  delay?: number;
}

export function useAnimation<T extends HTMLElement>(
  type: AnimationType = 'fadeIn',
  options: AnimationOptions = {}
) {
  const elementRef = useRef<T>(null);
  const { direction = 'up', delay = 0 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animation;
    switch (type) {
      case 'fadeIn':
        animation = gsap.fromTo(element,
          { opacity: 0 },
          { opacity: 1, duration: 1, delay, ease: 'power2.out' }
        );
        break;
      case 'fadeInUp':
        animation = gsap.fromTo(element,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay, ease: 'power3.out' }
        );
        break;
      case 'slideIn':
        const offset = 100;
        animation = gsap.fromTo(element,
          {
            x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
            y: direction === 'up' ? -offset : direction === 'down' ? offset : 0,
            opacity: 0
          },
          { x: 0, y: 0, opacity: 1, duration: 0.8, delay, ease: 'power3.out' }
        );
        break;
      case 'scaleIn':
        animation = gsap.fromTo(element,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, delay, ease: 'back.out(1.7)' }
        );
        break;
    }

    return () => {
      animation?.kill();
    };
  }, [type, direction, delay]);

  return elementRef;
}