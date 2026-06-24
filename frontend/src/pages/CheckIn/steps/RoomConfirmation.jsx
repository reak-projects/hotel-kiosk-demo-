// ============================================
// Check-In Step 6 — Room Confirmation (wraps common)
// ============================================

import React from 'react';
import RoomConfirmation from '../../../components/common/RoomConfirmation';

export default function RoomConfirmationStep({ onNext, onBack }) {
  return (
    <RoomConfirmation
      onConfirm={onNext}
      onBack={onBack}
    />
  );
}
