// ============================================
// Modal — Centered modal overlay
// ============================================

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  showClose = true,
  size = 'md',
  className = '',
}) {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[var(--z-overlay)] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

      {/* Modal content */}
      <div
        className={`
          relative z-10 w-full ${sizes[size] || sizes.md}
          bg-[rgba(10,14,26,0.92)] border border-[rgba(201,168,76,0.22)] rounded-[16px] backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.45)] text-[var(--text-primary)]
          animate-scale-in
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || showClose) && (
          <div className="flex items-center justify-between p-6 pb-4 border-b border-[var(--border-subtle)]">
            {title && (
              <h2 className="text-3xl font-[400] font-[var(--font-family-display)] tracking-[0.04em] text-[var(--text-primary)]">
                {title}
              </h2>
            )}
            {showClose && onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-[6px] text-[var(--text-secondary)] hover:text-[var(--text-gold)] hover:bg-[rgba(201,168,76,0.08)] transition-colors"
              >
                <X size={24} />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
