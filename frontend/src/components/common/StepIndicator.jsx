// ============================================
// StepIndicator — Step X of Y with dots
// ============================================

import React from 'react';
import { Check } from 'lucide-react';

export default function StepIndicator({
  currentStep,
  totalSteps,
  steps = [],
  className = '',
}) {
  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      {/* Step label */}
      <div className="text-center mb-5">
        <p className="text-[11px] uppercase tracking-[0.12em] font-medium text-[var(--text-secondary)]">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* Step dots and connectors */}
      <div className="flex items-center justify-center gap-0">
        {Array.from({ length: totalSteps }, (_, i) => {
          const stepNum = i + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;
          const stepLabel = steps[i]?.label || '';

          return (
            <React.Fragment key={stepNum}>
              <div className="flex flex-col items-center relative">
                {/* Circle */}
                <div
                  className={`
                    w-9 h-9 rounded-full flex items-center justify-center
                    text-[12px] font-semibold transition-all duration-300 border
                    ${isCompleted
                      ? 'bg-[image:var(--gold-gradient)] border-[rgba(245,212,133,0.5)] text-[#0A0E1A]'
                      : isActive
                        ? 'bg-[image:var(--gold-gradient)] border-[rgba(245,212,133,0.6)] text-[#0A0E1A] scale-110'
                        : 'bg-transparent border-[rgba(201,168,76,0.3)] text-[var(--text-secondary)]'
                    }
                  `}
                >
                  {isCompleted ? <Check size={18} strokeWidth={3} /> : stepNum}
                </div>

                {/* Label */}
                {stepLabel && (
                  <span
                    className={`
                      absolute -bottom-6 whitespace-nowrap text-[10px] uppercase tracking-[0.08em] font-medium
                      ${isActive ? 'text-[var(--text-gold)]' : 'text-[var(--text-secondary)]'}
                    `}
                  >
                    {stepLabel}
                  </span>
                )}
              </div>

              {/* Connector line */}
              {stepNum < totalSteps && (
                <div
                  className={`
                    w-20 h-px mx-2
                    transition-colors duration-300
                    ${stepNum < currentStep
                      ? 'bg-[rgba(201,168,76,0.75)]'
                      : 'bg-[rgba(201,168,76,0.24)]'
                    }
                  `}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
