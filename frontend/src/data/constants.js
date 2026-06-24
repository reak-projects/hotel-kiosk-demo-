// ============================================
// Hotel Kiosk — Constants
// All enums, configs, and static lists
// ============================================

export const KIOSK_CONFIG = {
  kioskId: 'KSK-01',
  hotelName: 'Grand Horizon Hotel',
  hotelTagline: 'Experience comfort and elegance at your fingertips',
  inactivityTimeout: 120, // seconds
  countdownDuration: 10, // seconds
  currency: 'USD',
  currencySymbol: '$',
  displayResolution: '1920x1080',
  displaySizeInches: 21.5,
  touchPoints: 10,
};

export const KIOSK_MACHINE_SPECS = {
  cabinet: 'Cold rolling steel sheet with security lock',
  cpu: 'Intel Core i5-5200U 2.2G',
  ram: '4 GB',
  storage: '128 GB SSD',
  display: '21.5-inch capacitive touch panel (10 points)',
  scanners: 'Passport/ID OCR + QR/1D/2D barcode scanner',
  payment: 'NFC reader + cash circulation module',
  peripherals: 'Receipt printer, key card dispenser, dual-lens camera, speakers',
};

export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export const PAYMENT_METHODS = [
  { id: 'credit_card', name: 'Credit Card', icon: 'CreditCard' },
  { id: 'debit_card', name: 'Debit Card', icon: 'Wallet' },
  { id: 'upi', name: 'UPI / QR Code', icon: 'QrCode' },
  { id: 'net_banking', name: 'Net Banking', icon: 'Globe' },
  { id: 'wallet', name: 'Wallet', icon: 'Smartphone' },
  { id: 'cash', name: 'Cash', icon: 'Banknote' },
];

export const ID_TYPES = [
  { id: 'passport', name: 'Passport' },
  { id: 'aadhaar', name: 'Aadhaar' },
  { id: 'driving_license', name: 'Driving License' },
  { id: 'other', name: 'Other ID' },
];

export const NATIONALITIES = [
  'United States',
  'India',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'China',
  'Brazil',
  'Saudi Arabia',
  'UAE',
  'Singapore',
  'South Korea',
  'Other',
];

export const VISIT_PURPOSES = [
  'Business Meeting',
  'Personal Visit',
  'Delivery',
  'Maintenance',
  'Interview',
  'Event',
  'Other',
];

export const HARDWARE_DEVICES = [
  { id: 'internet', name: 'Internet', icon: 'Wifi' },
  { id: 'touch_display', name: '21.5" Touch Display', icon: 'Monitor' },
  { id: 'id_scanner', name: 'Passport/ID Scanner', icon: 'ScanLine' },
  { id: 'qr_scanner', name: 'QR Scanner', icon: 'QrCode' },
  { id: 'receipt_printer', name: 'Receipt Printer', icon: 'Printer' },
  { id: 'nfc_reader', name: 'NFC Reader', icon: 'CreditCard' },
  { id: 'key_dispenser', name: 'Room Key Dispenser', icon: 'KeyRound' },
  { id: 'cash_module', name: 'Cash Circulation', icon: 'Banknote' },
  { id: 'dual_camera', name: 'Dual Camera', icon: 'Camera' },
  { id: 'speakers', name: 'Dual Speakers', icon: 'Volume2' },
];

export const CHECKIN_STEPS = [
  { id: 1, label: 'Room Type' },
  { id: 2, label: 'ID Scan' },
  { id: 3, label: 'Guest Details' },
  { id: 4, label: 'Payment' },
  { id: 5, label: 'Issue Room' },
  { id: 6, label: 'Print Key' },
  { id: 7, label: 'Complete' },
];

export const CHECKIN_RESERVATION_STEPS = [
  { id: 1, label: 'Booking Info' },
  { id: 2, label: 'Review' },
  { id: 3, label: 'ID Scan' },
  { id: 4, label: 'Payment' },
  { id: 5, label: 'Issue Room' },
  { id: 6, label: 'Print Key' },
  { id: 7, label: 'Complete' },
];

export const CHECKOUT_STEPS = [
  { id: 1, label: 'Enter Booking' },
  { id: 2, label: 'Fetch Details' },
  { id: 3, label: 'Review Bill' },
  { id: 4, label: 'Payment' },
  { id: 5, label: 'Check-out Success' },
  { id: 6, label: 'Invalidate Key' },
  { id: 7, label: 'Goodbye' },
];

export const EXTENSION_STEPS = [
  { id: 1, label: 'Identify Room' },
  { id: 2, label: 'Select Nights' },
  { id: 3, label: 'Review Charges' },
  { id: 4, label: 'Payment' },
  { id: 5, label: 'Confirmed' },
  { id: 6, label: 'Thank You' },
];

export const VISITOR_STEPS = [
  { id: 1, label: 'Choose Option' },
  { id: 2, label: 'Registration' },
  { id: 3, label: 'ID Scan' },
  { id: 4, label: 'Visitor Pass' },
  { id: 5, label: 'Done' },
];

export const HELP_STEPS = [
  { id: 1, label: 'Select Mode' },
  { id: 2, label: 'Connecting' },
  { id: 3, label: 'Assistance' },
  { id: 4, label: 'Outcome' },
];

export const MENU_ITEMS = [
  {
    id: 'checkin_walkin',
    title: 'CHECK-IN',
    subtitle: 'New arrival check-in',
    icon: 'LogIn',
    path: '/checkin/walkin',
    color: 'gold',
  },
  {
    id: 'checkin_reservation',
    title: 'RESERVATION',
    subtitle: 'Use your booking code',
    icon: 'LogIn',
    path: '/checkin/reservation',
    color: 'gold',
  },
  {
    id: 'checkout',
    title: 'CHECK-OUT',
    subtitle: 'Settle & depart',
    icon: 'LogOut',
    path: '/checkout',
    color: 'gold',
  },
  {
    id: 'extension',
    title: 'EXTEND STAY',
    subtitle: 'Add nights to your stay',
    icon: 'Clock',
    path: '/extension',
    color: 'gold',
  },
  {
    id: 'help',
    title: 'NEED HELP',
    subtitle: 'Connect with our team',
    icon: 'Headset',
    path: '/help',
    color: 'gold',
  },
];

export const BOOKING_SEARCH_TABS = [
  { id: 'booking_id', label: 'Booking ID' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'email', label: 'Email' },
];

export const NIGHT_OPTIONS = [1, 2, 3, 4, 5];

export const VISITOR_OPTIONS = [
  { id: 'new', title: 'New Visitor', subtitle: 'Register a new visitor', icon: 'UserPlus' },
  { id: 'pre_registered', title: 'Pre-Registered Check-In', subtitle: 'Check-in a pre-registered visitor', icon: 'UserCheck' },
  { id: 'checkout_visitor', title: 'Check-Out Visitor', subtitle: 'Check out an existing visitor', icon: 'UserMinus' },
  { id: 'all_visitors', title: 'All Visitors', subtitle: 'View all visitor records', icon: 'Users' },
];

export const HELP_MODES = [
  { id: 'video', title: 'Video Call', subtitle: 'Face-to-face assistance', icon: 'Video' },
  { id: 'voice', title: 'Voice Call', subtitle: 'Speak with our staff', icon: 'Phone' },
  { id: 'chat', title: 'Chat', subtitle: 'Send a message', icon: 'MessageSquare' },
];
