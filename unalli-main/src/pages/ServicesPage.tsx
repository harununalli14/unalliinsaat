import React from 'react';
import { Check, ArrowRight, Phone } from 'lucide-react';
import { servicesData } from '../data/mockData';
import { companyConfig } from '../config/companyInfo';
import { PageId } from '../types';
import serviceHeaderImage from '../assets/images/service_interior_renovation_1791730466167.jpg';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForQuote,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Page Hero Header Banner (Styled like Homepage Hero) */}
      <section className="relative min-h-[48vh] flex flex-col justify-end pt-32 pb-16 overflow-hidden bg-[#111315]">
        <div className="absolute inset-0 z-0">
          <img
            src={serviceHeaderImage}
            alt="Ünallı İnşaat Hizmetlerimiz"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/85 to-[#111315]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59A3D] mb-4">
              <span>Uzmanlık Alanlarımız</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>1994'ten Bugüne</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Hizmetlerimiz
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              Lüks villalardan kentsel apartmanlara, temelden çatıya anahtar teslim inşaattan ince mimari tadilatlara kadar profesyonel çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Phone Numbers Strip */}
      <section className="bg-[#16191D] border-y border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-wider text-white/60">
              Hizmetlerimiz Hakkında Bilgi Almak İçin Arayabilirsiniz:
            </span>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href={`tel:${companyConfig.phone1.callable}`}
                className="text-white/80 hover:text-white flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59A3D]" />
                <span className="text-[#D8CBB5] font-semibold tabular-nums">
                  {companyConfig.phone1.display}
                </span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href={`tel:${companyConfig.phone2.callable}`}
                className="text-white/80 hover:text-white flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59A3D]" />
                <span className="text-[#D8CBB5] font-semibold tabular-nums">
                  {companyConfig.phone2.display}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Grid */}
      <section className="py-20 bg-[#14171A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-[#181C20] border border-white/10 hover:border-[#D8CBB5]/40 rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between group"
              >
                {service.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#20252C]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181C20] via-transparent to-transparent opacity-85" />
                    <span className="absolute top-4 left-4 text-xs font-mono font-semibold tracking-wider text-white/90 bg-[#111315]/85 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                      {service.number}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#C59A3D] font-medium mb-1">
                      {service.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-white/5">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                          <Check className="w-3.5 h-3.5 text-[#C59A3D] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-white/40">
                      30 Yıllık Güvence
                    </span>
                    <button
                      onClick={() => {
                        onSelectServiceForQuote(service.title);
                        onNavigate('quote');
                      }}
                      className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] active:bg-[#C2AF98] rounded-sm transition-all flex items-center gap-2 shadow-sm"
                    >
                      <span>Bu Hizmet İçin Teklif Al</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Consultation CTA */}
      <section className="py-16 bg-[#111315] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Özel Bir Mimari Projeniz mi Var?
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto mb-8">
            Uzman mimar ve mühendis kadromuz arsanızı veya tadilat alanınızı değerlendirsin.
          </p>
          <button
            onClick={() => onNavigate('quote')}
            className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] rounded-sm transition-all shadow-sm"
          >
            Hemen Teklif Talebinde Bulunun
          </button>
        </div>
      </section>
    </div>
  );
};
