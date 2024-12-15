import { MapPin, Calendar, Key } from 'lucide-react';
import type { Step } from '@/types/steps';

export const steps: Step[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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