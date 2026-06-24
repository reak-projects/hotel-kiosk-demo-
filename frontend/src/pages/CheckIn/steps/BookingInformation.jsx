// ============================================
// Check-In Step 4 — Booking Information
// ============================================

import React, { useState } from 'react';
import { Search, QrCode } from 'lucide-react';
import { BOOKING_SEARCH_TABS } from '../../../data/constants';
import { useKiosk } from '../../../context/KioskContext';
import TabBar from '../../../components/ui/TabBar';
import FormInput from '../../../components/ui/FormInput';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

export default function BookingInformation({ onNext, onBack }) {
  const { setBookingInfo } = useKiosk();
  const [activeTab, setActiveTab] = useState('booking_id');
  const [bookingId, setBookingId] = useState('');

  const handleNext = () => {
    setBookingInfo({ bookingId: bookingId || 'BK123456', searchType: activeTab });
    onNext();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">
          Booking Information
        </h2>
        <p className="text-lg text-[var(--color-gray-500)]">
          Enter your booking details or scan QR code
        </p>
      </div>

      {/* Search tabs */}
      <TabBar
        tabs={BOOKING_SEARCH_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="w-full"
      />

      {/* Input */}
      <FormInput
        label={activeTab === 'booking_id' ? 'Booking ID' : activeTab === 'mobile' ? 'Mobile Number' : 'Email Address'}
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
        placeholder={activeTab === 'booking_id' ? 'BK123456' : activeTab === 'mobile' ? '+1 234 567 8900' : 'john@example.com'}
        icon={Search}
        className="w-full"
      />

      {/* OR divider */}
      <div className="flex items-center gap-4 w-full">
        <div className="flex-1 h-px bg-[var(--color-gray-200)]" />
        <span className="text-sm font-semibold text-[var(--color-gray-400)] uppercase">or</span>
        <div className="flex-1 h-px bg-[var(--color-gray-200)]" />
      </div>

      {/* QR scan area */}
      <Card variant="default" className="w-full flex flex-col items-center gap-4 py-8">
        <div className="w-32 h-32 bg-[var(--color-gray-100)] rounded-xl flex items-center justify-center border-2 border-dashed border-[var(--color-gray-300)]">
          <QrCode size={64} className="text-[var(--color-gray-400)]" />
        </div>
        <p className="text-base text-[var(--color-gray-500)]">
          Scan the QR code from your booking confirmation
        </p>
      </Card>

      {/* Navigation */}
      <div className="flex items-center gap-4 w-full">
        <Button variant="ghost" size="md" onClick={onBack}>
          BACK
        </Button>
        <Button variant="primary" size="lg" onClick={handleNext} fullWidth>
          NEXT
        </Button>
      </div>
    </div>
  );
}
