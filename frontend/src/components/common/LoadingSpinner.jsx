// ============================================
// LoadingSpinner — Animated spinner
// ============================================

import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingSpinner({
  size = 48,
  message = 'Loading...',
  className = '',
}) {
  return (
    <div className={`flex flex-col items-center justify-center gap-6 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[var(--color-gold)] opacity-20 animate-ping" />
        <Loader2
          size={size}
          className="animate-spinner text-[var(--color-gold)]"
        />
      </div>
      {message && (
        <p className="text-xl font-medium text-[var(--color-gray-600)]">{message}</p>
      )}
    </div>
  );
}
