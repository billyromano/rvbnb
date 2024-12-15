'use client';

import { RvIcon } from '@/components/icons/RvIcon';
import { MobileMenu } from './MobileMenu';
import { NavigationLinks } from './NavigationLinks';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

export function Navigation() {
  const scrolled = useScrollPosition();

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <RvIcon className={cn(
              "w-8 h-8 transition-colors",
              scrolled ? "text-blue-600" : "text-white"
            )} />
            <span className={cn(
              "text-xl font-bold transition-colors",
              scrolled ? "text-blue-600" : "text-white"
            )}>
              RVbnb
            </span>
          </a>

          <NavigationLinks scrolled={scrolled} />
          <MobileMenu scrolled={scrolled} />
        </div>
      </div>
    </header>
  );
}