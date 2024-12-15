import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export const initGSAP = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
  gsap.config({
    autoSleep: 60,
    force3D: true,
    nullTargetWarn: false,
  });

  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
    start: 'top bottom-=100',
  });
};

export const cleanupGSAP = () => {
  ScrollTrigger.getAll().forEach(t => t.kill());
};

export const scrollToSection = (target: string) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: target,
      offsetY: 80
    },
    ease: "power2.inOut"
  });
};