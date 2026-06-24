// ============================================
// useInactivityTimer — 60s timeout with countdown
// ============================================

import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { KIOSK_CONFIG } from '../data/constants';

/**
 * Custom hook for inactivity timeout.
 * After `timeout` seconds of no interaction, shows a countdown modal.
 * After countdown expires, redirects to welcome screen.
 *
 * @param {object} options
 * @param {number} [options.timeout] - Inactivity timeout in seconds (default: 60)
 * @param {number} [options.countdown] - Countdown duration in seconds (default: 10)
 * @param {boolean} [options.enabled] - Whether the timer is active (default: true)
 * @returns {{ showCountdown: boolean, remainingTime: number, resetTimer: Function }}
 */
export function useInactivityTimer({
  timeout = KIOSK_CONFIG.inactivityTimeout,
  countdown = KIOSK_CONFIG.countdownDuration,
  enabled = true,
} = {}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCountdown, setShowCountdown] = useState(false);
  const [remainingTime, setRemainingTime] = useState(countdown);
  const inactivityTimerRef = useRef(null);
  const countdownTimerRef = useRef(null);

  // Don't run on welcome screen
  const isWelcome = location.pathname === '/';

  const clearAllTimers = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }
    if (countdownTimerRef.current) {
      clearInterval(countdownTimerRef.current);
      countdownTimerRef.current = null;
    }
  }, []);

  const resetTimer = useCallback(() => {
    clearAllTimers();
    setShowCountdown(false);
    setRemainingTime(countdown);

    if (!enabled || isWelcome) return;

    inactivityTimerRef.current = setTimeout(() => {
      // Start countdown
      setShowCountdown(true);
      setRemainingTime(countdown);

      let timeLeft = countdown;
      countdownTimerRef.current = setInterval(() => {
        timeLeft -= 1;
        setRemainingTime(timeLeft);

        if (timeLeft <= 0) {
          clearAllTimers();
          setShowCountdown(false);
          navigate('/', { replace: true, state: { fromTimeout: true } });
        }
      }, 1000);
    }, timeout * 1000);
  }, [enabled, isWelcome, timeout, countdown, clearAllTimers, navigate]);

  // Reset timer on user interaction
  useEffect(() => {
    if (!enabled || isWelcome) return;

    const events = ['touchstart', 'mousedown', 'keydown', 'click'];

    const handleActivity = () => {
      resetTimer();
    };

    events.forEach((event) => {
      window.addEventListener(event, handleActivity, { passive: true });
    });

    // Start initial timer
    resetTimer();

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
      clearAllTimers();
    };
  }, [enabled, isWelcome, resetTimer, clearAllTimers]);

  // Reset when route changes
  useEffect(() => {
    if (!isWelcome) {
      resetTimer();
    }
  }, [location.pathname, isWelcome, resetTimer]);

  return {
    showCountdown,
    remainingTime,
    resetTimer,
  };
}

export default useInactivityTimer;
