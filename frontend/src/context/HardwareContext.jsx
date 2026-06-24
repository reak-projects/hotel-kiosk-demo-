// ============================================
// HardwareContext — Hardware status state
// ============================================

import React, { createContext, useContext, useState } from 'react';
import { HARDWARE_DEVICES } from '../data/constants';

const HardwareContext = createContext(null);

const initialHardwareStatus = HARDWARE_DEVICES.reduce((acc, device) => {
  acc[device.id] = { ...device, online: true }; // mock: all online
  return acc;
}, {});

export function HardwareProvider({ children }) {
  const [hardwareStatus, setHardwareStatus] = useState(initialHardwareStatus);

  const updateDeviceStatus = (deviceId, online) => {
    setHardwareStatus((prev) => ({
      ...prev,
      [deviceId]: { ...prev[deviceId], online },
    }));
  };

  const isAllOnline = Object.values(hardwareStatus).every((d) => d.online);

  const value = {
    hardwareStatus,
    updateDeviceStatus,
    isAllOnline,
  };

  return <HardwareContext.Provider value={value}>{children}</HardwareContext.Provider>;
}

export function useHardware() {
  const context = useContext(HardwareContext);
  if (!context) {
    throw new Error('useHardware must be used within a HardwareProvider');
  }
  return context;
}

export default HardwareContext;
