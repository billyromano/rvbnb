import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const scrollToSection = (target: string) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: target,
      offsetY: 80 // Offset for fixed header
    },
    ease: "power2.inOut"
  });
};

export const createScrollTrigger = (element: string | Element, animation: gsap.core.Timeline) => {
  return ScrollTrigger.create({
    trigger: element,
    start: "top center+=100",
    end: "bottom center",
    animation: animation,
    toggleActions: "play none none reverse"
  });
};