import React from 'react';
import { X, Calendar, MapPin, Maximize2, Shield, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';
import { companyConfig } from '../config/companyInfo';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProjectForQuote: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProjectForQuote,
}) => {
  if (!project) return null;

  const whatsappHref = `https://wa.me/${companyConfig.whatsapp.number}?text=${encodeURIComponent(
    `Merhaba, "${project.title}" projenizi inceledim. Bu tarz bir proje için bilgi ve teklif almak istiyorum.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#16191D] border border-white/10 rounded-sm w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#111315]/80 hover:bg-[#111315] text-white/70 hover:text-white rounded-sm border border-white/10 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Header */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#20252C]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16191D] via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D8CBB5] font-semibold bg-[#111315]/80 px-2.5 py-1 rounded-sm border border-white/10">
                {project.categoryLabel}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                {project.title}
              </h2>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/80 bg-[#111315]/80 px-3 py-1.5 rounded-sm border border-white/10">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D8CBB5]" />
                {project.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D8CBB5]" />
                {project.year}
              </span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2">
              Proje Özeti
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-[#111315] border border-white/5 rounded-sm text-xs">
            <div>
              <span className="text-white/40 block mb-1">Toplam Alan</span>
              <span className="text-white font-semibold tabular-nums text-sm">
                {project.area}
              </span>
            </div>
            <div>
              <span className="text-white/40 block mb-1">Mimari Üslup</span>
              <span className="text-white font-semibold">
                {project.details.architecturalStyle}
              </span>
            </div>
            <div>
              <span className="text-white/40 block mb-1">Tamamlanma Süresi</span>
              <span className="text-white font-semibold">
                {project.details.duration}
              </span>
            </div>
          </div>

          {/* Architectural Scope & Features */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">
              Uygulanan Standartlar & Özellikler
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.details.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                  <div className="w-1.5 h-1.5 bg-[#D8CBB5] rounded-full shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-white/50">
              Bu proje veya benzeri bir arsanız için özel teklif hazırlayabiliriz.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 rounded-sm border border-white/20 text-center"
              >
                WhatsApp ile Danış
              </a>
              <button
                onClick={() => {
                  onSelectProjectForQuote(project.title);
                  onClose();
                }}
                className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] rounded-sm flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Teklif İste</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
