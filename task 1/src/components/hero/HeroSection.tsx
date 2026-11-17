import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  Crosshair,
  Award,
  ArrowRight
} from 'lucide-react';
import { ServiceCategory } from '../../types';

interface HeroSectionProps {
  onSearchSubmit: (category: ServiceCategory | 'all', location: string) => void;
  onExploreServices: () => void;
  onFindCareNearYou: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchSubmit,
  onExploreServices,
  onFindCareNearYou
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const [locationInput, setLocationInput] = useState<string>('Bengaluru, Karnataka');
  const [isLocating, setIsLocating] = useState<boolean>(false);

  const serviceOptions: { value: ServiceCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Animal Care Services' },
    { value: 'veterinary-clinic', label: 'Veterinary Clinic' },
    { value: 'animal-hospital', label: 'Animal Hospital (24/7)' },
    { value: 'pet-boarding', label: 'Pet Boarding & Daycare' },
    { value: 'diagnostics-labs', label: 'Diagnostics & Labs' },
    { value: 'animal-ambulance', label: 'Animal Ambulance' },
    { value: 'welfare-ngo', label: 'NGO / Animal Rescue' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(selectedCategory, locationInput);
  };

  const handleDetectLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      setLocationInput('Indiranagar, Bengaluru');
      setIsLocating(false);
    }, 600);
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-16 lg:pt-8 lg:pb-24">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#E7F4EC]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#FAF9F5] rounded-full blur-2xl pointer-events-none" />

      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Healthtech badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E7F4EC] border border-[#23866B]/20 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#23866B] animate-pulse" />
              <span className="text-xs font-semibold text-[#153D35] tracking-wide uppercase">
                India's First Animal Health Discovery Network
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#153D35] leading-[1.15]">
              Because Their Health Matters <span className="text-[#23866B] italic font-serif">Just As Much.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-4 text-base sm:text-lg text-[#202A27]/80 max-w-xl font-normal leading-relaxed">
              Discover trusted veterinary clinics, hospitals, diagnostics, boarding facilities and animal welfare organisations near you.
            </p>

            {/* Sophisticated Search Interface */}
            <div className="mt-8 p-3 sm:p-3.5 bg-white rounded-2xl shadow-soft-lg border border-slate-200/90 w-full">
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
                
                {/* Service Dropdown */}
                <div className="sm:col-span-5 relative">
                  <label htmlFor="service-select" className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1 px-1">
                    What service do you need?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#23866B]">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <select
                      id="service-select"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value as ServiceCategory | 'all')}
                      className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#23866B] focus:border-transparent appearance-none cursor-pointer hover:bg-slate-100/70 transition-colors"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Location Input */}
                <div className="sm:col-span-4 relative">
                  <div className="flex items-center justify-between mb-1 px-1">
                    <label htmlFor="location-input" className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Your location
                    </label>
                    <button
                      type="button"
                      onClick={handleDetectLocation}
                      disabled={isLocating}
                      className="text-[11px] text-[#23866B] hover:text-[#153D35] font-semibold flex items-center gap-1"
                      title="Auto-detect current area"
                    >
                      <Crosshair className={`w-3 h-3 ${isLocating ? 'animate-spin' : ''}`} />
                      {isLocating ? 'Detecting...' : 'Detect'}
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4 text-[#F28C75]" />
                    </div>
                    <input
                      id="location-input"
                      type="text"
                      value={locationInput}
                      onChange={(e) => setLocationInput(e.target.value)}
                      placeholder="Enter area, pin code or city"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#23866B] focus:border-transparent placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="sm:col-span-3 pt-2 sm:pt-0 sm:self-end">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-[#23866B] hover:bg-[#1d6f58] text-white font-semibold text-sm rounded-xl shadow-soft-md hover:shadow-green-glow transition-all flex items-center justify-center gap-2 group h-[42px]"
                  >
                    <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Search</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Two Primary CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onFindCareNearYou}
                className="px-5 py-3 rounded-xl bg-[#153D35] hover:bg-[#0e2b25] text-white font-semibold text-sm shadow-soft-md transition-all flex items-center gap-2 group"
              >
                <span>Find Care Near You</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#23866B] text-slate-800 font-semibold text-sm hover:bg-[#E7F4EC]/40 transition-colors shadow-soft-sm"
              >
                Explore Services
              </button>

              {/* Small Trust Indicator */}
              <div className="flex items-center gap-2 text-xs text-slate-600 sm:ml-2">
                <ShieldCheck className="w-4 h-4 text-[#23866B]" />
                <span className="font-medium">One place to discover care for every kind of animal.</span>
              </div>
            </div>

            {/* Quick Animal Badges */}
            <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Covering:</span>
              {['Dogs', 'Cats', 'Birds', 'Rabbits & Small Pets', 'Stray Rescues', 'Equine'].map((animal) => (
                <span key={animal} className="px-2.5 py-1 bg-white border border-slate-200 rounded-full font-medium text-slate-700">
                  {animal}
                </span>
              ))}
            </div>

          </div>

          {/* Right Hero Visual (Authentic High-Quality Veterinary Photography) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto w-full">
              
              {/* Main Image Frame with Soft Shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white bg-slate-100 h-[420px] sm:h-[460px] lg:h-[500px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=85"
                  alt="Compassionate veterinarian examining a golden retriever patient with stethoscope in modern clinic"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153D35]/80 via-transparent to-transparent" />
                
                {/* Photo caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      Apex Vet Multispecialty Centre
                    </span>
                    <span className="text-emerald-300 font-semibold">Verified Partner</span>
                  </div>
                  <p className="text-[11px] text-white/80 mt-1">
                    "From routine vaccinations to 24/7 ICU surgical triage."
                  </p>
                </div>
              </div>

              {/* Floating Trust Card 1: 24/7 Emergency */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 sm:p-3.5 rounded-2xl shadow-soft-lg border border-slate-100 flex items-center gap-3 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F0] text-[#F28C75] flex items-center justify-center font-bold">
                  24/7
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Emergency Network</p>
                  <p className="text-[11px] text-slate-500">Trauma & ICU ready</p>
                </div>
              </div>

              {/* Floating Trust Card 2: Rating */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white p-3.5 rounded-2xl shadow-soft-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E7F4EC] text-[#23866B] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-extrabold text-slate-900">4.9</span>
                    <span className="text-amber-400 text-xs">★★★★★</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Verified Pet Parent Reviews</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
