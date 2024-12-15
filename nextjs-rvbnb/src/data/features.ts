import { Shield, Users, Clock, Star, MapPin, HeartHandshake } from 'lucide-react';
import type { Feature } from '@/types';

export const features: Feature[] = [
  {
    id: 1,
    title: "Verified RVs & Owners",
    description: "Every RV and owner undergoes thorough verification for your peace of mind.",
    icon: Shield
  },
  {
    id: 2,
    title: "Community-Driven",
    description: "Join a passionate community of RV enthusiasts sharing tips and experiences.",
    icon: Users
  },
  {
    id: 3,
    title: "Instant Booking",
    description: "Book your perfect RV in minutes with our streamlined process.",
    icon: Clock
  },
  {
    id: 4,
    title: "Premium Experience",
    description: "Enjoy hotel-quality standards with the freedom of RV travel.",
    icon: Star
  },
  {
    id: 5,
    title: "Wide Selection",
    description: "Choose from thousands of RVs to match your perfect adventure.",
    icon: MapPin
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Our dedicated team is always here to help you on your journey.",
    icon: HeartHandshake
  }
];