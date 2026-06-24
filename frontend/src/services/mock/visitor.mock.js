// ============================================
// Mock Visitor Service
// ============================================

import { visitorPassData } from '../../data/mockData';

export async function registerVisitor(visitorInfo) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    success: true,
    data: {
      ...visitorPassData,
      visitorName: visitorInfo?.visitorName || visitorPassData.visitorName,
      hostRoom: visitorInfo?.hostRoom || visitorPassData.hostRoom,
      purpose: visitorInfo?.purpose || visitorPassData.purpose,
      passId: `VP-${Date.now()}`,
    },
  };
}

export async function printPass(passId) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    success: true,
    data: {
      passId,
      printed: true,
      message: 'Visitor pass has been printed successfully',
    },
  };
}
