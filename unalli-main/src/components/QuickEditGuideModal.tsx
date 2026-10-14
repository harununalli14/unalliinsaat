import React from 'react';
import { X, Check, FileCode, MessageSquare, Phone, MapPin } from 'lucide-react';
import { companyConfig } from '../config/companyInfo';

interface QuickEditGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickEditGuideModal: React.FC<QuickEditGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#16191D] border border-white/10 rounded-sm w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#111315] hover:bg-white/10 text-white/70 hover:text-white rounded-sm border border-white/10 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D8CBB5] mb-2">
          <FileCode className="w-4 h-4" />
          <span>Kolay Özelleştirme Rehberi</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Firma ve İletişim Bilgilerini Nasıl Düzenlersiniz?
        </h2>

        <p className="text-sm text-white/75 leading-relaxed mb-6">
          Web sitenizdeki telefon numarası, WhatsApp linki, şirket adresi ve e-posta bilgileri tek bir merkezi dosyada toplanmıştır. Bilgilerinizi güncellemek için aşağıdaki adımı takip edebilirsiniz:
        </p>

        {/* Code snippet guide */}
        <div className="bg-[#111315] border border-white/10 rounded-sm p-4 font-mono text-xs text-white/90 mb-6 overflow-x-auto">
          <div className="text-white/40 mb-2">// Dosya Yolu: src/config/companyInfo.ts</div>
          <pre className="text-[#D8CBB5]">
{`export const companyConfig = {
  // 1. İletişim Numarası:
  phone1: {
    label: "Merkez / Danışma",
    display: "${companyConfig.phone1.display}",
    callable: "${companyConfig.phone1.callable}",
  },

  // 2. İletişim Numarası:
  phone2: {
    label: "Şantiye & Saha Yönetimi",
    display: "${companyConfig.phone2.display}",
    callable: "${companyConfig.phone2.callable}",
  },

  // Sağ alttaki WhatsApp Numarası (bitişik format):
  whatsapp: {
    display: "${companyConfig.whatsapp.display}",
    number: "${companyConfig.whatsapp.number}",
  },
};`}
          </pre>
        </div>

        {/* Summary points */}
        <div className="space-y-3 text-xs text-white/80 border-t border-white/10 pt-4 mb-6">
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>WhatsApp Butonları:</strong> Numarayı değiştirdiğiniz anda sitedeki tüm WhatsApp butonları otomatik olarak sizin numaranıza bağlanır.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Arama Butonları:</strong> Tıkla-ara fonksiyonu `callable` alanından beslenir ve doğrudan cep telefonunuzu aratır.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Ücretsiz & Statik:</strong> Ayrı bir ücretli veritabanı veya karmaşık sunucu gerektirmez, GitHub Pages veya Vercel'de tek tıkla ücretsiz barındırılabilir.
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] rounded-sm transition-colors text-center"
        >
          Anladım, Kapat
        </button>
      </div>
    </div>
  );
};
