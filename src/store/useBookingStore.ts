import { create } from 'zustand';
import { AppointmentStatus, Role } from '@/types/database.types';

interface BookingData {
  postalCode?: string;
  petId?: string;
  serviceId?: string;
  reason?: string;
  scheduledAt?: string;
  address?: string;
  accessInstructions?: string;
  tutorNotes?: string;
  ownerInfo?: {
    name: string;
    email: string;
    phone: string;
  };
}

interface BookingState {
  step: number;
  isEndOfLife: boolean;
  bookingData: BookingData;
  
  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setEndOfLife: (isEOL: boolean) => void;
  updateBookingData: (data: Partial<BookingData>) => void;
  resetBooking: () => void;
}

const INITIAL_BOOKING_DATA: BookingData = {};

export const useBookingStore = create<BookingState>((set) => ({
  step: 1,
  isEndOfLife: false,
  bookingData: INITIAL_BOOKING_DATA,

  setStep: (step) => set({ step }),
  
  nextStep: () => set((state) => ({ 
    step: Math.min(state.step + 1, 8) 
  })),
  
  prevStep: () => set((state) => ({ 
    step: Math.max(state.step - 1, 1) 
  })),

  setEndOfLife: (isEOL) => set({ isEndOfLife: isEOL }),

  updateBookingData: (data) => set((state) => ({
    bookingData: { ...state.bookingData, ...data }
  })),

  resetBooking: () => set({ 
    step: 1, 
    isEndOfLife: false, 
    bookingData: INITIAL_BOOKING_DATA 
  }),
}));
