import React, { useState } from 'react';
import { UserPlus, UserCheck, UserMinus, Users } from 'lucide-react';
import { VISITOR_OPTIONS } from '../../../data/constants';
import { useKiosk } from '../../../context/KioskContext';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

const iconMap = {
  UserPlus,
  UserCheck,
  UserMinus,
  Users,
};

export default function VisitorOption({ onNext }) {
  const { setVisitorOption } = useKiosk();
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id);
    setVisitorOption(id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-gold)] mb-2">Visitor Management</p>
        <h2 className="text-5xl font-[300] font-[var(--font-family-display)] tracking-[0.06em]">Select Visitor Option</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {VISITOR_OPTIONS.map((option) => {
          const Icon = iconMap[option.icon] || UserPlus;
          const isSelected = selected === option.id;
          return (
            <Card
              key={option.id}
              variant={isSelected ? 'selected' : 'default'}
              hoverable
              onClick={() => handleSelect(option.id)}
              className="min-h-[130px]"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-[6px] bg-[rgba(201,168,76,0.14)] border border-[rgba(201,168,76,0.3)] flex items-center justify-center">
                  <Icon size={20} className="text-[var(--text-gold)]" />
                </div>
                <div>
                  <p className="text-[13px] uppercase tracking-[0.1em] font-medium text-[var(--text-gold)]">{option.title}</p>
                  <p className="text-[13px] text-[var(--text-secondary)] mt-2">{option.subtitle}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext} disabled={!selected}>Continue</Button>
      </div>
    </div>
  );
}
