'use client';

import { GSAPProvider } from "@/components/providers/GSAPProvider";
import { ErrorBoundary } from "@/components/error/ErrorBoundary";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <GSAPProvider>
        {children}
      </GSAPProvider>
    </ErrorBoundary>
  );
}