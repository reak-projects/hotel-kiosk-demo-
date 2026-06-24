import React, { useEffect, useState } from 'react';
import { BadgeCheck, Printer } from 'lucide-react';
import { registerVisitor, printPass } from '../../../services';
import { useKiosk } from '../../../context/KioskContext';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

export default function VisitorPass({ onNext, onBack }) {
  const { visitorInfo, visitorPass, setVisitorPass } = useKiosk();
  const [loading, setLoading] = useState(false);
  const [printing, setPrinting] = useState(false);

  useEffect(() => {
    const run = async () => {
      if (visitorPass) {
        return;
      }
      setLoading(true);
      try {
        const response = await registerVisitor(visitorInfo);
        if (response.success) {
          setVisitorPass(response.data);
        }
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [setVisitorPass, visitorInfo, visitorPass]);

  const handlePrint = async () => {
    if (!visitorPass?.passId) {
      return;
    }
    setPrinting(true);
    try {
      await printPass(visitorPass.passId);
      onNext();
    } finally {
      setPrinting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
      <div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-gold)] mb-2">Security Pass</p>
        <h2 className="text-5xl font-[300] font-[var(--font-family-display)] tracking-[0.06em]">Visitor Pass</h2>
      </div>

      <Card variant="gold" className="w-full">
        {loading ? (
          <p className="text-[14px] text-[var(--text-secondary)]">Generating visitor pass...</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-secondary)]">Name</p>
              <p className="text-[18px] text-[var(--text-primary)]">{visitorPass?.visitorName}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-secondary)]">Host Room</p>
              <p className="text-[18px] text-[var(--text-primary)]">{visitorPass?.hostRoom}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-secondary)]">Purpose</p>
              <p className="text-[16px] text-[var(--text-primary)]">{visitorPass?.purpose}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-secondary)]">Pass ID</p>
              <p className="text-[16px] text-[var(--text-gold)]">{visitorPass?.passId}</p>
            </div>
            <div className="col-span-2 mt-2 pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2 text-[var(--text-gold)]">
              <BadgeCheck size={16} />
              <span className="text-[12px] uppercase tracking-[0.1em]">Verified for entry</span>
            </div>
          </div>
        )}
      </Card>

      <div className="flex justify-between">
        <Button variant="ghost" onClick={onBack}>Back</Button>
        <Button onClick={handlePrint} loading={printing || loading} icon={Printer}>
          Print Pass
        </Button>
      </div>
    </div>
  );
}
