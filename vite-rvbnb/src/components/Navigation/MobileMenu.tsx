import React from 'react';
import { Menu, X } from 'lucide-react';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { navigationItems } from '../../data/content';

export const MobileMenu: React.FC = () => {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <>
      <button
        onClick={toggle}
        className="md:hidden p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-end">
              <button onClick={close} className="p-2">
                <X size={24} />
              </button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-xl font-medium hover:text-blue-600"
                      onClick={close}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};