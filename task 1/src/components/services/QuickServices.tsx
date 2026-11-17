import React from 'react';
import { 
  Stethoscope, 
  Building2, 
  Home, 
  Activity, 
  Ambulance, 
  HeartHandshake, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CATEGORIES_DATA, CategoryInfo } from '../../data/categories';
import { ServiceCategory } from '../../types';

interface QuickServicesProps {
  onSelectCategory: (category: ServiceCategory) => void;
  selectedCategory?: ServiceCategory | 'all';
}

export const QuickServices: React.FC<QuickServicesProps> = ({
  onSelectCategory,
  selectedCategory
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#23866B]" />;
      case 'Hospital':
        return <Building2 className="w-6 h-6 text-[#F28C75]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#153D35]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#23866B]" />;
      case 'Ambulance':
        return <Ambulance className="w-6 h-6 text-[#F28C75]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#153D35]" />;
      default:
        return <Stethoscope className="w-6 h-6 text-[#23866B]" />;
    }
  };

  return (
    <section id="services" className="py-14 bg-white border-y border-slate-200/70">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#23866B] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive Animal Care Directory
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#153D35] tracking-tight">
              How can we help your companion today?
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              From everyday wellness checkups and diagnostics to 24/7 emergency response and stray rehabilitation.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-sm font-semibold text-slate-500">
            6 Specialized Verticals
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_DATA.map((cat: CategoryInfo) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group text-left p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#23866B] ${
                  isSelected
                    ? 'border-[#23866B] bg-[#E7F4EC]/50 shadow-soft-md ring-1 ring-[#23866B]'
                    : 'border-slate-200/90 bg-[#FAF9F5]/60 hover:bg-white hover:border-slate-300 hover:shadow-soft-lg'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-soft-sm flex items-center justify-center group-hover:scale-105 group-hover:border-[#23866B]/40 transition-all">
                    {getIcon(cat.iconName)}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    cat.id === 'animal-hospital' || cat.id === 'animal-ambulance'
                      ? 'bg-[#FDF2F0] text-[#D95338] border border-[#F28C75]/30'
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}>
                    {cat.badgeText}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-[#153D35] group-hover:text-[#23866B] transition-colors flex items-center gap-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wide">
                    {cat.tagline}
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between w-full text-xs font-bold">
                  <span className="text-slate-500 group-hover:text-slate-700">
                    {cat.count} listings near you
                  </span>
                  <span className="text-[#23866B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Find Providers
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
