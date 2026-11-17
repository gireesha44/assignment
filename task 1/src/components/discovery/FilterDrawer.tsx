import React from 'react';
import { 
  X, 
  RotateCcw, 
  Check, 
  Clock, 
  AlertCircle, 
  Home, 
  Star, 
  Layers, 
  SlidersHorizontal 
} from 'lucide-react';
import { FilterState, ServiceCategory, AnimalType, PriceLevel } from '../../types';
import { CATEGORIES_DATA } from '../../data/categories';

interface FilterDrawerProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onResetFilters: () => void;
  isOpen: boolean;
  onClose: () => void;
  totalResults: number;
}

const ALL_ANIMALS: AnimalType[] = [
  'Dogs',
  'Cats',
  'Birds',
  'Small Mammals',
  'Exotic Pets',
  'Equine & Farm'
];

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  isOpen,
  onClose,
  totalResults
}) => {
  if (!isOpen) return null;

  const handleCategoryChange = (cat: ServiceCategory | 'all') => {
    onFilterChange({ ...filters, category: cat });
  };

  const handleToggleAnimal = (animal: AnimalType) => {
    const exists = filters.selectedAnimals.includes(animal);
    const updated = exists
      ? filters.selectedAnimals.filter((a) => a !== animal)
      : [...filters.selectedAnimals, animal];
    onFilterChange({ ...filters, selectedAnimals: updated });
  };

  const priceOptions: { value: PriceLevel | 'all'; label: string }[] = [
    { value: 'all', label: 'All Pricing' },
    { value: 'subsidized-free', label: 'Subsidized / NGO' },
    { value: 'budget', label: 'Economical (₹)' },
    { value: 'moderate', label: 'Standard (₹₹)' },
    { value: 'premium', label: 'Tertiary (₹₹₹)' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Filter Providers"
      >
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-[#FAF9F5]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-[#23866B]" />
            <h3 className="font-bold text-lg text-[#153D35]">Filter Providers</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onResetFilters}
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1 px-2.5 py-1 rounded-md hover:bg-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Filters Body */}
        <div className="p-6 overflow-y-auto space-y-7 flex-1">
          
          {/* Quick Availability Toggles */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Availability & Urgency
            </h4>
            <div className="space-y-2.5">
              
              {/* Emergency Only Toggle */}
              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#FDF2F0] text-[#F28C75] flex items-center justify-center">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900 block">24/7 Emergency Ready</span>
                    <span className="text-[11px] text-slate-500">Trauma ICU, oxygen, surgery</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={filters.emergencyOnly}
                  onChange={(e) => onFilterChange({ ...filters, emergencyOnly: e.target.checked })}
                  className="w-4 h-4 text-[#F28C75] rounded focus:ring-[#F28C75] cursor-pointer"
                />
              </label>

              {/* Open Now Toggle */}
              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#23866B] flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900 block">Open Right Now</span>
                    <span className="text-[11px] text-slate-500">Active OPD consultation today</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={filters.openNowOnly}
                  onChange={(e) => onFilterChange({ ...filters, openNowOnly: e.target.checked })}
                  className="w-4 h-4 text-[#23866B] rounded focus:ring-[#23866B] cursor-pointer"
                />
              </label>

              {/* Home Visit Toggle */}
              <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900 block">Home Visit Available</span>
                    <span className="text-[11px] text-slate-500">Veterinarian comes to your doorstep</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={filters.homeVisitOnly}
                  onChange={(e) => onFilterChange({ ...filters, homeVisitOnly: e.target.checked })}
                  className="w-4 h-4 text-[#23866B] rounded focus:ring-[#23866B] cursor-pointer"
                />
              </label>

            </div>
          </div>

          {/* Distance Filter */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Maximum Distance
              </h4>
              <span className="text-sm font-bold text-[#153D35]">
                Within {filters.maxDistanceKm} km
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={filters.maxDistanceKm}
              onChange={(e) => onFilterChange({ ...filters, maxDistanceKm: Number(e.target.value) })}
              className="w-full accent-[#23866B] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>1 km</span>
              <span>5 km</span>
              <span>10 km</span>
              <span>20 km</span>
            </div>
          </div>

          {/* Service Category */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Service Category
            </h4>
            <div className="grid grid-cols-1 gap-1.5">
              <button
                type="button"
                onClick={() => handleCategoryChange('all')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                  filters.category === 'all'
                    ? 'bg-[#153D35] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>All Categories</span>
                {filters.category === 'all' && <Check className="w-3.5 h-3.5" />}
              </button>

              {CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                    filters.category === cat.id
                      ? 'bg-[#23866B] text-white'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <span>{cat.name}</span>
                  {filters.category === cat.id && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Animals Treated */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Animal Types Treated
            </h4>
            <div className="flex flex-wrap gap-2">
              {ALL_ANIMALS.map((animal) => {
                const isSelected = filters.selectedAnimals.includes(animal);
                return (
                  <button
                    key={animal}
                    type="button"
                    onClick={() => handleToggleAnimal(animal)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#153D35] text-white shadow-soft-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/70'
                    }`}
                  >
                    <span>{animal}</span>
                    {isSelected && <Check className="w-3 h-3" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Minimum Rating */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Minimum Rating
            </h4>
            <div className="grid grid-cols-4 gap-2">
              {[0, 4.0, 4.5, 4.8].map((rating) => {
                const isSelected = filters.minRating === rating;
                return (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => onFilterChange({ ...filters, minRating: rating })}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-1 ${
                      isSelected
                        ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-soft-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {rating === 0 ? 'Any' : `${rating} ★`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Level */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Pricing Tier
            </h4>
            <div className="space-y-1.5">
              {priceOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onFilterChange({ ...filters, priceLevel: opt.value })}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between border transition-colors ${
                    filters.priceLevel === opt.value
                      ? 'border-[#23866B] bg-[#E7F4EC] text-[#153D35]'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{opt.label}</span>
                  {filters.priceLevel === opt.value && <Check className="w-3.5 h-3.5 text-[#23866B]" />}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Apply Button */}
        <div className="p-4 border-t border-slate-200 bg-[#FAF9F5] flex items-center justify-between gap-3">
          <span className="text-xs text-slate-600 font-medium">
            Showing <strong className="text-slate-900">{totalResults}</strong> providers
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#23866B] hover:bg-[#1d6f58] text-white text-sm font-semibold rounded-xl shadow-soft-sm transition-colors"
          >
            Apply Filters
          </button>
        </div>

      </div>
    </div>
  );
};
