/**
 * @file mockData.ts
 * Ünallı İnşaat kurumsal içerik veritabanı
 */

import { ServiceItem, ProjectItem, MilestoneItem } from '../types';

// Görsel yolları (generate_image ile oluşturulan yüksek çözünürlüklü mimari fotoğraflar)
import heroVillaImg from '../assets/images/hero_architectural_villa_1791730432063.jpg';
import projectVillaImg from '../assets/images/project_private_villa_1791730444213.jpg';
import projectResidenceImg from '../assets/images/project_modern_residence_1791730455572.jpg';
import serviceRenovationImg from '../assets/images/service_interior_renovation_1791730466167.jpg';

export const servicesData: ServiceItem[] = [
  {
    id: 'villa',
    number: '01',
    title: 'Lüks Villa Projeleri',
    subtitle: 'Kişiye Özel Müstakil Yaşam Mimarisi',
    description:
      'Arsanızın doğal topoğrafyasına ve yaşam tarzınıza özel tasarlanan; modern konsol hatları, geniş cam cepheleri, sonsuzluk havuzları ve peyzaj entegrasyonu ile ayrıcalıklı müstakil villalar inşa ediyoruz.',
    features: [
      'Özel mimari projelendirme ve 3D görselleştirme',
      'Akıllı ev otomasyonu ve enerji verimli iklimlendirme',
      'Doğal traverten, ahşap ve brüt beton cephe detayları',
      'Peyzaj ve açık hava dinlenme alanları tasarımı',
    ],
    image: projectVillaImg,
  },
  {
    id: 'apartment',
    number: '02',
    title: 'Apartman & Konut Projeleri',
    subtitle: 'Çağdaş Yaşam Alanları & Kentsel Dönüşüm',
    description:
      'Deprem güvenliğini en üst düzeyde tutan mühendislik hesaplamalarıyla, fonksiyonel kat planları ve yüksek malzeme standartlarına sahip modern çok katlı konut ve butik apartman projeleri geliştiriyoruz.',
    features: [
      'Yüksek dayanımlı C35/C40 beton ve radye temel sistemi',
      'Ses ve ısı yalıtımında üst sınıf akustik çözümler',
      'Kapalı otopark, asansör ve yangın güvenlik sistemleri',
      'Balkonlu ve teraslı ferah iç mekân planları',
    ],
    image: projectResidenceImg,
  },
  {
    id: 'construction',
    number: '03',
    title: 'Anahtar Teslim İnşaat & Taahhüt',
    subtitle: 'Temelden Çatıya Güvenilir Mühendislik',
    description:
      'Ruhsat ve imar aşamalarından şantiye yönetimine, kaba inşaattan ince işçiliğe kadar tüm süreçleri tek elden, şeffaf sözleşme ve bütçe disipliniyle yönetiyoruz.',
    features: [
      'Resmi izinler, statik ve mekanik ruhsat projeleri',
      'Günlük ve haftalık şantiye ilerleme raporlaması',
      'Zamanında teslimat ve noter onaylı taahhüt garantisi',
      'Resmi iskân ve yapı kullanım izni teslimi',
    ],
    image: heroVillaImg,
  },
  {
    id: 'renovation',
    number: '04',
    title: 'Tadilat & Mimari Yenileme',
    subtitle: 'Kapsamlı İç ve Dış Mekân Restorasyonu',
    description:
      'Mevcut villa, daire veya ticari alanlarınızı çağdaş mimari standartlara kavuşturuyor; tesisat yenilemeden özel mobilya üretimine kadar bütüncül renovasyon çözümleri sunuyoruz.',
    features: [
      'Elektrik, sıhhi tesisat ve yerden ısıtma altyapı yenileme',
      'Özel tasarım mutfak, banyo ve giyinme odası uygulamaları',
      'Cephe mantolama, pencere sistemleri ve çatı izolasyonu',
      'Temiz, titiz ve planlanan takvime sadık şantiye süreci',
    ],
    image: serviceRenovationImg,
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'villa-panoramik',
    title: 'Panoramik Kıyı Villası',
    category: 'villa',
    categoryLabel: 'Lüks Villa',
    location: '[Muğla / Bodrum - Düzenlenebilir]',
    year: '2025',
    area: '620 m²',
    image: projectVillaImg,
    summary:
      'Doğal traverten taş kaplamaları, geniş konsol saçaklar ve deniz manzarasına açılan sonsuzluk havuzuyla modern Akdeniz mimarisi.',
    details: {
      architecturalStyle: 'Modern Minimalist & Akdeniz Taşı',
      scope: 'Komple Mimari Proje, Statik Mühendislik & Anahtar Teslim Yapım',
      duration: '14 Ay',
      features: [
        '5 Yatak Odası, Ebeveyn Banyoları & Giyinme Odaları',
        'Taşma Havuzlu Geniş Teras & Teak Ahşap Güverte',
        'Gizli Tavan İklimlendirme ve VRF Sistemi',
        'Akıllı Ev ve Güvenlik Altyapısı',
      ],
    },
  },
  {
    id: 'residence-arbor',
    title: 'Arbor Butik Rezidans',
    category: 'apartment',
    categoryLabel: 'Konut & Apartman',
    location: '[İstanbul / Kadıköy - Düzenlenebilir]',
    year: '2024',
    area: '2.800 m²',
    image: projectResidenceImg,
    summary:
      'Doğal taş ve antrasit metal cephe kompozisyonu, geniş cam balkonlar ve peyzajlı giriş alanıyla kentsel dönüşüm projesi.',
    details: {
      architecturalStyle: 'Çağdaş Kentsel Mimari',
      scope: 'Kentsel Dönüşüm, Kaba & İnce İnşaat, İskân Teslimi',
      duration: '16 Ay',
      features: [
        '14 Bağımsız Bölüm (Geniş 3+1 ve Dubleks Daireler)',
        'C35 Hazır Beton & Radye Jeneral Temel Güvenliği',
        'Kapalı Otopark Alanı ve Yangın Tahliye Sistemleri',
        'Akustik Yalıtımlı Lamine Cam Cephe Doğramaları',
      ],
    },
  },
  {
    id: 'villa-ege-vista',
    title: 'Ege Vista Modern Villa',
    category: 'villa',
    categoryLabel: 'Lüks Villa',
    location: '[İzmir / Çeşme - Düzenlenebilir]',
    year: '2024',
    area: '540 m²',
    image: heroVillaImg,
    summary:
      'Geniş açıklıklı brüt beton kirişler, zemin kattan terasa kesintisiz cam bölmeler ve gece aydınlatmalı yansıma havuzu.',
    details: {
      architecturalStyle: 'Brütalizm & Çağdaş Lüks',
      scope: 'Mimari Tasarım, Statik Proje ve Anahtar Teslim Yapım',
      duration: '12 Ay',
      features: [
        '4 Süit Yatak Odası + Müştemilat Alanı',
        'Lineer Mimari Aydınlatma ve Gizli Işık Bantları',
        'Isı Yalıtımlı İnce Alüminyum Sürme Sistemleri',
        'Otomatik Bahçe Sulama & Özel Peyzaj Düzenlemesi',
      ],
    },
  },
  {
    id: 'renovation-loft-residence',
    title: 'Rezidans Kapsamlı İç Mimari Tadilat',
    category: 'renovation',
    categoryLabel: 'Tadilat & Yenileme',
    location: '[İstanbul / Beşiktaş - Düzenlenebilir]',
    year: '2025',
    area: '340 m²',
    image: serviceRenovationImg,
    summary:
      'Yüksek tavanlı yaşam alanında özel ceviz panel kaplamalar, şömine ünitesi, doğal kireçtaşı zemin ve entegre aydınlatma tasarımı.',
    details: {
      architecturalStyle: 'Modern Sıcak Minimalizm',
      scope: 'Komple Tesisat Altyapısı, İnce İşler & Özel Sabit Mobilya Üretimi',
      duration: '4 Ay',
      features: [
        'Komple Elektrik & Akıllı Aydınlatma Yenilemesi',
        'Doğal Taş Şömine Duvarı ve Gizli Depolama Sistemleri',
        'Ada Tipi İthal Mutfak ve Entegre Ankastre Grubu',
        'Birinci Sınıf Masif Parke ve Doğal Mermer Uygulaması',
      ],
    },
  },
];

export const milestonesData: MilestoneItem[] = [
  {
    year: '1994',
    title: 'Kuruluş & İlk Temeller',
    description:
      'Ünallı İnşaat, dürüst mühendislik ilkeleri ve yapı güvenliği vizyonuyla inşaat ve taahhüt sektöründeki faaliyetlerine başladı.',
  },
  {
    year: '2004',
    title: 'Nitelikli Konut & Apartman Projeleri',
    description:
      'Şehir mimarisine değer katan konut projeleri ve kentsel taahhüt işleriyle portföyünü genişletti; yüzlerce aileyi güvenli yuvalarla buluşturdu.',
  },
  {
    year: '2015',
    title: 'Lüks Müstakil Villa & Butik Yaşam',
    description:
      'Bireysel müşterilere özel tasarlanan modern lüks villa projelerinde uzmanlaşarak estetik ve fonksiyonelliği bir araya getirdi.',
  },
  {
    year: 'Bugün',
    title: '30+ Yıllık Güvenle Geleceğe',
    description:
      '1994 yılından bu yana taviz verilmeyen kalite anlayışıyla; anahtar teslim inşaat, villa, konut ve tadilat alanlarında güvenle üretmeye devam ediyor.',
  },
];

export const pillarsData = [
  {
    title: '30 Yılı Aşkın Tecrübe',
    description:
      '1994 yılından bugüne yüzlerce projede kanıtlanmış teknik birikim ve köklü inşaat geleneği.',
  },
  {
    title: 'Deprem & Statik Güvenlik',
    description:
      'Zemin etütlerinden radye temellere, yönetmeliklerin ötesinde dayanıklı ve test edilmiş taşıyıcı sistemler.',
  },
  {
    title: 'Zamanında & Şeffaf Teslim',
    description:
      'Sözleşmeye bağlı bütçe ve iş takvimi disiplini; sürpriz ek masraflar olmadan eksiksiz anahtar teslimi.',
  },
  {
    title: 'Zamansız Mimari & Estetik',
    description:
      'Modası geçmeyen sade çizgiler, doğal malzemeler ve yaşam kalitesini yükselten fonksiyonel planlar.',
  },
];
