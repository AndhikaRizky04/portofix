export interface Certification {
  nama: string;
  penerbit: string;
  tanggal: string;
  berlakuHingga?: string;
  nomorSertifikat?: string;
  gambar: string;
}

export const certifications: Certification[] = [
  {
    nama: 'Website Developer — Sertifikat Kompetensi BNSP',
    penerbit: 'LSP Universitas Dian Nuswantoro',
    tanggal: 'April 2026',
    berlakuHingga: 'APRIL 2029',
    gambar: '/assets/sertif/bnsp.jpg'
  },
  {
    nama: 'React & Back-End with AI',
    penerbit: 'Program ASAH (Dicoding × Accenture)',
    tanggal: '14 Januari 2026',
    nomorSertifikat: 'ASAH/GRAD/XXVI-01/R007D5Y0207',
    gambar: '/assets/sertif/asah.jpg'
  },
  {
    nama: 'Literasi AI untuk Semua: Kenali, Gunakan, Ciptakan',
    penerbit: 'BASS Training Centre and Consultant',
    tanggal: '2 November 2025',
    nomorSertifikat: 'CERT-1UHCYDQXWH3F',
    gambar: '/assets/sertif/literasi-ai.jpg'
  },
  {
    nama: 'English Proficiency Assessment (CFLT)',
    penerbit: 'Center of Foreign Language Training (CFLT)',
    tanggal: '2025',
    gambar: '/assets/sertif/toefl.png'
  }
];
