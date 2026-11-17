import React, { useState } from 'react';
import { X, PhoneCall, CheckCircle2, AlertCircle, ArrowRight, Clock } from 'lucide-react';
import { PROGRAMMES } from '../data/courses';
import { triggerConfetti } from '../utils/confetti';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({
  isOpen,
  onClose,
  onSuccessToast
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9:00 AM - 12:00 PM)');
  const [programmeOfInterest, setProgrammeOfInterest] = useState('ai-genai-eng');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!phone.trim()) errs.phone = 'Phone number is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Valid email is required';
    if (!privacyConsent) errs.consent = 'Consent is required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      triggerConfetti();
      onSuccessToast('Callback requested! We will call you during your selected time.');
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-midnight/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-lg w-full border border-violet/25 shadow-2xl overflow-hidden z-10 text-left my-8">
        
        {/* Header */}
        <div className="bg-midnight p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-midnight-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-violet/20"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-violet/20 text-lavender text-[11px] font-mono font-semibold mb-2">
            <PhoneCall className="w-3 h-3 text-skyblue" />
            <span>15-Minute Diagnostic Call</span>
          </div>

          <h3 className="text-xl font-extrabold text-white">
            Talk to a Learning Advisor
          </h3>
          <p className="text-slate-300 text-xs mt-1">
            Not sure which path fits your background? Chat with an advisor to evaluate prerequisites and project outcomes.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isDone ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-midnight">Callback Scheduled!</h4>
              <p className="text-slate-600 text-xs max-w-xs mx-auto">
                Thank you, {fullName}. We will call you at {phone} during {preferredTime}.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl bg-violet text-white text-xs font-bold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              <div>
                <label className="block text-xs font-bold text-midnight mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Jordan Lee"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-offwhite border border-slate-200 focus:border-violet focus:outline-none"
                />
                {errors.fullName && <p className="text-[10px] text-rose-500 mt-0.5">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-midnight mb-1">
                    Phone <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-offwhite border border-slate-200 focus:border-violet focus:outline-none"
                  />
                  {errors.phone && <p className="text-[10px] text-rose-500 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-midnight mb-1">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@example.com"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-offwhite border border-slate-200 focus:border-violet focus:outline-none"
                  />
                  {errors.email && <p className="text-[10px] text-rose-500 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-midnight mb-1">
                  Target Track
                </label>
                <select
                  value={programmeOfInterest}
                  onChange={(e) => setProgrammeOfInterest(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-offwhite border border-slate-200 focus:border-violet focus:outline-none"
                >
                  {PROGRAMMES.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-midnight mb-1">
                  Preferred Time Window
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-offwhite border border-slate-200 focus:border-violet focus:outline-none"
                >
                  <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="Evening (6:00 PM - 8:30 PM)">Evening (6:00 PM - 8:30 PM)</option>
                </select>
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2 text-[11px] text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-0.5 rounded text-violet focus:ring-violet"
                  />
                  <span>I agree to be contacted for a diagnostic consultation.</span>
                </label>
                {errors.consent && <p className="text-[10px] text-rose-500 mt-0.5">{errors.consent}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-xl bg-violet hover:bg-violet-hover text-white text-xs font-bold transition-all shadow-glow-violet disabled:opacity-50"
                >
                  {isSubmitting ? 'Scheduling...' : 'Request Callback'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
