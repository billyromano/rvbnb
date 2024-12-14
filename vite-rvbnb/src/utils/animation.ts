import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (element: Element, delay: number = 0) => {
  const tl = gsap.timeline();
  
  tl.fromTo(element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power2.out'
    }
  );

  return tl;
};

export const fadeInUp = (element: Element, delay: number = 0) => {
  const tl = gsap.timeline();
  
  tl.fromTo(element,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power3.out'
    }
  );

  return tl;
};

export const slideIn = (element: Element, direction: 'left' | 'right' | 'up' | 'down', delay: number = 0) => {
  const tl = gsap.timeline();
  const offset = 100;
  
  const initialProps = {
    x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
    y: direction === 'up' ? -offset : direction === 'down' ? offset : 0,
    opacity: 0
  };
  
  tl.fromTo(element,
    initialProps,
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power3.out'
    }
  );

  return tl;
};

export const scaleIn = (element: Element, delay: number = 0) => {
  const tl = gsap.timeline();
  
  tl.fromTo(element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'back.out(1.7)'
    }
  );

  return tl;
};