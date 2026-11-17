import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onExploreClick: () => void;
  onAdvisorClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreClick, onAdvisorClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['programmes', 'path', 'projects', 'experience', 'outcomes', 'faqs', 'register'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programmes', href: '#programmes', id: 'programmes' },
    { name: 'Learning Path', href: '#path', id: 'path' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Outcomes', href: '#outcomes', id: 'outcomes' },
    { name: 'FAQs', href: '#faqs', id: 'faqs' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight/90 backdrop-blur-md border-b border-violet/20 py-3.5 shadow-lg shadow-midnight/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="site-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-violet rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet to-midnight-800 border border-violet/40 flex items-center justify-center text-white shadow-glow-violet group-hover:scale-105 transition-transform duration-200">
              <span className="font-mono font-black text-lg tracking-wider text-white">N</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`font-extrabold text-xl tracking-tight transition-colors ${
                  isScrolled ? 'text-white' : 'text-midnight'
                }`}>
                  NEXORA
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold tracking-wider bg-violet/15 text-violet uppercase border border-violet/30">
                  ACADEMY
                </span>
              </div>
              <span className={`text-[10px] tracking-wider font-medium uppercase ${
                isScrolled ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Build Real AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-5 py-2 rounded-full border border-violet/15 bg-white/80 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-midnight text-white shadow-sm'
                      : 'text-midnight-700 hover:text-violet hover:bg-lavender/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right-side CTAs */}
          <div className="hidden sm:flex items-center gap-3.5">
            <button
              onClick={onAdvisorClick}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all border ${
                isScrolled
                  ? 'text-lavender border-violet/30 hover:bg-violet/15'
                  : 'text-midnight-800 border-slate-300 hover:border-violet/40 hover:bg-white shadow-sm'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-violet" />
              <span>Talk to Advisor</span>
            </button>

            <button
              onClick={onExploreClick}
              className="group relative flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl text-white bg-violet hover:bg-violet-hover transition-all duration-200 shadow-glow-violet active:scale-95"
            >
              <span>Explore Programmes</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onExploreClick}
              className="px-3.5 py-1.5 text-xs font-bold rounded-lg text-white bg-violet shadow-sm"
            >
              Explore
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border focus:outline-none transition-colors ${
                isScrolled
                  ? 'text-white border-violet/30 hover:bg-midnight-800'
                  : 'text-midnight border-slate-300 hover:bg-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-midnight-950/95 backdrop-blur-xl border-b border-violet/20 px-6 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-midnight-800 transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-violet/60" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-midnight-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onAdvisorClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold rounded-xl text-lavender border border-violet/30 hover:bg-violet/10 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-violet" />
              <span>Talk to a Learning Advisor</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold rounded-xl text-white bg-violet hover:bg-violet-hover transition-colors shadow-glow-violet"
            >
              <span>Explore Programmes</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
