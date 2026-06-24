// ============================================
// ThankYouScreen — Reusable thank you page
// Used in: Check-in, Check-out, Room Extension
// ============================================

import React from 'react';
import { Hotel, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useKiosk } from '../../context/KioskContext';
import Button from '../ui/Button';

export default function ThankYouScreen({
  title = 'Thank You for staying with us!',
  subtitle = 'Have a safe journey.',
}) {
  const navigate = useNavigate();
  const { endSession } = useKiosk();

  const handleHome = () => {
    endSession();
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 animate-fade-in py-8">
      {/* Hotel illustration placeholder */}
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[var(--color-gold-subtle)] to-[var(--color-gold-hover)] flex items-center justify-center">
        <Hotel size={72} className="text-[var(--color-gold)]" />
      </div>

      {/* Text */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-3">
          {title}
        </h2>
        <p className="text-xl text-[var(--color-gray-500)]">
          {subtitle}
        </p>
      </div>

      {/* Decorative line */}
      <div className="w-24 h-1 rounded-full bg-[var(--color-gold)]" />

      {/* Home button */}
      <Button
        variant="primary"
        size="lg"
        icon={Home}
        onClick={handleHome}
      >
        BACK TO HOME
      </Button>
    </div>
  );
}
