import React, { useState, useRef } from 'react';
import {
  Send,
  CheckCircle2,
  Phone,
  Clock,
  ShieldCheck,
  Upload,
  Image as ImageIcon,
  X,
  Plus,
} from 'lucide-react';
import { companyConfig } from '../config/companyInfo';
import { ContactFormData, AttachedPhoto, PageId } from '../types';
import quoteHeaderImage from '../assets/images/project_private_villa_1791730444213.jpg';

interface QuotePageProps {
  initialService?: string;
  onNavigate: (page: PageId) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({
  initialService = 'Lüks Villa Projesi',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialService || 'Lüks Villa Projesi',
    message: '',
    photos: [],
  });

  const [attachedPhotos, setAttachedPhotos] = useState<AttachedPhoto[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024 * 1024) {
      return `${Math.round(bytes / 1024)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const remainingSlots = 5 - attachedPhotos.length;
    if (remainingSlots <= 0) {
      setErrorMessage('En fazla 5 adet fotoğraf ekleyebilirsiniz.');
      return;
    }

    const newPhotos: AttachedPhoto[] = [];
    const filesToProcess = Array.from(files).slice(0, remainingSlots);

    for (const file of filesToProcess) {
      if (!file.type.startsWith('image/')) {
        continue;
      }
      const previewUrl = URL.createObjectURL(file);
      newPhotos.push({
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        name: file.name,
        size: formatFileSize(file.size),
        previewUrl,
      });
    }

    if (newPhotos.length > 0) {
      setAttachedPhotos((prev) => [...prev, ...newPhotos]);
      setErrorMessage('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removePhoto = (id: string) => {
    setAttachedPhotos((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target?.previewUrl) {
        URL.revokeObjectURL(target.previewUrl);
      }
      return prev.filter((p) => p.id !== id);
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Lütfen adınızı, soyadınızı ve telefon numaranızı eksiksiz giriniz.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-0">
      {/* 1. Page Hero Header Banner */}
      <section className="relative min-h-[48vh] flex flex-col justify-end pt-32 pb-16 overflow-hidden bg-[#111315]">
        <div className="absolute inset-0 z-0">
          <img
            src={quoteHeaderImage}
            alt="Ünallı İnşaat Teklif Alın"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/85 to-[#111315]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C59A3D] mb-4">
              <span>Ücretsiz Keşif & Ön Görüşme</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>1994 Güvencesi</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Teklif Alın
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              Hayalinizdeki villa, apartman veya tadilat projeniz için formu doldurun, dilerseniz arsa veya mevcut durum fotoğraflarını ekleyin.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Form & Direct Phone Section */}
      <section className="py-20 bg-[#14171A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <div className="bg-[#181C20] border border-white/10 p-6 sm:p-10 rounded-sm">
                <div className="border-b border-white/10 pb-4 mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Proje & Teklif Talep Formu
                  </h2>
                  <p className="text-xs text-white/60 mt-1">
                    Bilgileriniz yalnızca proje değerlendirmesi amacıyla kullanılır, 3. şahıslarla paylaşılmaz.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-5 animate-in fade-in">
                    <div className="w-16 h-16 bg-[#C59A3D]/20 border border-[#C59A3D] text-[#C59A3D] rounded-full mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Teklif Talebiniz Başarıyla Alındı!
                    </h3>
                    <p className="text-sm text-white/75 max-w-md mx-auto leading-relaxed">
                      Sayın <strong>{formData.fullName}</strong>, <strong>{formData.serviceType}</strong> ile ilgili talebiniz teknik ekibimize iletilmiştir.
                      {attachedPhotos.length > 0 && (
                        <span className="block mt-2 text-[#C59A3D] font-medium">
                          ✓ Talebinize eklediğiniz {attachedPhotos.length} adet fotoğraf başarıyla eklenmiştir.
                        </span>
                      )}
                      <span className="block mt-2">
                        Teknik kadromuz <strong>{formData.phone}</strong> numarasından sizinle en geç 24 saat içerisinde iletişime geçecektir.
                      </span>
                    </p>

                    {/* Preview of submitted photos if any */}
                    {attachedPhotos.length > 0 && (
                      <div className="pt-2">
                        <span className="text-xs text-white/50 block mb-2">İletilen Görseller:</span>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                          {attachedPhotos.map((photo) => (
                            <div
                              key={photo.id}
                              className="w-16 h-16 rounded-sm overflow-hidden border border-white/20 bg-black/40"
                            >
                              <img
                                src={photo.previewUrl}
                                alt={photo.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`tel:${companyConfig.phone1.callable}`}
                        className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] rounded-sm flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Acil Durumlar İçin Hemen Arayın
                      </a>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setAttachedPhotos([]);
                          setFormData({
                            fullName: '',
                            phone: '',
                            email: '',
                            serviceType: 'Lüks Villa Projesi',
                            message: '',
                            photos: [],
                          });
                        }}
                        className="w-full sm:w-auto px-6 py-3 text-xs font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-sm"
                      >
                        Yeni Teklif Formu Doldur
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMessage && (
                      <div className="p-3.5 bg-red-900/30 border border-red-500/40 text-red-200 text-xs rounded-sm">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                          Adınız Soyadınız <span className="text-[#C59A3D]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="Örn: Ahmet Yılmaz"
                          className="w-full px-4 py-3 bg-[#111315] border border-white/10 focus:border-[#C59A3D] focus:outline-none rounded-sm text-white text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                          Telefon Numaranız <span className="text-[#C59A3D]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Örn: 0532 000 00 00"
                          className="w-full px-4 py-3 bg-[#111315] border border-white/10 focus:border-[#C59A3D] focus:outline-none rounded-sm text-white text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                          E-posta Adresiniz (İsteğe Bağlı)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Örn: ahmet@eposta.com"
                          className="w-full px-4 py-3 bg-[#111315] border border-white/10 focus:border-[#C59A3D] focus:outline-none rounded-sm text-white text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                          İlgilendiğiniz Hizmet Türü
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#111315] border border-white/10 focus:border-[#C59A3D] focus:outline-none rounded-sm text-white text-sm transition-colors cursor-pointer"
                        >
                          <option value="Lüks Villa Projesi">Lüks Villa Projesi</option>
                          <option value="Apartman & Konut İnşaatı">Apartman & Konut İnşaatı</option>
                          <option value="Anahtar Teslim İnşaat & Taahhüt">Anahtar Teslim İnşaat & Taahhüt</option>
                          <option value="Tadilat & Mimari Yenileme">Tadilat & Mimari Yenileme</option>
                          <option value="Kentsel Dönüşüm Danışmanlığı">Kentsel Dönüşüm Danışmanlığı</option>
                          <option value="Diğer / Genel Danışmanlık">Diğer / Genel Danışmanlık</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                        Projeniz Hakkında Bilgi & Beklentileriniz
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Arsanızın konumu, yaklaşık m² alanı, kat adedi veya tadilat gereksinimleriniz hakkında bilgi verebilirsiniz..."
                        className="w-full px-4 py-3 bg-[#111315] border border-white/10 focus:border-[#C59A3D] focus:outline-none rounded-sm text-white text-sm transition-colors"
                      />
                    </div>

                    {/* PHOTO UPLOAD SECTION */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-white/80 flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-[#C59A3D]" />
                          <span>Proje / Arsa / Tadilat Fotoğrafları Ekle</span>
                          <span className="text-white/40 normal-case font-normal">(İsteğe Bağlı)</span>
                        </label>
                        <span className="text-[11px] text-white/50 tabular-nums">
                          {attachedPhotos.length} / 5 Fotoğraf
                        </span>
                      </div>

                      {/* Drag & Drop File Zone */}
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`relative border-2 border-dashed rounded-sm p-6 text-center cursor-pointer transition-all ${
                          isDragging
                            ? 'border-[#C59A3D] bg-[#C59A3D]/10'
                            : 'border-white/15 hover:border-[#C59A3D]/50 bg-[#111315]/60 hover:bg-[#111315]'
                        }`}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />

                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-[#181C20] border border-white/10 flex items-center justify-center text-[#C59A3D]">
                            <Upload className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-white block">
                              Fotoğrafları buraya sürükleyin veya <span className="text-[#C59A3D] underline">dosya seçin</span>
                            </span>
                            <span className="text-xs text-white/50 block mt-1">
                              Arsa manzarası, mevcut bina, tadilat alanı veya mimari plan görselleri (JPG, PNG, WEBP - En fazla 5 adet)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Attached Photos Preview Grid */}
                      {attachedPhotos.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                          {attachedPhotos.map((photo) => (
                            <div
                              key={photo.id}
                              className="relative group bg-[#111315] border border-white/10 rounded-sm overflow-hidden aspect-square"
                            >
                              <img
                                src={photo.previewUrl}
                                alt={photo.name}
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removePhoto(photo.id);
                                  }}
                                  className="self-end p-1 bg-red-600/90 hover:bg-red-500 text-white rounded-full transition-colors"
                                  title="Fotoğrafı Kaldır"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                                <div className="text-[10px] text-white/90 truncate font-mono">
                                  {photo.size}
                                </div>
                              </div>
                            </div>
                          ))}

                          {attachedPhotos.length < 5 && (
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="aspect-square border border-dashed border-white/20 hover:border-[#C59A3D] rounded-sm flex flex-col items-center justify-center gap-1 text-white/40 hover:text-[#C59A3D] transition-colors"
                            >
                              <Plus className="w-5 h-5" />
                              <span className="text-[10px]">Daha Ekle</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs text-white/50">
                        * ile işaretli alanların doldurulması zorunludur.
                      </span>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111315] bg-[#D8CBB5] hover:bg-[#E7DFD5] active:bg-[#C2AF98] rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Gönderiliyor...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Teklif Talebini Gönder</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Column: Two Phone Numbers & Information */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-[#181C20] border border-white/10 rounded-sm">
                <h3 className="text-base font-bold text-white mb-4">
                  Doğrudan Telefonla Ulaşın
                </h3>
                <p className="text-xs text-white/60 mb-6 leading-relaxed">
                  Form doldurmak yerine doğrudan arayarak anında teknik yetkilimiz ile görüşebilirsiniz:
                </p>

                <div className="space-y-4">
                  <a
                    href={`tel:${companyConfig.phone1.callable}`}
                    className="p-4 bg-[#111315] hover:bg-[#1E232A] border border-white/10 hover:border-[#D8CBB5]/40 rounded-sm transition-all block"
                  >
                    <div className="text-[11px] text-white/50 uppercase tracking-wider mb-1">
                      {companyConfig.phone1.label}
                    </div>
                    <div className="text-base font-bold text-[#D8CBB5] tabular-nums flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#C59A3D]" />
                      {companyConfig.phone1.display}
                    </div>
                  </a>

                  <a
                    href={`tel:${companyConfig.phone2.callable}`}
                    className="p-4 bg-[#111315] hover:bg-[#1E232A] border border-white/10 hover:border-[#D8CBB5]/40 rounded-sm transition-all block"
                  >
                    <div className="text-[11px] text-white/50 uppercase tracking-wider mb-1">
                      {companyConfig.phone2.label}
                    </div>
                    <div className="text-base font-bold text-[#D8CBB5] tabular-nums flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#C59A3D]" />
                      {companyConfig.phone2.display}
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-[#181C20] border border-white/10 rounded-sm space-y-3 text-xs text-white/70">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#C59A3D]" />
                  <span>Ücretsiz Ön Keşif & Analiz</span>
                </div>
                <p className="leading-relaxed">
                  Eklediğiniz arsa veya mekan fotoğrafları mimarlarımız ve inşaat mühendislerimiz tarafından incelenerek en uygun yapım teklifi hazırlanır.
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-white/50">
                  <Clock className="w-3.5 h-3.5 text-[#C59A3D]" />
                  <span>Ortalama yanıt süremiz: 24 saat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
