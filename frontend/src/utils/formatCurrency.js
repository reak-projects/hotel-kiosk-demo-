// ============================================
// Format currency values
// ============================================

import { KIOSK_CONFIG } from '../data/constants';

/**
 * Format a number as currency string
 * @param {number} amount - The amount to format
 * @param {string} [currencySymbol] - Currency symbol override
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount, currencySymbol = KIOSK_CONFIG.currencySymbol) {
  if (typeof amount !== 'number' || isNaN(amount)) return `${currencySymbol}0.00`;
  return `${currencySymbol}${amount.toFixed(2)}`;
}

/**
 * Format a number as compact currency (no decimals if whole)
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrencyCompact(amount) {
  const sym = KIOSK_CONFIG.currencySymbol;
  if (typeof amount !== 'number' || isNaN(amount)) return `${sym}0`;
  return amount % 1 === 0 ? `${sym}${amount}` : `${sym}${amount.toFixed(2)}`;
}
