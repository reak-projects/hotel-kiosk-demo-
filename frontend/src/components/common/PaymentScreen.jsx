// ============================================
// PaymentScreen — Reusable payment UI
// Used in: Check-in, Check-out, Room Extension
// ============================================

import React, { useState } from 'react';
import {
  CreditCard, Wallet, QrCode, Globe, Smartphone, Shield,
} from 'lucide-react';
import { PAYMENT_METHODS } from '../../data/constants';
import { formatCurrency } from '../../utils/formatCurrency';
import { useKiosk } from '../../context/KioskContext';
import Button from '../ui/Button';
import Card from '../ui/Card';

const iconMap = {
  CreditCard,
  Wallet,
  QrCode,
  Globe,
  Smartphone,
};

export default function PaymentScreen({
  totalAmount,
  onPay,
  onBack,
  loading = false,
  payLabel = 'PAY NOW',
}) {
  const { setPaymentMethod } = useKiosk();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleSelect = (method) => {
    setSelectedMethod(method.id);
    setPaymentMethod(method.id);
  };

  const handlePay = () => {
    if (selectedMethod && onPay) {
      onPay(selectedMethod);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto gap-8 animate-fade-in">
      {/* Total amount */}
      <Card variant="navy" className="w-full text-center">
        <p className="text-base text-[var(--color-gray-400)] mb-1">Total Amount Due</p>
        <p className="text-5xl font-bold text-[var(--color-gold)]">
          {formatCurrency(totalAmount)}
        </p>
      </Card>

      {/* Payment methods */}
      <div className="w-full">
        <h3 className="text-xl font-semibold text-[var(--color-gray-800)] mb-4 text-center">
          Select Payment Method
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {PAYMENT_METHODS.map((method) => {
            const Icon = iconMap[method.icon] || CreditCard;
            const isSelected = selectedMethod === method.id;
            return (
              <Card
                key={method.id}
                variant={isSelected ? 'selected' : 'default'}
                hoverable
                onClick={() => handleSelect(method)}
                className="flex flex-col items-center justify-center gap-3 cursor-pointer min-h-[120px]"
              >
                <Icon
                  size={32}
                  className={isSelected ? 'text-[var(--color-gold)]' : 'text-[var(--color-gray-500)]'}
                />
                <span className={`text-base font-semibold ${isSelected ? 'text-[var(--color-gold-dark)]' : 'text-[var(--color-gray-700)]'}`}>
                  {method.name}
                </span>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Security note */}
      <div className="flex items-center gap-2 text-[var(--color-gray-400)]">
        <Shield size={18} />
        <p className="text-sm">Your payment is secure and encrypted</p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-4 w-full">
        <Button variant="ghost" size="md" onClick={onBack}>
          BACK
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={handlePay}
          disabled={!selectedMethod}
          loading={loading}
          fullWidth
        >
          {payLabel}
        </Button>
      </div>
    </div>
  );
}
