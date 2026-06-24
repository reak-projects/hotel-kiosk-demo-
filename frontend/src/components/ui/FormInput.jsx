// ============================================
// FormInput — Touch-friendly input with label
// ============================================

import React from 'react';

export default function FormInput({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  error = '',
  icon: Icon,
  required = false,
  disabled = false,
  className = '',
  id,
  ...props
}) {
  const inputId = id || `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-gold)]"
        >
          {label}
          {required && <span className="text-[var(--color-error)] ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
            <Icon size={20} />
          </div>
        )}
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full h-14 px-4 ${Icon ? 'pl-12' : ''}
            text-[15px] rounded-[6px]
            border bg-[rgba(255,255,255,0.04)] text-[var(--text-primary)]
            transition-all duration-[var(--transition-fast)]
            placeholder:text-[var(--text-secondary)]
            focus:outline-none focus:ring-0
            ${error
              ? 'border-[var(--color-error)] focus:border-[var(--color-error)]'
              : 'border-[rgba(255,255,255,0.1)] focus:border-[var(--gold-mid)] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)]'
            }
            ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-[12px] text-[var(--color-error)] mt-0.5">{error}</p>
      )}
    </div>
  );
}
