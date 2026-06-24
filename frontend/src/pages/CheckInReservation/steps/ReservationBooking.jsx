import React, { useState } from 'react';
import { Search, AlertTriangle, LifeBuoy, QrCode, Phone, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useKiosk } from '../../../context/KioskContext';
import FormInput from '../../../components/ui/FormInput';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

export default function ReservationBooking({ onBack, onResult, lookupFailed, onRetry }) {
  const navigate = useNavigate();
  const { setBookingInfo } = useKiosk();
  const [activeTab, setActiveTab] = useState('booking_id');
  const [bookingId, setBookingId] = useState('');
  const [phone, setPhone] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSearch = () => {
    if (activeTab === 'booking_id') {
      const normalized = bookingId.trim();
      setBookingInfo({ bookingId: normalized || 'BK123456', searchType: 'booking_id' });
      const isFound = normalized.toUpperCase() !== 'NOTFOUND';
      onResult(isFound);
    } else if (activeTab === 'qr_code') {
      setBookingInfo({ bookingId: 'BK123456', searchType: 'qr_code' });
      onResult(true);
    } else if (activeTab === 'phone_name') {
      const normalizedPhone = phone.trim();
      const normalizedLastName = lastName.trim();
      setBookingInfo({
        phone: normalizedPhone || '+12345678900',
        lastName: normalizedLastName || 'Smith',
        searchType: 'phone_name',
        bookingId: 'BK123456'
      });
      const isFound = normalizedLastName.toUpperCase() !== 'NOTFOUND';
      onResult(isFound);
    }
  };

  const handleSimulateQRScan = () => {
    setBookingInfo({ bookingId: 'BK123456', searchType: 'qr_code' });
    onResult(true);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">Enter Booking Info</h2>
        <p className="text-lg text-[var(--color-gray-500)]">Select an option below to retrieve your reservation</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[rgba(201,168,76,0.15)] w-full mb-2">
        <button
          type="button"
          onClick={() => {
            setActiveTab('booking_id');
            if (lookupFailed) onRetry();
          }}
          className={`flex-1 py-3 text-center font-medium border-b-2 text-sm transition-all ${
            activeTab === 'booking_id'
              ? 'border-[var(--text-gold)] text-[var(--text-gold)]'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Booking ID
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab('qr_code');
            if (lookupFailed) onRetry();
          }}
          className={`flex-1 py-3 text-center font-medium border-b-2 text-sm transition-all ${
            activeTab === 'qr_code'
              ? 'border-[var(--text-gold)] text-[var(--text-gold)]'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Scan QR
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab('phone_name');
            if (lookupFailed) onRetry();
          }}
          className={`flex-1 py-3 text-center font-medium border-b-2 text-sm transition-all ${
            activeTab === 'phone_name'
              ? 'border-[var(--text-gold)] text-[var(--text-gold)]'
              : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          Phone & Last Name
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'booking_id' && (
        <FormInput
          label="Booking ID"
          value={bookingId}
          onChange={(e) => {
            setBookingId(e.target.value);
            if (lookupFailed) onRetry();
          }}
          placeholder="BK123456"
          icon={Search}
          className="w-full"
        />
      )}

      {activeTab === 'qr_code' && (
        <div className="w-full flex flex-col items-center gap-4 py-2">
          <div className="relative w-56 h-56 rounded-xl border border-[rgba(201,168,76,0.35)] bg-[rgba(10,14,26,0.4)] overflow-hidden flex flex-col items-center justify-center">
            {/* Animated Scan Line */}
            <div className="absolute left-0 right-0 h-0.5 bg-[var(--text-gold)] shadow-[0_0_8px_var(--text-gold)] animate-scan-line" />
            <QrCode size={56} className="text-[var(--text-gold)] opacity-70 animate-pulse" />
            <p className="absolute bottom-3 text-xs text-[var(--text-secondary)] text-center px-4">Hold QR code in front of scanner</p>
          </div>
          <Button variant="outline" size="md" onClick={handleSimulateQRScan}>
            SIMULATE QR SCAN
          </Button>
        </div>
      )}

      {activeTab === 'phone_name' && (
        <div className="w-full flex flex-col md:flex-row gap-4">
          <FormInput
            label="Phone Number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (lookupFailed) onRetry();
            }}
            placeholder="+1 (234) 567-8900"
            icon={Phone}
            className="flex-1"
          />
          <FormInput
            label="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (lookupFailed) onRetry();
            }}
            placeholder="Smith"
            icon={User}
            className="flex-1"
          />
        </div>
      )}

      {lookupFailed && (
        <Card variant="default" className="w-full border-2 border-[var(--color-error)] bg-[rgba(239,68,68,0.05)]">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-[var(--color-error)]" size={22} />
            <div>
              <p className="font-bold text-[var(--color-error-dark)]">Reservation Not Found</p>
              <p className="text-sm text-[var(--color-gray-600)]">Please verify details or contact support. Use value NOTFOUND to test this state.</p>
            </div>
          </div>
        </Card>
      )}

      <div className="flex items-center gap-4 w-full">
        <Button variant="ghost" size="md" onClick={onBack}>BACK</Button>
        {activeTab !== 'qr_code' && (
          <Button variant="primary" size="lg" onClick={handleSearch} fullWidth>FIND RESERVATION</Button>
        )}
      </div>

      {lookupFailed && (
        <Button variant="outline" size="md" icon={LifeBuoy} onClick={() => navigate('/help')}>
          CONTACT REMOTE HELP
        </Button>
      )}
    </div>
  );
}
