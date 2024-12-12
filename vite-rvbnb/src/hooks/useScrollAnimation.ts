import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationConfig {
  trigger: Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
}

export const useScrollAnimation = (
  animation: gsap.core.Timeline,
  config: ScrollAnimationConfig
) => {
  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: config.trigger,
      start: config.start || 'top center',
      end: config.end || 'bottom center',
      scrub: config.scrub || false,
      pin: config.pin || false,
      markers: config.markers || false,
      animation: animation
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [animation, config]);
};