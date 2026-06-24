import React, { useState } from 'react';
import { KeyRound, ShieldAlert, CheckCircle, RefreshCw } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

export default function InvalidateKey({ onNext, onBack }) {
  const [invalidating, setInvalidating] = useState(false);
  const [invalidated, setInvalidated] = useState(false);

  const handleInvalidate = () => {
    setInvalidating(true);
    setTimeout(() => {
      setInvalidating(false);
      setInvalidated(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">Invalidate Room Key</h2>
        <p className="text-lg text-[var(--color-gray-500)]">
          {invalidated ? 'Key card deactivated successfully' : 'Please deactivate your room key card'}
        </p>
      </div>

      <Card variant="gold" className="w-full flex flex-col gap-5">
        {!invalidated ? (
          <div className="flex items-center gap-4 rounded-xl bg-[rgba(10,14,26,0.5)] p-4 border border-[rgba(201,168,76,0.24)]">
            <div className="w-12 h-12 rounded-lg bg-[var(--color-gold-subtle)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center animate-pulse">
              <KeyRound size={24} className="text-[var(--text-gold)]" />
            </div>
            <div>
              <p className="font-bold text-[var(--text-primary)]">Key Card Active</p>
              <p className="text-sm text-[var(--text-secondary)]">Place key on reader and click Invalidate below</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 rounded-xl bg-[rgba(16,185,129,0.06)] p-4 border border-[rgba(16,185,129,0.24)] animate-scale-in">
            <div className="w-12 h-12 rounded-lg bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.2)] flex items-center justify-center">
              <CheckCircle size={24} className="text-[var(--color-success)]" />
            </div>
            <div>
              <p className="font-bold text-[var(--color-success)]">Key Card Inactive</p>
              <p className="text-sm text-[var(--text-secondary)]">Your key has been successfully invalidated</p>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col gap-4">
          <Button
            variant={invalidated ? 'outline' : 'primary'}
            size="lg"
            icon={invalidating ? RefreshCw : ShieldAlert}
            onClick={handleInvalidate}
            disabled={invalidating || invalidated}
            className={invalidating ? 'animate-pulse' : ''}
            fullWidth
          >
            {invalidating ? 'INVALIDATING...' : invalidated ? 'KEY INVALIDATED' : 'INVALIDATE KEY'}
          </Button>
        </div>
      </Card>

      <div className="flex items-center gap-4 w-full">
        {!invalidated && (
          <Button variant="ghost" size="md" onClick={onBack}>
            BACK
          </Button>
        )}
        <Button
          variant="primary"
          size="lg"
          onClick={onNext}
          disabled={!invalidated}
          fullWidth
        >
          COMPLETE CHECK-OUT
        </Button>
      </div>
    </div>
  );
}
