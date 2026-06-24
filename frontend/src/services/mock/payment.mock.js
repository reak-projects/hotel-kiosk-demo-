// ============================================
// Mock Payment Service
// ============================================

import { paymentTransaction } from '../../data/mockData';

export async function initiatePayment(amount, method) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    success: true,
    data: {
      ...paymentTransaction,
      paidAmount: amount,
      method: method,
      transactionId: `TXN${Date.now()}`,
    },
  };
}

export async function verifyPayment(transactionId) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    success: true,
    data: {
      transactionId,
      verified: true,
      status: 'Success',
    },
  };
}
