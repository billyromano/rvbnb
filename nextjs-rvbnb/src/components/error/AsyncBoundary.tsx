'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface AsyncBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

export function AsyncBoundary({
  children,
  fallback = <LoadingSpinner />,
  errorFallback
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}