// ============================================
// Form validators
// ============================================

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  if (!email) return false;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

/**
 * Validate mobile number (10-15 digits)
 * @param {string} mobile
 * @returns {boolean}
 */
export function isValidMobile(mobile) {
  if (!mobile) return false;
  const pattern = /^\+?[\d\s-]{10,15}$/;
  return pattern.test(mobile.replace(/\s/g, ''));
}

/**
 * Validate non-empty string
 * @param {string} value
 * @returns {boolean}
 */
export function isRequired(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Validate booking ID format (e.g. BK123456)
 * @param {string} bookingId
 * @returns {boolean}
 */
export function isValidBookingId(bookingId) {
  if (!bookingId) return false;
  const pattern = /^[A-Z]{2}\d{4,10}$/i;
  return pattern.test(bookingId.trim());
}

/**
 * Validate ID number (alphanumeric, 6-20 chars)
 * @param {string} idNumber
 * @returns {boolean}
 */
export function isValidIdNumber(idNumber) {
  if (!idNumber) return false;
  return idNumber.trim().length >= 6 && idNumber.trim().length <= 20;
}

/**
 * Validate guest info form
 * @param {object} guestInfo
 * @returns {{ valid: boolean, errors: object }}
 */
export function validateGuestInfo(guestInfo) {
  const errors = {};

  if (!isRequired(guestInfo.fullName)) errors.fullName = 'Full name is required';
  if (!isValidMobile(guestInfo.mobile)) errors.mobile = 'Valid mobile number is required';
  if (!isValidEmail(guestInfo.email)) errors.email = 'Valid email address is required';
  if (!isRequired(guestInfo.nationality)) errors.nationality = 'Nationality is required';
  if (!isRequired(guestInfo.idType)) errors.idType = 'ID type is required';
  if (!isValidIdNumber(guestInfo.idNumber)) errors.idNumber = 'Valid ID number is required';

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
