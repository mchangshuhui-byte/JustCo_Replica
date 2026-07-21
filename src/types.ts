export interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
  tagline: string;
  pricing: string;
  features: string[];
}

export interface WorkspaceLocation {
  id: string;
  name: string;
  country: string;
  city: string;
  address: string;
  image: string;
  metroAccess: string;
  amenities: string[];
  capacity: string;
}

export interface TeamLeader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface TourBooking {
  id: string;
  name: string;
  email: string;
  company: string;
  teamSize: number;
  workspaceType: string;
  country: string;
  locationId: string;
  date: string;
  timeSlot: string;
}
