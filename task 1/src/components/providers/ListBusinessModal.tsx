import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { ServiceCategory, AnimalType, BusinessListingSubmission } from '../../types';
import { CATEGORIES_DATA } from '../../data/categories';

interface ListBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (submission: BusinessListingSubmission) => void;
}

const ALL_ANIMALS: AnimalType[] = [
  'Dogs',
  'Cats',
  'Birds',
  'Small Mammals',
  'Exotic Pets',
  'Equine & Farm'
];

export const ListBusinessModal: React.FC<ListBusinessModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [formData, setFormData] = useState<BusinessListingSubmission>({
    orgName: '',
    category: 'veterinary-clinic',
    location: 'Bengaluru',
    address: '',
    phone: '',
    email: '',
    website: '',
    hasEmergency: false,
    hasHomeVisit: false,
    servicesOffered: ['General OPD Consultations', 'Core Vaccinations'],
    animalsTreated: ['Dogs', 'Cats'],
    licenseNumber: '',
    notes: ''
  });

  const [serviceInput, setServiceInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedRefId, setGeneratedRefId] = useState('');

  if (!isOpen) return null;

  const handleToggleAnimal = (animal: AnimalType) => {
    const exists = formData.animalsTreated.includes(animal);
    const updated = exists
      ? formData.animalsTreated.filter((a) => a !== animal)
      : [...formData.animalsTreated, animal];
    setFormData({ ...formData, animalsTreated: updated });
  };

  const handleAddService = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (serviceInput.trim() && !formData.servicesOffered.includes(serviceInput.trim())) {
      setFormData({
        ...formData,
        servicesOffered: [...formData.servicesOffered, serviceInput.trim()]
      });
      setServiceInput('');
    }
  };

  const handleRemoveService = (service: string) => {
    setFormData({
      ...formData,
      servicesOffered: formData.servicesOffered.filter((s) => s !== service)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.orgName || !formData.address || !formData.phone || !formData.email) {
      alert('Please fill in all mandatory provider details.');
      return;
    }

    const ref = `PRA-REG-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedRefId(ref);
    setIsSubmitted(true);
    onSuccess(formData);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-slate-200 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-label="List Your Animal Care Business"
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#FAF9F5] border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#153D35] text-white flex items-center justify-center shadow-soft-sm">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#153D35]">List Your Animal-Care Practice</h3>
              <p className="text-xs text-slate-500">Join India's dedicated animal healthcare network.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Confirmation State */
            <div className="p-6 sm:p-10 text-center space-y-5">
              <div className="w-16 h-16 rounded-3xl bg-[#E7F4EC] text-[#23866B] flex items-center justify-center mx-auto shadow-green-glow">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#23866B] bg-[#E7F4EC] px-3 py-1 rounded-full">
                  Application Received (Local Prototype)
                </span>
                <h4 className="text-2xl font-extrabold text-[#153D35] mt-3">
                  Thank You, {formData.orgName}!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Your listing application has been logged. Our provider onboarding desk will reach out within 48 business hours to verify your council registration credentials.
                </p>
              </div>

              {/* Application Details Snapshot */}
              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Tracking Reference:</span>
                  <span className="font-mono font-bold text-slate-900">{generatedRefId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Practice Category:</span>
                  <span className="font-semibold text-slate-900">{formData.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Registered Mobile:</span>
                  <span className="font-semibold text-slate-900">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Official Email:</span>
                  <span className="font-semibold text-slate-900 truncate">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Verification Status:</span>
                  <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    Audit Scheduled
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#23866B] hover:bg-[#1d6f58] text-white font-bold text-xs rounded-xl shadow-soft-sm transition-colors"
                >
                  Return to Discovery
                </button>
              </div>
            </div>
          ) : (
            /* Listing Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Category & Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Organisation / Clinic Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.orgName}
                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                    placeholder="e.g. Blossom Veterinary Clinic"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Provider Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as ServiceCategory })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-[#23866B]"
                  >
                    {CATEGORIES_DATA.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Physical Address & City */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Street Address & Locality *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. 14, 5th Cross, 80ft Road, Indiranagar"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / Metro *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Bengaluru"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Telephone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 80 4000 1234"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="clinic@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                  />
                </div>
              </div>

              {/* Licensure & Accreditations */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Veterinary Council Registration / AWBI Number
                </label>
                <input
                  type="text"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                  placeholder="e.g. KVC-REG-2021-9844 or AWBI-128"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                />
              </div>

              {/* Companion Animals Treated */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Animal Species Treated
                </label>
                <div className="flex flex-wrap gap-2">
                  {ALL_ANIMALS.map((animal) => {
                    const isSelected = formData.animalsTreated.includes(animal);
                    return (
                      <button
                        key={animal}
                        type="button"
                        onClick={() => handleToggleAnimal(animal)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-[#153D35] text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {animal}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Services Offered Chips */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Services Offered
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={serviceInput}
                    onChange={(e) => setServiceInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddService(e))}
                    placeholder="Type a service and press Add (e.g. Dental Scaling, Ultrasound)"
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                  />
                  <button
                    type="button"
                    onClick={handleAddService}
                    className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-semibold hover:bg-slate-900"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {formData.servicesOffered.map((svc) => (
                    <span key={svc} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E7F4EC] text-[#153D35] text-xs font-medium">
                      {svc}
                      <button type="button" onClick={() => handleRemoveService(svc)}>
                        <X className="w-3 h-3 text-slate-400 hover:text-rose-500" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Toggles: Emergency & Home Visit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasEmergency}
                    onChange={(e) => setFormData({ ...formData, hasEmergency: e.target.checked })}
                    className="w-4 h-4 text-[#F28C75] rounded focus:ring-[#F28C75]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">24/7 Emergency Facility</span>
                    <span className="text-slate-500">Trauma ICU doctors on-site at night</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasHomeVisit}
                    onChange={(e) => setFormData({ ...formData, hasHomeVisit: e.target.checked })}
                    className="w-4 h-4 text-[#23866B] rounded focus:ring-[#23866B]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Home Visit Available</span>
                    <span className="text-slate-500">Doorstep checkup visits offered</span>
                  </div>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Demo state • Submissions simulate real onboarding audit
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#23866B] hover:bg-[#1d6f58] text-white font-bold text-xs rounded-xl shadow-soft-sm transition-colors"
                >
                  Submit Listing for Verification
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
