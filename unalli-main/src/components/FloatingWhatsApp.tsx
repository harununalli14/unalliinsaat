import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyConfig } from '../config/companyInfo';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappHref = `https://wa.me/${companyConfig.whatsapp.number}?text=${encodeURIComponent(
    companyConfig.whatsapp.defaultMessage
  )}`;

  return (
    <aside
      aria-label="WhatsApp İletişim"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#1E232A] hover:bg-[#252C35] text-white border border-emerald-500/40 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
          <MessageSquare className="w-4 h-4 fill-white" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider font-mono">
            WhatsApp: {companyConfig.whatsapp.display}
          </span>
          <span className="text-xs font-semibold text-white/90">
            Hızlı Danışma Hattı
          </span>
        </div>
      </a>
    </aside>
  );
};
