import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Card } from '../ui/Card';
import { MapPin, Calendar, Key } from 'lucide-react';

const steps = [
  {
    icon: <MapPin className="w-8 h-8 text-blue-500" />,
    title: "Find Your RV",
    description: "Browse our selection of quality RVs in your desired location"
  },
  {
    icon: <Calendar className="w-8 h-8 text-blue-500" />,
    title: "Book Your Dates",
    description: "Choose your travel dates and complete the simple booking process"
  },
  {
    icon: <Key className="w-8 h-8 text-blue-500" />,
    title: "Hit the Road",
    description: "Pick up your RV and start your adventure"
  }
];

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.how-it-works-card');
    
    cards?.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-20 bg-gray-50 scroll-mt-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="how-it-works-card text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};