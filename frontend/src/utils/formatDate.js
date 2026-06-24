// ============================================
// Date formatting utilities
// ============================================

/**
 * Format a Date object to "DD MMM YYYY" (e.g. "20 May 2024")
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(date) {
  if (!(date instanceof Date) || isNaN(date)) return '';
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

/**
 * Format a Date object to "HH:MM AM/PM"
 * @param {Date} date
 * @returns {string}
 */
export function formatTime(date) {
  if (!(date instanceof Date) || isNaN(date)) return '';
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

/**
 * Format a Date to full datetime string
 * @param {Date} date
 * @returns {string}
 */
export function formatDateTime(date) {
  return `${formatDate(date)}, ${formatTime(date)}`;
}

/**
 * Add days to a date and return new Date
 * @param {Date} date
 * @param {number} days
 * @returns {Date}
 */
export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Get today's date formatted
 * @returns {string}
 */
export function getFormattedToday() {
  return formatDate(new Date());
}
