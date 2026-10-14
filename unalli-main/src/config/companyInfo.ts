/**
 * @file companyInfo.ts
 * @description Ünallı İnşaat - Firma Bilgileri ve İletişim Konfigürasyonu
 */

export interface CompanyConfig {
  name: string;
  shortName: string;
  foundingYear: number;
  tagline: string;
  description: string;
  phone1: {
    label: string;
    display: string;
    callable: string;
  };
  phone2: {
    label: string;
    display: string;
    callable: string;
  };
  whatsapp: {
    display: string;
    number: string;
    defaultMessage: string;
  };
  email: {
    display: string;
    mailto: string;
  };
  address: {
    line1: string;
    line2: string;
    city: string;
    country: string;
  };
  workingHours: {
    weekdays: string;
    weekend: string;
  };
}

export const companyConfig: CompanyConfig = {
  name: "Ünallı İnşaat",
  shortName: "Ünallı",
  foundingYear: 1994,
  tagline: "1994'ten Bugüne Güven ve Estetiğin Mimarisi",
  description:
    "30 yılı aşkın mühendislik birikimi ve çağdaş mimari vizyonla; lüks villalar, çağdaş konutlar ve anahtar teslim tadilat çözümlerini kusursuz standartlarda hayata geçiriyoruz.",

  // İLETİŞİM NUMARASI 1
  phone1: {
    label: "Merkez / Danışma",
    display: "+90 532 678 0705",
    callable: "+905326780705",
  },

  // İLETİŞİM NUMARASI 2 (WhatsApp ile aynı numara)
  phone2: {
    label: "Şantiye & Saha Yönetimi",
    display: "+90 542 324 0614",
    callable: "+905423240614",
  },

  // WHATSAPP (Sadece sayfanın sağ altındaki yüzen butonda yer alır)
  whatsapp: {
    display: "+90 542 324 0614",
    number: "905423240614",
    defaultMessage:
      "Merhaba Ünallı İnşaat, web siteniz üzerinden ulaşıyorum. Bilgi ve teklif almak istiyorum.",
  },

  // E-POSTA BİLGİSİ
  email: {
    display: "info@unalliinsaat.com",
    mailto: "info@unalliinsaat.com",
  },

  // ADRES BİLGİSİ
  address: {
    line1: "[Cadde / Sokak / No - Düzenlenebilir]",
    line2: "[İlçe / Bölge - Düzenlenebilir]",
    city: "İstanbul",
    country: "Türkiye",
  },

  // ÇALIŞMA SAATLERİ
  workingHours: {
    weekdays: "Pazartesi – Cuma: 08:30 – 18:30",
    weekend: "Cumartesi: 09:00 – 16:00 (Pazar: Randevulu)",
  },
};
