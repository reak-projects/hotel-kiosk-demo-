// ============================================
// KioskContext — Global session state
// ============================================

import React, { createContext, useContext, useReducer, useCallback } from 'react';

const KioskContext = createContext(null);

const initialState = {
  // Language
  language: 'en',

  // Session
  sessionActive: false,
  currentModule: null,

  // Check-in data
  selectedRoom: null,
  guestInfo: {
    fullName: '',
    mobile: '',
    email: '',
    nationality: '',
    idType: '',
    idNumber: '',
  },
  scannedId: null,
  bookingInfo: null,
  paymentStatus: null,
  paymentMethod: null,
  confirmationData: null,

  // Check-out data
  checkoutBookingId: '',
  checkoutSummary: null,
  checkoutPaymentStatus: null,

  // Room extension
  extensionNights: 0,
  extensionCharges: null,

  // Visitor management
  visitorOption: null,
  visitorInfo: {
    visitorName: '',
    mobile: '',
    purpose: '',
    hostRoom: '',
    idType: '',
    idNumber: '',
  },
  visitorPass: null,

  // Remote help
  helpMode: null,
  helpConnected: false,
};

function kioskReducer(state, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };

    case 'START_SESSION':
      return { ...state, sessionActive: true, currentModule: action.payload };

    case 'END_SESSION':
      return { ...initialState, language: state.language };

    case 'SET_SELECTED_ROOM':
      return { ...state, selectedRoom: action.payload };

    case 'SET_GUEST_INFO':
      return { ...state, guestInfo: { ...state.guestInfo, ...action.payload } };

    case 'SET_SCANNED_ID':
      return { ...state, scannedId: action.payload };

    case 'SET_BOOKING_INFO':
      return { ...state, bookingInfo: action.payload };

    case 'SET_PAYMENT_STATUS':
      return { ...state, paymentStatus: action.payload };

    case 'SET_PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };

    case 'SET_CONFIRMATION_DATA':
      return { ...state, confirmationData: action.payload };

    case 'SET_CHECKOUT_BOOKING_ID':
      return { ...state, checkoutBookingId: action.payload };

    case 'SET_CHECKOUT_SUMMARY':
      return { ...state, checkoutSummary: action.payload };

    case 'SET_CHECKOUT_PAYMENT_STATUS':
      return { ...state, checkoutPaymentStatus: action.payload };

    case 'SET_EXTENSION_NIGHTS':
      return { ...state, extensionNights: action.payload };

    case 'SET_EXTENSION_CHARGES':
      return { ...state, extensionCharges: action.payload };

    case 'SET_VISITOR_OPTION':
      return { ...state, visitorOption: action.payload };

    case 'SET_VISITOR_INFO':
      return { ...state, visitorInfo: { ...state.visitorInfo, ...action.payload } };

    case 'SET_VISITOR_PASS':
      return { ...state, visitorPass: action.payload };

    case 'SET_HELP_MODE':
      return { ...state, helpMode: action.payload };

    case 'SET_HELP_CONNECTED':
      return { ...state, helpConnected: action.payload };

    case 'RESET_MODULE':
      return {
        ...state,
        selectedRoom: null,
        guestInfo: initialState.guestInfo,
        scannedId: null,
        bookingInfo: null,
        paymentStatus: null,
        paymentMethod: null,
        confirmationData: null,
        checkoutBookingId: '',
        checkoutSummary: null,
        checkoutPaymentStatus: null,
        extensionNights: 0,
        extensionCharges: null,
        visitorOption: null,
        visitorInfo: initialState.visitorInfo,
        visitorPass: null,
        helpMode: null,
        helpConnected: false,
      };

    default:
      return state;
  }
}

export function KioskProvider({ children }) {
  const [state, dispatch] = useReducer(kioskReducer, initialState);

  const setLanguage = useCallback((lang) => dispatch({ type: 'SET_LANGUAGE', payload: lang }), []);
  const startSession = useCallback((module) => dispatch({ type: 'START_SESSION', payload: module }), []);
  const endSession = useCallback(() => dispatch({ type: 'END_SESSION' }), []);
  const setSelectedRoom = useCallback((room) => dispatch({ type: 'SET_SELECTED_ROOM', payload: room }), []);
  const setGuestInfo = useCallback((info) => dispatch({ type: 'SET_GUEST_INFO', payload: info }), []);
  const setScannedId = useCallback((id) => dispatch({ type: 'SET_SCANNED_ID', payload: id }), []);
  const setBookingInfo = useCallback((info) => dispatch({ type: 'SET_BOOKING_INFO', payload: info }), []);
  const setPaymentStatus = useCallback((status) => dispatch({ type: 'SET_PAYMENT_STATUS', payload: status }), []);
  const setPaymentMethod = useCallback((method) => dispatch({ type: 'SET_PAYMENT_METHOD', payload: method }), []);
  const setConfirmationData = useCallback((data) => dispatch({ type: 'SET_CONFIRMATION_DATA', payload: data }), []);
  const setCheckoutBookingId = useCallback((id) => dispatch({ type: 'SET_CHECKOUT_BOOKING_ID', payload: id }), []);
  const setCheckoutSummary = useCallback((summary) => dispatch({ type: 'SET_CHECKOUT_SUMMARY', payload: summary }), []);
  const setCheckoutPaymentStatus = useCallback((status) => dispatch({ type: 'SET_CHECKOUT_PAYMENT_STATUS', payload: status }), []);
  const setExtensionNights = useCallback((nights) => dispatch({ type: 'SET_EXTENSION_NIGHTS', payload: nights }), []);
  const setExtensionCharges = useCallback((charges) => dispatch({ type: 'SET_EXTENSION_CHARGES', payload: charges }), []);
  const setVisitorOption = useCallback((option) => dispatch({ type: 'SET_VISITOR_OPTION', payload: option }), []);
  const setVisitorInfo = useCallback((info) => dispatch({ type: 'SET_VISITOR_INFO', payload: info }), []);
  const setVisitorPass = useCallback((pass) => dispatch({ type: 'SET_VISITOR_PASS', payload: pass }), []);
  const setHelpMode = useCallback((mode) => dispatch({ type: 'SET_HELP_MODE', payload: mode }), []);
  const setHelpConnected = useCallback((connected) => dispatch({ type: 'SET_HELP_CONNECTED', payload: connected }), []);
  const resetModule = useCallback(() => dispatch({ type: 'RESET_MODULE' }), []);

  const value = {
    ...state,
    dispatch,
    setLanguage,
    startSession,
    endSession,
    setSelectedRoom,
    setGuestInfo,
    setScannedId,
    setBookingInfo,
    setPaymentStatus,
    setPaymentMethod,
    setConfirmationData,
    setCheckoutBookingId,
    setCheckoutSummary,
    setCheckoutPaymentStatus,
    setExtensionNights,
    setExtensionCharges,
    setVisitorOption,
    setVisitorInfo,
    setVisitorPass,
    setHelpMode,
    setHelpConnected,
    resetModule,
  };

  return <KioskContext.Provider value={value}>{children}</KioskContext.Provider>;
}

export function useKiosk() {
  const context = useContext(KioskContext);
  if (!context) {
    throw new Error('useKiosk must be used within a KioskProvider');
  }
  return context;
}

export default KioskContext;
