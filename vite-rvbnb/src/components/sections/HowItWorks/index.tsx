import React, { useState } from 'react';
import { Section } from '../../ui/Section';
import { ScrollReveal } from '../../Interactive/Animations/ScrollReveal';
import { MapPin, Calendar, Key, ArrowRight } from 'lucide-react';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';

interface Step {
  icon: typeof MapPin;
  title: string;
  description: string;
  details: {
    content: string;
    features: string[];
    tips: string[];
  };
}

const steps: Step[] = [
  {
    icon: MapPin,
    title: "Find Your RV",
    description: "Browse our selection of quality RVs in your desired location",
    details: {
      content: "Our extensive network of verified RV owners offers a wide variety of vehicles to suit your needs. Use our advanced search filters to find the perfect RV for your adventure.",
      features: [
        "Search by location, dates, and RV type",
        "View detailed photos and virtual tours",
        "Read verified reviews from past renters",
        "Compare prices and features"
      ],
      tips: [
        "Book early for peak season travel",
        "Consider RV size and your driving comfort",
        "Check included amenities and add-ons",
        "Review parking restrictions at your destination"
      ]
    }
  },
  {
    icon: Calendar,
    title: "Book Your Dates",
    description: "Choose your travel dates and complete the simple booking process",
    details: {
      content: "Our streamlined booking process makes it easy to secure your RV rental. With instant confirmation and clear communication channels, you'll be ready to hit the road in no time.",
      features: [
        "Instant booking availability",
        "Flexible cancellation options",
        "Secure payment processing",
        "Direct messaging with owners"
      ],
      tips: [
        "Check weather conditions for your dates",
        "Plan your route in advance",
        "Consider trip insurance options",
        "Communicate special requests with the owner"
      ]
    }
  },
  {
    icon: Key,
    title: "Hit the Road",
    description: "Pick up your RV and start your adventure",
    details: {
      content: "Get a thorough walkthrough of your RV's features and hit the open road with confidence. Our 24/7 support team is always ready to help if you need assistance during your journey.",
      features: [
        "Comprehensive vehicle orientation",
        "24/7 roadside assistance",
        "Mobile app with offline access",
        "Emergency support hotline"
      ],
      tips: [
        "Complete the pre-trip checklist",
        "Document the RV condition at pickup",
        "Test all systems before departing",
        "Save emergency contacts offline"
      ]
    }
  }
];

export const HowItWorks: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  return (
    <>
      <Section 
        id="how-it-works"
        title="How It Works" 
        className="bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Getting started with RVbnb is easy. Follow these simple steps to begin your adventure.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.2}
              >
                <button
                  onClick={() => setSelectedStep(step)}
                  className="w-full text-left group"
                >
                  <div className="text-center p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <div className="flex justify-center mb-6">
                      <step.icon className="w-12 h-12 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <span className="inline-flex items-center text-blue-500 font-medium group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      <Modal
        isOpen={selectedStep !== null}
        onClose={() => setSelectedStep(null)}
        title={selectedStep?.title || ''}
      >
        {selectedStep && (
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              {selectedStep.details.content}
            </p>

            <div>
              <h4 className="text-lg font-semibold mb-3">Key Features</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {selectedStep.details.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Pro Tips</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {selectedStep.details.tips.map((tip, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end mt-8">
              <Button onClick={() => setSelectedStep(null)}>
                Got It
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};