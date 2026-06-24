// ============================================
// Welcome Screen — Home / Index route
// ============================================

import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  UserRoundCheck,
  ClipboardCheck,
  LogOut,
  CalendarClock,
  Users,
  Headset,
  ChevronRight,
  Crown,
} from 'lucide-react';
import { LANGUAGES, MENU_ITEMS, KIOSK_CONFIG } from '../../data/constants';
import { useKiosk } from '../../context/KioskContext';
import { formatDate, formatTime } from '../../utils/formatDate';

const iconMap = {
  checkin_walkin: UserRoundCheck,
  checkin_reservation: ClipboardCheck,
  checkout: LogOut,
  extension: CalendarClock,
  visitor: Users,
  help: Headset,
};

const bgParticles = [
  { left: '6%', top: '82%', size: 5, duration: 13, delay: 0 },
  { left: '14%', top: '28%', size: 4, duration: 16, delay: 1.4 },
  { left: '22%', top: '64%', size: 6, duration: 11, delay: 2.8 },
  { left: '31%', top: '18%', size: 3, duration: 14, delay: 0.6 },
  { left: '38%', top: '78%', size: 5, duration: 18, delay: 3.2 },
  { left: '46%', top: '42%', size: 4, duration: 12, delay: 1.9 },
  { left: '54%', top: '88%', size: 5, duration: 15, delay: 0.3 },
  { left: '58%', top: '22%', size: 6, duration: 20, delay: 2.1 },
  { left: '66%', top: '58%', size: 4, duration: 13, delay: 4.0 },
  { left: '72%', top: '34%', size: 5, duration: 17, delay: 1.1 },
  { left: '78%', top: '72%', size: 4, duration: 14, delay: 2.6 },
  { left: '84%', top: '14%', size: 3, duration: 19, delay: 3.7 },
  { left: '88%', top: '48%', size: 5, duration: 16, delay: 0.9 },
  { left: '92%', top: '80%', size: 4, duration: 12, delay: 2.3 },
  { left: '48%', top: '55%', size: 3, duration: 21, delay: 4.5 },
  { left: '36%', top: '92%', size: 4, duration: 15, delay: 1.6 },
];

export const WelcomeBackground = React.memo(function WelcomeBackground() {
  return (
    <div className="welcome-bg-animation" aria-hidden="true">
      <div className="welcome-bg-aurora" />
      <div className="welcome-bg-orb welcome-bg-orb--1" />
      <div className="welcome-bg-orb welcome-bg-orb--2" />
      <div className="welcome-bg-orb welcome-bg-orb--3" />
      <div className="welcome-bg-orb welcome-bg-orb--4" />
      <div className="welcome-bg-orb welcome-bg-orb--5" />
      <div className="welcome-bg-shimmer" />
      {bgParticles.map((particle, index) => (
        <span
          key={`bg-${particle.left}-${index}`}
          className="welcome-bg-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
});

let isFirstLoad = true;

export default function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  const { startSession, language, setLanguage } = useKiosk();
  const [now, setNow] = useState(new Date());
  const [isAttractMode, setIsAttractMode] = useState(() => {
    if (location.state?.fromTimeout) return true;
    return isFirstLoad;
  });
  const [stageTarget, setStageTarget] = useState(null);

  useEffect(() => {
    isFirstLoad = false;
  }, []);

  useEffect(() => {
    setStageTarget(document.querySelector('.kiosk-stage'));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const screen = document.querySelector('.kiosk-screen');
    if (!screen) return undefined;
    screen.classList.add('welcome-page-active');
    return () => screen.classList.remove('welcome-page-active');
  }, []);

  useEffect(() => {
    const screen = document.querySelector('.kiosk-screen');
    const stage = document.querySelector('.kiosk-stage');

    if (isAttractMode) {
      screen?.classList.add('welcome-attract-active');
      stage?.classList.add('welcome-attract-active');
    } else {
      screen?.classList.remove('welcome-attract-active');
      stage?.classList.remove('welcome-attract-active');
    }

    return () => {
      screen?.classList.remove('welcome-attract-active');
      stage?.classList.remove('welcome-attract-active');
    };
  }, [isAttractMode]);

  const languageOptions = useMemo(
    () => LANGUAGES.map((lang) => ({ code: lang.code, label: lang.name })),
    [],
  );

  const handleMenuClick = (item) => {
    if (isAttractMode) return;
    startSession(item.id);
    navigate(item.path);
  };

  const handleAttractDismiss = () => {
    setIsAttractMode(false);
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className={`h-full ${isAttractMode ? 'pointer-events-none select-none' : ''}`}>
        <div className="h-full grid grid-cols-2">
          <aside className="relative z-[1] h-full flex flex-col items-center justify-center p-10">
            <div className="w-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-[14px] bg-[image:var(--gold-gradient)] border border-[rgba(245,212,133,0.44)] flex items-center justify-center">
                <Crown size={34} className="text-[#0A0E1A]" />
              </div>
              <div>
                <p className="mt-6 font-[var(--font-family-display)] text-[22px] tracking-[0.3em] text-[var(--text-primary)]">GRAND HORIZON</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-gold)] mt-2">HOTEL & RESORT</p>
              </div>
              <div className="w-[40%] luxury-divider mt-8" />

              <div className="mt-16">
                <p className="text-[48px] leading-none tabular-nums font-[300] font-[var(--font-family-display)] text-[var(--text-primary)]">{formatTime(now)}</p>
                <p className="text-[12px] uppercase tracking-[0.12em] text-[var(--text-secondary)] mt-3">{formatDate(now)}</p>
              </div>
            </div>

            <div className="absolute bottom-16 left-16 px-3 py-1.5 rounded-[4px] border border-[rgba(201,168,76,0.24)] bg-[rgba(255,255,255,0.03)]">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--text-gold)]">{KIOSK_CONFIG.kioskId}</p>
            </div>
          </aside>

          <section className="relative z-[1] h-full flex flex-col items-center justify-center px-12 py-10 overflow-hidden">
            <div className="relative z-10 w-full max-w-[680px] flex flex-col items-center">
              <div className="w-full flex flex-col gap-4">
                {MENU_ITEMS.map((item, index) => {
                  const Icon = iconMap[item.id] || Headset;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleMenuClick(item)}
                      disabled={isAttractMode}
                      className="group welcome-module-card menu-slide-in flex items-center gap-5 text-left pl-5 pr-4 transition-all duration-200 hover:border-[rgba(201,168,76,0.45)] hover:bg-[rgba(255,255,255,0.05)] disabled:cursor-default"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      <div className="w-14 h-14 rounded-[10px] bg-[image:var(--gold-gradient)] border border-[rgba(245,212,133,0.4)] flex items-center justify-center flex-shrink-0">
                        <Icon size={28} className="text-[#0A0E1A]" />
                      </div>
                      <div className="flex-1 min-w-0 py-1">
                        <p className="text-[18px] uppercase tracking-[0.1em] text-[var(--text-gold)] leading-tight font-medium">{item.title}</p>
                        <p className="text-[14px] text-[var(--text-secondary)] mt-2 leading-snug">{item.subtitle}</p>
                      </div>
                      <ChevronRight size={22} className="text-[var(--text-gold)] opacity-80 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex items-center justify-center gap-0.5">
                {languageOptions.map((item, index) => {
                  const isActive = language === item.code;
                  return (
                    <React.Fragment key={item.code}>
                      <button
                        type="button"
                        onClick={() => !isAttractMode && setLanguage(item.code)}
                        disabled={isAttractMode}
                        className={`px-4 py-1.5 border-b text-[13px] transition-all duration-200 disabled:opacity-60 ${isActive ? 'border-[var(--text-gold)] text-[var(--text-gold)]' : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                      >
                        {item.label}
                      </button>
                      {index < languageOptions.length - 1 && <span className="text-[var(--text-secondary)]/60">|</span>}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>

      {isAttractMode && stageTarget &&
        createPortal(
          <button
            type="button"
            className="welcome-attract-overlay"
            onClick={handleAttractDismiss}
            aria-label="Tap to start kiosk"
          >
            <div className="welcome-attract-overlay__content">
              <p className="welcome-attract-overlay__eyebrow">Welcome to</p>
              <h2 className="welcome-attract-overlay__title">{KIOSK_CONFIG.hotelName}</h2>
              <p className="welcome-attract-overlay__tagline">{KIOSK_CONFIG.hotelTagline}</p>
              <p className="welcome-attract-overlay__hint">Tap anywhere to start</p>
            </div>
          </button>,
          stageTarget,
        )}
    </div>
  );
}
