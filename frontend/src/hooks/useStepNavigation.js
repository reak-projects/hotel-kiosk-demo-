// ============================================
// useStepNavigation — Generic step navigation
// ============================================

import { useState, useCallback } from 'react';

/**
 * Custom hook for multi-step navigation.
 *
 * @param {number} totalSteps - Total number of steps
 * @param {number} [initialStep=1] - Starting step (1-indexed)
 * @returns {{ currentStep, totalSteps, goNext, goBack, goToStep, isFirst, isLast }}
 */
export function useStepNavigation(totalSteps, initialStep = 1) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const goNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  }, [totalSteps]);

  const goBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback((step) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  }, [totalSteps]);

  const resetSteps = useCallback(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  return {
    currentStep,
    totalSteps,
    goNext,
    goBack,
    goToStep,
    resetSteps,
    isFirst: currentStep === 1,
    isLast: currentStep === totalSteps,
  };
}

export default useStepNavigation;
