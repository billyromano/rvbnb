import React, { useEffect, useRef } from 'react';
import { useRive } from '@rive-app/react-canvas';
import { Shield, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { features } from '../data/content';

const FeatureIcon = ({ name }: { name: string }) => {
  const icons = {
    'shield-check': Shield,
    'phone': Phone,
    'camper-van': MapPin,
  };
  const Icon = icons[name as keyof typeof icons] || MapPin;
  return <Icon className="w-12 h-12 text-blue-500" />;
};

export const Features: React.FC = () => {
  const { RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    autoplay: true,
  });

  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = featuresRef.current?.querySelectorAll('.feature-card');
    
    cards?.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
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
    <section className="py-24 bg-white" ref={featuresRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose RVbnb?</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card p-8 rounded-xl bg-gray-50 shadow-lg transform hover:scale-105 transition-transform">
              <div className="mb-6">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 h-64">
          <RiveComponent className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};