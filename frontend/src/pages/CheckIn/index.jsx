// ============================================
// Check-In Module — Step Orchestrator
// ============================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepNavigation } from '../../hooks/useStepNavigation';
import { useKiosk } from '../../context/KioskContext';
import { CHECKIN_STEPS } from '../../data/constants';
import StepIndicator from '../../components/common/StepIndicator';
import BackButton from '../../components/common/BackButton';
import RoomSelection from './steps/RoomSelection';
import GuestInformation from './steps/GuestInformation';
import IDScan from './steps/IDScan';
import Payment from './steps/Payment';
import RoomConfirmationStep from './steps/RoomConfirmation';
import IssueKey from './steps/IssueKey';
import ThankYou from './steps/ThankYou';

export default function CheckIn() {
  const navigate = useNavigate();
  const { endSession } = useKiosk();
  const { currentStep, totalSteps, goNext, goBack } = useStepNavigation(CHECKIN_STEPS.length);

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
      case 1:
        return <RoomSelection mode="type" onNext={goNext} onBack={handleBack} />;
      case 2:
        return <IDScan onNext={goNext} onBack={goBack} />;
      case 3:
        return <GuestInformation onNext={goNext} onBack={goBack} optionalEmail />;
      case 4:
        return <Payment onNext={goNext} onBack={goBack} />;
      case 5:
        return <RoomConfirmationStep onNext={goNext} onBack={goBack} />;
      case 6:
        return <IssueKey onNext={goNext} onBack={goBack} />;
      case 7:
        return <ThankYou />;
      default:
        return null;
    }
  };

  return (
    <div className="module-shell">
      {/* Back button */}
      {currentStep < 7 && (
        <div className="w-full max-w-5xl mb-4">
          <BackButton onClick={handleBack} />
        </div>
      )}

      {/* Step indicator */}
      {currentStep < 7 && (
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          steps={CHECKIN_STEPS}
          className="mb-8"
        />
      )}

      {/* Step content */}
      <div className="w-full flex-1 flex items-center justify-center" key={currentStep}>
        <div className="animate-slide-in-right w-full flex justify-center">
          <div className={`module-content-card ${currentStep === 1 ? 'wide-card' : ''}`}>
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}
