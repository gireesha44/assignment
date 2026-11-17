import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Menu, 
  X, 
  PlusCircle, 
  User, 
  PhoneCall, 
  ShieldCheck, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onOpenSignIn: () => void;
  onOpenListBusiness: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  savedCount?: number;
  onOpenSaved?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSignIn,
  onOpenListBusiness,
  onNavigate,
  activeSection,
  savedCount = 0,
  onOpenSaved
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'discover', label: 'Discover Care' },
    { id: 'services', label: 'Services' },
    { id: 'passport', label: 'PawCare Passport', isNew: true },
    { id: 'emergency', label: 'Emergency Care', isEmergency: true },
    { id: 'providers', label: 'For Providers' },
    { id: 'trust', label: 'About Us' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-slate-200/80 shadow-soft-sm py-2.5' 
          : 'bg-[#FAF9F5] border-b border-transparent py-4'
      }`}
    >
      <div className="app-container">
        <div className="flex items-center justify-between">
          
          {/* Logo & Tagline */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#23866B] rounded-lg"
            aria-label="Practo for Animals Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#153D35] flex items-center justify-center text-white shadow-soft-md group-hover:bg-[#23866B] transition-colors">
              {/* Pet paw + cross hybrid icon */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" opacity="0.3"/>
                <path d="M12 5.5c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4-1.1-2.4-2.4-2.4zm-4.5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 5.5c-1.4 0-3.5.9-3.5 2.5 0 1.9 2.5 3.5 6 3.5s6-1.6 6-3.5c0-1.6-2.1-2.5-3.5-2.5h-5z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-[#153D35]">
                  practo<span className="text-[#23866B] font-light ml-1.5 text-lg">for Animals</span>
                </span>
              </div>
              <span className="hidden sm:block text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Every Paw Deserves Better Care
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeSection === item.id
                    ? 'text-[#153D35] bg-[#E7F4EC] font-semibold'
                    : item.isEmergency
                    ? 'text-[#F28C75] hover:text-[#e37860] hover:bg-[#FDF2F0]'
                    : 'text-slate-700 hover:text-[#153D35] hover:bg-slate-100/70'
                }`}
              >
                {item.label}
                {item.isEmergency && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28C75] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F28C75]"></span>
                  </span>
                )}
                {item.isNew && (
                  <span className="px-1.5 py-0.2 text-[10px] font-bold tracking-wider uppercase bg-[#E7F4EC] text-[#23866B] rounded-full border border-[#23866B]/30">
                    New
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {savedCount > 0 && (
              <button
                onClick={onOpenSaved}
                className="relative p-2 text-slate-600 hover:text-[#153D35] hover:bg-slate-100 rounded-lg transition-colors"
                title={`${savedCount} saved providers`}
                aria-label={`${savedCount} saved providers`}
              >
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              </button>
            )}

            <button
              onClick={onOpenSignIn}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-[#153D35] hover:bg-slate-100/80 rounded-lg transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4 text-slate-500" />
              Sign In
            </button>

            <button
              onClick={onOpenListBusiness}
              className="px-4 py-2 text-sm font-semibold text-white bg-[#23866B] hover:bg-[#1d6f58] rounded-xl shadow-soft-sm transition-all duration-150 flex items-center gap-2 hover:shadow-green-glow"
            >
              <PlusCircle className="w-4 h-4" />
              List Your Business
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            {savedCount > 0 && (
              <button
                onClick={onOpenSaved}
                className="relative p-2 text-slate-600 hover:text-slate-900 rounded-lg"
                aria-label={`${savedCount} saved providers`}
              >
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                <span className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-[#FAF9F5] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-[#E7F4EC] text-[#153D35] font-semibold'
                    : item.isEmergency
                    ? 'bg-[#FDF2F0] text-[#D95338] font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                {item.isEmergency && (
                  <span className="px-2 py-0.5 text-xs font-semibold bg-[#F28C75] text-white rounded-full">
                    24/7 SOS
                  </span>
                )}
                {item.isNew && (
                  <span className="px-2 py-0.5 text-xs font-semibold bg-[#E7F4EC] text-[#23866B] rounded-full">
                    Demo
                  </span>
                )}
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignIn();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-slate-700 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 transition-colors"
              >
                Sign In to Account
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenListBusiness();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#23866B] hover:bg-[#1d6f58] rounded-xl shadow-soft-sm transition-colors flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                List Your Business (Free)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
