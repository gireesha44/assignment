import React, { useState } from 'react';
import { X, Flag, CheckCircle2, AlertCircle } from 'lucide-react';
import { Provider, CorrectionSubmission } from '../../types';

interface CorrectionModalProps {
  provider: Provider | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (correction: CorrectionSubmission) => void;
}

export const CorrectionModal: React.FC<CorrectionModalProps> = ({
  provider,
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [reportedField, setReportedField] = useState('Operating Hours');
  const [suggestedCorrection, setSuggestedCorrection] = useState('');
  const [reporterContact, setReporterContact] = useState('');
  const [supportingProof, setSupportingProof] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !provider) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestedCorrection.trim()) {
      alert('Please describe the correction.');
      return;
    }

    const payload: CorrectionSubmission = {
      providerId: provider.id,
      providerName: provider.name,
      reportedField,
      suggestedCorrection,
      reporterContact,
      supportingProof
    };

    setIsSubmitted(true);
    onSubmitSuccess(payload);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSuggestedCorrection('');
    setReporterContact('');
    setSupportingProof('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-label="Suggest Listing Correction"
      >
        
        {/* Header */}
        <div className="p-5 bg-[#FAF9F5] border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <Flag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#153D35]">Suggest a Correction</h3>
              <p className="text-xs text-slate-500">Help the animal-care community stay accurate</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#E7F4EC] text-[#23866B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#153D35]">Thank You for Keeping Data Accurate!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Your report regarding <strong>{provider.name}</strong> has been submitted to our community audit pipeline. We will cross-verify with the clinic desk.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#23866B] hover:bg-[#1d6f58] text-white font-bold text-xs rounded-xl shadow-soft-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="text-slate-400 block font-semibold">Listing:</span>
                <span className="font-bold text-slate-900">{provider.name}</span>
                <span className="text-slate-500 block">{provider.address}</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Which field is inaccurate? *
                </label>
                <select
                  value={reportedField}
                  onChange={(e) => setReportedField(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-[#23866B]"
                >
                  <option value="Operating Hours">Operating Hours / Closed</option>
                  <option value="Phone Number">Phone Number / Emergency Line</option>
                  <option value="Address & Location">Address / Location Pin</option>
                  <option value="Services Offered">Services Offered / Equipment</option>
                  <option value="Doctors & Staff">Attending Doctors / Qualifications</option>
                  <option value="Permanently Closed">Facility Permanently Closed or Relocated</option>
                  <option value="Other">Other Discrepancy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  What is the accurate information? *
                </label>
                <textarea
                  rows={3}
                  required
                  value={suggestedCorrection}
                  onChange={(e) => setSuggestedCorrection(e.target.value)}
                  placeholder="e.g. Their emergency line has changed to ..., or they are closed on Wednesdays."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Email / Phone (Optional - for audit follow-up)
                </label>
                <input
                  type="text"
                  value={reporterContact}
                  onChange={(e) => setReporterContact(e.target.value)}
                  placeholder="name@example.com or mobile"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#23866B] hover:bg-[#1d6f58] text-white font-bold text-xs rounded-xl shadow-soft-sm transition-colors"
                >
                  Submit Correction
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
