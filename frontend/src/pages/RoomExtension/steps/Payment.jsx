// ============================================
// Extension Step 3 — Payment (wraps common)
// ============================================

import React, { useState } from 'react';
import PaymentScreen from '../../../components/common/PaymentScreen';
import { useKiosk } from '../../../context/KioskContext';
import { stayDetails } from '../../../data/mockData';
import { initiatePayment } from '../../../services';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

export default function Payment({ onNext, onBack }) {
  const { extensionNights, setPaymentStatus } = useKiosk();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const amount = stayDetails.ratePerNight * extensionNights;

  const handlePay = async (method) => {
    setLoading(true);
    setError('');
    try {
      const result = await initiatePayment(amount, method);
      if (result.success) {
        setPaymentStatus('success');
        onNext();
      } else {
        setPaymentStatus('failed');
        setError('Payment failed. Retry or change payment method.');
      }
    } catch {
      setPaymentStatus('failed');
      setError('Payment failed. Retry or change payment method.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {error && (
        <Card variant="default" className="border-2 border-[var(--color-error)]">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-[var(--color-error-dark)]">{error}</p>
            <Button variant="outline" size="sm" onClick={() => setError('')}>DISMISS</Button>
          </div>
        </Card>
      )}
      <PaymentScreen totalAmount={amount} onPay={handlePay} onBack={onBack} loading={loading} />
    </div>
  );
}
