// ============================================
// Check-Out Module — Step Orchestrator
// ============================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepNavigation } from '../../hooks/useStepNavigation';
import { useKiosk } from '../../context/KioskContext';
import { CHECKOUT_STEPS } from '../../data/constants';
import StepIndicator from '../../components/common/StepIndicator';
import BackButton from '../../components/common/BackButton';
import EnterBooking from './steps/EnterBooking';
import FetchDetails from './steps/FetchDetails';
import CheckOutSummary from './steps/CheckOutSummary';
import Payment from './steps/Payment';
import PaymentSuccess from './steps/PaymentSuccess';
import ThankYou from './steps/ThankYou';
import InvalidateKey from './steps/InvalidateKey';

export default function CheckOut() {
  const navigate = useNavigate();
  const { endSession } = useKiosk();
  const { currentStep, totalSteps, goNext, goBack } = useStepNavigation(CHECKOUT_STEPS.length);

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
        return <EnterBooking onNext={goNext} onBack={handleBack} />;
      case 2:
        return <FetchDetails onNext={goNext} onBack={goBack} />;
      case 3:
        return <CheckOutSummary onNext={goNext} onBack={goBack} />;
      case 4:
        return <Payment onNext={goNext} onBack={goBack} />;
      case 5:
        return <PaymentSuccess onNext={goNext} />;
      case 6:
        return <InvalidateKey onNext={goNext} onBack={goBack} />;
      case 7:
        return <ThankYou />;
      default:
        return null;
    }
  };

  return (
    <div className="module-shell">
      {currentStep < 7 && (
        <div className="w-full max-w-5xl mb-4">
          <BackButton onClick={handleBack} />
        </div>
      )}

      {currentStep < 7 && (
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          steps={CHECKOUT_STEPS}
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
