import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepNavigation } from '../../hooks/useStepNavigation';
import { useKiosk } from '../../context/KioskContext';
import { VISITOR_STEPS } from '../../data/constants';
import StepIndicator from '../../components/common/StepIndicator';
import BackButton from '../../components/common/BackButton';
import VisitorOption from './steps/VisitorOption';
import VisitorRegistration from './steps/VisitorRegistration';
import IDScan from '../CheckIn/steps/IDScan';
import VisitorPass from './steps/VisitorPass';
import ThankYouScreen from '../../components/common/ThankYouScreen';

export default function VisitorManagement() {
  const navigate = useNavigate();
  const { endSession } = useKiosk();
  const { currentStep, totalSteps, goNext, goBack } = useStepNavigation(VISITOR_STEPS.length);

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
        return <VisitorOption onNext={goNext} onBack={handleBack} />;
      case 2:
        return <VisitorRegistration onNext={goNext} onBack={goBack} />;
      case 3:
        return <IDScan onNext={goNext} onBack={goBack} />;
      case 4:
        return <VisitorPass onNext={goNext} onBack={goBack} />;
      case 5:
        return (
          <ThankYouScreen
            title="Visitor Pass Ready"
            subtitle="Please proceed to the reception desk if you need further assistance."
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="module-shell">
      {currentStep < 5 && (
        <div className="w-full max-w-5xl mb-4">
          <BackButton onClick={handleBack} />
        </div>
      )}

      {currentStep < 5 && (
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          steps={VISITOR_STEPS}
          className="mb-8"
        />
      )}

      <div className="w-full flex-1 flex items-center justify-center" key={currentStep}>
        <div className="animate-slide-in-right w-full flex justify-center">
          <div className="module-content-card">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}
