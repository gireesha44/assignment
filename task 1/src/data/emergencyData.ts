export interface EmergencyGuide {
  title: string;
  icon: string;
  urgency: 'CRITICAL - IMMEDIATE' | 'HIGH URGENCY' | 'EVALUATE RAPIDLY';
  symptoms: string[];
  doAction: string;
  dontAction: string;
}

export const EMERGENCY_GUIDES: EmergencyGuide[] = [
  {
    title: 'Severe Trauma / Vehicle Impact',
    icon: 'AlertTriangle',
    urgency: 'CRITICAL - IMMEDIATE',
    symptoms: ['Inability to stand', 'Visible fractures', 'Heavy arterial bleeding', 'Pale or blue gums'],
    doAction: 'Gently slide onto a flat firm board or blanket without twisting the spine. Apply firm pressure with clean cloth over bleeding. Rush to 24/7 trauma centre immediately.',
    dontAction: 'Do not bend limbs, offer food/water, or apply tight tourniquets without medical guidance.'
  },
  {
    title: 'Heatstroke & Severe Hyperthermia',
    icon: 'Thermometer',
    urgency: 'CRITICAL - IMMEDIATE',
    symptoms: ['Excessive panting & drooling', 'Brick-red gums', 'Vomiting/diarrhea', 'Unsteadiness or collapse'],
    doAction: 'Move to air-conditioned area. Apply cool (NOT ICE COLD) tap water to paws, groin, and neck. Fan continuously while en route.',
    dontAction: 'Never immerse in ice water or ice packs (causes vasoconstriction and traps internal heat).'
  },
  {
    title: 'Suspected Toxic Ingestion',
    icon: 'Skull',
    urgency: 'HIGH URGENCY',
    symptoms: ['Chocolate, rat bait, xylitol, lilies (cats)', 'Tremors, salivation, seizures, sudden vomiting'],
    doAction: 'Take a clear photograph of packaging or plant eaten. Note exact quantity and time elapsed. Call emergency vet immediately.',
    dontAction: 'Do not induce vomiting with salt or hydrogen peroxide unless specifically instructed by a veterinary toxicologist.'
  },
  {
    title: 'Choking & Airway Obstruction',
    icon: 'ShieldAlert',
    urgency: 'CRITICAL - IMMEDIATE',
    symptoms: ['Violent coughing', 'Pawing at mouth', 'Blue/purple tongue', 'Inability to breathe in'],
    doAction: 'Open mouth carefully to sweep visible object ONLY if loose and reachable without being bitten. For medium/large dogs, perform modified Heimlich by lifting rear hips.',
    dontAction: 'Do not blind-finger sweep deep in throat as you may push the obstruction further down.'
  }
];

export const EMERGENCY_HOTLINES = [
  {
    label: '24/7 City Animal Ambulance Dispatch',
    number: '+91 80 4000 9119',
    badge: 'Toll-Free Emergency',
    subtext: 'Average response: 15-20 mins with onboard oxygen'
  },
  {
    label: 'Apex Trauma & Surgical ICU Hotline',
    number: '+91 80 4912 3399',
    badge: '24/7 Level 1 Trauma',
    subtext: 'Doctors & surgical teams on-site right now'
  },
  {
    label: 'St. Jude Critical Care Line',
    number: '+91 80 4888 9999',
    badge: '24/7 ICU & Dialysis',
    subtext: 'Equipped for severe medical emergencies'
  },
  {
    label: 'Community Stray Rescue Control',
    number: '+91 99000 88711',
    badge: 'Stray Emergencies',
    subtext: 'Subsidized & welfare emergency intake'
  }
];
