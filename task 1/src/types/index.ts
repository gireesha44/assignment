export type ServiceCategory = 
  | 'veterinary-clinic'
  | 'animal-hospital'
  | 'pet-boarding'
  | 'diagnostics-labs'
  | 'animal-ambulance'
  | 'welfare-ngo';

export type AnimalType = 
  | 'Dogs'
  | 'Cats'
  | 'Birds'
  | 'Small Mammals'
  | 'Exotic Pets'
  | 'Equine & Farm';

export type PriceLevel = 'budget' | 'moderate' | 'premium' | 'subsidized-free';

export interface DoctorOrStaff {
  name: string;
  role: string;
  qualification: string;
  experienceYears: number;
  avatarUrl: string;
}

export interface Review {
  id: string;
  author: string;
  petInfo: string;
  rating: number;
  date: string;
  comment: string;
  verifiedOwner: boolean;
  treatmentType?: string;
}

export interface Provider {
  id: string;
  name: string;
  tagline: string;
  category: ServiceCategory;
  categoryLabel: string;
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  address: string;
  area: string;
  city: string;
  distanceKm: number;
  operatingHours: {
    isOpenNow: boolean;
    displayHours: string;
    is24x7: boolean;
  };
  hasEmergency24x7: boolean;
  hasHomeVisit: boolean;
  priceLevel: PriceLevel;
  priceEstimate: string;
  phone: string;
  emergencyPhone?: string;
  email: string;
  website?: string;
  imageUrl: string;
  galleryImages: string[];
  animalsTreated: AnimalType[];
  servicesOffered: string[];
  equipmentAndFacilities: string[];
  accreditations: string[];
  doctors: DoctorOrStaff[];
  reviews: Review[];
  featured?: boolean;
}

export interface FilterState {
  searchQuery: string;
  category: ServiceCategory | 'all';
  location: string;
  maxDistanceKm: number;
  openNowOnly: boolean;
  emergencyOnly: boolean;
  homeVisitOnly: boolean;
  minRating: number;
  priceLevel: PriceLevel | 'all';
  selectedAnimals: AnimalType[];
  sortBy: 'distance' | 'rating' | 'reviews' | 'price-asc';
}

export interface BusinessListingSubmission {
  orgName: string;
  category: ServiceCategory;
  location: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  hasEmergency: boolean;
  hasHomeVisit: boolean;
  servicesOffered: string[];
  animalsTreated: AnimalType[];
  licenseNumber: string;
  notes?: string;
}

export interface CorrectionSubmission {
  providerId: string;
  providerName: string;
  reportedField: string;
  suggestedCorrection: string;
  reporterContact: string;
  supportingProof?: string;
}
