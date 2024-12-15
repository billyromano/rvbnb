import gsap from 'gsap';

type SlideDirection = 'left' | 'right' | 'up' | 'down';

export const slideIn = (element: Element, direction: SlideDirection, delay: number = 0) => {
  const offset = 100;
  
  const initialProps = {
    x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
    y: direction === 'up' ? -offset : direction === 'down' ? offset : 0,
    opacity: 0
  };
  
  return gsap.fromTo(element,
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
};