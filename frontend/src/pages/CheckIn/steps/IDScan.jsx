// ============================================
// Check-In Step 3 — ID Scan (wraps common IDScanScreen)
// ============================================

import React from 'react';
import IDScanScreen from '../../../components/common/IDScanScreen';

export default function IDScan({ onNext, onBack }) {
  return (
    <IDScanScreen
      onNext={onNext}
      onBack={onBack}
    />
  );
}
