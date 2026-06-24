// ============================================
// Room Extension Module — Step Orchestrator
// ============================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepNavigation } from '../../hooks/useStepNavigation';
import { useKiosk } from '../../context/KioskContext';
import { EXTENSION_STEPS } from '../../data/constants';
import StepIndicator from '../../components/common/StepIndicator';
import BackButton from '../../components/common/BackButton';
import IdentifyRoom from './steps/IdentifyRoom';
import SelectNights from './steps/SelectNights';
import ReviewCharges from './steps/ReviewCharges';
import Payment from './steps/Payment';
import ExtensionConfirmed from './steps/ExtensionConfirmed';
import ThankYou from './steps/ThankYou';

export default function RoomExtension() {
  const navigate = useNavigate();
  const { endSession } = useKiosk();
  const { currentStep, totalSteps, goNext, goBack } = useStepNavigation(EXTENSION_STEPS.length);

  const handleBack = () => {
    if (currentStep === 1) {
      endSession();
      navigate('/');
    } else {
      goBack();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <IdentifyRoom onNext={goNext} onBack={handleBack} />;
      case 2: return <SelectNights onNext={goNext} onBack={goBack} />;
      case 3: return <ReviewCharges onNext={goNext} onBack={goBack} />;
      case 4: return <Payment onNext={goNext} onBack={goBack} />;
      case 5: return <ExtensionConfirmed onNext={goNext} />;
      case 6: return <ThankYou />;
      default: return null;
    }
  };

  return (
    <div className="module-shell">
      {currentStep < 6 && (
        <div className="w-full max-w-5xl mb-4">
          <BackButton onClick={handleBack} />
        </div>
      )}
      {currentStep < 6 && (
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} steps={EXTENSION_STEPS} className="mb-8" />
      )}
      <div className="w-full flex-1 flex items-center justify-center" key={currentStep}>
        <div className="animate-slide-in-right w-full flex justify-center">
          <div className="module-content-card">{renderStep()}</div>
        </div>
      </div>
    </div>
  );
}
