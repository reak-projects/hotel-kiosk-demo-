// ============================================
// Button — Touch-optimized button primitive
// ============================================

import React from 'react';
import { Loader2 } from 'lucide-react';

const variants = {
  primary:
    'bg-[image:var(--gold-gradient)] text-[#0A0E1A] border border-[rgba(245,212,133,0.4)] hover:brightness-110 hover:scale-[1.01] active:scale-100 font-semibold',
  secondary:
    'bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] active:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] font-medium',
  outline:
    'border border-[rgba(201,168,76,0.32)] text-[var(--text-gold)] hover:bg-[rgba(201,168,76,0.08)] active:bg-[rgba(201,168,76,0.12)] font-medium',
  ghost:
    'text-[var(--text-gold)] border border-transparent hover:border-[rgba(201,168,76,0.28)] hover:bg-[rgba(201,168,76,0.08)] active:bg-[rgba(201,168,76,0.12)] font-medium',
  danger:
    'bg-[var(--color-error)] hover:bg-[var(--color-error-dark)] active:bg-[var(--color-error-dark)] text-white font-semibold',
  success:
    'bg-[var(--color-success)] hover:bg-[var(--color-success-dark)] active:bg-[var(--color-success-dark)] text-white font-semibold',
};

const sizes = {
  sm: 'h-11 px-4 text-[12px] rounded-[4px] min-w-[120px] tracking-[0.09em] uppercase',
  md: 'h-14 px-8 text-[13px] rounded-[4px] min-w-[180px] tracking-[0.1em] uppercase',
  lg: 'h-14 px-10 text-[13px] rounded-[4px] min-w-[220px] tracking-[0.1em] uppercase',
  icon: 'h-14 w-14 rounded-[6px] flex items-center justify-center p-0',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  ...props
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-3
        transition-all duration-[var(--transition-fast)]
        select-none cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <Loader2 className="animate-spinner" size={size === 'sm' ? 18 : 24} />
      ) : (
        <>
          {Icon && <Icon size={size === 'sm' ? 18 : size === 'lg' ? 28 : 24} />}
          {children}
          {IconRight && <IconRight size={size === 'sm' ? 18 : size === 'lg' ? 28 : 24} />}
        </>
      )}
    </button>
  );
}
