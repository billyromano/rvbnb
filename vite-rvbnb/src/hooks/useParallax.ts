import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
  speed?: number;
  start?: string;
  end?: string;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const { speed = 0.5, start = 'top bottom', end = 'bottom top' } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { y: 0 },
      {
        y: -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub: true
        }
      }
    );
  }, [speed, start, end]);

  return elementRef;
};