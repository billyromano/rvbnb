import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { testimonials } from '../data/content';

export const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = testimonialsRef.current?.querySelectorAll('.testimonial-card');
    
    cards?.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  return (
    <section className="py-24 bg-white" ref={testimonialsRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card p-8 rounded-xl bg-gray-50 shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};