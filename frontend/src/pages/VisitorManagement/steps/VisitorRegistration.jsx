import React from 'react';
import FormInput from '../../../components/ui/FormInput';
import Dropdown from '../../../components/ui/Dropdown';
import Button from '../../../components/ui/Button';
import { useKiosk } from '../../../context/KioskContext';
import { VISIT_PURPOSES, ID_TYPES } from '../../../data/constants';

export default function VisitorRegistration({ onNext, onBack }) {
  const { visitorInfo, setVisitorInfo } = useKiosk();

  const canProceed = Boolean(visitorInfo.visitorName && visitorInfo.mobile && visitorInfo.purpose && visitorInfo.hostRoom);

  const update = (field, value) => setVisitorInfo({ [field]: value });

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
      <div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-gold)] mb-2">Guest Details</p>
        <h2 className="text-5xl font-[300] font-[var(--font-family-display)] tracking-[0.06em]">Visitor Registration</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="Visitor Name"
          value={visitorInfo.visitorName}
          onChange={(event) => update('visitorName', event.target.value)}
          placeholder="Enter full name"
          className="col-span-2"
          required
        />
        <FormInput
          label="Mobile Number"
          value={visitorInfo.mobile}
          onChange={(event) => update('mobile', event.target.value)}
          placeholder="Enter contact number"
          required
        />
        <FormInput
          label="Host Room"
          value={visitorInfo.hostRoom}
          onChange={(event) => update('hostRoom', event.target.value)}
          placeholder="Room number"
          required
        />
        <Dropdown
          label="Purpose"
          value={visitorInfo.purpose}
          onChange={(event) => update('purpose', event.target.value)}
          options={VISIT_PURPOSES.map((purpose) => ({ value: purpose, label: purpose }))}
          placeholder="Select purpose"
          required
        />
        <Dropdown
          label="ID Type"
          value={visitorInfo.idType}
          onChange={(event) => update('idType', event.target.value)}
          options={ID_TYPES.map((item) => ({ value: item.name, label: item.name }))}
          placeholder="Select ID type"
        />
      </div>

      <div className="flex justify-between">
        <Button variant="ghost" onClick={onBack}>Back</Button>
        <Button onClick={onNext} disabled={!canProceed}>Continue</Button>
      </div>
    </div>
  );
}
