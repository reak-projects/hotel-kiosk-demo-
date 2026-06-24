// ============================================
// Dropdown — Touch-friendly select
// ============================================

import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Dropdown({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  error = '',
  required = false,
  disabled = false,
  className = '',
  id,
}) {
  const selectId = id || `dropdown-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-gold)]"
        >
          {label}
          {required && <span className="text-[var(--color-error)] ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full h-14 px-4 pr-12
            text-[15px] rounded-[6px]
            border bg-[rgba(255,255,255,0.04)]
            appearance-none cursor-pointer
            transition-all duration-[var(--transition-fast)]
            focus:outline-none focus:ring-0
            ${error
              ? 'border-[var(--color-error)] focus:border-[var(--color-error)]'
              : 'border-[rgba(255,255,255,0.1)] focus:border-[var(--gold-mid)] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)]'
            }
            ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
            ${!value ? 'text-[var(--text-secondary)]' : 'text-[var(--text-primary)]'}
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
              {typeof opt === 'string' ? opt : opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-secondary)]">
          <ChevronDown size={20} />
        </div>
      </div>
      {error && (
        <p className="text-[12px] text-[var(--color-error)] mt-0.5">{error}</p>
      )}
    </div>
  );
}
