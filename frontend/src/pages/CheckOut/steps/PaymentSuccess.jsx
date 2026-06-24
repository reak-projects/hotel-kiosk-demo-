// ============================================
// Check-Out Step 5 — Payment Success
// ============================================

import React from 'react';
import { CheckCircle, Printer, Mail } from 'lucide-react';
import { paymentTransaction } from '../../../data/mockData';
import { formatCurrency } from '../../../utils/formatCurrency';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

export default function PaymentSuccess({ onNext }) {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-8 animate-fade-in">
      {/* Success icon */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-[var(--color-success-light)] flex items-center justify-center">
          <CheckCircle size={56} className="text-[var(--color-success)]" />
        </div>
        <h2 className="text-3xl font-bold text-[var(--color-success)]">
          Check-out Successful!
        </h2>
      </div>

      {/* Transaction details */}
      <Card variant="gold" className="w-full">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-base text-[var(--color-gray-500)]">Transaction ID</span>
            <span className="text-base font-mono font-bold text-[var(--color-gray-900)]">{paymentTransaction.transactionId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base text-[var(--color-gray-500)]">Amount Paid</span>
            <span className="text-2xl font-bold text-[var(--color-gold)]">{formatCurrency(paymentTransaction.paidAmount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base text-[var(--color-gray-500)]">Payment Method</span>
            <span className="text-base font-semibold">{paymentTransaction.method}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base text-[var(--color-gray-500)]">Date & Time</span>
            <span className="text-base font-semibold">{paymentTransaction.timestamp}</span>
          </div>
        </div>
      </Card>

      {/* Action buttons */}
      <div className="flex items-center gap-4 w-full">
        <Button variant="outline" size="md" icon={Printer}>
          PRINT RECEIPT
        </Button>
        <Button variant="outline" size="md" icon={Mail}>
          EMAIL RECEIPT
        </Button>
        <Button variant="primary" size="lg" onClick={onNext} fullWidth>
          NEXT
        </Button>
      </div>
    </div>
  );
}
