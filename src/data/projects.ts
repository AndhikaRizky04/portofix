export interface Project {
  id: string;
  nama: string;
  kategori: string;
  tahun: string;
  stack: string[];
  deskripsi: string;
  demo?: string;
  github?: string;
  notebook?: string;
  gambar: string;
  unggulan?: boolean;
}

export const projects: Project[] = [
  {
    id: 'stunting-prediction',
    nama: 'Prediksi Risiko Stunting',
    kategori: 'Machine Learning',
    tahun: '2026',
    stack: ['Python', 'CatBoost', 'XGBoost', 'Streamlit'],
    deskripsi: 'Memprediksi risiko stunting pada balita menggunakan algoritma CatBoost dan XGBoost berdasarkan data antropometri.',
    demo: 'https://stuntingpredictionupdate-e77sn7h3uhz88ufn5zckdq.streamlit.app/',
    notebook: 'https://github.com/AndhikaRizky04/Stunting_prediction_fix/blob/main/Prediksi_Stunting_Final_2.ipynb',
    gambar: '/src/assets/banner/prediksi.png',
    unggulan: true
  },
  {
    id: 'tracking-system',
    nama: 'Tracking System Produksi',
    kategori: 'Enterprise Web',
    tahun: '2025',
    stack: ['ASP.NET', 'Oracle Database'],
    deskripsi: 'Mengembangkan aplikasi pelacakan alur produksi pabrik secara real-time terintegrasi database Oracle.',
    github: 'https://github.com/AndhikaRizky04/login',
    gambar: '/src/assets/banner/track.png',
    unggulan: true
  },
  {
    id: 'website-catalog',
    nama: 'Website Catalog',
    kategori: 'Full Stack',
    tahun: '2025',
    stack: ['Laravel', 'React TSX', 'REST API'],
    deskripsi: 'Platform katalog produk interaktif dengan performa optimal dan manajemen API dinamis.',
    demo: 'https://web-porto-eight-omega.vercel.app/',
    github: 'https://github.com/AndhikaRizky04/web-porto',
    gambar: '/src/assets/banner/catalog.png',
    unggulan: true
  },
  {
    id: 'ai-learning-insight',
    nama: 'AI Learning Insight',
    kategori: 'Machine Learning',
    tahun: '2026',
    stack: ['React', 'Machine Learning'],
    deskripsi: 'Dashboard analisis hasil belajar berbasis AI untuk rekomendasi materi pengajaran adaptif.',
    demo: 'https://ai-learning-insight-tau.vercel.app/',
    github: 'https://github.com/AI-Learning-Insight-A25-CS226/AI-Learning-Insight',
    gambar: '/src/assets/banner/ai.png',
    unggulan: true
  },
  {
    id: 'website-ticketing',
    nama: 'Website Ticketing',
    kategori: 'Web App',
    tahun: '2025',
    stack: ['Laravel 12'],
    deskripsi: 'Sistem manajemen tiket gangguan layanan publik berbasis antrean terstruktur.',
    github: 'https://github.com/AndhikaRizky04/Web-TicketingApp',
    gambar: '/src/assets/banner/tiket.png'
  },
  {
    id: 'website-poliklinik',
    nama: 'Website Poliklinik',
    kategori: 'Web App',
    tahun: '2025',
    stack: ['Laravel 12'],
    deskripsi: 'Aplikasi administrasi pasien rawat jalan terintegrasi rekam medis poliklinik.',
    github: 'https://github.com/AndhikaRizky04/projectBengkod',
    gambar: '/src/assets/banner/laravel.jpg'
  },
  {
    id: 'website-banking',
    nama: 'Website Banking',
    kategori: 'Frontend',
    tahun: '2024',
    stack: ['React JS'],
    deskripsi: 'Dashboard perbankan dengan visualisasi transaksi dinamis dan antarmuka responsif.',
    github: 'https://github.com/AndhikaRizky04/admin-ui',
    gambar: '/src/assets/banner/bank.png'
  },
  {
    id: 'android-review-film',
    nama: 'Aplikasi Android Review Film',
    kategori: 'Mobile',
    tahun: '2023',
    stack: ['Java'],
    deskripsi: 'Aplikasi mobile katalog review film dengan fitur pencarian dan penyimpanan lokal.',
    github: 'https://github.com/AndhikaRizky4/Dhika11RPL012019',
    gambar: '/src/assets/banner/flut.webp'
  },
  {
    id: 'android-penjualan-umkm',
    nama: 'Aplikasi Android Penjualan UMKM',
    kategori: 'Mobile',
    tahun: '2024',
    stack: ['Flutter'],
    deskripsi: 'Aplikasi pencatatan transaksi kasir digital dan laporan penjualan harian UMKM.',
    github: 'https://github.com/AndhikaRizky04/Aplikasi-UMKM-Flutter',
    gambar: '/src/assets/banner/flut.webp'
  },
  {
    id: 'game-coin',
    nama: 'Game Coin',
    kategori: 'Game',
    tahun: '2023',
    stack: ['C#'],
    deskripsi: 'Game 2D platformer bertema pengumpulan koin dengan fisika mekanik buatan sendiri.',
    github: 'https://github.com/AndhikaRizky4/PTSGame',
    gambar: '/src/assets/banner/c.jpg'
  }
];
