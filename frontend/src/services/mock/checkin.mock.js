// ============================================
// Mock Check-in Service
// ============================================

import { scannedIdMock, bookingConfirmation } from '../../data/mockData';

export async function getReservation(bookingId) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    success: true,
    data: {
      ...bookingConfirmation,
      bookingId: bookingId || bookingConfirmation.bookingId,
    },
  };
}

export async function scanID(idType) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    success: true,
    data: {
      ...scannedIdMock,
      idType: idType || scannedIdMock.idType,
    },
  };
}

export async function issueKey(roomNumber) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    success: true,
    data: {
      roomNumber: roomNumber || '208',
      keyIssued: true,
      message: 'Key card has been issued successfully',
    },
  };
}
