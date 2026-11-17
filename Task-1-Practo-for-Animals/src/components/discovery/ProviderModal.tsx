import React, { useState } from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Heart, 
  User, 
  Calendar, 
  Share2, 
  Flag,
  Award,
  Stethoscope,
  Building2,
  FileCheck
} from 'lucide-react';
import { Provider, AnimalType } from '../../types';
import { formatCategory, formatDistance, getPriceBadge } from '../../utils/formatters';

interface ProviderModalProps {
  provider: Provider | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenCorrection: (provider: Provider) => void;
  isSaved?: boolean;
  onToggleSave?: (providerId: string) => void;
  onNotify: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
}

export const ProviderModal: React.FC<ProviderModalProps> = ({
  provider,
  isOpen,
  onClose,
  onOpenCorrection,
  isSaved = false,
  onToggleSave,
  onNotify
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'facilities' | 'reviews' | 'inquiry'>('overview');
  
  // Inquiry form states
  const [inquiryPetName, setInquiryPetName] = useState('');
  const [inquiryPetType, setInquiryPetType] = useState<AnimalType>('Dogs');
  const [inquiryService, setInquiryService] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryDate, setInquiryDate] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !provider) return null;

  const priceBadge = getPriceBadge(provider.priceLevel);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryPetName || !inquiryPhone) {
      onNotify('Missing Fields', 'Please provide pet name and contact phone number.', 'error');
      return;
    }
    setIsSubmitted(true);
    onNotify('Inquiry Sent (Demo)', `Request received for ${inquiryPetName}. ${provider.name} will reach out at ${inquiryPhone}.`, 'success');
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    onNotify('Link Copied', 'Provider link copied to clipboard.', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-slate-200 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-label={provider.name}
      >
        
        {/* Modal Top Header with Image & Key Badges */}
        <div className="relative h-60 sm:h-72 w-full bg-slate-900 shrink-0">
          <img
            src={provider.imageUrl}
            alt={provider.name}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

          {/* Top Actions: Close, Share, Save */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#153D35] backdrop-blur-md shadow-soft-sm">
              {formatCategory(provider.category)}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 transition-colors shadow-soft-sm"
                title="Share link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {onToggleSave && (
                <button
                  onClick={() => onToggleSave(provider.id)}
                  className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-rose-500 transition-colors shadow-soft-sm"
                  title="Save provider"
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>
              )}

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-slate-950 transition-colors shadow-soft-sm"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Title & Verified Tag on Cover */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              {provider.isVerified ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/90 text-white backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Practo Verified Facility
                </span>
              ) : (
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300">
                  Unverified Community Listing
                </span>
              )}

              {provider.hasEmergency24x7 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#F28C75] text-white shadow-coral-glow">
                  <AlertCircle className="w-3.5 h-3.5" />
                  24/7 Trauma Emergency
                </span>
              )}

              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>{provider.rating} ({provider.reviewCount} verified reviews)</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
              {provider.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl line-clamp-1 drop-shadow-sm">
              {provider.tagline}
            </p>
          </div>
        </div>

        {/* Action Quick Bar */}
        <div className="px-5 py-3 bg-[#FAF9F5] border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 text-slate-600 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#F28C75]" />
              {provider.address} ({formatDistance(provider.distanceKm)})
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {provider.operatingHours.displayHours}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {provider.hasEmergency24x7 && provider.emergencyPhone && (
              <a
                href={`tel:${provider.emergencyPhone}`}
                className="px-3 py-1.5 rounded-xl bg-[#F28C75] text-white font-bold text-xs flex items-center gap-1.5 hover:bg-[#e37860] transition-colors shadow-coral-glow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Emergency: {provider.emergencyPhone.split(' ')[0]}</span>
              </a>
            )}

            <button
              onClick={() => onOpenCorrection(provider)}
              className="px-2.5 py-1.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors"
              title="Report incorrect details"
            >
              <Flag className="w-3.5 h-3.5 text-slate-400" />
              <span>Suggest Correction</span>
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 border-b border-slate-200 flex space-x-6 overflow-x-auto text-sm font-semibold text-slate-500">
          {[
            { id: 'overview', label: 'Overview & Doctors' },
            { id: 'services', label: 'Services & Fees' },
            { id: 'facilities', label: 'Facilities & Safety' },
            { id: 'reviews', label: `Reviews (${provider.reviews.length})` },
            { id: 'inquiry', label: 'Request Appointment' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#23866B] text-[#153D35] font-bold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-700 space-y-6">
          
          {/* TAB 1: OVERVIEW & DOCTORS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#153D35] mb-2">About This Facility</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {provider.tagline} Registered with the state animal welfare & veterinary licensing body. Providing dedicated OPD consultations, inpatient nursing, and specialized animal therapies.
                </p>
              </div>

              {/* Doctors & Veterinary Team */}
              <div>
                <h3 className="text-base font-bold text-[#153D35] mb-3 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#23866B]" />
                  Attending Veterinarians & Specialists
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {provider.doctors.map((doc, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border border-slate-200/90 bg-[#FAF9F5] flex items-center gap-4">
                      <img
                        src={doc.avatarUrl}
                        alt={doc.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border-2 border-white shadow-soft-sm"
                      />
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{doc.name}</h4>
                        <p className="text-xs font-semibold text-[#23866B]">{doc.role}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{doc.qualification}</p>
                        <span className="text-[10px] font-medium text-slate-400">
                          {doc.experienceYears} Years Clinical Experience
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animals Treated Badges */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Companion Animals Treated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {provider.animalsTreated.map((animal) => (
                    <span key={animal} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-800">
                      🐾 {animal}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="text-slate-400 block font-semibold mb-1">General Inquiries</span>
                  <p className="font-bold text-slate-900">{provider.phone}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="text-slate-400 block font-semibold mb-1">Official Email</span>
                  <p className="font-bold text-slate-900 truncate">{provider.email}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="text-slate-400 block font-semibold mb-1">Estimated Pricing</span>
                  <p className="font-bold text-[#23866B]">{provider.priceEstimate}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SERVICES & PRICING */}
          {activeTab === 'services' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#153D35]">Services Offered</h3>
                  <p className="text-xs text-slate-500">Transparent pricing guidance and procedural capabilities.</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${priceBadge.bg} ${priceBadge.text}`}>
                  {priceBadge.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {provider.servicesOffered.map((service, index) => (
                  <div key={index} className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#23866B]" />
                      <span className="text-sm font-semibold text-slate-900">{service}</span>
                    </div>
                    <span className="text-xs font-medium text-slate-500">Available</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#E7F4EC]/60 border border-[#23866B]/20 text-xs text-[#153D35] flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-[#23866B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Transparent Billing Practice</p>
                  <p className="text-slate-600 mt-0.5">
                    Consultation estimates are provided upfront before any elective procedure. Subsidized rates may apply for community rescue cases upon presentation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FACILITIES & ACCREDITATIONS */}
          {activeTab === 'facilities' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#153D35] mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#23866B]" />
                  Equipment & Infrastructure
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {provider.equipmentAndFacilities.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                      <div className="w-2 h-2 rounded-full bg-[#23866B]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#153D35] mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600" />
                  Accreditations & Regulatory Licenses
                </h3>
                <div className="space-y-2">
                  {provider.accreditations.map((acc, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/70 text-xs font-medium text-emerald-950 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{acc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-[#153D35]">Verified Pet Parent Reviews</h3>
                  <p className="text-xs text-slate-500">Unfiltered experiences from owners who visited this facility.</p>
                </div>
                <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 text-sm font-bold text-amber-900">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span>{provider.rating} / 5.0</span>
                </div>
              </div>

              {provider.reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-2xl border border-slate-200 bg-[#FAF9F5] space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{rev.author}</span>
                        {rev.verifiedOwner && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.2 rounded-full">
                            Verified Pet Parent
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500">{rev.petInfo}</span>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400">{rev.date}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>

                  {rev.treatmentType && (
                    <div className="text-[11px] font-semibold text-slate-500 pt-1">
                      Treatment: <span className="text-[#23866B]">{rev.treatmentType}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: INQUIRY FORM */}
          {activeTab === 'inquiry' && (
            <div>
              {isSubmitted ? (
                <div className="p-8 text-center bg-[#E7F4EC]/60 rounded-3xl border border-[#23866B]/30 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#23866B] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#153D35]">Inquiry Sent Successfully</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your consultation request has been forwarded to <strong>{provider.name}</strong>. Their desk coordinator will call you at <strong>{inquiryPhone}</strong> to confirm the exact time slot.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 text-xs font-bold text-[#23866B] underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 max-w-xl mx-auto">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-[#153D35]">Request an Appointment or Callback</h3>
                    <p className="text-xs text-slate-500">Directly connect with the care desk. No advance payment required.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Pet Name *</label>
                      <input
                        type="text"
                        required
                        value={inquiryPetName}
                        onChange={(e) => setInquiryPetName(e.target.value)}
                        placeholder="e.g. Bruno"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Companion Species</label>
                      <select
                        value={inquiryPetType}
                        onChange={(e) => setInquiryPetType(e.target.value as AnimalType)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                      >
                        {provider.animalsTreated.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={inquiryDate}
                        onChange={(e) => setInquiryDate(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Reason for Visit / Symptoms</label>
                    <textarea
                      rows={3}
                      value={inquiryNotes}
                      onChange={(e) => setInquiryNotes(e.target.value)}
                      placeholder="Briefly describe what your companion is experiencing (e.g. routine vaccination, limping, loss of appetite)..."
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#23866B] hover:bg-[#1d6f58] text-white text-sm font-bold rounded-xl shadow-soft-sm transition-colors"
                  >
                    Send Care Inquiry (Free)
                  </button>
                  <p className="text-[11px] text-center text-slate-400">
                    This is a prototype demo interaction. No real booking is committed.
                  </p>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-[#FAF9F5] border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            ID: <span className="font-mono text-slate-700">{provider.id}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => setActiveTab('inquiry')}
              className="px-5 py-2 bg-[#23866B] hover:bg-[#1d6f58] text-white rounded-xl text-xs font-bold shadow-soft-sm transition-colors"
            >
              Book / Inquire Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
