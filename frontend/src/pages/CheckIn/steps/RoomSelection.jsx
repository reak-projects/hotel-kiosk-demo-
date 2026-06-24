// ============================================
// Check-In Step 1 — Room Selection
// ============================================

import React from 'react';
import { roomTypes } from '../../../data/mockData';
import { useKiosk } from '../../../context/KioskContext';
import { formatCurrency } from '../../../utils/formatCurrency';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import { Bed, Wifi, Coffee, Eye } from 'lucide-react';

const amenityIcons = { 'King Bed': Bed, 'Wi-Fi': Wifi, 'Mini Bar': Coffee, 'City View': Eye };

export default function RoomSelection({ onNext, onBack, mode = 'room' }) {
  const { selectedRoom, setSelectedRoom } = useKiosk();
  const isTypeMode = mode === 'type';

  const handleSelect = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto gap-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[var(--color-gray-900)] mb-2">
          {isTypeMode ? 'Select Room Type' : 'Select Your Room'}
        </h2>
        <p className="text-lg text-[var(--color-gray-500)]">
          {isTypeMode ? 'Choose your preferred room category' : 'Available rooms are displayed below'}
        </p>
      </div>

      {/* Room cards */}
      <div className="grid grid-cols-3 gap-8 w-full">
        {roomTypes.map((room) => {
          const isSelected = selectedRoom?.id === room.id;
          return (
            <Card
              key={room.id}
              variant={isSelected ? 'selected' : 'default'}
              hoverable
              onClick={() => handleSelect(room)}
              className="flex flex-col cursor-pointer overflow-hidden p-0"
            >
              {/* Image placeholder */}
              <div className={`h-40 w-full flex items-center justify-center ${
                room.id === 'deluxe' ? 'bg-gradient-to-br from-blue-100 to-blue-200' :
                room.id === 'premium' ? 'bg-gradient-to-br from-purple-100 to-purple-200' :
                'bg-gradient-to-br from-amber-100 to-amber-200'
              }`}>
                <Bed size={48} className={`${
                  room.id === 'deluxe' ? 'text-blue-400' :
                  room.id === 'premium' ? 'text-purple-400' :
                  'text-amber-400'
                }`} />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-[var(--color-gray-900)]">{room.name}</h3>
                  <Badge variant="success" dot>{room.available} available</Badge>
                </div>

                <p className="text-sm text-[var(--color-gray-500)]">{room.description}</p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {room.amenities.map((a) => (
                    <span key={a} className="text-xs px-2 py-1 rounded-md bg-[var(--color-gray-100)] text-[var(--color-gray-600)]">
                      {a}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-[var(--color-gray-100)]">
                  <span className="text-2xl font-bold text-[var(--text-gold)]">
                    {formatCurrency(room.price)}
                  </span>
                  <span className="text-sm text-[var(--color-gray-400)]"> / night</span>
                </div>

                <Button
                  variant={isSelected ? 'primary' : 'outline'}
                  size="md"
                  fullWidth
                  onClick={(e) => { e.stopPropagation(); handleSelect(room); }}
                >
                  {isSelected ? '✓ SELECTED' : isTypeMode ? 'CHOOSE TYPE' : 'SELECT ROOM'}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 w-full max-w-md">
        <Button variant="ghost" size="md" onClick={onBack}>
          BACK
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={onNext}
          disabled={!selectedRoom}
          fullWidth
        >
          NEXT
        </Button>
      </div>
    </div>
  );
}
