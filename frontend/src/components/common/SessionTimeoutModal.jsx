// ============================================
// SessionTimeoutModal — Inactivity countdown
// ============================================

import React from 'react';
import { Timer } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

export default function SessionTimeoutModal({
  isOpen,
  remainingTime,
  onContinue,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onContinue} showClose={false} size="sm">
      <div className="flex flex-col items-center text-center gap-6 py-4">
        <div className="w-20 h-20 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.42)] flex items-center justify-center">
          <Timer size={36} className="text-[var(--text-gold)]" />
        </div>

        <div>
          <h3 className="text-4xl font-[400] font-[var(--font-family-display)] tracking-[0.06em] text-[var(--text-primary)] mb-2">
            Session Expiring
          </h3>
          <p className="text-[14px] text-[var(--text-secondary)] uppercase tracking-[0.08em]">
            Your session will expire due to inactivity
          </p>
        </div>

        <div className="animate-countdown">
          <span className="text-6xl font-[300] font-[var(--font-family-display)] text-[var(--text-gold)]">
            {remainingTime}
          </span>
          <p className="text-[11px] text-[var(--text-secondary)] mt-1 uppercase tracking-[0.1em]">seconds remaining</p>
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={onContinue}
          fullWidth
        >
          Continue Session
        </Button>
      </div>
    </Modal>
  );
}
