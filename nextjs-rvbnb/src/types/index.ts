import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PricingTier {
  id: number;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}