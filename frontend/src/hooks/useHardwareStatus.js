// ============================================
// useHardwareStatus — Polls hardware status
// ============================================

import { useEffect } from 'react';
import { useHardware } from '../context/HardwareContext';
import { getHardwareStatus } from '../services';

/**
 * Hook to periodically poll hardware status.
 * Updates HardwareContext with latest statuses.
 *
 * @param {number} [intervalMs=10000] - Polling interval in ms
 */
export function useHardwareStatus(intervalMs = 10000) {
  const { updateDeviceStatus } = useHardware();

  useEffect(() => {
    const pollStatus = async () => {
      try {
        const status = await getHardwareStatus();
        if (status) {
          Object.entries(status).forEach(([deviceId, online]) => {
            updateDeviceStatus(deviceId, online);
          });
        }
      } catch {
        // Silently fail — hardware bar shows last known state
      }
    };

    pollStatus();
    const interval = setInterval(pollStatus, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs, updateDeviceStatus]);
}

export default useHardwareStatus;
