// ============================================
// HardwareStatusBar — Bottom status strip
// ============================================

import React from 'react';
import {
  Wifi,
  Printer,
  CreditCard,
  ScanLine,
  Monitor,
  KeyRound,
  Banknote,
  Camera,
  Volume2,
  QrCode,
} from 'lucide-react';
import { useHardware } from '../../context/HardwareContext';

const iconMap = {
  internet: Wifi,
  touch_display: Monitor,
  id_scanner: ScanLine,
  qr_scanner: QrCode,
  receipt_printer: Printer,
  nfc_reader: CreditCard,
  key_dispenser: KeyRound,
  cash_module: Banknote,
  dual_camera: Camera,
  speakers: Volume2,
};

export default function HardwareStatusBar() {
  const { hardwareStatus } = useHardware();

  return (
    <div
      className="flex items-center justify-center gap-3 px-5 bg-[rgba(0,0,0,0.4)] border-t border-[rgba(201,168,76,0.1)] overflow-x-auto"
      style={{ height: 'var(--hardware-bar-height)' }}
    >
      {Object.values(hardwareStatus).map((device) => {
        const Icon = iconMap[device.id] || Wifi;
        return (
          <div key={device.id} className="flex items-center gap-1.5 whitespace-nowrap">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                device.online
                  ? 'bg-[#22C55E] shadow-[0_0_6px_#22C55E]'
                  : 'bg-[#EF4444] shadow-[0_0_6px_#EF4444]'
              }`}
            />
            <Icon size={11} className="text-[var(--text-secondary)]" />
            <span className="text-[10px] uppercase tracking-[0.08em] text-[var(--text-secondary)]">
              {device.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
