/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickEditGuideModal } from './components/QuickEditGuideModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { PageId } from './types';

// Hash to PageId mapping
const HASH_TO_PAGE: Record<string, PageId> = {
  '': 'home',
  '#': 'home',
  '#anasayfa': 'home',
  '#hizmetler': 'services',
  '#hakkimizda': 'about',
  '#iletisim': 'contact',
  '#teklif-al': 'quote',
};

const PAGE_TO_HASH: Record<PageId, string> = {
  home: '#anasayfa',
  services: '#hizmetler',
  about: '#hakkimizda',
  contact: '#iletisim',
  quote: '#teklif-al',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash;
    return HASH_TO_PAGE[hash] || 'home';
  });

  const [selectedService, setSelectedService] = useState<string>('Lüks Villa Projesi');
  const [isQuickGuideOpen, setIsQuickGuideOpen] = useState(false);

  // Sync hash changes with currentPage state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const targetPage = HASH_TO_PAGE[hash] || 'home';
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = PAGE_TO_HASH[page];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForQuote = (serviceName: string) => {
    setSelectedService(serviceName);
    navigateTo('quote');
  };

  return (
    <div className="min-h-screen bg-[#111315] text-[#E2E8F0] selection:bg-[#C59A3D] selection:text-[#111315] flex flex-col justify-between">
      {/* 1. Fixed Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuickGuide={() => setIsQuickGuideOpen(true)}
      />

      {/* 2. Distinct Dedicated Pages (Home-like architectural presence) */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}

        {currentPage === 'quote' && (
          <QuotePage
            initialService={selectedService}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuickGuide={() => setIsQuickGuideOpen(true)}
      />

      {/* 4. Floating WhatsApp (Strictly located exclusively here in bottom-right) */}
      <FloatingWhatsApp />

      {/* 5. Quick Edit Guide Modal */}
      <QuickEditGuideModal
        isOpen={isQuickGuideOpen}
        onClose={() => setIsQuickGuideOpen(false)}
      />
    </div>
  );
}
