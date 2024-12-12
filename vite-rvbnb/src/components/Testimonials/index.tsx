import React from 'react';
import { Section } from '../ui/Section';
import { ScrollReveal } from '../Interactive/Animations/ScrollReveal';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "First-time RVer",
    content: "RVbnb made our first RV trip so easy! The booking process was simple, and the owner was incredibly helpful.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    name: "Mike Peterson",
    role: "RV Owner",
    content: "As an owner, RVbnb has been great. The platform is straightforward, and I love meeting new travelers.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  },
  {
    name: "Emily Chen",
    role: "Regular Traveler",
    content: "We use RVbnb for all our road trips now. It's reliable, and the RVs are always exactly as described.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section title="What Our Users Say" className="bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about their RVbnb experience.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.2}
            >
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
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
                <p className="text-gray-700 italic">{testimonial.content}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
};