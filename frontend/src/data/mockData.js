// ============================================
// Hotel Kiosk — Mock Data
// All static/mock data in one place
// ============================================

export const roomTypes = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 120,
    perNight: true,
    available: 10,
    description: 'Spacious room with city view, king-size bed, and modern amenities.',
    amenities: ['King Bed', 'City View', 'Wi-Fi', 'Mini Bar'],
    image: '/rooms/deluxe.jpg',
  },
  {
    id: 'premium',
    name: 'Premium Room',
    price: 180,
    perNight: true,
    available: 8,
    description: 'Premium room with balcony, premium toiletries, and lounge access.',
    amenities: ['King Bed', 'Balcony', 'Lounge Access', 'Premium Toiletries'],
    image: '/rooms/premium.jpg',
  },
  {
    id: 'suite',
    name: 'Suite',
    price: 250,
    perNight: true,
    available: 5,
    description: 'Luxurious suite with separate living area, jacuzzi, and panoramic views.',
    amenities: ['King Bed', 'Living Area', 'Jacuzzi', 'Panoramic View'],
    image: '/rooms/suite.jpg',
  },
];

export const scannedIdMock = {
  name: 'John Smith',
  documentNumber: 'P1234567',
  nationality: 'United States',
  dateOfBirth: '01/01/1990',
  expiryDate: '01/01/2030',
  idType: 'Passport',
  photo: null,
};

export const bookingConfirmation = {
  roomNumber: '208',
  roomType: 'Deluxe Room',
  checkIn: '20 May 2024',
  checkOut: '22 May 2024',
  nights: 2,
  totalAmount: 150.00,
  bookingId: 'BK123456',
  guestName: 'John Smith',
};

export const checkoutBillItems = [
  { label: 'Room Charges (2 nights × $150)', amount: 300.00 },
  { label: 'Service Charges', amount: 30.00 },
  { label: 'Food & Beverages', amount: 45.00 },
  { label: 'Laundry', amount: 15.00 },
  { label: 'Taxes (GST 18%)', amount: 36.00 },
];

export const checkoutSummary = {
  roomNumber: '208',
  roomType: 'Deluxe Room',
  guestName: 'John Smith',
  checkIn: '20 May 2024',
  checkOut: '22 May 2024',
  nights: 2,
  billItems: checkoutBillItems,
  totalAmount: 426.00,
};

export const paymentTransaction = {
  transactionId: 'TXN1234567890',
  paidAmount: 426.00,
  method: 'Credit Card',
  timestamp: '20 May 2024, 02:30 PM',
  status: 'Success',
};

export const visitorPassData = {
  visitorName: 'Michael Brown',
  hostRoom: '208',
  hostName: 'John Smith',
  date: '20 May 2024',
  validTill: '08:00 PM',
  passId: 'VP-2024-0042',
  purpose: 'Business Meeting',
};

export const agentInfo = {
  name: 'Sarah Wilson',
  role: 'Guest Relations Executive',
  avatar: null,
  employeeId: 'EMP-042',
};

export const stayDetails = {
  roomNumber: '208',
  roomType: 'Deluxe Room',
  guestName: 'John Smith',
  checkIn: '20 May 2024',
  checkOut: '22 May 2024',
  ratePerNight: 150.00,
  nights: 2,
};

export const extensionRates = {
  deluxe: 120,
  premium: 180,
  suite: 250,
};
