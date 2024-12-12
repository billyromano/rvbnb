import React from 'react';
import { RvIcon } from '../../icons/RvIcon';
import { MobileMenu } from './MobileMenu';
import { navigationItems } from '../../../data/content';

export const Navigation: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <RvIcon className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">RVbnb</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};