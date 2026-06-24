// ============================================
// IDScanScreen — Reusable ID scanning UI
// Used in: Check-in, Visitor Management
// ============================================

import React, { useState, useEffect } from 'react';
import { ScanLine, RefreshCw, Check } from 'lucide-react';
import { ID_TYPES } from '../../data/constants';
import { scannedIdMock } from '../../data/mockData';
import { useKiosk } from '../../context/KioskContext';
import Button from '../ui/Button';
import Card from '../ui/Card';
import TabBar from '../ui/TabBar';

export default function IDScanScreen({
  onNext,
  onBack,
  onScanAgain,
}) {
  const { setScannedId } = useKiosk();
  const [scanning, setScanning] = useState(true);
  const [scanned, setScanned] = useState(false);
  const [activeIdType, setActiveIdType] = useState('passport');

  // Auto-simulate scan after 2 seconds
  useEffect(() => {
    if (scanning) {
      const timer = setTimeout(() => {
        setScanning(false);
        setScanned(true);
        setScannedId(scannedIdMock);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [scanning, setScannedId]);

  const handleScanAgain = () => {
    setScanned(false);
    setScanning(true);
    if (onScanAgain) onScanAgain();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto gap-6 animate-fade-in">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[var(--color-gray-900)]">
        {scanned ? 'ID Scanned Successfully' : 'Please Scan Your ID'}
      </h2>

      {/* ID Type tabs */}
      <TabBar
        tabs={ID_TYPES.map((t) => ({ id: t.id, label: t.name }))}
        activeTab={activeIdType}
        onTabChange={setActiveIdType}
        className="w-full"
      />

      {/* Scan area or scanned result */}
      {!scanned ? (
        <div className="relative w-full max-w-md aspect-[4/3] bg-[var(--color-gray-100)] border-2 border-dashed border-[var(--color-gray-300)] rounded-2xl overflow-hidden flex items-center justify-center">
          {/* Scanning animation */}
          {scanning && (
            <div
              className="absolute left-0 right-0 h-1 bg-[var(--color-gold)] animate-scan-line shadow-[0_0_15px_var(--color-gold)]"
            />
          )}
          <div className="text-center z-10">
            <ScanLine size={64} className="text-[var(--color-gray-400)] mx-auto mb-4" />
            <p className="text-lg font-medium text-[var(--color-gray-500)]">
              {scanning ? 'Scanning...' : 'Place your ID on the scanner'}
            </p>
          </div>
          {/* Corner marks */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-3 border-l-3 border-[var(--color-gold)] rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-3 border-r-3 border-[var(--color-gold)] rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-3 border-l-3 border-[var(--color-gold)] rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-3 border-r-3 border-[var(--color-gold)] rounded-br-lg" />
        </div>
      ) : (
        <Card variant="gold" className="w-full max-w-md animate-scale-in">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--color-success-light)] flex items-center justify-center flex-shrink-0">
              <Check size={24} className="text-[var(--color-success)]" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-[var(--color-gray-500)] uppercase tracking-wide">Name</p>
                  <p className="text-base font-semibold">{scannedIdMock.name}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-gray-500)] uppercase tracking-wide">Passport No</p>
                  <p className="text-base font-semibold">{scannedIdMock.documentNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-gray-500)] uppercase tracking-wide">Nationality</p>
                  <p className="text-base font-semibold">{scannedIdMock.nationality}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-gray-500)] uppercase tracking-wide">Date of Birth</p>
                  <p className="text-base font-semibold">{scannedIdMock.dateOfBirth}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-gray-500)] uppercase tracking-wide">Expiry Date</p>
                  <p className="text-base font-semibold">{scannedIdMock.expiryDate}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Action buttons */}
      <div className="flex items-center gap-4 w-full max-w-md">
        <Button variant="ghost" size="md" onClick={onBack}>
          BACK
        </Button>
        {scanned && (
          <Button variant="outline" size="md" onClick={handleScanAgain} icon={RefreshCw}>
            SCAN AGAIN
          </Button>
        )}
        <Button
          variant="primary"
          size="md"
          onClick={onNext}
          disabled={!scanned}
          fullWidth
        >
          NEXT
        </Button>
      </div>
    </div>
  );
}
