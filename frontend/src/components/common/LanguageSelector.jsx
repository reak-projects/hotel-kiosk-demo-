// ============================================
// LanguageSelector — 5-language horizontal selector
// ============================================

import React from 'react';
import { LANGUAGES } from '../../data/constants';
import { useKiosk } from '../../context/KioskContext';

export default function LanguageSelector({ className = '' }) {
  const { language, setLanguage } = useKiosk();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {LANGUAGES.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`
              flex items-center gap-2
              px-3 py-2
              text-[13px] font-medium
              transition-all duration-[var(--transition-fast)]
              border-b
              min-h-[42px]
              ${isActive
                ? 'border-[var(--text-gold)] text-[var(--text-gold)]'
                : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }
            `}
          >
            <span>{lang.name}</span>
          </button>
        );
      })}
    </div>
  );
}
