import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeftCircle, AlertOctagon, Home } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

export default function HelpOutcome({ resolved }) {
  const navigate = useNavigate();

  if (resolved) {
    return (
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-6 animate-fade-in">
        <Card variant="gold" className="w-full text-center">
          <div className="flex flex-col items-center gap-3">
            <CheckCircle2 size={48} className="text-[var(--color-success)]" />
            <h2 className="text-3xl font-bold text-[var(--color-gray-900)]">Issue Resolved</h2>
            <p className="text-[var(--color-gray-500)]">Return to your previous step and continue the process.</p>
          </div>
        </Card>

        <div className="flex items-center gap-4">
          <Button variant="primary" size="lg" icon={ArrowLeftCircle} onClick={() => navigate(-1)}>
            RETURN TO PREVIOUS STEP
          </Button>
          <Button variant="outline" size="lg" icon={Home} onClick={() => navigate('/')}>
            GO HOME
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto gap-6 animate-fade-in">
      <Card variant="default" className="w-full border-2 border-[var(--color-error)] text-center">
        <div className="flex flex-col items-center gap-3">
          <AlertOctagon size={48} className="text-[var(--color-error)]" />
          <h2 className="text-3xl font-bold text-[var(--color-error-dark)]">Escalated To Back Office</h2>
          <p className="text-[var(--color-gray-600)]">An operations agent will intervene to resolve this issue.</p>
        </div>
      </Card>

      <Button variant="primary" size="lg" icon={Home} onClick={() => navigate('/')}>
        RETURN HOME
      </Button>
    </div>
  );
}
