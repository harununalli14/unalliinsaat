import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Phone, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';
import { companyConfig } from '../config/companyInfo';
import { servicesData } from '../data/mockData';
import { PageId } from '../types';
import { LogoEmblem } from '../components/Logo';
import { AnimatedBrandShowcase } from '../components/AnimatedBrandShowcase';
import heroImage from '../assets/images/hero_architectural_villa_1791730432063.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectServiceForQuote,
}) => {
  // IntersectionObserver to repeat entrance animation whenever hero brand enters the viewport
  const heroBrandRef = useRef<HTMLDivElement>(null);
  const [isHeroBrandVisible, setIsHeroBrandVisible] = useState(false);

  useEffect(() => {
    const element = heroBrandRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When entering viewport, trigger entrance; when exiting, reset so it replays upon re-entry
        if (entry.isIntersecting) {
          setIsHeroBrandVisible(true);
        } else {
          setIsHeroBrandVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-0">
      {/* 1. Main Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#111315]">
        {/* Background Architectural Photography with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Ünallı İnşaat - Modern Mimari ve İnşaat"
            className="w-full h-full object-cover object-center scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/80 to-[#111315]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111315]/90 via-[#111315]/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
          <div className="max-w-3xl">
            {/* Logo and Company Name Header with Repeating Subtle Entrance Animation */}
            <div
              ref={heroBrandRef}
              className={`inline-flex items-center gap-4 mb-6 p-2.5 pr-6 bg-[#16191D]/85 backdrop-blur-md border border-white/10 hover:border-[#C59A3D]/40 rounded-sm transition-all duration-700 ease-out shadow-2xl ${
                isHeroBrandVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
              }`}
            >
              <div className="p-1 bg-[#111315]/70 rounded-sm border border-white/5 shrink-0">
                <LogoEmblem size={44} />
              </div>
              <div className="flex flex-col text-left leading-none select-none">
                <div className="flex items-baseline font-extrabold text-xl sm:text-2xl font-sans tracking-tight">
                  <span className="text-white tracking-wider">ÜNALLI</span>
                  <span className="text-[#C59A3D] ml-1.5 tracking-wider">İNŞAAT</span>
                </div>
                <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-white/60 mt-1">
                  İNŞAAT <span className="text-[#C59A3D]">·</span> TADİLAT
                </span>
              </div>
            </div>

            {/* Editorial Kicker */}
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#D8CBB5] mb-5">
              <span>Kuruluş 1994</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>30 Yıllık Güven ve Mühendislik Geleneği</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12] text-balance">
              Estetik ve Güvenin <br />
              <span className="text-[#C59A3D]">Kusursuz Mimarisi</span>
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl font-normal">
              1994 yılından bugüne; modern lüks villalar, çağdaş konutlar ve anahtar teslim tadilat çözümleriyle hayallerinizdeki yaşam alanlarını sağlam temeller üzerine inşa ediyoruz.
            </p>

            {/* Action CTAs (No duplicate WhatsApp button here, WhatsApp stays exclusively at bottom right) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] active:bg-[#C2AF98] rounded-sm transition-all text-center flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Hizmetlerimizi İnceleyin</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('quote')}
                className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 rounded-sm transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Teklif Alın</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D8CBB5]" />
                <span>Depreme Dayanıklı Statik Mühendislik</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D8CBB5]" />
                <span>Noter Onaylı Teslimat Güvencesi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Adjoining Bottom Trust Strip */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10 bg-[#111315]/80 backdrop-blur-sm p-6 rounded-sm">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                1994
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1">
                Kuruluş Yılı
              </span>
              <span className="text-[11px] text-[#D8CBB5]/80 mt-0.5">
                Köklü İnşaat Mirası
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                30+
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1">
                Yıllık Sektör Deneyimi
              </span>
              <span className="text-[11px] text-[#D8CBB5]/80 mt-0.5">
                Kesintisiz Hizmet
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                150+
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1">
                Tamamlanan Yapı
              </span>
              <span className="text-[11px] text-[#D8CBB5]/80 mt-0.5">
                Villa, Konut & Tadilat
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight">
                %100
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider mt-1">
                Zamanında Teslim
              </span>
              <span className="text-[11px] text-[#D8CBB5]/80 mt-0.5">
                Sözleşmeye Sadakat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Direct Phone Contact Strip (Showing both numbers) */}
      <section className="bg-[#16191D] border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-white/80">
              <Phone className="w-4 h-4 text-[#C59A3D]" />
              <span>Doğrudan İletişim Hatlarımız:</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href={`tel:${companyConfig.phone1.callable}`}
                className="px-4 py-2 bg-[#111315] hover:bg-[#1E232A] border border-white/10 hover:border-[#D8CBB5]/40 rounded-sm text-white transition-all flex items-center gap-2"
              >
                <span className="text-white/40">{companyConfig.phone1.label}:</span>
                <span className="font-semibold text-[#D8CBB5] tabular-nums">
                  {companyConfig.phone1.display}
                </span>
              </a>
              <a
                href={`tel:${companyConfig.phone2.callable}`}
                className="px-4 py-2 bg-[#111315] hover:bg-[#1E232A] border border-white/10 hover:border-[#D8CBB5]/40 rounded-sm text-white transition-all flex items-center gap-2"
              >
                <span className="text-white/40">{companyConfig.phone2.label}:</span>
                <span className="font-semibold text-[#D8CBB5] tabular-nums">
                  {companyConfig.phone2.display}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Animated Brand & Logo Showcase (Efektli Logo & Firma İsmi) */}
      <section>
        <AnimatedBrandShowcase />
      </section>

      {/* 4. Services Overview Teaser */}
      <section className="py-20 bg-[#14171A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C59A3D] mb-2">
                Faaliyet Alanlarımız
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Neler Yapıyoruz?
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D8CBB5] hover:text-white transition-colors"
            >
              <span>Tüm Hizmetleri Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-[#181C20] border border-white/10 hover:border-[#D8CBB5]/40 rounded-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#C59A3D] block mb-3">
                    {service.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D8CBB5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-6">
                    {service.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onSelectServiceForQuote(service.title);
                    onNavigate('quote');
                  }}
                  className="inline-flex items-center gap-1 text-xs font-medium text-white/80 group-hover:text-[#D8CBB5] transition-colors"
                >
                  <span>Teklif Al</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Heritage Preview Teaser */}
      <section className="py-20 bg-[#111315] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-[#16191D] border border-white/10 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C59A3D] mb-2">
                1994 Yılından Günümüze
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                30 Yıldır Taviz Verilmeyen İnşaat Disiplini
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Deprem yönetmeliklerine tam uyumlu statik projeler, yüksek dayanımlı beton kalitesi ve şeffaf bütçe disipliniyle geleceğe sağlam yapılar bırakıyoruz.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 rounded-sm transition-all text-center"
              >
                Hakkımızda Detayları
              </button>
              <button
                onClick={() => onNavigate('quote')}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] rounded-sm transition-all text-center shadow-sm"
              >
                Bizimle İletişime Geçin
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
