'use client';

import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}