import gsap from 'gsap';

export const scaleIn = (element: Element, delay: number = 0) => {
  return gsap.fromTo(element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'back.out(1.7)'
    }
  );