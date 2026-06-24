import React from 'react';
import { Printer, Send, KeyRound } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

export default function IssueKey({ onNext, onBack }) {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">Issue Room Key</h2>
        <p className="text-lg text-[var(--color-gray-500)]">Print key card or send a digital key</p>
      </div>

      <Card variant="gold" className="w-full flex flex-col gap-5">
        <div className="flex items-center gap-4 rounded-xl bg-[rgba(10,14,26,0.5)] p-4 border border-[rgba(201,168,76,0.24)]">
          <div className="w-12 h-12 rounded-lg bg-[var(--color-gold-subtle)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center">
            <KeyRound size={24} className="text-[var(--text-gold)]" />
          </div>
          <div>
            <p className="font-bold text-[var(--text-primary)]">Room Assigned</p>
            <p className="text-sm text-[var(--text-secondary)]">Room key is ready to issue</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" size="lg" icon={Printer}>PRINT KEY CARD</Button>
          <Button variant="outline" size="lg" icon={Send}>SEND DIGITAL KEY</Button>
        </div>
      </Card>

      <div className="flex items-center gap-4 w-full">
        <Button variant="ghost" size="md" onClick={onBack}>BACK</Button>
        <Button variant="primary" size="lg" onClick={onNext} fullWidth>CHECK-IN COMPLETE</Button>
      </div>
    </div>
  );
}
