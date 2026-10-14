import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/mockData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="hizmetler" className="py-24 bg-[#14171A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D8CBB5] mb-3">
            <span>Uzmanlık Alanlarımız</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Eksiksiz Çözümler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Temelden Çatıya, Projeden Anahtara Kapsamlı Hizmetler
          </h2>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Ünallı İnşaat olarak her projeyi sadece bir yapı olarak değil; nesiller boyu güvenle yaşanacak, estetik değeri yüksek birer yaşam eseri olarak inşa ediyoruz.
          </p>
        </div>

        {/* 4 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#181C20] border border-white/10 hover:border-[#D8CBB5]/40 rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Preview with Aspect Ratio & Fallback */}
              {service.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#20252C]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181C20] via-transparent to-transparent opacity-80" />
                  
                  {/* Human Editorial Numbering */}
                  <span className="absolute top-4 left-4 text-xs font-mono font-semibold tracking-wider text-white/90 bg-[#111315]/80 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                    {service.number}
                  </span>
                </div>
              )}

              {/* Service Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#D8CBB5] font-medium mb-1">
                    {service.subtitle}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                        <Check className="w-3.5 h-3.5 text-[#D8CBB5] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service CTA */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/40">
                    1994 Güvencesiyle
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D8CBB5] hover:text-white transition-colors"
                  >
                    <span>Teklif İste</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
