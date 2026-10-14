import React from 'react';
import { milestonesData, pillarsData } from '../data/mockData';
import { Award, Compass, ShieldCheck, Clock } from 'lucide-react';
import heroVillaImg from '../assets/images/hero_architectural_villa_1791730432063.jpg';

export const About: React.FC = () => {
  return (
    <section id="hakkimizda" className="py-24 bg-[#14171A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D8CBB5] mb-3">
              <span>Kurumsal Hafıza</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>1994'ten Bugüne</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Sağlam Temeller Üzerinde <br />
              <span className="text-[#D8CBB5]">30 Yıllık İnşaat Geleneği</span>
            </h2>

            <div className="space-y-4 text-base text-white/75 leading-relaxed">
              <p>
                <strong>Ünallı İnşaat</strong>, 1994 yılında inşaat sektöründe güvenilirlik, teknik dürüstlük ve tavizsiz işçilik anlayışını hâkim kılmak amacıyla kuruldu.
              </p>
              <p>
                Kurulduğumuz ilk günden bugüne benimsediğimiz temel felsefe; binaları sadece beton ve demirden ibaret yapılar olarak değil, içinde hayatların, anıların ve geleceğin yeşereceği güvenli yaşam alanları olarak ele almaktır.
              </p>
              <p>
                30 yılı aşan tecrübemizle; müstakil lüks villalardan kentsel apartman projelerine, anahtar teslim taahhüt işlerinden kapsamlı mimari yenilemelere kadar her aşamada mühendislik hesaplarını estetik incelikle buluşturuyoruz.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6 text-xs text-white/80">
              <div>
                <span className="text-white font-semibold block text-sm mb-1 text-[#D8CBB5]">
                  Statik Güvenlik İlkesi
                </span>
                <span>Zemin etüdünden son kat betonuna kadar tavizsiz denetim.</span>
              </div>
              <div>
                <span className="text-white font-semibold block text-sm mb-1 text-[#D8CBB5]">
                  Sözleşme & Süre Sadakati
                </span>
                <span>Sürpriz maliyetsiz ve takvime uygun anahtar teslimi.</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-[#1A1E24]">
              <img
                src={heroVillaImg}
                alt="Ünallı İnşaat Mimari Kalite"
                className="w-full h-[420px] object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#111315]/90 backdrop-blur-md border border-white/10 rounded-sm">
                <div className="text-xs font-semibold text-[#D8CBB5] uppercase tracking-wider mb-1">
                  Mühendislik & Mimari Birlikteliği
                </div>
                <div className="text-sm font-medium text-white">
                  "Bir yapının değeri sadece sağlamlığında değil, ona hayat veren estetik ruhta gizlidir."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-widest text-[#D8CBB5] font-semibold mb-6">
            Çalışma Prensiplerimiz
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillarsData.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#181C20] border border-white/10 rounded-sm hover:border-[#D8CBB5]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-sm bg-[#D8CBB5]/10 border border-[#D8CBB5]/30 flex items-center justify-center text-[#D8CBB5] mb-4 font-mono font-semibold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="pt-12 border-t border-white/10">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-widest text-[#D8CBB5] font-semibold mb-2">
              Dünden Bugüne
            </div>
            <h3 className="text-2xl font-bold text-white">
              Gelişim ve Başarı Yolculuğumuz
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestonesData.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-[#16191D] border-t-2 border-[#D8CBB5] border-x border-b border-white/5 rounded-b-sm"
              >
                <div className="text-2xl font-bold text-[#D8CBB5] tabular-nums mb-2 font-mono">
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
  );
};
