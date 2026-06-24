// ============================================
// Help Step 1 — Select Contact Mode
// ============================================

import React from 'react';
import { Video, Phone, MessageSquare } from 'lucide-react';
import { HELP_MODES } from '../../../data/constants';
import { useKiosk } from '../../../context/KioskContext';
import Card from '../../../components/ui/Card';

const iconMap = { Video, Phone, MessageSquare };

export default function SelectMode({ onNext, onBack }) {
  const { setHelpMode } = useKiosk();

  const handleSelect = (mode) => {
    setHelpMode(mode.id);
    onNext();
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">
          Need Help?
        </h2>
        <p className="text-xl text-[var(--color-gray-500)]">
          Choose how you'd like to connect with our staff
        </p>
      </div>

      <div className="flex items-center gap-6">
        {HELP_MODES.map((mode) => {
          const Icon = iconMap[mode.icon] || Phone;
          return (
            <Card
              key={mode.id}
              variant="default"
              hoverable
              onClick={() => handleSelect(mode)}
              className="flex flex-col items-center justify-center gap-5 cursor-pointer w-64 h-64"
            >
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-navy)] flex items-center justify-center">
                <Icon size={40} className="text-[var(--color-gold)]" />
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-[var(--color-gray-900)]">{mode.title}</p>
                <p className="text-sm text-[var(--color-gray-500)]">{mode.subtitle}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
