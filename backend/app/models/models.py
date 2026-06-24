# ============================================
# Database Models — Rooms, Reservations, Transactions, AuditLogs
# ============================================

from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from ..database import Base

class Room(Base):
    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True, index=True)
    room_number = Column(String, unique=True, index=True, nullable=False)
    room_type = Column(String, nullable=False)  # deluxe, premium, suite
    status = Column(String, default="Available")  # Available, Occupied, Maintenance
    price = Column(Float, nullable=False)

    reservations = relationship("Reservation", back_populates="room")


class Reservation(Base):
    __tablename__ = "reservations"

    id = Column(Integer, primary_key=True, index=True)
    booking_number = Column(String, unique=True, index=True, nullable=False)
    guest_name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    check_in_date = Column(String, nullable=False)
    check_out_date = Column(String, nullable=False)
    status = Column(String, default="Pending")  # Pending, CheckedIn, CheckedOut
    room_id = Column(Integer, ForeignKey("rooms.id"), nullable=True)
    amount_paid = Column(Float, default=0.0)
    total_amount = Column(Float, nullable=False)
    
    # ID Scan data
    id_scanned = Column(Boolean, default=False)
    id_type = Column(String, nullable=True)
    id_number = Column(String, nullable=True)

    room = relationship("Room", back_populates="reservations")


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    booking_number = Column(String, index=True, nullable=False)
    amount = Column(Float, nullable=False)
    payment_method = Column(String, nullable=False)  # credit_card, debit_card, upi, etc.
    status = Column(String, nullable=False)  # Success, Failed
    timestamp = Column(String, default=lambda: datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"))


class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(String, default=lambda: datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"))
    kiosk_id = Column(String, default="KSK-01")
    action = Column(String, nullable=False)  # CHECK_IN, CHECK_OUT, EXTEND_STAY, HELP
    details = Column(String, nullable=False)
