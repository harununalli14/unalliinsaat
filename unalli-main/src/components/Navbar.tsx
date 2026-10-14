import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { companyConfig } from '../config/companyInfo';
import { Logo } from './Logo';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuickGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuickGuide,
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

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111315]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center tracking-tight whitespace-nowrap shrink-0 group transition-transform duration-200 hover:scale-[1.01] text-left cursor-pointer"
            aria-label="Ünallı İnşaat Ana Sayfa"
          >
            <Logo size="md" theme="dark" />
          </button>

          {/* Zone 2: Navigation Links (Single-line, page state aware) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-white font-semibold border-b border-[#C59A3D] pb-0.5'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'services'
                  ? 'text-white font-semibold border-b border-[#C59A3D] pb-0.5'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Hizmetlerimiz
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'about'
                  ? 'text-white font-semibold border-b border-[#C59A3D] pb-0.5'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Hakkımızda
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-white font-semibold border-b border-[#C59A3D] pb-0.5'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              İletişim
            </button>
          </nav>

          {/* Zone 3: Primary CTA (Teklif Alın - Navigates to dedicated Quote Page) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('quote')}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm ${
                currentPage === 'quote'
                  ? 'bg-white text-[#111315]'
                  : 'text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] active:bg-[#C2AF98]'
              }`}
            >
              Teklif Alın
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-white/30 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#16191D] border-b border-white/10 px-6 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 text-base font-medium text-white/90">
            <button
              onClick={() => handleNavClick('home')}
              className={`py-2 text-left border-b border-white/5 transition-colors ${
                currentPage === 'home' ? 'text-[#D8CBB5] font-bold' : 'hover:text-[#D8CBB5]'
              }`}
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`py-2 text-left border-b border-white/5 transition-colors ${
                currentPage === 'services' ? 'text-[#D8CBB5] font-bold' : 'hover:text-[#D8CBB5]'
              }`}
            >
              Hizmetlerimiz
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`py-2 text-left border-b border-white/5 transition-colors ${
                currentPage === 'about' ? 'text-[#D8CBB5] font-bold' : 'hover:text-[#D8CBB5]'
              }`}
            >
              Hakkımızda
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`py-2 text-left border-b border-white/5 transition-colors ${
                currentPage === 'contact' ? 'text-[#D8CBB5] font-bold' : 'hover:text-[#D8CBB5]'
              }`}
            >
              İletişim
            </button>
            <button
              onClick={() => handleNavClick('quote')}
              className={`py-2 text-left border-b border-white/5 transition-colors ${
                currentPage === 'quote' ? 'text-[#D8CBB5] font-bold' : 'hover:text-[#D8CBB5]'
              }`}
            >
              Teklif Alın
            </button>

            {/* Direct Phone Numbers for Mobile */}
            <div className="pt-4 flex flex-col gap-2.5">
              <span className="text-[11px] uppercase tracking-wider text-white/40">
                Doğrudan Arayın:
              </span>
              <a
                href={`tel:${companyConfig.phone1.callable}`}
                className="w-full py-2.5 px-3 text-left text-xs font-semibold text-white bg-[#111315] hover:bg-[#1E232A] rounded-sm flex items-center justify-between border border-white/10"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C59A3D]" />
                  {companyConfig.phone1.label}
                </span>
                <span className="text-[#D8CBB5] tabular-nums font-mono">
                  {companyConfig.phone1.display}
                </span>
              </a>

              <a
                href={`tel:${companyConfig.phone2.callable}`}
                className="w-full py-2.5 px-3 text-left text-xs font-semibold text-white bg-[#111315] hover:bg-[#1E232A] rounded-sm flex items-center justify-between border border-white/10"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C59A3D]" />
                  {companyConfig.phone2.label}
                </span>
                <span className="text-[#D8CBB5] tabular-nums font-mono">
                  {companyConfig.phone2.display}
                </span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuickGuide();
                }}
                className="text-xs text-white/50 hover:text-white/80 pt-2 text-center"
              >
                Bilgileri Nasıl Güncellerim?
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
