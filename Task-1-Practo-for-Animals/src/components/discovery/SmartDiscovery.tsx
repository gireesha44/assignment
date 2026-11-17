import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  SlidersHorizontal, 
  X, 
  ArrowUpDown, 
  AlertCircle, 
  Sparkles,
  RotateCcw,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { Provider, FilterState, ServiceCategory, AnimalType } from '../../types';
import { ProviderCard } from './ProviderCard';
import { FilterDrawer } from './FilterDrawer';
import { ProviderModal } from './ProviderModal';
import { formatCategory } from '../../utils/formatters';

interface SmartDiscoveryProps {
  providers: Provider[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
  savedProviderIds: string[];
  onToggleSave: (id: string) => void;
  onOpenCorrection: (provider: Provider) => void;
  onNotify: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
}

export const SmartDiscovery: React.FC<SmartDiscoveryProps> = ({
  providers,
  filters,
  onFilterChange,
  onResetFilters,
  savedProviderIds,
  onToggleSave,
  onOpenCorrection,
  onNotify
}) => {
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [selectedProviderForModal, setSelectedProviderForModal] = useState<Provider | null>(null);
  const [quickContactProvider, setQuickContactProvider] = useState<Provider | null>(null);

  // Quick service filter tags for horizontal click
  const quickCategories: { id: ServiceCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'veterinary-clinic', label: 'Vet Clinics' },
    { id: 'animal-hospital', label: '24/7 Hospitals' },
    { id: 'animal-ambulance', label: 'Ambulance' },
    { id: 'diagnostics-labs', label: 'Diagnostics' },
    { id: 'pet-boarding', label: 'Boarding' },
    { id: 'welfare-ngo', label: 'Rescue & NGOs' }
  ];

  // Filtering & Sorting Logic
  const filteredAndSortedProviders = useMemo(() => {
    return providers
      .filter((p) => {
        // Search Query (matches name, tagline, services, area, city)
        if (filters.searchQuery.trim()) {
          const q = filters.searchQuery.toLowerCase();
          const matchesName = p.name.toLowerCase().includes(q);
          const matchesTagline = p.tagline.toLowerCase().includes(q);
          const matchesArea = p.area.toLowerCase().includes(q);
          const matchesServices = p.servicesOffered.some((s) => s.toLowerCase().includes(q));
          if (!matchesName && !matchesTagline && !matchesArea && !matchesServices) {
            return false;
          }
        }

        // Category filter
        if (filters.category !== 'all' && p.category !== filters.category) {
          return false;
        }

        // Distance filter
        if (p.distanceKm > filters.maxDistanceKm) {
          return false;
        }

        // Open now filter
        if (filters.openNowOnly && !p.operatingHours.isOpenNow) {
          return false;
        }

        // Emergency only filter
        if (filters.emergencyOnly && !p.hasEmergency24x7) {
          return false;
        }

        // Home visit filter
        if (filters.homeVisitOnly && !p.hasHomeVisit) {
          return false;
        }

        // Rating filter
        if (filters.minRating > 0 && p.rating < filters.minRating) {
          return false;
        }

        // Price level filter
        if (filters.priceLevel !== 'all' && p.priceLevel !== filters.priceLevel) {
          return false;
        }

        // Animal types treated filter
        if (filters.selectedAnimals.length > 0) {
          const hasMatchingAnimal = filters.selectedAnimals.some((animal) =>
            p.animalsTreated.includes(animal)
          );
          if (!hasMatchingAnimal) return false;
        }

        return true;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'distance':
            return a.distanceKm - b.distanceKm;
          case 'rating':
            return b.rating - a.rating;
          case 'reviews':
            return b.reviewCount - a.reviewCount;
          case 'price-asc': {
            const weights = { 'subsidized-free': 0, budget: 1, moderate: 2, premium: 3 };
            return weights[a.priceLevel] - weights[b.priceLevel];
          }
          default:
            return 0;
        }
      });
  }, [providers, filters]);

  // Active filter count for badge
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.category !== 'all') count++;
    if (filters.openNowOnly) count++;
    if (filters.emergencyOnly) count++;
    if (filters.homeVisitOnly) count++;
    if (filters.minRating > 0) count++;
    if (filters.priceLevel !== 'all') count++;
    if (filters.maxDistanceKm < 20) count++;
    if (filters.selectedAnimals.length > 0) count += filters.selectedAnimals.length;
    return count;
  }, [filters]);

  const handleQuickContactClick = (provider: Provider) => {
    setQuickContactProvider(provider);
  };

  return (
    <section id="discover" className="py-14 sm:py-20 bg-[#FAF9F5]">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#23866B] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Real-Time Healthcare Discovery Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153D35] tracking-tight">
              Verified Animal Care Near You
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Compare accredited veterinary clinics, 24/7 emergency centers, boarding shelters and animal welfare units.
            </p>
          </div>

          {/* Location indicator */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3.5 py-2 rounded-xl border border-slate-200/90 shadow-soft-sm">
            <MapPin className="w-4 h-4 text-[#F28C75]" />
            <span>Showing providers around <strong className="text-slate-900">{filters.location || 'Bengaluru'}</strong></span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-soft-sm space-y-4">
          
          {/* Top Row: Search input + Quick Filter Button + Sort */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            {/* Search input */}
            <div className="sm:col-span-6 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
                placeholder="Search by clinic name, doctor, symptom or service..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#23866B] focus:border-transparent"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => onFilterChange({ ...filters, searchQuery: '' })}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Drawer Trigger Button */}
            <div className="sm:col-span-3">
              <button
                type="button"
                onClick={() => setFilterDrawerOpen(true)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-2 ${
                  activeFilterCount > 0
                    ? 'bg-[#E7F4EC] border-[#23866B] text-[#153D35]'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#23866B] text-white text-[10px] font-bold flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="sm:col-span-3 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <ArrowUpDown className="w-3.5 h-3.5" />
              </div>
              <select
                value={filters.sortBy}
                onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value as any })}
                className="w-full pl-8 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-[#23866B] appearance-none cursor-pointer"
              >
                <option value="distance">Sort: Nearest Distance</option>
                <option value="rating">Sort: Highest Rating</option>
                <option value="reviews">Sort: Most Reviewed</option>
                <option value="price-asc">Sort: Price (Low to High)</option>
              </select>
            </div>

          </div>

          {/* Quick Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none text-xs">
            {quickCategories.map((cat) => {
              const isSelected = filters.category === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onFilterChange({ ...filters, category: cat.id })}
                  className={`px-3 py-1.5 rounded-full whitespace-nowrap font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#153D35] text-white shadow-soft-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}

            {/* Quick emergency toggle chip */}
            <button
              onClick={() => onFilterChange({ ...filters, emergencyOnly: !filters.emergencyOnly })}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap font-semibold transition-all flex items-center gap-1.5 ${
                filters.emergencyOnly
                  ? 'bg-[#F28C75] text-white shadow-coral-glow'
                  : 'bg-[#FDF2F0] text-[#D95338] border border-[#F28C75]/30 hover:bg-[#fae7e4]'
              }`}
            >
              <AlertCircle className="w-3 h-3" />
              <span>24/7 Emergency</span>
            </button>

            {/* Quick Open Now chip */}
            <button
              onClick={() => onFilterChange({ ...filters, openNowOnly: !filters.openNowOnly })}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap font-semibold transition-all ${
                filters.openNowOnly
                  ? 'bg-[#23866B] text-white'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              Open Now
            </button>
          </div>

          {/* Active Filter Pills Bar (Removable) */}
          {activeFilterCount > 0 && (
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium">Active filters:</span>

              {filters.category !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg font-medium">
                  Category: {formatCategory(filters.category)}
                  <button onClick={() => onFilterChange({ ...filters, category: 'all' })}>
                    <X className="w-3 h-3 hover:text-rose-500" />
                  </button>
                </span>
              )}

              {filters.emergencyOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FDF2F0] text-[#D95338] rounded-lg font-medium">
                  24/7 Emergency
                  <button onClick={() => onFilterChange({ ...filters, emergencyOnly: false })}>
                    <X className="w-3 h-3 hover:text-rose-500" />
                  </button>
                </span>
              )}

              {filters.openNowOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-lg font-medium">
                  Open Now
                  <button onClick={() => onFilterChange({ ...filters, openNowOnly: false })}>
                    <X className="w-3 h-3 hover:text-rose-500" />
                  </button>
                </span>
              )}

              {filters.homeVisitOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-800 rounded-lg font-medium">
                  Home Visit
                  <button onClick={() => onFilterChange({ ...filters, homeVisitOnly: false })}>
                    <X className="w-3 h-3 hover:text-rose-500" />
                  </button>
                </span>
              )}

              {filters.minRating > 0 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-800 rounded-lg font-medium">
                  {filters.minRating}★ or above
                  <button onClick={() => onFilterChange({ ...filters, minRating: 0 })}>
                    <X className="w-3 h-3 hover:text-rose-500" />
                  </button>
                </span>
              )}

              {filters.maxDistanceKm < 20 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg font-medium">
                  Within {filters.maxDistanceKm} km
                  <button onClick={() => onFilterChange({ ...filters, maxDistanceKm: 20 })}>
                    <X className="w-3 h-3 hover:text-rose-500" />
                  </button>
                </span>
              )}

              {filters.selectedAnimals.map((animal) => (
                <span key={animal} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#E7F4EC] text-[#153D35] rounded-lg font-medium">
                  {animal}
                  <button onClick={() => {
                    const updated = filters.selectedAnimals.filter((a) => a !== animal);
                    onFilterChange({ ...filters, selectedAnimals: updated });
                  }}>
                    <X className="w-3 h-3 hover:text-rose-500" />
                  </button>
                </span>
              ))}

              <button
                onClick={onResetFilters}
                className="text-xs font-bold text-[#23866B] hover:text-[#153D35] underline ml-2"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>

        {/* Results Count Bar */}
        <div className="flex items-center justify-between mt-6 mb-4 text-xs font-medium text-slate-500">
          <div>
            Showing <strong className="text-slate-900 font-bold">{filteredAndSortedProviders.length}</strong> matching animal care providers
          </div>
          {filteredAndSortedProviders.length > 0 && (
            <div className="text-slate-400">
              Sorted by {filters.sortBy === 'distance' ? 'proximity' : filters.sortBy}
            </div>
          )}
        </div>

        {/* Provider Cards Grid */}
        {filteredAndSortedProviders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProviders.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                onViewDetails={(p) => setSelectedProviderForModal(p)}
                onQuickContact={(p) => handleQuickContactClick(p)}
                isSaved={savedProviderIds.includes(provider.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-12 text-center max-w-xl mx-auto my-8 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#153D35]">No animal-care providers found</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We couldn't find any listings matching your specific combination of filters. Try increasing your distance radius or clearing some filters.
            </p>
            <div className="pt-2">
              <button
                onClick={onResetFilters}
                className="px-5 py-2.5 rounded-xl bg-[#23866B] text-white font-semibold text-xs shadow-soft-sm hover:bg-[#1d6f58] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Filter Drawer Component */}
      <FilterDrawer
        filters={filters}
        onFilterChange={onFilterChange}
        onResetFilters={onResetFilters}
        isOpen={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        totalResults={filteredAndSortedProviders.length}
      />

      {/* Full Provider Detail Modal */}
      <ProviderModal
        provider={selectedProviderForModal}
        isOpen={!!selectedProviderForModal}
        onClose={() => setSelectedProviderForModal(null)}
        onOpenCorrection={onOpenCorrection}
        isSaved={selectedProviderForModal ? savedProviderIds.includes(selectedProviderForModal.id) : false}
        onToggleSave={onToggleSave}
        onNotify={onNotify}
      />

      {/* Quick Contact Simple Dialog */}
      {quickContactProvider && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <h4 className="font-bold text-[#153D35] text-base">Direct Care Desk</h4>
              </div>
              <button
                onClick={() => setQuickContactProvider(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 text-sm">{quickContactProvider.name}</h5>
              <p className="text-xs text-slate-500">{quickContactProvider.address}</p>
            </div>

            <div className="space-y-2 pt-1">
              <a
                href={`tel:${quickContactProvider.phone}`}
                className="w-full py-3 px-4 rounded-xl bg-[#23866B] hover:bg-[#1d6f58] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-soft-sm transition-colors"
              >
                <span>Call Main Reception: {quickContactProvider.phone}</span>
              </a>

              {quickContactProvider.hasEmergency24x7 && quickContactProvider.emergencyPhone && (
                <a
                  href={`tel:${quickContactProvider.emergencyPhone}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#F28C75] hover:bg-[#e37860] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-coral-glow transition-colors"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>24/7 Trauma Line: {quickContactProvider.emergencyPhone.split(' ')[0]}</span>
                </a>
              )}

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(quickContactProvider.phone);
                  onNotify('Phone Number Copied', quickContactProvider.phone, 'info');
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
              >
                Copy Phone Number
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-400 pt-1">
              Practo for Animals connects you directly to the verified clinic contact number.
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
