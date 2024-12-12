import React from 'react';
import { Card } from './ui/Card';
import { MapPin, Calendar, Key } from 'lucide-react';

export const HowItWorks: React.FC = () => {
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

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
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