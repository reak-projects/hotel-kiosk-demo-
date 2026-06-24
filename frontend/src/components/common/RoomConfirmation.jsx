// ============================================
// RoomConfirmation — Room confirmed card
// ============================================

import React from 'react';
import { CheckCircle, Key } from 'lucide-react';
import { bookingConfirmation } from '../../data/mockData';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function RoomConfirmation({
  confirmation = bookingConfirmation,
  onConfirm,
  onBack,
}) {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-8 animate-fade-in">
      {/* Success icon */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-[var(--color-success-light)] flex items-center justify-center">
          <CheckCircle size={56} className="text-[var(--color-success)]" />
        </div>
        <h2 className="text-3xl font-bold text-[var(--color-success)]">
          Your Room is Confirmed!
        </h2>
      </div>

      {/* Confirmation details card */}
      <Card variant="gold" className="w-full">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-[var(--color-gray-500)] uppercase tracking-wide mb-1">Room Number</p>
            <p className="text-3xl font-bold text-[var(--text-gold)]">{confirmation.roomNumber}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--color-gray-500)] uppercase tracking-wide mb-1">Room Type</p>
            <p className="text-xl font-semibold text-[var(--color-gray-800)]">{confirmation.roomType}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--color-gray-500)] uppercase tracking-wide mb-1">Check-in</p>
            <p className="text-lg font-semibold text-[var(--color-gray-800)]">{confirmation.checkIn}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--color-gray-500)] uppercase tracking-wide mb-1">Check-out</p>
            <p className="text-lg font-semibold text-[var(--color-gray-800)]">{confirmation.checkOut}</p>
          </div>
          <div className="col-span-2 pt-4 border-t border-[var(--color-gray-200)]">
            <p className="text-sm text-[var(--color-gray-500)] uppercase tracking-wide mb-1">Total Amount</p>
            <p className="text-3xl font-bold text-[var(--color-gold)]">{formatCurrency(confirmation.totalAmount)}</p>
          </div>
        </div>
      </Card>

      {/* Action buttons */}
      <div className="flex items-center gap-4 w-full">
        <Button variant="ghost" size="md" onClick={onBack}>
          BACK
        </Button>
        <Button
          variant="primary"
          size="lg"
          icon={Key}
          onClick={onConfirm}
          fullWidth
        >
          CONFIRM & GET KEY
        </Button>
      </div>
    </div>
  );
}
