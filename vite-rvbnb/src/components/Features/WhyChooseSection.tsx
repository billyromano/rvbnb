import React from 'react';
import { ScrollReveal } from '../Interactive/Animations/ScrollReveal';
import { Shield, Users, Clock, Star, Truck, HeartHandshake } from 'lucide-react';

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

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose RVbnb?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Experience the perfect blend of adventure and comfort with our premium RV rental platform.
          </p>
        </ScrollReveal>

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

        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex gap-8 items-center justify-center bg-white rounded-full shadow-lg px-8 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600">RVs Available</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};