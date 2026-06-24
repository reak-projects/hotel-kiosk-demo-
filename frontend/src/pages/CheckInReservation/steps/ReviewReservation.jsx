import React from 'react';
import { CalendarRange, UserCircle } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

export default function ReviewReservation({ onNext, onBack }) {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">Review Reservation</h2>
        <p className="text-lg text-[var(--color-gray-500)]">Confirm stay details before identity verification</p>
      </div>

      <Card variant="gold" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <UserCircle size={20} className="text-[var(--color-gray-500)]" />
            <div>
              <p className="text-xs uppercase text-[var(--color-gray-500)]">Guest</p>
              <p className="font-semibold text-[var(--color-gray-900)]">Alex Johnson</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CalendarRange size={20} className="text-[var(--color-gray-500)]" />
            <div>
              <p className="text-xs uppercase text-[var(--color-gray-500)]">Stay</p>
              <p className="font-semibold text-[var(--color-gray-900)]">3 Jun - 5 Jun</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase text-[var(--color-gray-500)]">Room Type</p>
            <p className="font-semibold text-[var(--color-gray-900)]">Premium King</p>
          </div>
          <div>
            <p className="text-xs uppercase text-[var(--color-gray-500)]">Amount Due</p>
            <p className="font-semibold text-[var(--color-gray-900)]">$150.00</p>
          </div>
        </div>
      </Card>

      <div className="flex items-center gap-4 w-full">
        <Button variant="ghost" size="md" onClick={onBack}>BACK</Button>
        <Button variant="primary" size="lg" onClick={onNext} fullWidth>PROCEED TO ID SCAN</Button>
      </div>
    </div>
  );
}
