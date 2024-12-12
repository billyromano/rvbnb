import React, { useEffect, useRef } from 'react';
import { HeroButton } from './HeroButton';
import gsap from 'gsap';

export const HeroContent: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const title = titleRef.current;
    const text = textRef.current;
    const button = buttonRef.current;

    if (!content || !title || !text || !button) return;

    const tl = gsap.timeline({ delay: 0.5 });

    // Animate title
    tl.fromTo(title,
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: 'power3.out'
      }
    );

    // Animate text
    tl.fromTo(text,
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: 'power2.out'
      },
      '-=0.3'
    );

    // Animate button
    tl.fromTo(button,
      { 
        y: 20, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        ease: 'back.out(1.7)'
      },
      '-=0.2'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={contentRef} className="hero-content text-center text-white px-4 z-10">
      <h1 
        ref={titleRef}
        className="text-6xl font-bold mb-6 opacity-0"
      >
        Your Adventure Awaits
      </h1>
      <p 
        ref={textRef}
        className="text-xl mb-8 max-w-2xl mx-auto opacity-0"
      >
        Experience the freedom of the open road with RVbnb. 
        Find the perfect RV for your next journey, connect with trusted owners, 
        and create unforgettable memories.
      </p>
      <div ref={buttonRef} className="opacity-0">
        <HeroButton />
      </div>
    </div>
  );
};