import gsap from 'gsap';

export const fadeIn = (element: Element, delay: number = 0) => {
  return gsap.fromTo(element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power2.out'
    }
  );
};

export const fadeInUp = (element: Element, delay: number = 0) => {
  return gsap.fromTo(element,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: 'power3.out'
    }
  );
};