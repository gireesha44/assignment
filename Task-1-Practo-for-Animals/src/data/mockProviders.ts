import { Provider } from '../types';

export const MOCK_PROVIDERS: Provider[] = [
  {
    id: 'prov-1',
    name: 'Apex Veterinary Multispecialty & Trauma Centre',
    tagline: 'State-of-the-art emergency surgical suites & round-the-clock ICU care.',
    category: 'animal-hospital',
    categoryLabel: 'Emergency Hospital',
    isVerified: true,
    rating: 4.9,
    reviewCount: 382,
    address: 'Plot 42, Health Boulevard, Indiranagar',
    area: 'Indiranagar',
    city: 'Bengaluru',
    distanceKm: 1.8,
    operatingHours: {
      isOpenNow: true,
      displayHours: 'Open 24 Hours / 7 Days',
      is24x7: true,
    },
    hasEmergency24x7: true,
    hasHomeVisit: false,
    priceLevel: 'premium',
    priceEstimate: '₹750 - ₹2,500 consultation',
    phone: '+91 80 4912 3300',
    emergencyPhone: '+91 80 4912 3399 (24/7 Hotline)',
    email: 'care@apexvetmultispecialty.com',
    website: 'https://apexvetmultispecialty.demo',
    imageUrl: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
    ],
    animalsTreated: ['Dogs', 'Cats', 'Birds', 'Small Mammals'],
    servicesOffered: [
      '24/7 Trauma & Triage',
      'Orthopedic Surgery',
      'Oxygen Therapy ICU',
      'Digital Radiography',
      'Blood Transfusions',
      'Intensive Monitoring'
    ],
    equipmentAndFacilities: [
      'Dedicated Pet Surgical OT',
      'Siemens 32-Slice CT Scanner',
      'Canine ICU Isolation Ward',
      'In-house Blood Bank',
      'Centralized Medical Oxygen'
    ],
    accreditations: [
      'State Veterinary Council Registered #KA-8941',
      'ISO 9001:2015 Clinical Quality Certified',
      'Verified 24/7 Trauma Level 1'
    ],
    doctors: [
      {
        name: 'Dr. Shalini Ramanathan',
        role: 'Chief Veterinary Surgeon',
        qualification: 'BVSc & AH, MVSc (Surgery & Radiology)',
        experienceYears: 16,
        avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Dr. Michael D\'Souza',
        role: 'Emergency & Critical Care Specialist',
        qualification: 'BVSc, Diplomate ACVECC Affiliate',
        experienceYears: 11,
        avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80'
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Arunav Sengupta',
        petInfo: 'Leo (Golden Retriever, 4yo)',
        rating: 5,
        date: '3 days ago',
        comment: 'Leo had sudden gastric torsion at 2 AM. Dr. Michael and the trauma team stabilized him within 12 minutes and performed successful surgery. Forever grateful for this hospital.',
        verifiedOwner: true,
        treatmentType: 'Emergency Surgery'
      },
      {
        id: 'rev-2',
        author: 'Priya Nambiar',
        petInfo: 'Coco (Indie Dog, 2yo)',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Extremely clean surgical units, transparent pricing breakdown before any procedure, and genuinely compassionate attendants.',
        verifiedOwner: true,
        treatmentType: 'Orthopedic Fracture Repair'
      }
    ],
    featured: true
  },
  {
    id: 'prov-2',
    name: 'Meadowbrook Pet Wellness & Dental Clinic',
    tagline: 'Gentle, preventive veterinary care and painless dental diagnostics.',
    category: 'veterinary-clinic',
    categoryLabel: 'Veterinary Clinic',
    isVerified: true,
    rating: 4.8,
    reviewCount: 247,
    address: '14, 7th Main, Koramangala 4th Block',
    area: 'Koramangala',
    city: 'Bengaluru',
    distanceKm: 2.4,
    operatingHours: {
      isOpenNow: true,
      displayHours: '09:00 AM – 08:30 PM (Daily)',
      is24x7: false,
    },
    hasEmergency24x7: false,
    hasHomeVisit: true,
    priceLevel: 'moderate',
    priceEstimate: '₹450 - ₹1,200 consultation',
    phone: '+91 80 2553 8811',
    emergencyPhone: '+91 98451 99220',
    email: 'hello@meadowbrookvet.in',
    website: 'https://meadowbrookvet.demo',
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80'
    ],
    animalsTreated: ['Dogs', 'Cats', 'Birds', 'Small Mammals'],
    servicesOffered: [
      'Preventive Health Checkups',
      'Ultrasonic Dental Scaling',
      'Vaccinations & Microchipping',
      'Dermatology & Allergy Testing',
      'Home Visit OPD',
      'Puppy/Kitten Nutritional Plans'
    ],
    equipmentAndFacilities: [
      'Piezo Ultrasonic Dental Scaler',
      'Digital Otoscope for Ear Checks',
      'Dedicated Cat-Only Waiting Corner',
      'Automated Vaccine Cold-Chain'
    ],
    accreditations: [
      'Registered with Karnataka Veterinary Council #KA-4102',
      'Certified Fear-Free Veterinary Practice Protocol'
    ],
    doctors: [
      {
        name: 'Dr. Aditi Mukherjee',
        role: 'Senior Veterinary Physician',
        qualification: 'BVSc & AH, PG Diploma Companion Animal Dentistry',
        experienceYears: 12,
        avatarUrl: 'https://images.unsplash.com/photo-1594824813576-62b80041cf5e?auto=format&fit=crop&w=300&q=80'
      }
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Rohan Deshmukh',
        petInfo: 'Bella (Persian Cat, 3yo)',
        rating: 5,
        date: '1 week ago',
        comment: 'My cat usually gets frantic at clinics. Dr. Aditi was exceptionally soothing, and the cat-only quiet section made a massive difference.',
        verifiedOwner: true,
        treatmentType: 'Dental Scaling & Checkup'
      }
    ]
  },
  {
    id: 'prov-3',
    name: 'Canine & Feline Rapid Animal Ambulance Corps',
    tagline: 'Dispatched in minutes with onboard oxygen, trauma paramedic & hydraulic stretcher.',
    category: 'animal-ambulance',
    categoryLabel: 'Animal Ambulance',
    isVerified: true,
    rating: 4.9,
    reviewCount: 194,
    address: 'Central Transit Depot, Old Airport Road',
    area: 'Domlur',
    city: 'Bengaluru',
    distanceKm: 3.1,
    operatingHours: {
      isOpenNow: true,
      displayHours: '24/7 Instant Dispatch',
      is24x7: true,
    },
    hasEmergency24x7: true,
    hasHomeVisit: true,
    priceLevel: 'moderate',
    priceEstimate: '₹800 base + ₹35/km transit',
    phone: '+91 80 4000 9119',
    emergencyPhone: '+91 80 4000 9119 (Toll-Free Dispatch)',
    email: 'dispatch@rapidanimalambulance.org',
    imageUrl: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80'
    ],
    animalsTreated: ['Dogs', 'Cats', 'Birds', 'Small Mammals', 'Equine & Farm'],
    servicesOffered: [
      '24/7 Mobile Oxygen Supply',
      'Trauma & Crash Scene Extraction',
      'Critical Inpatient Inter-Hospital Transfer',
      'Hydraulic Stretcher Transport',
      'Onboard Shock Management'
    ],
    equipmentAndFacilities: [
      'Custom HVAC Air Suspension Vans',
      'Mobile Vital Signs ECG Monitor',
      'Pet Spinal Immobilization Boards',
      'Pediatric & Giant Breed Stretcher Rigs'
    ],
    accreditations: [
      'Dept of Transport Certified Emergency Vehicle Fleet',
      'Certified Veterinary Paramedic Responders'
    ],
    doctors: [
      {
        name: 'Paramedic Raghavendra Rao',
        role: 'Head of Mobile Response Operations',
        qualification: 'Certified Animal Emergency Responder (CAER)',
        experienceYears: 9,
        avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80'
      }
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'Siddharth V.',
        petInfo: 'Rocky (Rottweiler, 6yo)',
        rating: 5,
        date: '5 days ago',
        comment: 'Rocky collapsed on the porch after heatstroke. The ambulance reached our house in 14 minutes with chilled saline and oxygen. They saved his life on the road.',
        verifiedOwner: true,
        treatmentType: 'Critical Transit Support'
      }
    ],
    featured: true
  },
  {
    id: 'prov-4',
    name: 'The Pet Haven Resort & Medical Boarding',
    tagline: 'Luxury climate-controlled suites with on-premise veterinary supervision.',
    category: 'pet-boarding',
    categoryLabel: 'Pet Boarding & Daycare',
    isVerified: true,
    rating: 4.7,
    reviewCount: 165,
    address: 'Survey 88, Sarjapur-Marathahalli Link Road',
    area: 'Sarjapur Road',
    city: 'Bengaluru',
    distanceKm: 4.5,
    operatingHours: {
      isOpenNow: true,
      displayHours: '07:30 AM – 09:00 PM (Daily)',
      is24x7: false,
    },
    hasEmergency24x7: false,
    hasHomeVisit: false,
    priceLevel: 'moderate',
    priceEstimate: '₹900 - ₹1,800 per night',
    phone: '+91 80 6712 4455',
    email: 'bookings@pethavenresort.in',
    website: 'https://pethavenresort.demo',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80'
    ],
    animalsTreated: ['Dogs', 'Cats'],
    servicesOffered: [
      '24/7 CCTV Parent Video Access',
      'Post-Operative Medical Boarding',
      'Administering Timed Medications',
      'Agility & Swimming Pool Play',
      'Custom Dietary Prep (Raw & Cooked)',
      'Grooming & Spa on Checkout'
    ],
    equipmentAndFacilities: [
      '3-Acre Green Grass Playgrounds',
      'Filtered Heated Canine Splash Pool',
      'Independent Quarantine Suites',
      'Resident Full-time Veterinary Nurse'
    ],
    accreditations: [
      'International Boarding & Pet Services Assoc. (IBPSA) Standard',
      'Mandatory Vaccination & Tick-Free Verification Gate'
    ],
    doctors: [
      {
        name: 'Dr. Vivek Menon',
        role: 'Resident Wellness Consultant',
        qualification: 'BVSc & AH',
        experienceYears: 7,
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
      }
    ],
    reviews: [
      {
        id: 'rev-5',
        author: 'Ananya Sharma',
        petInfo: 'Milo & Cookie (Beagles)',
        rating: 5,
        date: '1 month ago',
        comment: 'Left my beagles here for 8 days while traveling abroad. The live CCTV streams gave me total peace of mind, and the dogs were healthy and happy when picked up.',
        verifiedOwner: true,
        treatmentType: 'Medical Boarding'
      }
    ]
  },
  {
    id: 'prov-5',
    name: 'Precision VetPath & Advanced Imaging Centre',
    tagline: 'Comprehensive clinical pathology, ultrasound doppler & digital high-res radiology.',
    category: 'diagnostics-labs',
    categoryLabel: 'Diagnostics & Labs',
    isVerified: true,
    rating: 4.9,
    reviewCount: 210,
    address: '92, Ring Road, BTM Layout 2nd Stage',
    area: 'BTM Layout',
    city: 'Bengaluru',
    distanceKm: 3.8,
    operatingHours: {
      isOpenNow: true,
      displayHours: '08:00 AM – 09:30 PM (Daily)',
      is24x7: false,
    },
    hasEmergency24x7: false,
    hasHomeVisit: true,
    priceLevel: 'moderate',
    priceEstimate: '₹400 - ₹3,200 depending on panel',
    phone: '+91 80 4110 5522',
    email: 'reports@precisionvetpath.com',
    website: 'https://precisionvetpath.demo',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
    ],
    animalsTreated: ['Dogs', 'Cats', 'Birds', 'Small Mammals', 'Equine & Farm', 'Exotic Pets'],
    servicesOffered: [
      'Complete Blood Count (CBC 5-part)',
      'Liver & Kidney Function Profiles',
      'Digital Radiography (X-Ray)',
      'High-Resolution Abdominal Ultrasound',
      'Tick Fever PCR Panels',
      'Home Sample Collection'
    ],
    equipmentAndFacilities: [
      'Mindray BC-5000 Vet Hematology Analyzer',
      'GE Logiq E10 Ultrasound Machine',
      'Fuji Prima-T2 Computed Radiography',
      'Biosafety Level 2 Pathology Suite'
    ],
    accreditations: [
      'National Laboratory Quality Certified for Veterinary Diagnostics',
      'Same-Day Digital PDF Reporting Delivery'
    ],
    doctors: [
      {
        name: 'Dr. Keerthi Varma',
        role: 'Consultant Veterinary Pathologist',
        qualification: 'MVSc (Veterinary Pathology)',
        experienceYears: 14,
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
      }
    ],
    reviews: [
      {
        id: 'rev-6',
        author: 'Deepak Joshi',
        petInfo: 'Bruno (Labrador, 8yo)',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Ultrasound report and blood work were shared in just 90 minutes. Clear digital reports that our consulting surgeon could open immediately.',
        verifiedOwner: true,
        treatmentType: 'Abdominal Ultrasound & CBC'
      }
    ]
  },
  {
    id: 'prov-6',
    name: 'PawsOfHope Rescue & Community Wildlife Shelter',
    tagline: 'Dedicated non-profit sanctuary for injured strays, ABC surgeries and welfare rehabilitation.',
    category: 'welfare-ngo',
    categoryLabel: 'Animal Welfare NGO',
    isVerified: true,
    rating: 4.9,
    reviewCount: 520,
    address: 'Survey 12, Bannerghatta Foothills Road',
    area: 'Bannerghatta',
    city: 'Bengaluru',
    distanceKm: 7.2,
    operatingHours: {
      isOpenNow: true,
      displayHours: '09:00 AM – 06:00 PM (Rescue Intake 24/7)',
      is24x7: true,
    },
    hasEmergency24x7: true,
    hasHomeVisit: false,
    priceLevel: 'subsidized-free',
    priceEstimate: 'Subsidized / Free for Community Strays',
    phone: '+91 80 2977 1010',
    emergencyPhone: '+91 99000 88711 (Stray Rescue Helpline)',
    email: 'rescue@pawsofhopeindia.org',
    website: 'https://pawsofhopeindia.demo',
    imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9977?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80'
    ],
    animalsTreated: ['Dogs', 'Cats', 'Birds', 'Equine & Farm'],
    servicesOffered: [
      'Community Stray Rescue Hotline',
      'Subsidized Sterilization (ABC) Drives',
      'Rabies Eradication Vaccinations',
      'Orphaned Pup & Kitten Nursing',
      'Compassionate Adoption Matchmaking',
      'Wildlife First-Contact Stabilization'
    ],
    equipmentAndFacilities: [
      'Recovery Kennels for 120+ Animals',
      'Sterilization OT Suite',
      'Parvovirus & Distemper Isolation Ward',
      'Mobility Wheelchair Rehab Yard'
    ],
    accreditations: [
      'Registered Section 8 Non-Profit (80G Tax Exempt)',
      'Animal Welfare Board of India (AWBI) Recognized'
    ],
    doctors: [
      {
        name: 'Dr. Santosh Kumar',
        role: 'Shelter Medical Director',
        qualification: 'BVSc & AH, Wildlife Medicine Fellow',
        experienceYears: 15,
        avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80'
      }
    ],
    reviews: [
      {
        id: 'rev-7',
        author: 'Malini Rao',
        petInfo: 'Rescued Stray Puppy',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Found a 2-month puppy with severe mange and a fractured leg on Outer Ring Road. PawsOfHope took him in with zero hesitation, treated him, and he has now found a forever home.',
        verifiedOwner: true,
        treatmentType: 'Stray Rescue & Surgery'
      }
    ]
  },
  {
    id: 'prov-7',
    name: 'Urban Paws Cat & Small Animal Clinic',
    tagline: 'Boutique feline-friendly practice tailored specifically for cats, birds and small pets.',
    category: 'veterinary-clinic',
    categoryLabel: 'Veterinary Clinic',
    isVerified: true,
    rating: 4.8,
    reviewCount: 142,
    address: '22, 100ft Road, Defence Colony, Indiranagar',
    area: 'Indiranagar',
    city: 'Bengaluru',
    distanceKm: 1.2,
    operatingHours: {
      isOpenNow: true,
      displayHours: '10:00 AM – 07:30 PM (Closed Wednesdays)',
      is24x7: false,
    },
    hasEmergency24x7: false,
    hasHomeVisit: true,
    priceLevel: 'moderate',
    priceEstimate: '₹600 - ₹1,500 consultation',
    phone: '+91 80 4123 7744',
    email: 'hello@urbanpaws.demo',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80'
    ],
    animalsTreated: ['Cats', 'Birds', 'Small Mammals', 'Exotic Pets'],
    servicesOffered: [
      'Feline Internal Medicine',
      'Cat-Only Waiting Lounge (Bark-Free)',
      'Avian & Parrot Health Checks',
      'Rabbit & Guinea Pig Dental Floating',
      'Senior Cat Kidney Health Management'
    ],
    equipmentAndFacilities: [
      'Low-Stress Feline Examination Tables',
      'Avian Micro-anesthesia Vaporizers',
      'In-house Diagnostic Point-of-Care'
    ],
    accreditations: [
      'International Society of Feline Medicine (ISFM) Gold Standard Clinic'
    ],
    doctors: [
      {
        name: 'Dr. Tarun Chawla',
        role: 'Feline & Exotic Pet Specialist',
        qualification: 'BVSc, ISFM Advanced Feline Behaviour',
        experienceYears: 8,
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
      }
    ],
    reviews: [
      {
        id: 'rev-8',
        author: 'Sumantha Sen',
        petInfo: 'Oliver (British Shorthair, 4yo)',
        rating: 5,
        date: '1 month ago',
        comment: 'No barking dogs, pheromone diffusers in the waiting area, and doctors who truly understand cat psychology. Oliver did not hiss once!',
        verifiedOwner: true,
        treatmentType: 'Routine Renal Profile'
      }
    ]
  },
  {
    id: 'prov-8',
    name: 'St. Jude Companion Animal Critical Care Hospital',
    tagline: 'Premier 24/7 tertiary veterinary hospital with advanced neuro-surgery & dialysis.',
    category: 'animal-hospital',
    categoryLabel: 'Emergency Hospital',
    isVerified: true,
    rating: 4.8,
    reviewCount: 312,
    address: '88, HAL 2nd Stage, Domlur',
    area: 'Domlur',
    city: 'Bengaluru',
    distanceKm: 2.9,
    operatingHours: {
      isOpenNow: true,
      displayHours: 'Open 24/7 (Emergency & IPD)',
      is24x7: true,
    },
    hasEmergency24x7: true,
    hasHomeVisit: false,
    priceLevel: 'premium',
    priceEstimate: '₹800 - ₹3,000 consultation',
    phone: '+91 80 4888 1122',
    emergencyPhone: '+91 80 4888 9999 (Trauma Helpline)',
    email: 'emergency@stjudehospital.demo',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80'
    ],
    animalsTreated: ['Dogs', 'Cats'],
    servicesOffered: [
      '24/7 Emergency Triage & Resuscitation',
      'Canine Hemodialysis Unit',
      'Neuro-Spinal Decompression Surgery',
      'Intensive Ventilator Support',
      'Post-Operative Recovery Ward'
    ],
    equipmentAndFacilities: [
      'Fresenius Veterinary Dialysis Station',
      'Philips Digital Multi-Lead Monitors',
      'Negative-Pressure Infection Control'
    ],
    accreditations: [
      'Board of Veterinary Emergency & Critical Care Affiliate',
      'National Bio-Safety Certified'
    ],
    doctors: [
      {
        name: 'Dr. Harish Kulkarni',
        role: 'Director of Surgery & Critical Care',
        qualification: 'BVSc, MVSc, Fellow Veterinary Critical Care',
        experienceYears: 18,
        avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80'
      }
    ],
    reviews: [
      {
        id: 'rev-9',
        author: 'Kavita Sundaram',
        petInfo: 'Oscar (Shih Tzu, 5yo)',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Oscar was in septic shock due to acute pancreatitis. St. Jude’s critical care team saved his life over a 4-day ICU stay. The doctors gave hourly phone updates.',
        verifiedOwner: true,
        treatmentType: 'Septic Shock Management'
      }
    ]
  },
  {
    id: 'prov-9',
    name: 'BlueCross Compassion & ABC Foundation',
    tagline: 'Pioneering animal welfare, subsidized clinic, and community dog vaccination drives.',
    category: 'welfare-ngo',
    categoryLabel: 'Animal Welfare NGO',
    isVerified: true,
    rating: 4.7,
    reviewCount: 430,
    address: 'Near Old Toll Gate, Mysore Road',
    area: 'Mysore Road',
    city: 'Bengaluru',
    distanceKm: 6.8,
    operatingHours: {
      isOpenNow: true,
      displayHours: '09:00 AM – 05:30 PM (Mon-Sat)',
      is24x7: false,
    },
    hasEmergency24x7: false,
    hasHomeVisit: false,
    priceLevel: 'subsidized-free',
    priceEstimate: 'Free for Community Animals / Low-cost for Indies',
    phone: '+91 80 2670 4433',
    email: 'info@bluecrosscommunity.org',
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80'
    ],
    animalsTreated: ['Dogs', 'Cats', 'Equine & Farm'],
    servicesOffered: [
      'Subsidized Dog & Cat Sterilizations',
      'Free Anti-Rabies Vaccine (ARV) Drives',
      'Equine Cart Horse Free Medical Camps',
      'Humane Education & School Programs',
      'Lost & Found Pet Reunification'
    ],
    equipmentAndFacilities: [
      'High-Throughput Sterilization Theater',
      'Post-Operative Recovery Kennels',
      'Equine Treatment Yard'
    ],
    accreditations: [
      'Recognized by Animal Welfare Board of India',
      'Registered Charitable Trust under 12A/80G'
    ],
    doctors: [
      {
        name: 'Dr. Girish N.',
        role: 'Chief Welfare Officer',
        qualification: 'BVSc & AH',
        experienceYears: 13,
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
      }
    ],
    reviews: [
      {
        id: 'rev-10',
        author: 'Sneha Patel',
        petInfo: 'Community Stray Pack (6 dogs)',
        rating: 5,
        date: '3 weeks ago',
        comment: 'BlueCross safely neutered and vaccinated our entire colony pack. They tagged them cleanly and returned them promptly after 4 days of care.',
        verifiedOwner: true,
        treatmentType: 'Sterilization & Anti-Rabies'
      }
    ]
  },
  {
    id: 'prov-10',
    name: 'VetLab Express Molecular & Micro-Diagnostics',
    tagline: 'Rapid RT-PCR, blood gas analysis, and doorstep biological specimen collection.',
    category: 'diagnostics-labs',
    categoryLabel: 'Diagnostics & Labs',
    isVerified: false,
    rating: 4.6,
    reviewCount: 88,
    address: '5th Cross, HSR Layout Sector 1',
    area: 'HSR Layout',
    city: 'Bengaluru',
    distanceKm: 5.1,
    operatingHours: {
      isOpenNow: true,
      displayHours: '07:30 AM – 08:00 PM (Daily)',
      is24x7: false,
    },
    hasEmergency24x7: false,
    hasHomeVisit: true,
    priceLevel: 'budget',
    priceEstimate: '₹300 - ₹2,200',
    phone: '+91 80 4399 2211',
    email: 'lab@vetlabexpress.demo',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80'
    ],
    animalsTreated: ['Dogs', 'Cats', 'Birds'],
    servicesOffered: [
      'Home Blood & Urine Collection',
      'Parvovirus / Distemper Rapid Antigen',
      'Thyroid & Hormonal Immunoassays',
      'Biopsy & Histopathology Reports',
      'Fungal Culture & Sensitivity'
    ],
    equipmentAndFacilities: [
      'Bio-Rad Thermal Cycler (PCR)',
      'Chemiluminescence Immunoassay Analyzer',
      'Automated Electrolyte Analyzer'
    ],
    accreditations: [
      'Clinical Pathology Verification in Progress'
    ],
    doctors: [
      {
        name: 'Dr. Maya Swaminathan',
        role: 'Veterinary Microbiologist',
        qualification: 'MVSc (Microbiology)',
        experienceYears: 6,
        avatarUrl: 'https://images.unsplash.com/photo-1594824813576-62b80041cf5e?auto=format&fit=crop&w=300&q=80'
      }
    ],
    reviews: [
      {
        id: 'rev-11',
        author: 'Gaurav K.',
        petInfo: 'Toby (Beagle, 2yo)',
        rating: 4,
        date: '1 month ago',
        comment: 'Technician arrived right on time for morning blood draw. Toby barely felt the needle. Report sent via WhatsApp by 3 PM.',
        verifiedOwner: true,
        treatmentType: 'Home Sample Collection'
      }
    ]
  }
];
