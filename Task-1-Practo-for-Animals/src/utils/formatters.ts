import { ServiceCategory, PriceLevel, AnimalType } from '../types';

export const formatCategory = (category: ServiceCategory): string => {
  switch (category) {
    case 'veterinary-clinic':
      return 'Veterinary Clinic';
    case 'animal-hospital':
      return 'Animal Hospital';
    case 'pet-boarding':
      return 'Pet Boarding';
    case 'diagnostics-labs':
      return 'Diagnostics & Labs';
    case 'animal-ambulance':
      return 'Animal Ambulance';
    case 'welfare-ngo':
      return 'Animal Welfare NGO';
    default:
      return 'Animal Care';
  }
};

export const getPriceBadge = (level: PriceLevel): { label: string; bg: string; text: string } => {
  switch (level) {
    case 'subsidized-free':
      return { label: 'Subsidized / Free', bg: 'bg-emerald-50', text: 'text-emerald-700' };
    case 'budget':
      return { label: '₹ Economical', bg: 'bg-blue-50', text: 'text-blue-700' };
    case 'moderate':
      return { label: '₹₹ Standard', bg: 'bg-amber-50', text: 'text-amber-800' };
    case 'premium':
      return { label: '₹₹₹ Tertiary Care', bg: 'bg-purple-50', text: 'text-purple-800' };
  }
};

export const formatDistance = (km: number): string => {
  if (km < 1) {
    return `${Math.round(km * 1000)} m away`;
  }
  return `${km.toFixed(1)} km away`;
};
