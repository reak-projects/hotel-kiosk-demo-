# Hotel Self-Service Kiosk Management System

A full-featured touchscreen kiosk application for hotel self-service operations, built with React + Tailwind CSS (frontend) and FastAPI (backend scaffold).

## Architecture

```
hotel-kiosk/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/   # Reusable UI (Button, Card, Header, etc.)
│   │   ├── pages/        # Feature modules (CheckIn, CheckOut, etc.)
│   │   ├── context/      # React Context (KioskContext, HardwareContext)
│   │   ├── hooks/        # Custom hooks (inactivity timer, step navigation)
│   │   ├── services/     # API abstraction (mock ↔ real toggle)
│   │   ├── data/         # Mock data & constants
│   │   ├── utils/        # Formatters & validators
│   │   └── styles/       # Global CSS & design tokens
│   └── ...
└── backend/           # FastAPI (scaffold — ready for implementation)
    ├── app/
    │   ├── api/routes/
    │   ├── models/
    │   ├── services/
    │   └── hardware/
    ├── config/
    ├── tests/
    └── main.py
```

## Modules

| Module | Steps | Description |
|--------|-------|-------------|
| **Check-In** | 7 | Room selection → Guest info → ID scan → Booking → Payment → Confirmation → Thank you |
| **Check-Out** | 6 | Enter booking → Fetch details → Bill summary → Payment → Success → Thank you |
| **Room Extension** | 5 | Select nights → Review charges → Payment → Confirmed → Thank you |
| **Visitor Management** | 5 | Choose option → Registration → ID scan → Visitor pass → Done |
| **Remote Help** | 3 | Select mode → Connecting → Connected |

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The dev server will start at `http://localhost:5173`.

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_USE_MOCK` | `true` | Toggle mock/real API services |

### Backend (Future)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Design System

- **Primary**: Dark Navy `#0D1B2A`
- **Accent**: Gold/Amber `#C9A84C`
- **Font**: Inter
- **Target**: 21.5" touchscreen (1920×1080)
- **Touch targets**: Minimum 80px height

## Key Features

- 🖥️ Touch-first UI with 80px minimum tap targets
- 🔄 Reusable components (PaymentScreen, IDScanScreen, ThankYouScreen)
- ⏱️ 60-second inactivity timeout with countdown modal
- 🔌 Hardware status bar (Internet, Printer, Card Reader, Scanner)
- 🔀 Service abstraction layer (swap mock → real with ENV flag)
- 📱 Session state management via React Context
