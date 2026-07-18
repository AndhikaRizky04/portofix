export interface Organization {
  nama: string;
  peran: string;
  deskripsi?: string;
  tags: string[];
}

export const organizations: Organization[] = [
  {
    nama: 'Dian Nuswantoro Computer Club',
    peran: 'Anggota',
    deskripsi: 'Aktif dalam organisasi teknologi tingkat universitas untuk mendalami pemrograman dan administrasi jaringan.',
    tags: ['Pengembangan Web', 'Kolaborasi Tim']
  },
  {
    nama: 'ASAH by Dicoding × Accenture',
    peran: 'Peserta Program',
    deskripsi: 'Program pelatihan intensif berfokus pada AI-assisted software development dan kesiapan karir.',
    tags: ['React Development', 'Artificial Intelligence', 'Soft Skill']
  }
];
