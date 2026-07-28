export interface Profile {
  nama: string;
  gelarSingkat: string;
  universitas: string;
  peran: string[];
  deskripsi: string;
  biodata: {
    domisili: string;
    pendidikan: string;
    universitas: string;
    ipk: string;
    minat: string;
  };
  kontak: {
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    lokasi: string;
    koordinat?: string;
  };
  cvPath: string;
  fotoPath: string;
}

export const profile: Profile = {
  nama: 'Andhika Rizky Nur Wahyu',
  gelarSingkat: 'Fresh Graduate Teknik Informatika',
  universitas: 'Universitas Dian Nuswantoro',
  peran: ['Full Stack Developer', 'Machine Learning Enthusiast', 'Software Engineer'],
  deskripsi: `Lulusan Teknik Informatika yang memiliki minat dalam pengembangan perangkat lunak. Berpengalaman membangun aplikasi web dan mobile menggunakan Laravel, React, ASP.NET, Flutter, dan Java, serta menerapkan machine learning untuk analisis data. Mampu bekerja secara mandiri maupun dalam tim dengan kemampuan analitis dan problem solving yang baik.`,
  biodata: {
    domisili: 'Kaliwungu, Kudus',
    pendidikan: 'S1 Teknik Informatika',
    universitas: 'Universitas Dian Nuswantoro',
    ipk: '3.54 / 4.00',
    minat: 'Full Stack Development, Machine Learning'
  },
  kontak: {
    email: 'andhikawahyu65@gmail.com',
    whatsapp: '0895341294500',
    linkedin: 'https://linkedin.com/in/dhika-rizky-99152b287',
    github: 'https://github.com/AndhikaRizky04',
    lokasi: 'Kaliwungu, Kudus',
    koordinat: "KALIWUNGU, KUDUS"
  },
  cvPath: '/cv/CV-Andhika-Rizky-Nur-Wahyu.pdf',
  fotoPath: 'assets/profile.jpeg'
};
