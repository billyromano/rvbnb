import { Feature, Testimonial, PricingTier } from '../types';

export const features: Feature[] = [
  {
    id: 1,
    title: "Easy Booking",
    description: "Book your perfect RV in just a few clicks. No complicated forms or lengthy processes.",
    icon: "calendar"
  },
  {
    id: 2,
    title: "Verified Owners",
    description: "All RV owners are carefully vetted to ensure quality and reliability.",
    icon: "shield-check"
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Our friendly support team is always ready to help with any questions.",
    icon: "phone"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "First-time RVer",
    content: "RVbnb made our first RV trip so easy! The booking process was simple, and the owner was incredibly helpful.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: 2,
    name: "Mike Peterson",
    role: "RV Owner",
    content: "As an owner, RVbnb has been great. The platform is straightforward, and I love meeting new travelers.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Regular Traveler",
    content: "We use RVbnb for all our road trips now. It's reliable, and the RVs are always exactly as described.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  }
];

export const pricing: PricingTier[] = [
  {
    id: 1,
    name: "Basic Listing",
    price: 0,
    features: [
      "List one RV",
      "Basic calendar",
      "Standard support",
      "Basic insurance"
    ]
  },
  {
    id: 2,
    name: "Pro Owner",
    price: 29,
    features: [
      "List multiple RVs",
      "Advanced calendar",
      "Priority support",
      "Premium insurance",
      "Featured listings"
    ],
    recommended: true
  }
];

export const faqData = [
  {
    id: 1,
    question: "How does RVbnb work?",
    answer: "Simply browse available RVs, choose your dates, and book directly through our platform. We handle all the details!"
  },
  {
    id: 2,
    question: "Is insurance included?",
    answer: "Yes! Every booking includes comprehensive insurance coverage for peace of mind."
  },
  {
    id: 3,
    question: "What if I need to cancel?",
    answer: "We offer flexible cancellation options up to 48 hours before your trip."
  },
  {
    id: 4,
    question: "Do I need special licenses?",
    answer: "Most RVs only require a standard driver's license. We'll clearly indicate if any special requirements exist."
  }
];

export const locations = [
  { value: "national-parks", label: "National Parks" },
  { value: "beach", label: "Beach Destinations" },
  { value: "mountains", label: "Mountain Getaways" },
  { value: "lakes", label: "Lake Adventures" }
];

export const navigationItems = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "RVs", href: "#rvs" },
  { id: 3, label: "How It Works", href: "#how-it-works" },
  { id: 4, label: "Contact", href: "#contact" }
];