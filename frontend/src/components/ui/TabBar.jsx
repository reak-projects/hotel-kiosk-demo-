// ============================================
// TabBar — Horizontal tab selector
// ============================================

import React from 'react';

export default function TabBar({
  tabs = [],
  activeTab,
  onTabChange,
  className = '',
}) {
  return (
    <div className={`flex items-center bg-[rgba(255,255,255,0.03)] border border-[var(--border-subtle)] rounded-[8px] p-1 ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === (tab.id || tab);
        const tabId = tab.id || tab;
        const tabLabel = tab.label || tab;

        return (
          <button
            key={tabId}
            onClick={() => onTabChange(tabId)}
            className={`
              flex-1 py-3 px-5 rounded-[6px]
              text-[12px] font-medium uppercase tracking-[0.08em]
              transition-all duration-[var(--transition-fast)]
              min-h-[48px]
              ${isActive
                ? 'bg-[rgba(201,168,76,0.18)] text-[var(--text-gold)] border border-[rgba(201,168,76,0.42)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }
            `}
          >
            {tabLabel}
          </button>
        );
      })}
    </div>
  );
}
