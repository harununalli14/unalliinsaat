import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { companyConfig } from '../config/companyInfo';
import { PageId } from '../types';
import contactHeaderImage from '../assets/images/project_modern_residence_1791730455572.jpg';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. Page Hero Header Banner (Styled like Homepage Hero) */}
      <section className="relative min-h-[48vh] flex flex-col justify-end pt-32 pb-16 overflow-hidden bg-[#111315]">
        <div className="absolute inset-0 z-0">
          <img
            src={contactHeaderImage}
            alt="Ünallı İnşaat İletişim"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/85 to-[#111315]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59A3D] mb-4">
              <span>Bize Ulaşın</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>Doğrudan İletişim</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              İletişim
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              Projeleriniz, danışmanlık talepleriniz veya keşif görüşmeleri için bize doğrudan ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Details Section */}
      <section className="py-20 bg-[#14171A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: 2 Phone Numbers & Details */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                İletişim Kanallarımız
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Telefon 1 Card */}
                <a
                  href={`tel:${companyConfig.phone1.callable}`}
                  className="p-6 bg-[#181C20] hover:bg-[#1E232A] border border-white/10 hover:border-[#D8CBB5]/40 rounded-sm transition-all group block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-[#C59A3D]/10 text-[#C59A3D] rounded-sm group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 block">
                        İletişim Numarası 1
                      </span>
                      <span className="text-xs font-medium text-[#D8CBB5]">
                        {companyConfig.phone1.label}
                      </span>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-white tabular-nums">
                    {companyConfig.phone1.display}
                  </div>
                  <div className="text-xs text-white/50 mt-2">
                    Hemen aramak için tıklayın
                  </div>
                </a>

                {/* Telefon 2 Card */}
                <a
                  href={`tel:${companyConfig.phone2.callable}`}
                  className="p-6 bg-[#181C20] hover:bg-[#1E232A] border border-white/10 hover:border-[#D8CBB5]/40 rounded-sm transition-all group block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-[#C59A3D]/10 text-[#C59A3D] rounded-sm group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 block">
                        İletişim Numarası 2
                      </span>
                      <span className="text-xs font-medium text-[#D8CBB5]">
                        {companyConfig.phone2.label}
                      </span>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-white tabular-nums">
                    {companyConfig.phone2.display}
                  </div>
                  <div className="text-xs text-white/50 mt-2">
                    Hemen aramak için tıklayın
                  </div>
                </a>
              </div>

              {/* Email & Address */}
              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${companyConfig.email.mailto}`}
                  className="p-6 bg-[#181C20] hover:bg-[#1E232A] border border-white/10 rounded-sm transition-all flex items-center gap-4 block"
                >
                  <div className="p-2.5 bg-white/5 text-white/80 rounded-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 block">
                      Kurumsal E-posta
                    </span>
                    <span className="text-base font-semibold text-white">
                      {companyConfig.email.display}
                    </span>
                  </div>
                </a>

                {/* Address & Working Hours */}
                <div className="p-6 bg-[#181C20] border border-white/10 rounded-sm space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-white/5 text-white/80 rounded-sm shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 block">
                        Ofis & Merkez Adresi
                      </span>
                      <div className="text-sm font-semibold text-white mt-0.5">
                        {companyConfig.address.line1}
                      </div>
                      <div className="text-xs text-white/70">
                        {companyConfig.address.line2}, {companyConfig.address.city} / {companyConfig.address.country}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center gap-3 text-xs text-white/70">
                    <Clock className="w-4 h-4 text-[#C59A3D] shrink-0" />
                    <span>{companyConfig.workingHours.weekdays} · {companyConfig.workingHours.weekend}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quote Page Direct Link Box */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 bg-[#181C20] border border-white/10 rounded-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#C59A3D] font-semibold mb-2">
                  Teklif & Keşif
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Detaylı Proje Teklifi Almak İster misiniz?
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-6">
                  Arsanızın bilgileri, villa projeniz veya tadilat gereksinimleriniz için özel formumuzu doldurarak doğrudan teklif talebinde bulunabilirsiniz.
                </p>
                <div className="p-4 bg-[#111315] border border-white/5 rounded-sm text-xs text-white/70 space-y-2 mb-6">
                  <div className="text-white font-medium">Teklif Sürecimiz:</div>
                  <div>1. Form talebiniz teknik ekibimize ulaşır.</div>
                  <div>2. En geç 24 saat içinde ön değerlendirme yapılır.</div>
                  <div>3. Gerekirse ücretsiz keşif randevusu organize edilir.</div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('quote')}
                className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] active:bg-[#C2AF98] rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Teklif Formuna Git</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
