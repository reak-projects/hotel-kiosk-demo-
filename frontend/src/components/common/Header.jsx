// ============================================
// Header — Hotel logo, date/time, kiosk ID
// ============================================

import React, { useState, useEffect } from 'react';
import { Crown } from 'lucide-react';
import { KIOSK_CONFIG } from '../../data/constants';
import { formatTime, formatDate } from '../../utils/formatDate';

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="flex items-center justify-between px-10 text-[var(--text-primary)] bg-[rgba(6,11,22,0.86)] border-b border-[rgba(201,168,76,0.12)] backdrop-blur-xl"
      style={{ height: 'var(--header-height)' }}
    >
      {/* Left — Hotel logo & name */}
      <div className="flex items-center gap-4 min-w-[320px]">
        <div className="w-11 h-11 rounded-[10px] bg-[image:var(--gold-gradient)] flex items-center justify-center border border-[rgba(245,212,133,0.48)]">
          <Crown size={22} className="text-[#0A0E1A]" />
        </div>
        <div>
          <h1 className="text-[23px] leading-none tracking-[0.14em] font-[400] font-[var(--font-family-display)] uppercase">Grand Horizon</h1>
          <p className="text-[10px] text-[var(--text-gold)] tracking-[0.32em] uppercase">Hotel & Resort</p>
        </div>
      </div>

      <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--text-secondary)]">
        Self Service Kiosk
      </div>

      {/* Right — Date, time, kiosk ID */}
      <div className="flex items-center gap-8 min-w-[320px] justify-end">
        <div className="text-right">
          <p className="text-[30px] leading-none tabular-nums font-[300] font-[var(--font-family-display)] text-[var(--text-primary)]">{formatTime(now)}</p>
          <p className="text-[11px] text-[var(--text-secondary)] tracking-[0.08em] uppercase">{formatDate(now)}</p>
        </div>
        <div className="h-10 w-px bg-[rgba(201,168,76,0.18)]" />
        <div className="px-3 py-1.5 rounded-[4px] border border-[rgba(201,168,76,0.24)] bg-[rgba(255,255,255,0.03)]">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--text-gold)] uppercase">{KIOSK_CONFIG.kioskId}</p>
        </div>
      </div>
    </header>
  );
}
