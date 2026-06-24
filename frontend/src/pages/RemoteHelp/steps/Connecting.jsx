// ============================================
// Help Step 2 — Connecting Animation
// ============================================

import React, { useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function Connecting({ onNext }) {
  // Auto-advance after 3 seconds
  useEffect(() => {
    const timer = setTimeout(onNext, 3000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Pulsing circles */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[var(--color-gold)] opacity-10 animate-pulse-ring" />
        <div className="absolute inset-4 rounded-full bg-[var(--color-gold)] opacity-15 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
        <div className="absolute inset-8 rounded-full bg-[var(--color-gold)] opacity-20 animate-pulse-ring" style={{ animationDelay: '1s' }} />
        <div className="w-20 h-20 rounded-full bg-[var(--color-gold)] flex items-center justify-center z-10">
          <Phone size={36} className="text-[var(--color-navy)]" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">
          Connecting to Agent...
        </h2>
        <p className="text-lg text-[var(--color-gray-500)]">
          Please wait while we connect you
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[var(--color-gold)] animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-3 h-3 rounded-full bg-[var(--color-gold)] animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-3 h-3 rounded-full bg-[var(--color-gold)] animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
