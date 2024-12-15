import { LucideIcon } from 'lucide-react';

export interface Step {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  details: {
    content: string;
    features: string[];
    tips: string[];
  };
}