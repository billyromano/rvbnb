import React from 'react';
import { Section } from '../../ui/Section';
import { ScrollReveal } from '../../Interactive/Animations/ScrollReveal';
import { Button } from '../../ui/Button';

const pricing = [
  {
    name: "Basic",
    price: 0,
    description: "Perfect for occasional RV owners",
    features: [
      "List one RV",
      "Basic calendar",
      "Standard support",
      "Basic insurance"
    ]
  },
  {
    name: "Pro",
    price: 29,
    description: "For serious RV owners",
    features: [
      "List multiple RVs",
      "Advanced calendar",
      "Priority support",
      "Premium insurance",
      "Featured listings"
    ],
    recommended: true
  }
];

export const Pricing: React.FC = () => {
  return (
    <Section title="Simple, Transparent Pricing" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Choose the perfect plan for your RV rental business. No hidden fees, no surprises.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricing.map((tier, index) => (
            <ScrollReveal 
              key={tier.name}
              direction={index === 0 ? 'left' : 'right'}
              delay={index * 0.2}
            >
              <div className={`
                p-8 rounded-2xl shadow-xl
                ${tier.recommended 
                  ? 'bg-blue-600 text-white transform scale-105' 
                  : 'bg-white'
                }
              `}>
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <p className="text-lg mb-4 opacity-90">{tier.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-lg">/month</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg 
                        className={`w-5 h-5 mr-3 ${tier.recommended ? 'text-white' : 'text-blue-600'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
};