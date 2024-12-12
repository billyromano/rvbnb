import React from 'react';
import { Section } from '../../ui/Section';
import { ScrollReveal } from '../../Interactive/Animations/ScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "First-time RVer",
    content: "RVbnb made our first RV trip so easy! The booking process was simple, and the owner was incredibly helpful. We had an unforgettable family vacation.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5
  },
  {
    name: "Mike Peterson",
    role: "RV Owner",
    content: "As an owner, RVbnb has been great. The platform is straightforward, and I love meeting new travelers. The extra income has been fantastic too!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    rating: 5
  },
  {
    name: "Emily Chen",
    role: "Regular Traveler",
    content: "We use RVbnb for all our road trips now. It's reliable, and the RVs are always exactly as described. The customer support is outstanding!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5
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
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
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
                
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full px-8 py-4">
              <div className="text-3xl font-bold mr-4">4.9/5</div>
              <div className="text-left">
                <div className="font-semibold">Average Rating</div>
                <div className="text-sm opacity-90">From 1000+ Reviews</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};