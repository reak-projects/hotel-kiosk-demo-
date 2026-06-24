// ============================================
// Extension Step 4 — Extension Confirmed
// ============================================

import React from 'react';
import { CheckCircle, Calendar } from 'lucide-react';
import { useKiosk } from '../../../context/KioskContext';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

export default function ExtensionConfirmed({ onNext }) {
  const { extensionCharges } = useKiosk();

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-8 animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-[var(--color-success-light)] flex items-center justify-center">
          <CheckCircle size={56} className="text-[var(--color-success)]" />
        </div>
        <h2 className="text-3xl font-bold text-[var(--color-success)]">
          Stay Extended Successfully!
        </h2>
      </div>

      <Card variant="gold" className="w-full">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calendar size={24} className="text-[var(--color-gold)]" />
          <span className="text-xl font-bold text-[var(--color-navy)]">New Check-out Date</span>
        </div>
        <p className="text-4xl font-bold text-center text-[var(--color-gold)]">
          {extensionCharges?.newCheckout || '24 May 2024'}
        </p>
        <p className="text-base text-center text-[var(--color-gray-500)] mt-2">
          Your stay has been extended by {extensionCharges?.nights || 2} night(s)
        </p>
      </Card>

      <Button variant="primary" size="lg" onClick={onNext}>CONTINUE</Button>
    </div>
  );
}
