import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStepNavigation } from '../../hooks/useStepNavigation';
import { useKiosk } from '../../context/KioskContext';
import { CHECKIN_RESERVATION_STEPS } from '../../data/constants';
import StepIndicator from '../../components/common/StepIndicator';
import BackButton from '../../components/common/BackButton';
import ReservationBooking from './steps/ReservationBooking';
import ReviewReservation from './steps/ReviewReservation';
import IDScan from '../CheckIn/steps/IDScan';
import IDValidation from './steps/IDValidation';
import Payment from '../CheckIn/steps/Payment';
import RoomConfirmationStep from '../CheckIn/steps/RoomConfirmation';
import IssueKey from '../CheckIn/steps/IssueKey';
import ThankYou from '../CheckIn/steps/ThankYou';

export default function CheckInReservation() {
  const navigate = useNavigate();
  const { endSession } = useKiosk();
  const { currentStep, totalSteps, goNext, goBack, goToStep } = useStepNavigation(CHECKIN_RESERVATION_STEPS.length);
  const [lookupFailed, setLookupFailed] = useState(false);
  const [idValidationFailed, setIdValidationFailed] = useState(false);

  const handleBack = () => {
    if (currentStep === 1) {
      endSession();
      navigate('/');
    } else {
      goBack();
    }
  };

  const handleLookupResult = (found) => {
    if (found) {
      setLookupFailed(false);
      goNext();
      return;
    }
    setLookupFailed(true);
  };

  const handleIdValidation = (valid) => {
    if (valid) {
      setIdValidationFailed(false);
      goNext();
      return;
    }
    setIdValidationFailed(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ReservationBooking
            onBack={handleBack}
            onResult={handleLookupResult}
            lookupFailed={lookupFailed}
            onRetry={() => setLookupFailed(false)}
          />
        );
      case 2:
        return <ReviewReservation onNext={goNext} onBack={goBack} />;
      case 3:
        return <IDScan onNext={goNext} onBack={goBack} />;
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
      {currentStep < 7 && (
        <div className="w-full max-w-5xl mb-4">
          <BackButton onClick={handleBack} />
        </div>
      )}

      {currentStep < 7 && (
        <StepIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          steps={CHECKIN_RESERVATION_STEPS}
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
