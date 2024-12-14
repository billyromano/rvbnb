import React from 'react';
import { Shield, Users, Clock, Star, MapPin, HeartHandshake } from 'lucide-react';
import { ScrollReveal } from '../../Interactive/Animations/ScrollReveal';

const features = [
  {
    icon: Shield,
    title: "Verified RVs & Owners",
    description: "Every RV and owner undergoes thorough verification for your peace of mind."
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Join a passionate community of RV enthusiasts sharing tips and experiences."
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Book your perfect RV in minutes with our streamlined process."
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "Enjoy hotel-quality standards with the freedom of RV travel."
  },
  {
    icon: MapPin,
    title: "Wide Selection",
    description: "Choose from thousands of RVs to match your perfect adventure."
  },
  {
    icon: HeartHandshake,
    title: "24/7 Support",
    description: "Our dedicated team is always here to help you on your journey."
  }
];

export const FeatureGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <ScrollReveal
          key={index}
          direction={index % 2 === 0 ? 'left' : 'right'}
          delay={index * 0.2}
        >
          <div className="group bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
            <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};