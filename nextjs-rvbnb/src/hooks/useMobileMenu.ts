'use client';

import { useState, useCallback } from 'react';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    }
  }, [isOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }, []);

  return { isOpen, toggle, close };
}