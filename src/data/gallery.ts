export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  kegiatan: 'Pengembangan' | 'Kolaborasi' | 'Divisi HR' | 'Pelatihan';
  w: number;
  h: number;
}

export const galleryItems: GalleryItem[] = [
  {
    src: '/assets/5.jpeg',
    alt: 'Pengembangan Tracking System di PT Pura Barutama',
    caption: 'Proses pengodean modul tracking menggunakan framework ASP.NET di lingkungan kerja Unit Offset.',
    kegiatan: 'Pengembangan',
    w: 800,
    h: 533
  },
  {
    src: '/assets/2.jpeg',
    alt: 'Pengerjaan Administrasi Kantor',
    caption: 'Membantu Staff HR dalam mengelola data karyawan.',
    kegiatan: 'Kolaborasi',
    w: 600,
    h: 800
  },
  {
    src: '/assets/4.jpeg',
    alt: 'Foto Bersama',
    caption: 'Foto Bersama dengan para staff HR PT. Pura Offset',
    kegiatan: 'Divisi HR',
    w: 800,
    h: 600
  },
  {
    src: '/assets/6.jpeg',
    alt: 'Pelatihan Bersama Karyawan',
    caption: 'Pelatihan Pengendalian Bahaya Sumber Energi Listrik Dengan LOTO',
    kegiatan: 'Pelatihan',
    w: 700,
    h: 500
  },
  {
    src: '/assets/1.jpeg',
    alt: 'Presentasi Hasil Magang',
    caption: 'Pemaparan aplikasi tracking produksi di depan manajer unit offset PT. Pura Barutama.',
    kegiatan: 'Kolaborasi',
    w: 800,
    h: 533
  },
  {
    src: '/assets/3.jpeg',
    alt: 'Pelatihan K3 PT. Pura Offset',
    caption: 'Melakukan pelatihan K3 yang diadakan rutin oleh perusahaan',
    kegiatan: 'Pelatihan',
    w: 600,
    h: 900
  }
];
