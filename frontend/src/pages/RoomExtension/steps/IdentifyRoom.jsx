// ============================================
// Extension Step 1 — Identify Room
// ============================================

import React, { useState } from 'react';
import { Search, CreditCard } from 'lucide-react';
import { BOOKING_SEARCH_TABS } from '../../../data/constants';
import { useKiosk } from '../../../context/KioskContext';
import TabBar from '../../../components/ui/TabBar';
import FormInput from '../../../components/ui/FormInput';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

export default function IdentifyRoom({ onNext, onBack }) {
  const { setCheckoutBookingId } = useKiosk(); // We can reuse setCheckoutBookingId or set a local value
  const [activeTab, setActiveTab] = useState('booking_id');
  const [input, setInput] = useState('');

  const handleNext = () => {
    // Save to the context to simulate loading the booking details
    setCheckoutBookingId(input || 'BK123456');
    onNext();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">
          Room Extension
        </h2>
        <p className="text-lg text-[var(--color-gray-500)]">
          Insert your key card or enter booking details to identify your room
        </p>
      </div>

      {/* Card insert illustration */}
      <Card variant="default" className="w-full flex items-center justify-center py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-16 rounded-lg bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-navy-light)] flex items-center justify-center shadow-lg">
            <CreditCard size={32} className="text-[var(--color-gold)]" />
          </div>
          <p className="text-base text-[var(--color-gray-500)]">Insert your key card into the reader</p>
        </div>
      </Card>

      {/* OR divider */}
      <div className="flex items-center gap-4 w-full">
        <div className="flex-1 h-px bg-[var(--color-gray-200)]" />
        <span className="text-sm font-semibold text-[var(--color-gray-400)] uppercase">or</span>
        <div className="flex-1 h-px bg-[var(--color-gray-200)]" />
      </div>

      {/* Search tabs */}
      <TabBar
        tabs={BOOKING_SEARCH_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="w-full"
      />

      <FormInput
        label={activeTab === 'booking_id' ? 'Booking ID' : activeTab === 'mobile' ? 'Mobile Number' : 'Email Address'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={activeTab === 'booking_id' ? 'BK123456' : activeTab === 'mobile' ? '+1 234 567 8900' : 'john@example.com'}
        icon={Search}
        className="w-full"
      />

      {/* Navigation */}
      <div className="flex items-center gap-4 w-full">
        <Button variant="ghost" size="md" onClick={onBack}>BACK</Button>
        <Button variant="primary" size="lg" onClick={handleNext} fullWidth>NEXT</Button>
      </div>
    </div>
  );
}
