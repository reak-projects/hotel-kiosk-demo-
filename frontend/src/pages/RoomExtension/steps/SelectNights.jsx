// ============================================
// Extension Step 2 — Select Extra Nights
// ============================================

import React from 'react';
import { Moon, Plus } from 'lucide-react';
import { NIGHT_OPTIONS } from '../../../data/constants';
import { useKiosk } from '../../../context/KioskContext';
import Button from '../../../components/ui/Button';

export default function SelectNights({ onNext, onBack }) {
  const { extensionNights, setExtensionNights } = useKiosk();

  const handleCustomClick = () => {
    // If not already in custom range, initialize to 6 nights
    if (extensionNights <= 5) {
      setExtensionNights(6);
    }
  };

  const isCustomSelected = extensionNights > 5;

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">
          Extend Your Stay
        </h2>
        <p className="text-lg text-[var(--color-gray-500)]">
          How many additional nights would you like?
        </p>
      </div>

      {/* Night selector buttons */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        {NIGHT_OPTIONS.map((n) => {
          const isSelected = extensionNights === n;
          return (
            <button
              key={n}
              onClick={() => setExtensionNights(n)}
              className={`
                w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-1
                text-lg font-bold transition-all duration-200
                border
                ${isSelected
                  ? 'border-[var(--text-gold)] bg-[rgba(201,168,76,0.18)] text-[var(--text-gold)] shadow-[var(--shadow-gold)] scale-110'
                  : 'border-[rgba(201,168,76,0.12)] bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] hover:border-[rgba(201,168,76,0.3)] hover:bg-[rgba(255,255,255,0.06)]'
                }
              `}
            >
              <Moon size={24} className={isSelected ? 'text-[var(--text-gold)]' : 'text-white/40'} />
              <span>{n}</span>
              <span className="text-xs font-normal text-[var(--color-gray-500)]">
                {n === 1 ? 'Night' : 'Nights'}
              </span>
            </button>
          );
        })}

        {/* Custom button */}
        <button
          onClick={handleCustomClick}
          className={`
            w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-1
            text-lg font-bold transition-all duration-200
            border
            ${isCustomSelected
              ? 'border-[var(--text-gold)] bg-[rgba(201,168,76,0.18)] text-[var(--text-gold)] shadow-[var(--shadow-gold)] scale-110'
              : 'border-[rgba(201,168,76,0.12)] bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] hover:border-[rgba(201,168,76,0.3)] hover:bg-[rgba(255,255,255,0.06)]'
            }
          `}
        >
          <Plus size={24} className={isCustomSelected ? 'text-[var(--text-gold)]' : 'text-white/40'} />
          <span className="text-base">Custom</span>
          <span className="text-xs font-normal text-[var(--color-gray-500)]">
            {isCustomSelected ? `${extensionNights} Nights` : 'Nights'}
          </span>
        </button>
      </div>

      {/* Custom Nights Counter */}
      {isCustomSelected && (
        <div className="flex flex-col items-center gap-3 mt-2 animate-fade-in bg-white/5 border border-white/10 rounded-2xl p-4 px-6 w-full max-w-sm">
          <span className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">Custom Nights</span>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setExtensionNights(Math.max(6, extensionNights - 1))}
              className="w-12 h-12 rounded-xl bg-white/5 hover:bg-[rgba(201,168,76,0.2)] text-white hover:text-[var(--text-gold)] flex items-center justify-center font-bold text-xl transition-all border border-white/10"
            >
              -
            </button>
            <div className="text-center min-w-[80px]">
              <span className="text-3xl font-bold text-[var(--text-gold)]">{extensionNights}</span>
              <p className="text-xs text-[var(--color-gray-500)]">Nights</p>
            </div>
            <button
              onClick={() => setExtensionNights(extensionNights + 1)}
              className="w-12 h-12 rounded-xl bg-white/5 hover:bg-[rgba(201,168,76,0.2)] text-white hover:text-[var(--text-gold)] flex items-center justify-center font-bold text-xl transition-all border border-white/10"
            >
              +
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center gap-4 w-full max-w-md mt-4">
        <Button variant="ghost" size="md" onClick={onBack}>BACK</Button>
        <Button variant="primary" size="lg" onClick={onNext} disabled={!extensionNights} fullWidth>NEXT</Button>
      </div>
    </div>
  );
}
