# Practo for Animals
> **Tagline:** Every Paw Deserves Better Care.

A venture-backed health-tech discovery platform connecting pet owners, animal rescuers, and certified animal-care providers across routine OPDs, 24/7 surgical hospitals, diagnostics, mobile animal ambulances, medical boarding, and welfare NGOs.

---

## 🎨 Design Philosophy & Brand Tokens

The interface is engineered to evoke clinical trust, warmth, and high-velocity clarity akin to world-class human digital health platforms (Practo, Doctolib, Zocdoc), designed specifically for companion animals:

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Deep Forest Green** | `#153D35` | Authority, primary brand identity, navigation header, editorial titles |
| **Primary Green** | `#23866B` | Actionable buttons, verified badges, active states |
| **Soft Mint** | `#E7F4EC` | Interactive highlights, light tags, subtle section contrast |
| **Warm Ivory** | `#FAF9F5` | Calming clinical canvas, card containers, gentle background |
| **Dark Charcoal** | `#202A27` | High-contrast editorial typography and body text |
| **Coral Accent** | `#F28C75` | 24/7 emergency indicators, urgent care dispatch, trauma badges |

---

## 🚀 Key Functional Modules

1. **Sticky Adaptive Navigation Bar:**
   - Brand logo with medical paw mark.
   - Smooth navigation: *Discover Care*, *Services*, *PawCare Passport*, *Emergency Care*, *For Providers*, *About Us*.
   - Quick CTAs: *Sign In (Mock Auth)*, *List Your Business (Free)*, and *Saved Bookmarks*.
   - Responsive mobile drawer navigation.

2. **Hero & Smart Search Interface:**
   - Editorial headline: *"Because Their Health Matters Just As Much."*
   - Interactive search bar with category dropdown, auto-detect location simulation, and primary CTA search triggers.
   - Authentic veterinary clinical photography and floating verified partner cards.

3. **6 Core Service Verticals:**
   - Veterinary Clinics (Primary Care & routine OPD)
   - Emergency Hospitals (24/7 Critical Care & Surgery)
   - Pet Boarding & Daycare (Supervised stay & post-op recovery)
   - Diagnostics & Labs (Rapid pathology, X-Ray, ultrasound)
   - Animal Ambulance (Mobile oxygen & trauma extraction)
   - Animal Welfare NGOs (Stray rescue, subsidized ABC sterilization)

4. **Smart Discovery Engine:**
   - Live query searching across clinic name, area, doctor, and medical services.
   - Full-featured filter drawer: Proximity distance slider, 24/7 emergency toggle, Open now toggle, Home visit toggle, Minimum rating, Price range, and species treated (*Dogs, Cats, Birds, Small Mammals, Exotics, Equine*).
   - Sorting by Proximity, Highest Rating, Review Count, and Price.
   - Interactive Provider Cards with verified credentials, distance, ratings, opening hours, quick contact, and bookmarking.
   - Comprehensive Provider Detail Modal: Doctors & specialties, transparent fee schedules, clinical equipment/OTs, verified owner reviews, and care appointment inquiry form.

5. **PawCare Passport (Signature Feature):**
   - Interactive visual demonstration of a unified companion health ledger.
   - Multi-pet profile switcher (*Bruno - Golden Retriever*, *Milo - Indie Tabby Cat*).
   - Real-time tab views: *Vaccinations* with batch numbers, *Medical Visits* with vitals, *Diagnostic Reports* with lab metric reference ranges, *Medications* with active dosages, and *Upcoming Appointments*.
   - Digital Health Card modal with simulated Collar QR code and PDF snapshot export.

6. **Prominent 24/7 Emergency Care Section:**
   - Headline: *"Need Help Right Now?"*
   - Direct emergency dispatch line cards.
   - Instant triage filter triggers for Emergency Vets, Ambulances, and Trauma Hospitals.
   - Veterinary-reviewed pre-transit first aid guides for *Trauma & Bleeding*, *Heatstroke*, *Toxic Ingestion*, and *Choking*.

7. **Provider Onboarding & Data Governance:**
   - "Are you an animal-care provider?" ecosystem section.
   - Functional Business Listing application modal with validation and tracking ID generation.
   - Community Data Correction modal for reporting inaccurate hours, phone numbers, or relocated practices.

8. **Trust & 3-Step Verification Framework:**
   - Tier 1: Clinical Council Licensure & VCI Registration Check.
   - Tier 2: Physical Facility & Emergency Equipment Audit.
   - Tier 3: Unfiltered Pet Parent Community Governance.

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** (lightning-fast build pipeline)
- **Tailwind CSS** (custom color extensions & responsive utilities)
- **Lucide React** (consistent clinical and veterinary iconography)
- **Framer Motion** (deliberate, refined interactive animations)

---

## 💻 Local Development Commands

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Run TypeScript check and production build
npm run build

# Preview production build locally
npm run preview
```
