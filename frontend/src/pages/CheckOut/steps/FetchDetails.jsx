// ============================================
// Check-Out Step 2 — Fetch Stay Details
// ============================================

import React, { useEffect, useState } from 'react';
import { useKiosk } from '../../../context/KioskContext';
import { fetchBill } from '../../../services';
import LoadingSpinner from '../../../components/common/LoadingSpinner';

export default function FetchDetails({ onNext, onBack }) {
  const { checkoutBookingId, setCheckoutSummary } = useKiosk();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    let timerId;

    const loadDetails = async () => {
      try {
        const result = await fetchBill(checkoutBookingId);
        if (active && result.success) {
          setCheckoutSummary(result.data);
        }
      } catch {
        // Handle error silently for mock
      } finally {
        if (active) {
          setLoading(false);
          timerId = setTimeout(() => {
            if (active) onNext();
          }, 500);
        }
      }
    };

    loadDetails();

    return () => {
      active = false;
      if (timerId) clearTimeout(timerId);
    };
  }, [checkoutBookingId, setCheckoutSummary, onNext]);

  return (
    <div className="flex items-center justify-center py-16 animate-fade-in">
      <LoadingSpinner
        size={64}
        message="Fetching your stay details..."
      />
    </div>
  );
}
