export interface VaccinationRecord {
  id: string;
  vaccineName: string;
  targetDisease: string;
  administeredDate: string;
  validUntil: string;
  status: 'valid' | 'due-soon' | 'overdue';
  veterinarian: string;
  batchNumber: string;
  clinic: string;
}

export interface MedicalVisit {
  id: string;
  date: string;
  reason: string;
  diagnosis: string;
  veterinarian: string;
  clinic: string;
  treatmentNotes: string;
  weightKg: number;
  temperatureC: number;
  followUpDate?: string;
}

export interface DiagnosticReport {
  id: string;
  title: string;
  category: 'Blood Panel' | 'Radiology (X-Ray)' | 'Ultrasound' | 'Urinalysis' | 'Cytology';
  date: string;
  labName: string;
  summary: string;
  keyValues: { metric: string; value: string; normalRange: string; status: 'normal' | 'attention' }[];
  fileSize: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  instructions: string;
  prescribedBy: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed';
}

export interface Appointment {
  id: string;
  serviceType: string;
  providerName: string;
  doctorName: string;
  dateTime: string;
  address: string;
  type: 'Clinic Visit' | 'Home Visit' | 'Emergency Check';
  status: 'confirmed' | 'pending';
}

export interface PetProfile {
  id: string;
  name: string;
  species: 'Dog' | 'Cat' | 'Bird';
  breed: string;
  age: string;
  gender: 'Male Neutered' | 'Female Spayed' | 'Male' | 'Female';
  weightKg: number;
  microchipId: string;
  bloodType: string;
  avatarUrl: string;
  allergies: string[];
  insurancePolicyNumber?: string;
  passportId: string;
  vaccinations: VaccinationRecord[];
  medicalVisits: MedicalVisit[];
  diagnostics: DiagnosticReport[];
  medications: Medication[];
  upcomingAppointments: Appointment[];
}

export const MOCK_PET_PROFILES: PetProfile[] = [
  {
    id: 'pet-bruno',
    name: 'Bruno',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: '3 years 4 months',
    gender: 'Male Neutered',
    weightKg: 31.5,
    microchipId: '985141002938471',
    bloodType: 'DEA 1.1 Negative (Universal Donor)',
    avatarUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    allergies: ['Chicken byproduct (mild pruritus)', 'Penicillin'],
    insurancePolicyNumber: 'DIGI-PET-IND-9021',
    passportId: 'PAW-IN-BLR-8921-B',
    vaccinations: [
      {
        id: 'v-1',
        vaccineName: 'DHPPiL (7-in-1 Vanguard Plus)',
        targetDisease: 'Distemper, Hepatitis, Parvovirus, Parainfluenza, Leptospirosis',
        administeredDate: '15 March 2026',
        validUntil: '14 March 2027',
        status: 'valid',
        veterinarian: 'Dr. Shalini Ramanathan',
        batchNumber: 'VNG-9812-B',
        clinic: 'Apex Veterinary Multispecialty'
      },
      {
        id: 'v-2',
        vaccineName: 'Rabies (Defensor 3)',
        targetDisease: 'Rabies Virus',
        administeredDate: '15 March 2026',
        validUntil: '14 March 2027',
        status: 'valid',
        veterinarian: 'Dr. Shalini Ramanathan',
        batchNumber: 'DEF-4410-K',
        clinic: 'Apex Veterinary Multispecialty'
      },
      {
        id: 'v-3',
        vaccineName: 'Bordetella (Kennel Cough Bronchicine)',
        targetDisease: 'Bordetella bronchiseptica (Respiratory)',
        administeredDate: '10 November 2025',
        validUntil: '10 November 2026',
        status: 'due-soon',
        veterinarian: 'Dr. Aditi Mukherjee',
        batchNumber: 'BRN-1029-A',
        clinic: 'Meadowbrook Pet Wellness'
      }
    ],
    medicalVisits: [
      {
        id: 'mv-1',
        date: '28 October 2026',
        reason: 'Annual Comprehensive Geriatric Check & Bloodwork',
        diagnosis: 'Excellent vital parameters; early plaque on lower carnassials.',
        veterinarian: 'Dr. Aditi Mukherjee',
        clinic: 'Meadowbrook Pet Wellness & Dental',
        treatmentNotes: 'Clean ears, clear lungs. Prescribed enzymatic dental paste. Next checkup due in 6 months.',
        weightKg: 31.5,
        temperatureC: 38.4,
        followUpDate: '28 April 2027'
      },
      {
        id: 'mv-2',
        date: '14 August 2026',
        reason: 'Acute Right Ear Head-Shaking',
        diagnosis: 'Mild fungal otitis externa (Malassezia species detected).',
        veterinarian: 'Dr. Michael D\'Souza',
        clinic: 'Apex Veterinary Multispecialty',
        treatmentNotes: 'Deep saline ear flush performed under gentle sedation. Prescribed Posatex drops 7 days.',
        weightKg: 31.8,
        temperatureC: 38.6
      }
    ],
    diagnostics: [
      {
        id: 'diag-1',
        title: 'Comprehensive Companion Blood Profile (CBC + Liver + Kidney)',
        category: 'Blood Panel',
        date: '28 October 2026',
        labName: 'Precision VetPath & Imaging Diagnostics',
        summary: 'All parameters within optimal feline/canine reference thresholds. Excellent renal clearance and liver enzymes.',
        keyValues: [
          { metric: 'WBC (White Blood Count)', value: '8.4 x 10^3/uL', normalRange: '6.0 - 17.0', status: 'normal' },
          { metric: 'Hematocrit (HCT)', value: '45.2 %', normalRange: '37.0 - 55.0', status: 'normal' },
          { metric: 'Serum Creatinine', value: '1.02 mg/dL', normalRange: '0.5 - 1.4', status: 'normal' },
          { metric: 'ALT (Liver Enzyme)', value: '42 U/L', normalRange: '10 - 100', status: 'normal' }
        ],
        fileSize: '1.4 MB (PDF)'
      },
      {
        id: 'diag-2',
        title: 'Right Hip & Pelvic Radiograph (OFA Clearance Screening)',
        category: 'Radiology (X-Ray)',
        date: '15 March 2026',
        labName: 'Apex Veterinary Imaging Suite',
        summary: 'Bilateral coxofemoral joints congruous, Norberg angle > 105 degrees. No osteophytes or dysplasia.',
        keyValues: [
          { metric: 'OFA Grade Estimate', value: 'Excellent Hip Conformation', normalRange: 'Normal', status: 'normal' },
          { metric: 'Subluxation Index', value: '< 0.3', normalRange: '< 0.35', status: 'normal' }
        ],
        fileSize: '4.8 MB (DICOM / High-Res)'
      }
    ],
    medications: [
      {
        id: 'med-1',
        name: 'NexGard Spectra (Afoxolaner + Milbemycin)',
        dosage: '1 chewable tablet (30 - 60 kg)',
        frequency: 'Once monthly',
        instructions: 'Administer with breakfast for heartworm, flea, tick, and intestinal parasite prevention.',
        prescribedBy: 'Dr. Aditi Mukherjee',
        startDate: '01 Nov 2026',
        endDate: 'Ongoing (Refill active)',
        status: 'active'
      },
      {
        id: 'med-2',
        name: 'VetiQ Denti-Care Enzymatic Gel',
        dosage: 'Pea-sized dab',
        frequency: 'Daily bedtime application',
        instructions: 'Apply along upper gum line using soft finger brush.',
        prescribedBy: 'Dr. Aditi Mukherjee',
        startDate: '28 Oct 2026',
        endDate: 'Ongoing',
        status: 'active'
      }
    ],
    upcomingAppointments: [
      {
        id: 'app-1',
        serviceType: 'Bordetella Annual Booster & Tick Exam',
        providerName: 'Meadowbrook Pet Wellness & Dental Clinic',
        doctorName: 'Dr. Aditi Mukherjee',
        dateTime: 'Saturday, 21 Nov 2026 at 11:30 AM',
        address: '14, 7th Main, Koramangala 4th Block',
        type: 'Clinic Visit',
        status: 'confirmed'
      }
    ]
  },
  {
    id: 'pet-milo',
    name: 'Milo',
    species: 'Cat',
    breed: 'Domestic Shorthair (Indie Tabby)',
    age: '1 year 8 months',
    gender: 'Male Neutered',
    weightKg: 4.2,
    microchipId: '985141009182312',
    bloodType: 'Type A (Common Feline)',
    avatarUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    allergies: ['No known drug or environmental allergies'],
    passportId: 'PAW-IN-BLR-4019-M',
    vaccinations: [
      {
        id: 'v-m1',
        vaccineName: 'FVRCP (Nobivac Tricat Trio)',
        targetDisease: 'Feline Panleukopenia, Rhinotracheitis, Calicivirus',
        administeredDate: '04 January 2026',
        validUntil: '03 January 2027',
        status: 'valid',
        veterinarian: 'Dr. Tarun Chawla',
        batchNumber: 'TRIC-9912',
        clinic: 'Urban Paws Cat & Small Animal Clinic'
      },
      {
        id: 'v-m2',
        vaccineName: 'Rabies (Rabisin)',
        targetDisease: 'Feline Rabies',
        administeredDate: '04 January 2026',
        validUntil: '03 January 2027',
        status: 'valid',
        veterinarian: 'Dr. Tarun Chawla',
        batchNumber: 'RAB-8012',
        clinic: 'Urban Paws Cat & Small Animal Clinic'
      }
    ],
    medicalVisits: [
      {
        id: 'mv-m1',
        date: '12 September 2026',
        reason: 'Routine Weight Check & Nail Trim',
        diagnosis: 'Healthy body condition score 5/9. Coat glossy.',
        veterinarian: 'Dr. Tarun Chawla',
        clinic: 'Urban Paws Cat & Small Animal Clinic',
        treatmentNotes: 'Routine trim performed. Hydration levels sound. Advised wet food twice daily.',
        weightKg: 4.2,
        temperatureC: 38.3
      }
    ],
    diagnostics: [
      {
        id: 'diag-m1',
        title: 'FeLV / FIV Rapid Dual Antigen/Antibody Test',
        category: 'Blood Panel',
        date: '04 January 2026',
        labName: 'Urban Paws In-House Point-of-Care Lab',
        summary: 'Negative for both Feline Leukemia Virus (FeLV) and Feline Immunodeficiency Virus (FIV).',
        keyValues: [
          { metric: 'FeLV Antigen', value: 'NEGATIVE', normalRange: 'Negative', status: 'normal' },
          { metric: 'FIV Antibody', value: 'NEGATIVE', normalRange: 'Negative', status: 'normal' }
        ],
        fileSize: '820 KB (PDF)'
      }
    ],
    medications: [
      {
        id: 'med-m1',
        name: 'Revolution Plus Feline (Selamectin + Sarolaner)',
        dosage: '1 pipette (2.8 - 5.5 kg)',
        frequency: 'Monthly topical pipette',
        instructions: 'Apply directly onto skin at base of neck.',
        prescribedBy: 'Dr. Tarun Chawla',
        startDate: '01 Nov 2026',
        endDate: 'Ongoing',
        status: 'active'
      }
    ],
    upcomingAppointments: [
      {
        id: 'app-m1',
        serviceType: 'Annual FVRCP Booster & Dental Exam',
        providerName: 'Urban Paws Cat & Small Animal Clinic',
        doctorName: 'Dr. Tarun Chawla',
        dateTime: 'Saturday, 09 Jan 2027 at 04:00 PM',
        address: '22, 100ft Road, Defence Colony, Indiranagar',
        type: 'Clinic Visit',
        status: 'pending'
      }
    ]
  }
];
