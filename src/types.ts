/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'about' | 'services' | 'industries' | 'leadership' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  description: string;
  longDescription: string;
  keyWorkflows: string[];
  metrics: { label: string; value: string };
  deliverables: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  demandMetric: string;
  keySubsectors: string[];
  engagementModel: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'executive' | 'board' | 'advisor';
  bio: string;
  specialty: string;
  experience: string;
  linkedin: string;
  imageUrl: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  role: string;
  address: string;
  email: string;
  phone: string;
  coordinates: { x: number; y: number }; // Percentage for custom high-fidelity absolute positioning on custom map visual
  isHQ?: boolean;
  mapsLink?: string;
}

export interface ClientTestimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
}
