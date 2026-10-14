import React from 'react';
import { milestonesData, pillarsData } from '../data/mockData';
import { companyConfig } from '../config/companyInfo';
import { PageId } from '../types';
import { Phone, ShieldCheck, Award } from 'lucide-react';
import heroVillaImg from '../assets/images/hero_architectural_villa_1791730432063.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. Page Hero Header Banner (Styled like Homepage Hero) */}
      <section className="relative min-h-[48vh] flex flex-col justify-end pt-32 pb-16 overflow-hidden bg-[#111315]">
        <div className="absolute inset-0 z-0">
          <img
            src={heroVillaImg}
            alt="Ünallı İnşaat Hakkımızda"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/85 to-[#111315]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59A3D] mb-4">
              <span>Kurumsal Hafıza</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>1994'ten Bugüne</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Hakkımızda
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              30 yılı aşkın mühendislik ve taahhüt tecrübemizle, güvenilir yapı standartlarını çağdaş mimariyle birleştiriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Phone Numbers Strip */}
      <section className="bg-[#16191D] border-y border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-wider text-white/60">
              Mühendislik Kadromuzla Görüşmek İçin Arayabilirsiniz:
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

      {/* 3. Detailed Company Narrative */}
      <section className="py-20 bg-[#14171A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Sağlam Temeller Üzerinde 30 Yıllık İnşaat Geleneği
              </h2>
              <div className="space-y-4 text-base text-white/75 leading-relaxed">
                <p>
                  <strong>Ünallı İnşaat</strong>, 1994 yılında inşaat sektöründe teknik dürüstlük, sağlam mühendislik prensipleri ve yüksek kalite anlayışını hâkim kılmak amacıyla kuruldu.
                </p>
                <p>
                  Faaliyetlerimize başladığımız ilk günden itibaren, yapı güvenliğini en üst öncelik olarak kabul ettik. Zemin etütlerinden radye temellere, C35/C40 beton sınıfı uygulamalarından deprem yönetmeliğinin üzerindeki statik hesaplamalara kadar her yapıyı titizlikle inşa ettik.
                </p>
                <p>
                  Bugün, müstakil lüks villalardan modern kentsel konutlara, kapsamlı iç mimari renovasyondan anahtar teslim taahhüt projelerine kadar geniş bir yelpazede hizmet vermekteyiz.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/80">
                <div className="p-4 bg-[#181C20] border border-white/5 rounded-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C59A3D] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block mb-0.5">Deprem Güvenliği</span>
                    <span>Taviz verilmeyen statik denetim ve yüksek dayanım.</span>
                  </div>
                </div>
                <div className="p-4 bg-[#181C20] border border-white/5 rounded-sm flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C59A3D] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block mb-0.5">Sözleşme Disiplini</span>
                    <span>Taahhüt edilen sürede ve bütçede eksiksiz teslim.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 bg-[#181C20] border border-white/10 rounded-sm space-y-6">
                <div className="text-xs uppercase tracking-widest text-[#C59A3D] font-semibold">
                  Kurumsal Bilgiler
                </div>
                <div className="space-y-4 text-sm divide-y divide-white/5">
                  <div className="pt-2 flex justify-between">
                    <span className="text-white/50">Kuruluş Yılı:</span>
                    <span className="text-white font-semibold font-mono">1994</span>
                  </div>
                  <div className="pt-3 flex justify-between">
                    <span className="text-white/50">Sektörel Deneyim:</span>
                    <span className="text-white font-semibold font-mono">30+ Yıl</span>
                  </div>
                  <div className="pt-3 flex justify-between">
                    <span className="text-white/50">Uzmanlık:</span>
                    <span className="text-white font-semibold text-right">
                      Villa, Konut, Taahhüt & Tadilat
                    </span>
                  </div>
                  <div className="pt-3 flex justify-between">
                    <span className="text-white/50">Çalışma Prensibi:</span>
                    <span className="text-[#D8CBB5] font-semibold text-right">
                      Anahtar Teslim & Şeffaf Bütçe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="mb-20">
            <div className="text-xs uppercase tracking-widest text-[#C59A3D] font-semibold mb-6">
              Temel İlkelerimiz
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillarsData.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#181C20] border border-white/10 rounded-sm hover:border-[#D8CBB5]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-sm bg-[#C59A3D]/10 border border-[#C59A3D]/30 flex items-center justify-center text-[#C59A3D] mb-4 font-mono font-semibold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones Timeline */}
          <div className="pt-12 border-t border-white/10">
            <div className="max-w-2xl mb-10">
              <div className="text-xs uppercase tracking-widest text-[#C59A3D] font-semibold mb-2">
                Tarihçe
              </div>
              <h3 className="text-2xl font-bold text-white">
                1994'ten Günümüze Başarı Yolculuğumuz
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {milestonesData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#16191D] border-t-2 border-[#C59A3D] border-x border-b border-white/5 rounded-b-sm"
                >
                  <div className="text-2xl font-bold text-[#C59A3D] tabular-nums mb-2 font-mono">
                    {item.year}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Action */}
      <section className="py-16 bg-[#111315] border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-3">
            Birlikte Güvenli Yapılar İnşa Edelim
          </h2>
          <p className="text-sm text-white/70 max-w-lg mx-auto mb-6">
            Mühendislik deneyimimizden yararlanmak ve projenizi konuşmak için bize dilediğiniz zaman ulaşabilirsiniz.
          </p>
          <button
            onClick={() => onNavigate('quote')}
            className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] rounded-sm transition-all shadow-sm"
          >
            Teklif Talebinde Bulunun
          </button>
        </div>
      </section>
    </div>
  );
};
