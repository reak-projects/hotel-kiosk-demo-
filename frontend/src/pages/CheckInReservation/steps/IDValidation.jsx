import React from 'react';
import { ShieldCheck, ShieldX, LifeBuoy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

export default function IDValidation({ onBack, onResult, failed, onRetry }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">ID Verification</h2>
        <p className="text-lg text-[var(--color-gray-500)]">Validate scanned identity against reservation details</p>
      </div>

      <Card variant="default" className="w-full">
        {!failed ? (
          <div className="flex items-start gap-3">
            <ShieldCheck className="text-[var(--color-success)]" size={22} />
            <div>
              <p className="font-bold text-[var(--color-success-dark)]">Ready To Validate</p>
              <p className="text-sm text-[var(--color-gray-600)]">Continue if guest identity matches booking details.</p>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-3">
            <ShieldX className="text-[var(--color-error)]" size={22} />
            <div>
              <p className="font-bold text-[var(--color-error-dark)]">ID Validation Failed</p>
              <p className="text-sm text-[var(--color-gray-600)]">Retry scan or contact support to resolve mismatch.</p>
            </div>
          </div>
        )}
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Button variant="outline" size="lg" onClick={() => onResult(true)}>ID VALIDATED</Button>
        <Button variant="danger" size="lg" onClick={() => onResult(false)}>ID MISMATCH</Button>
      </div>

      {failed && (
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="md" onClick={onBack}>BACK TO SCAN</Button>
          <Button variant="outline" size="md" onClick={onRetry}>RETRY VALIDATION</Button>
          <Button variant="outline" size="md" icon={LifeBuoy} onClick={() => navigate('/help')}>CONTACT SUPPORT</Button>
        </div>
      )}
    </div>
  );
}
