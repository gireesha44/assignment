import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Phone, 
  ExternalLink, 
  Heart, 
  CheckCircle2, 
  AlertCircle,
  Truck,
  Home,
  ChevronRight
} from 'lucide-react';
import { Provider } from '../../types';
import { formatCategory, formatDistance, getPriceBadge } from '../../utils/formatters';

interface ProviderCardProps {
  provider: Provider;
  onViewDetails: (provider: Provider) => void;
  onQuickContact: (provider: Provider) => void;
  isSaved?: boolean;
  onToggleSave?: (providerId: string) => void;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({
  provider,
  onViewDetails,
  onQuickContact,
  isSaved = false,
  onToggleSave
}) => {
  const priceBadge = getPriceBadge(provider.priceLevel);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Image + Badges */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={provider.imageUrl}
          alt={provider.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-[#153D35] backdrop-blur-md shadow-soft-sm">
            {formatCategory(provider.category)}
          </span>

          {provider.hasEmergency24x7 && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#F28C75] text-white shadow-coral-glow flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              24/7 Emergency
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        {onToggleSave && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(provider.id);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-slate-600 hover:text-rose-500 transition-colors shadow-soft-sm focus:outline-none"
            aria-label={isSaved ? "Remove from saved" : "Save provider"}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        )}

        {/* Bottom Distance & Open Pill on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-1.5 font-medium drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-white/90" />
            <span>{provider.area} • {formatDistance(provider.distanceKm)}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${provider.operatingHours.isOpenNow ? 'bg-emerald-400' : 'bg-amber-400'}`} />
            <span className="font-semibold drop-shadow-sm">
              {provider.operatingHours.isOpenNow ? 'Open Now' : 'Closed'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header row: Verified tag + Rating */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 flex-wrap">
              {provider.isVerified ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#E7F4EC] text-[#23866B] border border-[#23866B]/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Provider
                </span>
              ) : (
                <span className="text-[11px] font-semibold text-slate-500 px-2 py-0.5 rounded-md bg-slate-100">
                  Verification Pending
                </span>
              )}

              {provider.hasHomeVisit && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700">
                  <Home className="w-3 h-3" />
                  Home Visit
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 shrink-0 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span className="text-xs font-bold text-slate-900">{provider.rating}</span>
              <span className="text-[11px] text-slate-500 font-medium">({provider.reviewCount})</span>
            </div>
          </div>

          {/* Provider Name */}
          <h3 
            onClick={() => onViewDetails(provider)}
            className="text-lg font-bold text-[#153D35] hover:text-[#23866B] cursor-pointer transition-colors leading-snug line-clamp-1"
          >
            {provider.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
            {provider.tagline}
          </p>

          {/* Address & Hours */}
          <div className="mt-3 space-y-1 text-xs text-slate-600">
            <div className="flex items-start gap-1.5 text-slate-500">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
              <span className="line-clamp-1">{provider.address}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 shrink-0 text-slate-400" />
              <span className="font-medium text-slate-700">{provider.operatingHours.displayHours}</span>
            </div>
          </div>

          {/* Available Services Chips */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {provider.servicesOffered.slice(0, 3).map((service, index) => (
              <span
                key={index}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
              >
                {service}
              </span>
            ))}
            {provider.servicesOffered.length > 3 && (
              <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-slate-50 text-slate-500">
                +{provider.servicesOffered.length - 3} more
              </span>
            )}
          </div>

          {/* Animal Types Treated */}
          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
            <span className="font-semibold text-slate-700">Treats:</span>
            <span>{provider.animalsTreated.join(', ')}</span>
          </div>
        </div>

        {/* Card Footer: Pricing & Actions */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${priceBadge.bg} ${priceBadge.text}`}>
              {priceBadge.label}
            </span>
            <p className="text-[10px] text-slate-500 mt-0.5">{provider.priceEstimate}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuickContact(provider)}
              className="p-2 sm:px-3 sm:py-2 text-xs font-semibold text-slate-700 hover:text-[#153D35] hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
              title="Call or view contact details"
            >
              <Phone className="w-3.5 h-3.5 text-[#23866B]" />
              <span className="hidden sm:inline">Contact</span>
            </button>

            <button
              onClick={() => onViewDetails(provider)}
              className="px-3.5 py-2 text-xs font-semibold text-white bg-[#23866B] hover:bg-[#1d6f58] rounded-xl shadow-soft-sm transition-colors flex items-center gap-1 group/btn"
            >
              <span>View Details</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
