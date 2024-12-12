import React from 'react';
import { Shield, Users, Clock, Star, Truck, HeartHandshake } from 'lucide-react';
import { ScrollReveal } from '../Interactive/Animations/ScrollReveal';

const features = [
  {
    icon: Shield,
    title: "Verified RVs & Owners",
    description: "Every RV and owner undergoes thorough verification for your peace of mind.",
    color: "blue"
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Join a passionate community of RV enthusiasts sharing tips and experiences.",
    color: "green"
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Book your perfect RV in minutes with our streamlined process.",
    color: "purple"
  },
  {
    icon: Star,
    title: "Premium Experience",
    description: "Enjoy hotel-quality standards with the freedom of RV travel.",
    color: "yellow"
  },
  {
    icon: Truck,
    title: "Wide Selection",
    description: "Choose from thousands of RVs to match your perfect adventure.",
    color: "red"
  },
  {
    icon: HeartHandshake,
    title: "24/7 Support",
    description: "Our dedicated team is always here to help you on your journey.",
    color: "indigo"
  }
];

const colorVariants = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  yellow: "bg-yellow-500",
  red: "bg-red-500",
  indigo: "bg-indigo-500"
};

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
            <div className={`w-16 h-16 rounded-full ${colorVariants[feature.color]} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className={`w-8 h-8 text-${feature.color}-500`} />
            </div>
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};