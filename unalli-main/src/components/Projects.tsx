import React, { useState } from 'react';
import { projectsData } from '../data/mockData';
import { ProjectItem, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';

interface ProjectsProps {
  onSelectProjectForQuote: (projectName: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projeler" className="py-24 bg-[#111315] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D8CBB5] mb-3">
              <span>Portföyümüz</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>İmzamızı Taşıyan Projeler</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Seçkin Mimari ve Mühendislik Eserlerimiz
            </h2>
            <p className="mt-3 text-base text-white/70">
              Lüks müstakil villalardan kentsel konutlara ve kapsamlı iç mekan restorasyonlarına kadar tamamlanan referanslarımız.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control style) */}
          <div className="flex items-center gap-1 p-1 bg-[#1A1E24] border border-white/10 rounded-sm self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#D8CBB5] text-[#111315] font-semibold shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Tümü ({projectsData.length})
            </button>
            <button
              onClick={() => setActiveCategory('villa')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
                activeCategory === 'villa'
                  ? 'bg-[#D8CBB5] text-[#111315] font-semibold shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Lüks Villalar
            </button>
            <button
              onClick={() => setActiveCategory('apartment')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
                activeCategory === 'apartment'
                  ? 'bg-[#D8CBB5] text-[#111315] font-semibold shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Konut & Apartman
            </button>
            <button
              onClick={() => setActiveCategory('renovation')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
                activeCategory === 'renovation'
                  ? 'bg-[#D8CBB5] text-[#111315] font-semibold shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Tadilat & Yenileme
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#16191D] border border-white/10 hover:border-[#D8CBB5]/40 rounded-sm overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#20252C]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16191D] via-transparent to-transparent opacity-70" />

                {/* Category badge */}
                <span className="absolute top-4 left-4 text-xs font-medium tracking-wider text-white bg-[#111315]/80 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                  {project.categoryLabel}
                </span>

                {/* Inspect button overlay */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-[#111315]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#D8CBB5] group-hover:text-[#111315] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-3 text-xs text-white/50 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D8CBB5]" />
                      {project.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D8CBB5]" />
                      {project.year}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{project.area}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D8CBB5] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/70 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-white/40">
                    Detaylı incelemek için tıklayın
                  </span>
                  <span className="font-semibold uppercase tracking-wider text-[#D8CBB5] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    İncele
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Prompt Box */}
        <div className="mt-16 p-8 bg-[#181C20] border border-white/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Kendi Arsanız veya Mülkünüz İçin Özel Bir Proje mi Düşünüyorsunuz?
            </h3>
            <p className="text-sm text-white/70">
              Mimarlarımız ve inşaat mühendislerimiz arsanızı incelesin, bütçenize ve isteklerinize en uygun teklifi hazırlayalım.
            </p>
          </div>
          <a
            href="#iletisim"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] rounded-sm whitespace-nowrap shrink-0 transition-all shadow-sm"
          >
            Ücretsiz Keşif & Teklif Talebi
          </a>
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProjectForQuote={onSelectProjectForQuote}
      />
    </section>
  );
};
