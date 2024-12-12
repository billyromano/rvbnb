import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Configure GSAP defaults for better performance
gsap.config({
  autoSleep: 60,
  force3D: true,
  nullTargetWarn: false,
});

// Initialize ScrollTrigger with default settings
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
  start: 'top bottom-=100',
});

// Create root with error boundary
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);