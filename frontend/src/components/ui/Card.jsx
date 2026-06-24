// ============================================
// Card — Reusable card container
// ============================================

import React from 'react';

const cardVariants = {
  default: 'bg-[rgba(255,255,255,0.03)] text-[var(--text-primary)] border border-[rgba(201,168,76,0.12)] backdrop-blur-[20px] shadow-[0_12px_36px_rgba(0,0,0,0.28)]',
  elevated: 'bg-[rgba(255,255,255,0.04)] text-[var(--text-primary)] border border-[rgba(201,168,76,0.18)] backdrop-blur-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.34)]',
  outlined: 'bg-[rgba(255,255,255,0.03)] text-[var(--text-primary)] border border-[rgba(201,168,76,0.24)] backdrop-blur-[20px]',
  gold: 'bg-[linear-gradient(170deg,rgba(245,212,133,0.12),rgba(166,130,42,0.12))] text-[var(--text-primary)] border border-[rgba(201,168,76,0.45)] backdrop-blur-[18px]',
  navy: 'bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)]',
  selected: 'bg-[rgba(201,168,76,0.12)] text-[var(--text-primary)] border border-[rgba(201,168,76,0.52)] shadow-[0_0_0_1px_rgba(201,168,76,0.25)_inset]',
  glass: 'bg-[var(--bg-glass)] text-[var(--text-primary)] backdrop-blur-[20px] border border-[var(--border-subtle)] shadow-[0_16px_40px_rgba(0,0,0,0.25)]',
};

export default function Card({
  children,
  variant = 'default',
  padding = 'p-6',
  rounded = 'rounded-xl',
  className = '',
  onClick,
  hoverable = false,
  ...props
}) {
  const hoverStyle = hoverable
    ? 'cursor-pointer transition-all duration-[var(--transition-normal)] hover:border-[var(--border-glow)] hover:bg-[rgba(201,168,76,0.09)] hover:-translate-y-0.5'
    : '';

  return (
    <div
      className={`
        ${cardVariants[variant] || cardVariants.default}
        ${padding}
        ${rounded}
        ${hoverStyle}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-4 pt-4 border-t border-[var(--border-subtle)] ${className}`}>
      {children}
    </div>
  );
}
