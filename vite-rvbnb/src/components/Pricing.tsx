import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from './ui/Button';
import { pricing } from '../data/content';

export const Pricing: React.FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = pricingRef.current?.querySelectorAll('.pricing-card');
    
    cards?.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  return (
    <section className="py-24 bg-gray-50" ref={pricingRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricing.map((tier) => (
            <div 
              key={tier.id}
              className={`pricing-card p-8 rounded-2xl ${
                tier.recommended 
                  ? 'bg-blue-600 text-white transform scale-105' 
                  : 'bg-white'
              } shadow-xl`}
            >
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-lg">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className={`w-5 h-5 mr-3 ${tier.recommended ? 'text-white' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.recommended ? 'primary' : 'secondary'}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};