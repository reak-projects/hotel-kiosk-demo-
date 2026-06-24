// ============================================
// Help Step 3 — Connected
// ============================================

import React, { useState, useEffect } from 'react';
import { User, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { agentInfo } from '../../../data/mockData';
import Button from '../../../components/ui/Button';

export default function Connected({ onOutcome }) {
  const navigate = useNavigate();
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatElapsed = (s) => {
    const min = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  const handleResolved = () => onOutcome(true);
  const handleEscalate = () => onOutcome(false);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Agent avatar */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center border-4 border-[var(--color-gold)]">
          <User size={64} className="text-[var(--color-gold)]" />
        </div>
        {/* Online dot */}
        <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-[var(--color-success)] border-3 border-white shadow-[0_0_8px_var(--color-success)]" />
      </div>

      {/* Agent info */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)]">{agentInfo.name}</h2>
        <p className="text-lg text-[var(--color-gray-500)]">{agentInfo.role}</p>
      </div>

      {/* Call timer */}
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-[var(--color-success)] animate-pulse" />
        <span className="text-4xl font-mono font-bold text-[var(--color-gray-900)] tabular-nums">
          {formatElapsed(elapsed)}
        </span>
      </div>

      <p className="text-base text-[var(--color-gray-500)]">Call connected</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <Button
          variant="primary"
          size="lg"
          icon={CheckCircle2}
          onClick={handleResolved}
        >
          ISSUE RESOLVED
        </Button>
        <Button
          variant="danger"
          size="lg"
          icon={AlertTriangle}
          onClick={handleEscalate}
        >
          ESCALATE ISSUE
        </Button>
      </div>

      <Button variant="ghost" size="md" onClick={() => navigate('/')}>END SESSION</Button>
    </div>
  );
}
