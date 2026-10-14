import React from 'react';
import { MessageSquare, ShieldCheck, Award } from 'lucide-react';
import { companyConfig } from '../config/companyInfo';
import heroImage from '../assets/images/hero_architectural_villa_1791730432063.jpg';

export const Hero: React.FC = () => {
  const whatsappHref = `https://wa.me/${companyConfig.whatsapp.number}?text=${encodeURIComponent(
    companyConfig.whatsapp.defaultMessage
  )}`;

  return (
    <section id="anasayfa" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#111315]">
      {/* Background Architectural Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ünallı İnşaat - Modern Mimari Villa Projesi"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/80 to-[#111315]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111315]/90 via-[#111315]/50 to-transparent" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          {/* Subtle Editorial Kicker (No pills, clean unboxed text) */}
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#D8CBB5] mb-6">
            <span>Kuruluş 1994</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>30 Yıllık Güven ve Mühendislik Geleneği</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12] text-balance">
            Estetik ve Güvenin <br />
            <span className="text-[#D8CBB5]">Kusursuz Mimarisi</span>
          </h1>

          {/* Impressive Introduction Paragraph */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl font-normal">
            1994 yılından bugüne; modern lüks villalar, çağdaş konutlar ve anahtar teslim tadilat çözümleriyle hayallerinizdeki yaşam alanlarını sağlam temeller üzerine inşa ediyoruz.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] active:bg-[#C2AF98] rounded-sm transition-all text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp ile Hızlı İletişim</span>
            </a>

            <a
              href="#iletisim"
              className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 rounded-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Teklif Talebi Oluşturun</span>
            </a>
          </div>

          {/* Trust markers */}
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

      {/* Adjoining Bottom Trust Strip (KPIs with Tabular Figures) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10 bg-[#111315]/70 backdrop-blur-sm p-6 rounded-sm">
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
  );
};
