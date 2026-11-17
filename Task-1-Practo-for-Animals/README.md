# Task 1: Practo for Animals

> **Tagline:** Every Paw Deserves Better Care.  
> **Assignment Focus:** Product Discovery, Clinical Data Architecture & Emergency Triage Experience.

---

## 📌 Project Overview & Problem Statement

Finding verified, reliable healthcare for domestic pets, street rescues, and exotic animals in urban environments is frequently fragmented, inefficient, and fraught with risk:
- **Critical Triage Delays:** During acute medical emergencies (poisoning, trauma, heatstroke, respiratory distress), pet owners lose life-saving minutes attempting to call closed clinics or unequipped day-care facilities.
- **Opacity of Facilities & Credentials:** Pet parents have little visibility into whether a practice possesses dedicated surgical theaters, in-house diagnostics, canine/feline isolation wards, or licensed veterinarians registered with the Veterinary Council of India (VCI).
- **Fragmented Medical History:** Animal health records remain isolated in paper booklets, leading to redundant vaccination shots, forgotten boosters, and missing allergy histories during emergency visits.

**Practo for Animals** is an interactive, clinical-grade animal healthcare discovery prototype. It empowers pet parents and animal welfare volunteers to rapidly search, filter, evaluate, and contact accredited veterinary practices, 24/7 animal trauma hospitals, diagnostic laboratories, mobile ambulances, and welfare NGOs across Bangalore.

---

## 👥 Target Users

1. **Pet Parents & Companion Guardians:**
   - Need reliable routine care (vaccinations, wellness exams, nutritional consults).
   - Require fast discovery of species-specific specialists (birds, cats, small mammals, exotics).
   - Benefit from unified digital health tracking (PawCare Passport).
2. **Animal Rescuers & Community Animal Caretakers:**
   - Need immediate access to 24/7 emergency dispatch and ambulance transport.
   - Require discovery of subsidized Animal Birth Control (ABC) clinics and non-profit shelters.
3. **Veterinary Practitioners & Clinic Administrators:**
   - Seek transparent digital directory presence to communicate verified facility accreditations.
   - Require a dedicated channel for updating operating hours and emergency protocols.

---

## 🚀 Key Implemented Features

### 1. Smart Healthcare Discovery Engine
- **Multi-Field Query Search:** Instant client-side search matching clinic names, treating veterinarians, specialties, procedures, and Bangalore neighborhoods.
- **7 Service Verticals:** Primary Veterinary Clinics, 24/7 Animal Hospitals, Animal Ambulances, Pet Boarding & Medical Daycare, Diagnostic Pathology Labs, and Animal Welfare NGOs.
- **Multi-Constraint Filter Drawer:**
  - Dynamic distance slider (1 km to 20 km radius).
  - 24/7 Emergency-only filter.
  - "Open Now" real-time status filter.
  - Home visit availability toggle.
  - Minimum customer rating threshold (3.0★ to 4.5★+).
  - Price tiers (*Subsidized/Free, Budget, Moderate, Premium*).
  - Multi-select species filter (*Dogs, Cats, Birds, Small Mammals, Exotic Pets, Equine & Farm*).
- **Dynamic Sorting:** Instant reordering by proximity distance, rating, review volume, and estimated consultation cost.

### 2. High-Fidelity Provider Cards & Detail Modals
- **Provider Cards:** High-resolution imagery, verified council badge, distance indicators, live open/closed indicators, rating pill, species treated, service tags, and quick-call triggers.
- **Provider Detail Modal:**
  - Tabbed overview: Clinical specialties, operating hours, and comprehensive address details.
  - Doctors & Credentials: Lead surgeons, qualifications (BVSc, MVSc), and years of clinical practice.
  - Equipment & Diagnostics: In-house digital X-ray, ultrasound, ICU oxygen cages, blood banks.
  - Interactive Care Inquiry: Pre-filled booking request form with companion species selection, symptoms input, and local notification response.
  - Direct Action Triggers: One-click phone calling, emergency hotline dialing, and clipboard link sharing.

### 3. Dedicated 24/7 Emergency Care Center
- **Immediate Triage Triggers:** One-click shortcuts activating pre-filtered views for emergency clinics, ambulance units, or trauma hospitals sorted by proximity.
- **Veterinary First-Aid Protocol Cards:** Expandable emergency guidance for common life-threatening scenarios:
  - *Trauma & Active Bleeding*
  - *Heatstroke & Hyperthermia*
  - *Toxic Ingestion & Poisoning*
  - *Choking & Airway Obstruction*

### 4. PawCare Passport (Signature Feature)
- **Unified Companion Health Ledger:** Interactive simulation of a digital animal health record.
- **Multi-Pet Switcher:** Switch between active profiles (e.g., *Bruno — Golden Retriever*, *Milo — Indie Tabby Cat*).
- **5 Comprehensive Ledger Tabs:**
  - *Vaccinations:* Vaccine names, lot/batch numbers, administered dates, and due dates.
  - *Medical Visits:* Date, clinic, primary vet, vitals (weight, temperature), diagnosis, and doctor notes.
  - *Diagnostic Reports:* CBC blood panels, reference ranges, and lab status.
  - *Active Medications:* Dosage schedules, duration, and instructions.
  - *Upcoming Schedule:* Scheduled boosters and annual dental checkups.
- **Digital Health Card Modal:** Collar QR-code simulation and printable record layout.

### 5. Provider Onboarding & Data Governance
- **"List Your Business" Workflow:** Complete multi-step modal allowing care providers to submit new clinic details, licensure numbers, facilities, and services into the local state.
- **Community Data Correction Form:** Crowdsourced reporting tool enabling users to suggest corrections for phone numbers, relocated addresses, or operating hours to keep directory data accurate.
- **Simulated Authentication & Bookmarks:** Role-based sign-in toggle (*Pet Parent* vs *Care Provider*) and bookmarking system for saved providers.

---

## 🛠️ Technology Stack

- **Framework:** React 18 (Functional components, React Hooks)
- **Language:** TypeScript 5 (Strict interface definitions)
- **Bundler:** Vite 5 (Fast HMR and optimized production bundling)
- **Styling:** Tailwind CSS 3 (Custom healthcare tokens, responsive layout, grid systems)
- **Iconography:** Lucide React
- **Animations:** Framer Motion (Smooth drawer transitions, modal backdrops, micro-interactions)

---

## 📂 Architecture & Component Structure

```
Task-1-Practo-for-Animals/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── src/
    ├── App.tsx                     # Main application container, state coordination
    ├── main.tsx                    # React DOM root entry point
    ├── index.css                   # Tailwind directives and custom scrollbars
    ├── types/
    │   └── index.ts                # TypeScript domain models (Provider, Filter, etc.)
    ├── data/
    │   ├── mockProviders.ts        # Comprehensive catalog of mock providers in Bangalore
    │   ├── categories.ts           # Service vertical definitions and metadata
    │   ├── emergencyData.ts        # Emergency protocols and first-aid guidelines
    │   └── passportMock.ts         # Sample health record data for PawCare Passport
    ├── utils/
    │   └── formatters.ts           # String, distance, and badge format utilities
    └── components/
        ├── layout/                 # Navbar, Footer
        ├── hero/                   # HeroSection with quick search and location simulation
        ├── services/               # QuickServices category grid
        ├── discovery/              # SmartDiscovery, ProviderCard, ProviderModal, FilterDrawer, SavedDrawer
        ├── passport/               # PawCarePassport, DigitalHealthCardModal
        ├── emergency/              # EmergencySection and first aid cards
        ├── providers/              # ForProvidersSection, ListBusinessModal, CorrectionModal
        ├── auth/                   # AuthModal (simulated role login)
        ├── trust/                  # TrustSection (verification framework overview)
        └── common/                 # ToastContainer, Badges
```

---

## ⚙️ Installation & Running Locally

Navigate to the project directory:

```bash
cd Task-1-Practo-for-Animals
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🔍 Implementation Transparency & Disclosures

To ensure absolute academic and professional honesty:

| Feature Category | Current Implementation Status | Notes |
| :--- | :--- | :--- |
| **Search & Filtering** | ✅ **Fully Implemented** | Executes in-memory across the provider catalog with instant multi-facet combination. |
| **Provider Cards & Modals** | ✅ **Fully Implemented** | Full modal inspections, tab switching, and care inquiry forms are functional. |
| **PawCare Passport** | ✅ **Fully Implemented** | Interactive frontend simulation demonstrating multi-pet health ledger and records. |
| **Business Onboarding** | ✅ **Fully Implemented (Frontend)** | Form validation adds newly submitted practices directly to the local active state. |
| **Provider Dataset** | 🔶 **Mock / Simulated Data** | Listings represent realistic mock facilities in Bangalore with `.demo` URLs and sample phone numbers. |
| **Authentication** | 🔶 **Simulated Client State** | Mock modal sets local active user state (`Pet Parent` / `Care Provider`) without backend tokens. |
| **Council Verification** | 🔷 **Design Proposal** | The 3-Tier Verification Framework represents the proposed production specification; real-world VCI database integration is a future phase. |

---

## 🚀 Limitations & Future Improvements

1. **Persistent Backend:** Integrate PostgreSQL via Supabase or Node.js to persist community listings and pet passport records across sessions.
2. **GPS Geolocation & Mapping:** Replace simulated distance calculation with Google Maps / Mapbox API geocoding and real-time transit routing.
3. **Teleconsultation Integration:** Add WebRTC video consultation for remote triage and post-op follow-ups.
4. **Verified Council API:** Connect directly to State Veterinary Council registries for real-time license verification.
