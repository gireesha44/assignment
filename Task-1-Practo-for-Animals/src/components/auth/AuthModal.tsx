import React, { useState } from 'react';
import { X, User, Building2, CheckCircle2, ShieldCheck, Mail, Lock, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; role: 'parent' | 'provider'; email: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [role, setRole] = useState<'parent' | 'provider'>('parent');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [fullName, setFullName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const effectiveName = fullName.trim() || (role === 'parent' ? 'Aditi Sharma (Pet Parent)' : 'Apex Hospital Care Desk');
    onLoginSuccess({
      name: effectiveName,
      role,
      email: email || 'demo@practoforanimals.com'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-label="Account Login"
      >
        
        {/* Modal Header */}
        <div className="p-6 bg-[#FAF9F5] border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#23866B] bg-[#E7F4EC] px-2.5 py-0.5 rounded-full">
              Demo Portal Access
            </span>
            <h3 className="font-extrabold text-xl text-[#153D35] mt-1">
              {isRegistering ? 'Create Your Account' : 'Sign in to Practo for Animals'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          
          {/* Role Switcher */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Select Your Profile Type
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setRole('parent')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  role === 'parent'
                    ? 'bg-white text-[#153D35] shadow-soft-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="w-3.5 h-3.5 text-[#23866B]" />
                <span>Pet Parent</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('provider')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  role === 'provider'
                    ? 'bg-white text-[#153D35] shadow-soft-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-[#23866B]" />
                <span>Care Provider</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegistering && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={role === 'parent' ? 'e.g. Rahul Verma' : 'e.g. City Vet Care Clinic'}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-bold text-slate-700">Password *</label>
                {!isRegistering && (
                  <span className="text-[11px] text-[#23866B] font-semibold hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#23866B]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#23866B] hover:bg-[#1d6f58] text-white font-bold text-xs rounded-xl shadow-soft-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>{isRegistering ? 'Complete Registration' : 'Sign In (Instant Demo)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Autofill Hint */}
          <div className="p-3 bg-[#FAF9F5] rounded-xl border border-slate-200 text-[11px] text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Demo Login Simulation:</p>
            <p>Click Sign In directly to test authenticated sessions without needing real credentials.</p>
          </div>

          <div className="text-center pt-1">
            <button
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-xs font-bold text-[#23866B] hover:underline"
            >
              {isRegistering ? 'Already have an account? Sign in' : "Don't have an account yet? Register here"}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
