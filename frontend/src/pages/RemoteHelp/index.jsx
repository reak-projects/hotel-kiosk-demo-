// ============================================
// Remote Help Module — Step Orchestrator
// ============================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepNavigation } from '../../hooks/useStepNavigation';
import { useKiosk } from '../../context/KioskContext';
import { HELP_STEPS } from '../../data/constants';
import BackButton from '../../components/common/BackButton';
import SelectMode from './steps/SelectMode';
import Connecting from './steps/Connecting';
import Connected from './steps/Connected';
import HelpOutcome from './steps/HelpOutcome';

export default function RemoteHelp() {
  const navigate = useNavigate();
  const { endSession } = useKiosk();
  const { currentStep, goNext, goBack } = useStepNavigation(HELP_STEPS.length);
  const [resolved, setResolved] = React.useState(true);

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
      case 1: return <SelectMode onNext={goNext} onBack={handleBack} />;
      case 2: return <Connecting onNext={goNext} />;
      case 3: return <Connected onOutcome={(isResolved) => { setResolved(isResolved); goNext(); }} onBack={handleBack} />;
      case 4: return <HelpOutcome resolved={resolved} />;
      default: return null;
    }
  };

  return (
    <div className="module-shell relative">
      {currentStep === 1 && (
        <div className="absolute top-4 left-4 z-10">
          <BackButton onClick={handleBack} />
        </div>
      )}
      <div className="w-full flex items-center justify-center" key={currentStep}>
        <div className="animate-fade-in w-full flex items-center justify-center">
          <div className="module-content-card">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}
