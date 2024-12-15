'use client';

import { useEffect } from 'react';
import { initGSAP, cleanupGSAP } from '@/lib/gsap';

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initGSAP();
    return () => cleanupGSAP();
  }, []);

  return <>{children}</>;
}