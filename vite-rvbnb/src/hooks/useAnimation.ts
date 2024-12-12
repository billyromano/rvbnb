import { useEffect, useRef } from 'react';
import { fadeIn, fadeInUp, slideIn, scaleIn } from '../utils/animation';

type AnimationType = 'fadeIn' | 'fadeInUp' | 'slideIn' | 'scaleIn';
type SlideDirection = 'left' | 'right' | 'up' | 'down';

interface AnimationOptions {
  direction?: SlideDirection;
  delay?: number;
}

export const useAnimation = <T extends HTMLElement>(
  type: AnimationType = 'fadeIn',
  options: AnimationOptions = {}
) => {
  const elementRef = useRef<T>(null);
  const { direction = 'up', delay = 0 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animation;
    switch (type) {
      case 'fadeIn':
        animation = fadeIn(element, delay);
        break;
      case 'fadeInUp':
        animation = fadeInUp(element, delay);
        break;
      case 'slideIn':
        animation = slideIn(element, direction, delay);
        break;
      case 'scaleIn':
        animation = scaleIn(element, delay);
        break;
      default:
        animation = fadeIn(element, delay);
    }

    return () => {
      animation.kill();
    };
  }, [type, direction, delay]);

  return elementRef;
};