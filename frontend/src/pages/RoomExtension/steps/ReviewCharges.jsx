// ============================================
// Extension Step 2 — Review Charges
// ============================================

import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useKiosk } from '../../../context/KioskContext';
import { stayDetails } from '../../../data/mockData';
import { formatCurrency } from '../../../utils/formatCurrency';
import { addDays, formatDate } from '../../../utils/formatDate';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

export default function ReviewCharges({ onNext, onBack }) {
  const { extensionNights, setExtensionCharges } = useKiosk();

  const currentCheckout = new Date(2024, 4, 22); // 22 May 2024
  const newCheckout = addDays(currentCheckout, extensionNights);
  const extraCharge = stayDetails.ratePerNight * extensionNights;

  const handleNext = () => {
    setExtensionCharges({
      currentCheckout: formatDate(currentCheckout),
      newCheckout: formatDate(newCheckout),
      nights: extensionNights,
      ratePerNight: stayDetails.ratePerNight,
      extraCharge,
    });
    onNext();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">Review Extension Charges</h2>
        <p className="text-lg text-[var(--color-gray-500)]">Confirm your extended stay details</p>
      </div>

      <Card variant="gold" className="w-full">
        {/* Date change */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-[var(--color-gray-200)]">
          <div className="text-center">
            <p className="text-xs text-[var(--color-gray-500)] uppercase mb-1">Current Check-out</p>
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-[var(--color-gray-400)]" />
              <span className="text-lg font-semibold">{formatDate(currentCheckout)}</span>
            </div>
          </div>
          <ArrowRight size={24} className="text-[var(--color-gold)]" />
          <div className="text-center">
            <p className="text-xs text-[var(--color-success)] uppercase mb-1 font-semibold">New Check-out</p>
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-[var(--color-success)]" />
              <span className="text-lg font-bold text-[var(--color-success)]">{formatDate(newCheckout)}</span>
            </div>
          </div>
        </div>

        {/* Charges */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-base text-[var(--color-gray-600)]">Extra Nights</span>
            <span className="font-semibold">{extensionNights} {extensionNights === 1 ? 'night' : 'nights'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base text-[var(--color-gray-600)]">Rate per Night</span>
            <span className="font-semibold">{formatCurrency(stayDetails.ratePerNight)}</span>
          </div>
          <div className="pt-3 mt-3 border-t-2 border-[var(--color-navy)] flex justify-between">
            <span className="text-xl font-bold text-white">Extra Charge</span>
            <span className="text-3xl font-bold text-white">{formatCurrency(extraCharge)}</span>
          </div>
        </div>
      </Card>

      <div className="flex items-center gap-4 w-full">
        <Button variant="ghost" size="md" onClick={onBack}>BACK</Button>
        <Button variant="primary" size="lg" onClick={handleNext} fullWidth>PROCEED TO PAY</Button>
      </div>
    </div>
  );
}
