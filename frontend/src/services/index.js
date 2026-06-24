// ============================================
// Services Toggle — Export mock or real based on ENV
// ============================================

const useMock = import.meta.env.VITE_USE_MOCK === 'true';

// Check-in services
export const { getReservation, scanID, issueKey } = useMock
  ? await import('./mock/checkin.mock.js')
  : await import('./api/checkin.js');

// Check-out services
export const { fetchBill, processCheckout } = useMock
  ? await import('./mock/checkout.mock.js')
  : await import('./api/checkout.js');

// Payment services
export const { initiatePayment, verifyPayment } = useMock
  ? await import('./mock/payment.mock.js')
  : await import('./api/payment.js');

// Visitor services
export const { registerVisitor, printPass } = useMock
  ? await import('./mock/visitor.mock.js')
  : await import('./api/visitor.js');

// Hardware services
export const { getHardwareStatus, triggerPrint } = useMock
  ? await import('./mock/hardware.mock.js')
  : await import('./api/hardware.js');
