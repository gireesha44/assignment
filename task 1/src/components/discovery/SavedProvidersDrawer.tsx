import React from 'react';
import { X, Trash2, Phone, ChevronRight, Heart } from 'lucide-react';
import { Provider } from '../../types';
import { formatCategory, formatDistance } from '../../utils/formatters';

interface SavedProvidersDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProviders: Provider[];
  onRemoveSave: (id: string) => void;
  onViewDetails: (provider: Provider) => void;
}

export const SavedProvidersDrawer: React.FC<SavedProvidersDrawerProps> = ({
  isOpen,
  onClose,
  savedProviders,
  onRemoveSave,
  onViewDetails
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Saved Animal Care Providers"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-[#FAF9F5]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            <h3 className="font-bold text-lg text-[#153D35]">Saved Providers ({savedProviders.length})</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60"
            aria-label="Close saved drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of saved providers */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {savedProviders.length === 0 ? (
            <div className="text-center py-16 text-slate-500 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Heart className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-700">No saved providers yet</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Click the heart icon on any provider card to quickly save clinics and emergency units for fast access.
              </p>
            </div>
          ) : (
            savedProviders.map((p) => (
              <div key={p.id} className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-soft-sm flex items-center justify-between gap-3">
                <div 
                  className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                  onClick={() => {
                    onViewDetails(p);
                    onClose();
                  }}
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-[#23866B] uppercase block">
                      {formatCategory(p.category)}
                    </span>
                    <h4 className="font-bold text-xs text-slate-900 truncate">{p.name}</h4>
                    <p className="text-[11px] text-slate-500 truncate">{p.area} • {formatDistance(p.distanceKm)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => onRemoveSave(p.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-[#FAF9F5] text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
