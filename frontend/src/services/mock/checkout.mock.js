// ============================================
// Mock Check-out Service
// ============================================

import { checkoutSummary, paymentTransaction } from '../../data/mockData';

export async function fetchBill(bookingId) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    success: true,
    data: {
      ...checkoutSummary,
      bookingId: bookingId || 'BK123456',
    },
  };
}

export async function processCheckout(bookingId, paymentMethod) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    data: {
      ...paymentTransaction,
      method: paymentMethod || 'Credit Card',
      message: 'Check-out processed successfully',
    },
  };
}
