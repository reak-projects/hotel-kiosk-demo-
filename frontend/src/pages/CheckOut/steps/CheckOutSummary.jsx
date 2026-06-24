// ============================================
// Check-Out Step 3 — Check-Out Summary
// ============================================

import React from 'react';
import { checkoutSummary } from '../../../data/mockData';
import { formatCurrency } from '../../../utils/formatCurrency';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

export default function CheckOutSummary({ onNext, onBack }) {
  const summary = checkoutSummary;

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">
          Check-Out Summary
        </h2>
        <p className="text-lg text-[var(--color-gray-500)]">
          Review your bill before payment
        </p>
      </div>

      {/* Stay info */}
      <Card variant="default" className="w-full">
        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-[var(--color-gray-200)]">
          <div>
            <p className="text-xs text-[var(--color-gray-500)] uppercase">Room</p>
            <p className="text-lg font-bold">{summary.roomNumber}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-gray-500)] uppercase">Check-in</p>
            <p className="text-base font-semibold">{summary.checkIn}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-gray-500)] uppercase">Check-out</p>
            <p className="text-base font-semibold">{summary.checkOut}</p>
          </div>
        </div>

        {/* Itemised bill */}
        <div className="space-y-3">
          {summary.billItems.map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-base text-[var(--color-gray-700)]">{item.label}</span>
              <span className="text-base font-semibold text-[var(--color-gray-900)]">
                {formatCurrency(item.amount)}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-4 pt-4 border-t-2 border-[var(--color-navy)] flex items-center justify-between">
          <span className="text-xl font-bold text-white">Total Amount Due</span>
          <span className="text-3xl font-bold text-[var(--color-gold)]">
            {formatCurrency(summary.totalAmount)}
          </span>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center gap-4 w-full">
        <Button variant="ghost" size="md" onClick={onBack}>BACK</Button>
        <Button variant="primary" size="lg" onClick={onNext} fullWidth>PROCEED TO PAY</Button>
      </div>
    </div>
  );
}
