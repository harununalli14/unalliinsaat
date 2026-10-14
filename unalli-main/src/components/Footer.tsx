import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { companyConfig } from '../config/companyInfo';
import { Logo } from './Logo';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuickGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuickGuide,
}) => {
  return (
    <footer className="bg-[#0D0F11] border-t border-white/10 text-white/70 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Col 1-2: Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="inline-block text-left cursor-pointer"
            >
              <Logo size="md" theme="dark" />
            </button>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              1994 yılından bu yana kaliteli mühendislik, modern villa inşaatı, konut projeleri ve anahtar teslim tadilat çözümleri sunan güvenilir inşaat markası.
            </p>
            <div className="text-xs text-[#C59A3D] font-medium pt-1">
              Kuruluş: 1994 · 30 Yıllık Tecrübe
            </div>
          </div>

          {/* Col 3: Hızlı Sayfa Menüsü */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Kurumsal Sayfalar
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hizmetlerimiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  İletişim
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quote')}
                  className="hover:text-white text-[#D8CBB5] transition-colors cursor-pointer text-left font-medium"
                >
                  Teklif Alın
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Hizmet Alanları */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Hizmet Alanları
            </h4>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>Lüks Villa Yapımı</li>
              <li>Apartman & Konut İnşaatı</li>
              <li>Anahtar Teslim Taahhüt</li>
              <li>Kapsamlı Mimari Tadilat</li>
              <li>Kentsel Dönüşüm Danışmanlığı</li>
            </ul>
          </div>

          {/* Col 5: İki İletişim Numarası & Ofis Bilgisi */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              İletişim Numaralarımız
            </h4>
            <div className="space-y-3 text-xs">
              {/* Telefon 1 */}
              <div>
                <span className="text-[10px] text-white/40 block mb-0.5">
                  {companyConfig.phone1.label}
                </span>
                <a
                  href={`tel:${companyConfig.phone1.callable}`}
                  className="flex items-center gap-2 text-white/90 hover:text-[#D8CBB5] transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C59A3D] shrink-0" />
                  <span className="tabular-nums font-mono">{companyConfig.phone1.display}</span>
                </a>
              </div>

              {/* Telefon 2 */}
              <div className="pt-1">
                <span className="text-[10px] text-white/40 block mb-0.5">
                  {companyConfig.phone2.label}
                </span>
                <a
                  href={`tel:${companyConfig.phone2.callable}`}
                  className="flex items-center gap-2 text-white/90 hover:text-[#D8CBB5] transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C59A3D] shrink-0" />
                  <span className="tabular-nums font-mono">{companyConfig.phone2.display}</span>
                </a>
              </div>

              {/* Adres */}
              <div className="pt-2 flex items-start gap-2 text-white/60">
                <MapPin className="w-3.5 h-3.5 text-white/40 shrink-0 mt-0.5" />
                <span>
                  {companyConfig.address.line1}, {companyConfig.address.city}
                </span>
              </div>

              <button
                onClick={onOpenQuickGuide}
                className="mt-2 text-[11px] text-[#C59A3D] hover:underline block text-left"
              >
                Bilgileri Nasıl Değiştiririm?
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {companyConfig.foundingYear} – {new Date().getFullYear()} {companyConfig.name}. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-4">
            <span>Statik ve Mimari Standartlar</span>
            <span aria-hidden="true">·</span>
            <span>Deprem Yönetmeliğine Uygun İnşaat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
