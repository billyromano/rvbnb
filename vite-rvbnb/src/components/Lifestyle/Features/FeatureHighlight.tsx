import React from 'react';
import { ScrollReveal } from '../../Interactive/Animations/ScrollReveal';
import { 
  Compass, 
  Sun, 
  Mountain, 
  Home,
  Map,
  Users,
  Tent,
  Sunrise
} from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: "Freedom to Explore",
    description: "Chart your own course and discover hidden gems across the country."
  },
  {
    icon: Sun,
    title: "Outdoor Living",
    description: "Connect with nature while enjoying all the comforts of home."
  },
  {
    icon: Mountain,
    title: "Adventure Awaits",
    description: "From mountains to beaches, every destination is within reach."
  },
  {
    icon: Home,
    title: "Home on Wheels",
    description: "All the amenities you need for a comfortable journey."
  },
  {
    icon: Map,
    title: "Endless Destinations",
    description: "Access to thousands of campgrounds and RV parks nationwide."
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a vibrant community of fellow RV enthusiasts."
  },
  {
    icon: Tent,
    title: "Camp Anywhere",
    description: "From luxury RV resorts to remote boondocking spots."
  },
  {
    icon: Sunrise,
    title: "New Horizons",
    description: "Wake up to different views every morning."
  }
];

export const FeatureHighlight: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900 text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Experience the RV Lifestyle
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300" />
                  <feature.icon className="w-16 h-16 text-blue-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-200">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};