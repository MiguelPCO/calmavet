export type Role = 'ADMIN' | 'VET' | 'OWNER';
export type AppointmentStatus = 'PENDING' | 'ASSIGNED' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'ISSUE';

export interface User {
  id: string; // auth.users ID
  role: Role;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface Pet {
  id: string;
  ownerId: string;
  name: string;
  species: 'DOG' | 'CAT' | 'OTHER';
  breed?: string;
  ageYears?: number;
  weightKg?: number;
  medicalHistory?: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  basePrice: number;
  durationMinutes: number;
  isEndOfLifeProtocol: boolean;
  isActive: boolean;
}

export interface Zone {
  id: string;
  name: string;
  postalCodes: string[];
  isActive: boolean;
}

export interface Appointment {
  id: string;
  ownerId: string;
  petId: string;
  vetId?: string;
  serviceId: string;
  zoneId: string;
  status: AppointmentStatus;
  scheduledAt: Date;
  address: string;
  accessInstructions?: string;
  tutorNotes?: string;
  vetNotes?: string;
  priceTotal: number;
  advancePaymentId?: string;
  createdAt: Date;
}
