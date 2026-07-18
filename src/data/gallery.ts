export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  kegiatan: 'Pengembangan' | 'Kolaborasi' | 'Monitoring' | 'Pengujian';
  w: number;
  h: number;
}

export const galleryItems: GalleryItem[] = [
  {
    src: '/img/documentation/magang-1.webp',
    alt: 'Pengembangan Tracking System di PT Pura Barutama',
    caption: 'Proses pengodean modul tracking menggunakan framework ASP.NET di lingkungan kerja Unit Offset.',
    kegiatan: 'Pengembangan',
    w: 800,
    h: 533
  },
  {
    src: '/img/documentation/magang-2.webp',
    alt: 'Diskusi Teknis Database Oracle',
    caption: 'Koordinasi dengan tim IT internal mengenai perancangan skema relasional Oracle Database.',
    kegiatan: 'Kolaborasi',
    w: 600,
    h: 800
  },
  {
    src: '/img/documentation/magang-3.webp',
    alt: 'Monitoring Alur Produksi Offset',
    caption: 'Penerapan panel dashboard monitoring telemetri alur produksi kertas dan cetakan.',
    kegiatan: 'Monitoring',
    w: 800,
    h: 600
  },
  {
    src: '/img/documentation/magang-4.webp',
    alt: 'Uji Coba Lapangan Sistem Tracking',
    caption: 'Uji coba pemindaian kode produk untuk sinkronisasi status pelacakan real-time.',
    kegiatan: 'Pengujian',
    w: 700,
    h: 500
  },
  {
    src: '/img/documentation/magang-5.webp',
    alt: 'Presentasi Hasil Magang',
    caption: 'Pemaparan aplikasi tracking produksi di depan manajer unit offset PT. Pura Barutama.',
    kegiatan: 'Kolaborasi',
    w: 800,
    h: 533
  },
  {
    src: '/img/documentation/magang-6.webp',
    alt: 'Debugging Integrasi API',
    caption: 'Melakukan pelacakan log error integrasi data transaksi dari mesin produksi.',
    kegiatan: 'Pengembangan',
    w: 600,
    h: 900
  }
];
