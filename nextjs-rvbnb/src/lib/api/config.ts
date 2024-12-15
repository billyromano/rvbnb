export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
  timeout: 5000,
  retries: 3,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const CACHE_CONFIG = {
  testimonials: {
    revalidate: 3600 // 1 hour
  },
  destinations: {
    revalidate: 86400 // 24 hours
  },
  experiences: {
    revalidate: 86400 // 24 hours
  }
};