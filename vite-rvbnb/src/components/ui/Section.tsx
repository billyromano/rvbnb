import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titleElement = titleRef.current;
    const content = contentRef.current;

    if (!section || !titleElement || !content) return;

    // Set initial states
    gsap.set(titleElement, { y: 50, opacity: 0 });
    gsap.set(content.children, { y: 30, opacity: 0 });

    // Create timeline for section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate title
    tl.to(titleElement, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    });

    // Animate content with stagger
    tl.to(content.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    }, '-=0.3');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={`py-24 scroll-mt-16 ${className}`}
    >
      <h2 
        ref={titleRef}
        className="text-4xl font-bold text-center mb-16"
      >
        {title}
      </h2>
      <div ref={contentRef}>
        {children}
      </div>
    </section>
  );
};