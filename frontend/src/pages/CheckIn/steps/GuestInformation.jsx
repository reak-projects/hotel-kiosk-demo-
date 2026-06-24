// ============================================
// Check-In Step 2 — Guest Information
// ============================================

import React, { useState } from 'react';
import { User, Phone, Mail, Globe, CreditCard, Hash } from 'lucide-react';
import { NATIONALITIES, ID_TYPES } from '../../../data/constants';
import { useKiosk } from '../../../context/KioskContext';
import { validateGuestInfo } from '../../../utils/validators';
import FormInput from '../../../components/ui/FormInput';
import Dropdown from '../../../components/ui/Dropdown';
import Button from '../../../components/ui/Button';

export default function GuestInformation({ onNext, onBack, optionalEmail = false }) {
  const { guestInfo, setGuestInfo } = useKiosk();
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setGuestInfo({ [field]: e.target.value });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    const validationPayload = optionalEmail
      ? { ...guestInfo, email: guestInfo.email || 'optional@guest.local' }
      : guestInfo;
    const { valid, errors: validationErrors } = validateGuestInfo(validationPayload);
    if (valid) {
      onNext();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto gap-6 animate-fade-in">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">
          Guest Information
        </h2>
        <p className="text-lg text-[var(--color-gray-500)]">
          Please fill in your details
        </p>
      </div>

      {/* Form */}
      <div className="w-full grid grid-cols-2 gap-5">
        <FormInput
          label="Full Name"
          value={guestInfo.fullName}
          onChange={handleChange('fullName')}
          placeholder="Enter your full name"
          error={errors.fullName}
          icon={User}
          required
          className="col-span-2"
        />
        <FormInput
          label="Mobile Number"
          type="tel"
          value={guestInfo.mobile}
          onChange={handleChange('mobile')}
          placeholder="+1 234 567 8900"
          error={errors.mobile}
          icon={Phone}
          required
        />
        <FormInput
          label="Email Address"
          type="email"
          value={guestInfo.email}
          onChange={handleChange('email')}
          placeholder={optionalEmail ? 'john@example.com (optional)' : 'john@example.com'}
          error={errors.email}
          icon={Mail}
          required={!optionalEmail}
        />
        <Dropdown
          label="Nationality"
          value={guestInfo.nationality}
          onChange={handleChange('nationality')}
          options={NATIONALITIES}
          placeholder="Select nationality"
          error={errors.nationality}
          required
        />
        <Dropdown
          label="ID Type"
          value={guestInfo.idType}
          onChange={handleChange('idType')}
          options={ID_TYPES.map((t) => ({ value: t.id, label: t.name }))}
          placeholder="Select ID type"
          error={errors.idType}
          required
        />
        <FormInput
          label="ID Number"
          value={guestInfo.idNumber}
          onChange={handleChange('idNumber')}
          placeholder="Enter your ID number"
          error={errors.idNumber}
          icon={Hash}
          required
          className="col-span-2"
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 w-full mt-4">
        <Button variant="ghost" size="md" onClick={onBack}>
          BACK
        </Button>
        <Button variant="primary" size="lg" onClick={handleNext} fullWidth>
          NEXT
        </Button>
      </div>
    </div>
  );
}
