export interface Education {
  institusi: string;
  jurusan: string;
  periode: string;
  detail?: string;
}

export const educations: Education[] = [
  {
    institusi: 'Universitas Dian Nuswantoro',
    jurusan: 'S1 Teknik Informatika',
    periode: '2022–2026',
    detail: 'IPK 3.54'
  },
  {
    institusi: 'SMK Raden Umar Said Kudus',
    jurusan: 'Rekayasa Perangkat Lunak',
    periode: '2019–2022',
    detail: 'Pengembangan web & logika pemrograman'
  }
];
