// ============================================
// Badge — Status badges
// ============================================

import React from 'react';

const badgeVariants = {
  success: 'bg-[var(--color-success-light)] text-[var(--color-success-dark)] border-[var(--color-success)]',
  error: 'bg-[var(--color-error-light)] text-[var(--color-error-dark)] border-[var(--color-error)]',
  warning: 'bg-[var(--color-warning-light)] text-[var(--color-warning)] border-[var(--color-warning)]',
  info: 'bg-[var(--color-info-light)] text-[var(--color-info)] border-[var(--color-info)]',
  gold: 'bg-[var(--color-gold-subtle)] text-[var(--color-gold-dark)] border-[var(--color-gold)]',
  neutral: 'bg-[var(--color-gray-100)] text-[var(--color-gray-600)] border-[var(--color-gray-300)]',
};

export default function Badge({
  children,
  variant = 'neutral',
  dot = false,
  className = '',
}) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        px-3 py-1 rounded-full
        text-sm font-medium
        border
        ${badgeVariants[variant] || badgeVariants.neutral}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`
            w-2 h-2 rounded-full
            ${variant === 'success' ? 'bg-[var(--color-success)]' : ''}
            ${variant === 'error' ? 'bg-[var(--color-error)]' : ''}
            ${variant === 'warning' ? 'bg-[var(--color-warning)]' : ''}
            ${variant === 'info' ? 'bg-[var(--color-info)]' : ''}
            ${variant === 'gold' ? 'bg-[var(--color-gold)]' : ''}
            ${variant === 'neutral' ? 'bg-[var(--color-gray-400)]' : ''}
          `}
        />
      )}
      {children}
    </span>
  );
}
