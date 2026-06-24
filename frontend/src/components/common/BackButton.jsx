// ============================================
// BackButton — Top-left navigation arrow
// ============================================

import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ onClick, label = 'Back', className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2
        px-3 py-2 rounded-[4px]
        text-[var(--text-gold)] font-medium text-[12px] uppercase tracking-[0.12em]
        border border-transparent hover:border-[rgba(201,168,76,0.25)] hover:bg-[rgba(201,168,76,0.08)]
        transition-all duration-[var(--transition-fast)]
        ${className}
      `}
    >
      <ArrowLeft size={16} />
      {label}
    </button>
  );
}
