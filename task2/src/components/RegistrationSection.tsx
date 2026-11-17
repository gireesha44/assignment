import React, { useState, useEffect } from 'react';
import { 
  Send, 
  PhoneCall, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Download, 
  ArrowRight, 
  RefreshCw, 
  Lock, 
  ShieldCheck, 
  Clock, 
  Calendar 
} from 'lucide-react';
import { PROGRAMMES } from '../data/courses';
import { RegistrationFormData } from '../types';
import { triggerConfetti } from '../utils/confetti';

interface RegistrationSectionProps {
  preselectedProgrammeId?: string;
  onShowToast: (message: string) => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({
  preselectedProgrammeId,
  onShowToast
}) => {
  const [activeTab, setActiveTab] = useState<'application' | 'callback'>('application');

  // Application Form State
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    currentStatus: '',
    programmeOfInterest: preselectedProgrammeId || 'ai-genai-eng',
    experienceLevel: 'Beginner',
    preferredFormat: 'Weekend Live Cohort',
    privacyConsent: false,
    notes: ''
  });

  // Callback Form State
  const [callbackData, setCallbackData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    programmeOfInterest: preselectedProgrammeId || 'ai-genai-eng',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedType, setSubmittedType] = useState<'application' | 'callback'>('application');
  const [lastSubmissionSummary, setLastSubmissionSummary] = useState<any>(null);

  // Sync preselected programme when changed from other components
  useEffect(() => {
    if (preselectedProgrammeId) {
      setFormData(prev => ({ ...prev, programmeOfInterest: preselectedProgrammeId }));
      setCallbackData(prev => ({ ...prev, programmeOfInterest: preselectedProgrammeId }));
    }
  }, [preselectedProgrammeId]);

  // Validation functions
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Allows international formats, min 8 digits
    const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
    return cleaned.length >= 8 && /^\d+$/.test(cleaned);
  };

  const validateApplication = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!validateEmail(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else if (!validatePhone(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number with country/area code.';
    }

    if (!formData.currentStatus) {
      errs.currentStatus = 'Please select your current educational or career status.';
    }

    if (!formData.programmeOfInterest) {
      errs.programmeOfInterest = 'Please select a programme track.';
    }

    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must agree to the privacy consent to proceed.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateCallback = () => {
    const errs: Record<string, string> = {};

    if (!callbackData.fullName.trim()) {
      errs.cb_fullName = 'Please enter your full name.';
    }

    if (!callbackData.phone.trim()) {
      errs.cb_phone = 'Please enter your phone number.';
    } else if (!validatePhone(callbackData.phone.trim())) {
      errs.cb_phone = 'Please enter a valid phone number.';
    }

    if (!callbackData.email.trim()) {
      errs.cb_email = 'Please enter your email address.';
    } else if (!validateEmail(callbackData.email.trim())) {
      errs.cb_email = 'Please enter a valid email address.';
    }

    if (!callbackData.privacyConsent) {
      errs.cb_privacyConsent = 'You must agree to the privacy consent.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateApplication()) return;

    setIsSubmitting(true);
    // Simulate local demo state processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedType('application');
      setLastSubmissionSummary({ ...formData });
      triggerConfetti();
      onShowToast('Application successfully received! Local demo state registered.');
    }, 900);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCallback()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedType('callback');
      setLastSubmissionSummary({ ...callbackData });
      triggerConfetti();
      onShowToast('Callback request scheduled! An advisor will call at your preferred time.');
    }, 800);
  };

  const handleDownloadBrochure = () => {
    // Generate simulated downloadable brochure text blob
    const prog = PROGRAMMES.find(p => p.id === (lastSubmissionSummary?.programmeOfInterest || formData.programmeOfInterest));
    const content = `NEXORA AI ACADEMY - OFFICIAL SYLLABUS & ADMISSIONS BRIEF
============================================================
Track: ${prog?.title || 'Generative AI & LLM Engineering'}
Category: ${prog?.categoryLabel || 'AI & Generative AI'}
Illustrative Duration: ${prog?.duration || '10 Weeks'}
Level: ${prog?.difficulty || 'Intermediate'}

PROJECT OUTCOME:
${prog?.projectOutcome || 'Production RAG assistant with verified citations.'}

WEEKLY MILESTONES:
${prog?.weeklyBreakdown.map(w => `- ${w.week}: ${w.topic} (Deliverable: ${w.deliverable})`).join('\n') || ''}

TOOLS MASTERED:
${prog?.toolsLearned.join(', ') || 'Python, LangChain, ChromaDB, FastAPI'}

Admissions Contact: admissions@nexora.academy
Website: https://nexora.academy
============================================================
Note: Nexora is a practical skills platform. Zero fake guarantees. 100% project driven.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Nexora_${prog?.id || 'curriculum'}_Brief.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onShowToast('Curriculum syllabus brief downloaded to your device!');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="register" className="py-20 md:py-28 bg-offwhite relative scroll-mt-20 w-full">
      <div className="site-container">
        
        {/* Main Registration Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-premium overflow-hidden grid grid-cols-1 lg:grid-cols-12 text-left">
          
          {/* Left Column: Context, Reassurance & Value (5 cols) */}
          <div className="lg:col-span-5 bg-midnight text-white p-6 sm:p-10 xl:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Background architectural glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet/20 border border-violet/30 text-lavender text-xs font-mono font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-skyblue" />
                <span>Admissions & Inquiries</span>
              </div>

              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                Your Next Chapter Starts Here.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Take the first step toward building real AI software and modern digital capabilities. Complete the application below or request a 15-minute diagnostic call with an advisor.
              </p>

              {/* What Happens Next Checklist */}
              <div className="space-y-4 mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  What Happens After You Apply:
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-midnight-800 border border-violet/30 flex items-center justify-center text-skyblue font-mono text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Application Review</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-0.5">We review your background and target learning goals within 24 business hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-midnight-800 border border-violet/30 flex items-center justify-center text-violet-light font-mono text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Curriculum Diagnostic</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Confirm prerequisites, project scope, and cohort schedule alignment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-midnight-800 border border-violet/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Build Environment Setup</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Receive access to starter boilerplates and kick off Sprint 01.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Reassurance Note */}
            <div className="pt-6 border-t border-violet/20 flex items-center gap-3 text-xs text-slate-300">
              <Lock className="w-4 h-4 text-violet shrink-0" />
              <span>
                <strong>Zero External Transmission:</strong> Local demo state. Your information remains strictly private.
              </span>
            </div>
          </div>

          {/* Right Column: Forms / Confirmation Screen (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 xl:p-14 bg-white">
            
            {/* SUCCESS CONFIRMATION STATE */}
            {isSubmitted ? (
              <div className="py-6 sm:py-8 space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-600 shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
                    {submittedType === 'application' ? 'Application Registered' : 'Callback Request Confirmed'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-midnight tracking-tight">
                    Thank You, {lastSubmissionSummary?.fullName || 'Builder'}!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    {submittedType === 'application'
                      ? 'Your registration has been saved in local demo mode. We are excited for your learning journey.'
                      : 'Your diagnostic callback has been scheduled. An advisor will reach out during your preferred window.'}
                  </p>
                </div>

                {/* Submitted Summary Box */}
                <div className="p-4 rounded-2xl bg-offwhite border border-slate-200 text-left max-w-md mx-auto text-xs space-y-2">
                  <div className="font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Submitted Registration Summary:
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="text-slate-500">Applicant:</span>
                    <span className="font-semibold text-midnight">{lastSubmissionSummary?.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="text-slate-500">Email:</span>
                    <span className="font-semibold text-midnight">{lastSubmissionSummary?.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="text-slate-500">Phone:</span>
                    <span className="font-semibold text-midnight">{lastSubmissionSummary?.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="text-slate-500">Programme Track:</span>
                    <span className="font-semibold text-violet truncate max-w-[200px]">
                      {PROGRAMMES.find(p => p.id === lastSubmissionSummary?.programmeOfInterest)?.title || lastSubmissionSummary?.programmeOfInterest}
                    </span>
                  </div>
                  {lastSubmissionSummary?.preferredFormat && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Format:</span>
                      <span className="font-semibold text-midnight">{lastSubmissionSummary.preferredFormat}</span>
                    </div>
                  )}
                </div>

                {/* Next Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleDownloadBrochure}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-midnight hover:bg-midnight-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download className="w-4 h-4 text-skyblue" />
                    <span>Download Curriculum Brief</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* FORM INTERFACE */
              <div>
                {/* Tab Switcher */}
                <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-offwhite border border-slate-200 mb-6">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('application');
                      setErrors({});
                    }}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'application'
                        ? 'bg-midnight text-white shadow-sm'
                        : 'text-slate-600 hover:text-midnight'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Full Application</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('callback');
                      setErrors({});
                    }}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'callback'
                        ? 'bg-midnight text-white shadow-sm'
                        : 'text-slate-600 hover:text-midnight'
                    }`}
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-violet" />
                    <span>Request a Callback</span>
                  </button>
                </div>

                {/* TAB 1: FULL APPLICATION FORM */}
                {activeTab === 'application' && (
                  <form onSubmit={handleApplicationSubmit} className="space-y-4" noValidate>
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-midnight mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alex Chen"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border transition-colors focus:outline-none focus:ring-2 focus:ring-violet/30 ${
                          errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-violet'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-midnight mb-1">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border transition-colors focus:outline-none focus:ring-2 focus:ring-violet/30 ${
                            errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-violet'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-midnight mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border transition-colors focus:outline-none focus:ring-2 focus:ring-violet/30 ${
                            errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-violet'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Status & Programme Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-midnight mb-1">
                          Current Status <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={formData.currentStatus}
                          onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border transition-colors focus:outline-none focus:ring-2 focus:ring-violet/30 ${
                            errors.currentStatus ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-violet'
                          }`}
                        >
                          <option value="">Select your status...</option>
                          <option value="College Undergraduate">College Undergraduate</option>
                          <option value="Final Year Student">Final Year Student</option>
                          <option value="Recent Graduate">Recent Graduate</option>
                          <option value="Working Professional">Working Professional</option>
                          <option value="Career Switcher">Career Switcher</option>
                        </select>
                        {errors.currentStatus && (
                          <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.currentStatus}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-midnight mb-1">
                          Programme of Interest <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={formData.programmeOfInterest}
                          onChange={(e) => setFormData({ ...formData, programmeOfInterest: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border border-slate-200 focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/30"
                        >
                          {PROGRAMMES.map(p => (
                            <option key={p.id} value={p.id}>
                              {p.title} ({p.categoryLabel})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Experience Level & Preferred Format */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-midnight mb-1">
                          Technical Experience Level
                        </label>
                        <select
                          value={formData.experienceLevel}
                          onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border border-slate-200 focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/30"
                        >
                          <option value="Complete Beginner">Complete Beginner (No coding experience)</option>
                          <option value="Some Coding Exposure">Some Coding Exposure (Basic scripts / HTML)</option>
                          <option value="Intermediate">Intermediate (Comfortable with Python or JS)</option>
                          <option value="Advanced Builder">Advanced Builder (Building full apps)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-midnight mb-1">
                          Preferred Learning Format
                        </label>
                        <select
                          value={formData.preferredFormat}
                          onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border border-slate-200 focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/30"
                        >
                          <option value="Weekend Live Cohort">Weekend Live Sprints (Saturdays & Sundays)</option>
                          <option value="Self-Paced with Guided Reviews">Self-Paced with Guided Code Reviews</option>
                          <option value="Evening Intensive">Evening Intensive (Weekdays 7:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Privacy Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.privacyConsent}
                          onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                          className="mt-0.5 w-4 h-4 rounded text-violet focus:ring-violet border-slate-300"
                        />
                        <span className="text-[11px] text-slate-600 leading-normal">
                          I agree to be contacted by Nexora AI Academy regarding this application. I understand that my details are stored locally and will never be shared with third parties. <span className="text-rose-500">*</span>
                        </span>
                      </label>
                      {errors.privacyConsent && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.privacyConsent}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-violet hover:bg-violet-hover text-white text-xs font-bold transition-all shadow-glow-violet active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Processing Application...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {/* TAB 2: REQUEST A CALLBACK FORM */}
                {activeTab === 'callback' && (
                  <form onSubmit={handleCallbackSubmit} className="space-y-4" noValidate>
                    <div>
                      <label className="block text-xs font-bold text-midnight mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={callbackData.fullName}
                        onChange={(e) => setCallbackData({ ...callbackData, fullName: e.target.value })}
                        placeholder="e.g. Jordan Miller"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border transition-colors focus:outline-none focus:ring-2 focus:ring-violet/30 ${
                          errors.cb_fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-violet'
                        }`}
                      />
                      {errors.cb_fullName && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.cb_fullName}</span>
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-midnight mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={callbackData.phone}
                          onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border transition-colors focus:outline-none focus:ring-2 focus:ring-violet/30 ${
                            errors.cb_phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-violet'
                          }`}
                        />
                        {errors.cb_phone && (
                          <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.cb_phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-midnight mb-1">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={callbackData.email}
                          onChange={(e) => setCallbackData({ ...callbackData, email: e.target.value })}
                          placeholder="jordan@example.com"
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border transition-colors focus:outline-none focus:ring-2 focus:ring-violet/30 ${
                            errors.cb_email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-violet'
                          }`}
                        />
                        {errors.cb_email && (
                          <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.cb_email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-midnight mb-1">
                          Preferred Call Window
                        </label>
                        <select
                          value={callbackData.preferredTime}
                          onChange={(e) => setCallbackData({ ...callbackData, preferredTime: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border border-slate-200 focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/30"
                        >
                          <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                          <option value="Evening (6:00 PM - 8:30 PM)">Evening (6:00 PM - 8:30 PM)</option>
                          <option value="Weekend Morning">Weekend Morning</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-midnight mb-1">
                          Programme of Interest
                        </label>
                        <select
                          value={callbackData.programmeOfInterest}
                          onChange={(e) => setCallbackData({ ...callbackData, programmeOfInterest: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-offwhite border border-slate-200 focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/30"
                        >
                          {PROGRAMMES.map(p => (
                            <option key={p.id} value={p.id}>
                              {p.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={callbackData.privacyConsent}
                          onChange={(e) => setCallbackData({ ...callbackData, privacyConsent: e.target.checked })}
                          className="mt-0.5 w-4 h-4 rounded text-violet focus:ring-violet border-slate-300"
                        />
                        <span className="text-[11px] text-slate-600 leading-normal">
                          I consent to receiving a 15-minute phone consultation from a Nexora academic advisor. <span className="text-rose-500">*</span>
                        </span>
                      </label>
                      {errors.cb_privacyConsent && (
                        <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.cb_privacyConsent}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-midnight hover:bg-midnight-800 text-white text-xs font-bold transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Scheduling Callback...</span>
                          </>
                        ) : (
                          <>
                            <PhoneCall className="w-4 h-4 text-skyblue" />
                            <span>Schedule Advisor Callback</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
