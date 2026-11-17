import { ServiceCategory } from '../types';

export interface CategoryInfo {
  id: ServiceCategory;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  badgeText: string;
  count: number;
  highlightColor: string;
  bannerBg: string;
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'veterinary-clinic',
    name: 'Veterinary Clinics',
    tagline: 'Routine & specialized OPD',
    description: 'Wellness checkups, vaccinations, dental care, dermatology, and general health examinations.',
    iconName: 'Stethoscope',
    badgeText: 'Primary Care',
    count: 24,
    highlightColor: '#23866B',
    bannerBg: 'bg-emerald-50'
  },
  {
    id: 'animal-hospital',
    name: 'Emergency Hospitals',
    tagline: '24/7 Critical care & surgery',
    description: 'Full-service inpatient ICU, orthopedic surgery, oxygen cages, and round-the-clock emergency doctors.',
    iconName: 'Hospital',
    badgeText: '24/7 Emergency',
    count: 14,
    highlightColor: '#F28C75',
    bannerBg: 'bg-rose-50'
  },
  {
    id: 'pet-boarding',
    name: 'Pet Boarding & Daycare',
    tagline: 'Supervised stay & play',
    description: 'Temperature-controlled suites, daily exercise routines, medical administration, and live CCTV feeds.',
    iconName: 'Home',
    badgeText: 'Comfort & Stay',
    count: 18,
    highlightColor: '#153D35',
    bannerBg: 'bg-teal-50'
  },
  {
    id: 'diagnostics-labs',
    name: 'Diagnostics & Labs',
    tagline: 'Rapid pathology & imaging',
    description: 'Digital X-Rays, high-frequency ultrasounds, hematology, biochemistry panels, and same-day PCR reports.',
    iconName: 'Activity',
    badgeText: 'Advanced Imaging',
    count: 11,
    highlightColor: '#23866B',
    bannerBg: 'bg-cyan-50'
  },
  {
    id: 'animal-ambulance',
    name: 'Animal Ambulance',
    tagline: 'Rapid transit & on-site stabilization',
    description: 'Equipped emergency response vans with oxygen support, hydraulic stretchers, and certified animal paramedics.',
    iconName: 'Ambulance',
    badgeText: 'Urgent Transit',
    count: 7,
    highlightColor: '#F28C75',
    bannerBg: 'bg-amber-50'
  },
  {
    id: 'welfare-ngo',
    name: 'Animal Welfare NGOs',
    tagline: 'Rescue, rehabilitation & adoptions',
    description: 'Community stray rescues, free or subsidized treatments, animal birth control (ABC), and shelter adoption drives.',
    iconName: 'HeartHandshake',
    badgeText: 'Community Impact',
    count: 15,
    highlightColor: '#153D35',
    bannerBg: 'bg-green-50'
  }
];
