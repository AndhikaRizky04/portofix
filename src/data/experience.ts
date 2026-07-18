export interface Experience {
  posisi: string;
  perusahaan: string;
  periode: string;
  poin: string[];
}

export const experiences: Experience[] = [
  {
    posisi: 'Website Developer (Magang)',
    perusahaan: 'PT. Pura Barutama, Unit Offset',
    periode: 'FEBRUARI 2025 – MARET 2025',
    poin: [
      'Mengembangkan aplikasi Tracking System produksi menggunakan ASP.NET',
      'Integrasi Oracle Database untuk konsistensi data lini produksi',
      'Monitoring alur produksi secara real-time di pabrik',
      'Mendukung administrasi Human Resource dalam integrasi sistem internal'
    ]
  },
  {
    posisi: 'Desainer Grafis',
    perusahaan: 'Oleh-Oleh Khas Kupang "Bu Pardi"',
    periode: 'AGUSTUS 2024 – SEPTEMBER 2024',
    poin: [
      'Mendesain logo utama dan identitas visual brand',
      'Membuat media promosi cetak berupa banner, poster, dan kemasan produk',
      'Mengelola branding media sosial untuk meningkatkan interaksi digital'
    ]
  }
];
