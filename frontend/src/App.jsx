// ============================================
// App.jsx — Main application with routing
// ============================================

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { KioskProvider } from './context/KioskContext';
import { HardwareProvider } from './context/HardwareContext';
import { useInactivityTimer } from './hooks/useInactivityTimer';
import useKioskViewport from './hooks/useKioskViewport';
import useHardwareStatus from './hooks/useHardwareStatus';
import Header from './components/common/Header';
import HardwareStatusBar from './components/common/HardwareStatusBar';
import SessionTimeoutModal from './components/common/SessionTimeoutModal';
import Welcome, { WelcomeBackground } from './pages/Welcome';
import CheckIn from './pages/CheckIn';
import CheckInReservation from './pages/CheckInReservation';
import CheckOut from './pages/CheckOut';
import RoomExtension from './pages/RoomExtension';
import RemoteHelp from './pages/RemoteHelp';
import VisitorManagement from './pages/VisitorManagement';

function AppContent() {
  const { showCountdown, remainingTime, resetTimer } = useInactivityTimer();
  const location = useLocation();
  const isWelcome = location.pathname === '/';
  useKioskViewport();
  useHardwareStatus(7000);

  return (
    <div className="kiosk-stage">
      {isWelcome && <WelcomeBackground />}
      <div className="kiosk-screen flex flex-col">
        {!isWelcome && <Header />}

        <main className="flex-1 overflow-hidden relative">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/checkin/walkin" element={<CheckIn />} />
            <Route path="/checkin/reservation" element={<CheckInReservation />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/extension" element={<RoomExtension />} />
            <Route path="/visitor" element={<VisitorManagement />} />
            <Route path="/help" element={<RemoteHelp />} />
          </Routes>
        </main>

        <HardwareStatusBar />

        <SessionTimeoutModal
          isOpen={showCountdown}
          remainingTime={remainingTime}
          onContinue={resetTimer}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <KioskProvider>
        <HardwareProvider>
          <AppContent />
        </HardwareProvider>
      </KioskProvider>
    </BrowserRouter>
  );
}
