# Portofolio Pribadi — Andhika Rizky Nur Wahyu

Website portofolio interaktif bergaya panel instrumen presisi yang dirancang khusus untuk Andhika Rizky Nur Wahyu, menampilkan proyek, keahlian, pengalaman kerja, serta galeri dokumentasi magang PT. Pura Barutama.

## Stack Teknologi

- **Framework**: React 19 + TypeScript (Vite)
- **Styling**: Tailwind CSS v4 (menggunakan token `@theme` di `src/styles/index.css`)
- **Routing**: `react-router-dom` v7
- **Animasi**: `gsap` (ScrollTrigger), `lenis` (smooth scroll), dan `framer-motion` (motion)
- **Komponen Animasi**: Pilihan komponen React Bits (SplitText, RotatingText, DecryptedText, CountUp, SpotlightCard, TiltedCard, Magnet, StarBorder)
- **Viewer**: `react-pdf` (untuk render berkas kurikulum vitae dalam modal dengan navigasi membalik lembar)
- **Ikon**: `react-icons` (simple-icons + lucide-react)

---

## Panduan Menjalankan Secara Lokal

1. **Instalasi Dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan Server Pengembangan**:
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:5173`.

3. **Uji Build Produksi**:
   ```bash
   npm run build
   ```

4. **Pratinjau Hasil Build**:
   ```bash
   npm run preview
   ```

---

## Cara Mengelola Konten

Seluruh data tekstual dipisahkan dari logika komponen dan disimpan sebagai modul TypeScript di dalam direktori `src/data/`. Anda dapat memperbarui portofolio tanpa mengubah file komponen dengan mengedit file-file berikut:

- **Profil & Biodata**: Edit `src/data/profile.ts` untuk memperbarui nama, gelar, deskripsi, biodata tabel spesifikasi, koordinat lokasi, dan tautan sosial (Ganti nilai placeholder `ISI_EMAIL`, `ISI_NOMOR_WA`, dan `ISI_URL_LINKEDIN` dengan kontak riil Anda).
- **Proyek**: Edit `src/data/projects.ts` untuk menambah, mengubah, atau menyembunyikan proyek (termasuk tag stack, link demo, repositori github, dan notebook jupyter). Tandai proyek utama dengan `unggulan: true` untuk layout card berukuran ganda.
- **Pengalaman Kerja**: Edit `src/data/experience.ts`.
- **Keahlian**: Edit `src/data/skills.ts` untuk mengelola tool berdasarkan 6 kategori dan soft skills.
- **Pendidikan**: Edit `src/data/education.ts`.
- **Sertifikasi**: Edit `src/data/certifications.ts`.
- **Organisasi & Kegiatan**: Edit `src/data/organizations.ts`.
- **Dokumentasi Magang**: Edit `src/data/gallery.ts` untuk memetakan foto kegiatan magang berserta kategori kegiatan dan dimensinya.

---

## Cara Mengganti Berkas & Media Aset

Seluruh file berkas statis disimpan di folder `public/`:

1. **Foto Profil**:
   - Ganti file `public/img/profile.jpg` dengan potret diri Anda.

2. **Kurikulum Vitae (CV)**:
   - Ganti berkas `public/cv/CV-Andhika-Rizky-Nur-Wahyu.pdf` dengan file CV terbaru Anda.

3. **Tangkapan Layar Proyek**:
   - Simpan gambar projek dalam format `.webp` di folder `public/img/projects/` dengan nama yang sesuai di `src/data/projects.ts` (contoh: `stunting.webp`, `tracking.webp`).

4. **Gambar Sertifikat**:
   - Simpan gambar sertifikat lisensi dalam format `.webp` di folder `public/img/certificates/` (contoh: `bnsp.webp`, `asah.webp`, `cflt.webp`).

5. **Foto Dokumentasi Magang**:
   - Simpan gambar foto dokumentasi di folder `public/img/documentation/` (contoh: `magang-1.webp`, `magang-2.webp`, dst.).

*Catatan: Bila gambar belum diganti, sistem akan otomatis merender box calibration bermotif blueprint dengan koordinat teknis dan nama file yang tidak merusak tampilan UI.*

---

## Panduan Deploy ke Vercel

1. **Instal Vercel CLI** (opsional):
   ```bash
   npm i -g vercel
   vercel
   ```
2. **Deploy via GitHub**:
   - Hubungkan repositori GitHub Anda ke Vercel Dashboard.
   - Atur pengaturan framework ke **Vite**.
   - Klik **Deploy**. Pengalihan routing dan file statis akan ditangani secara otomatis oleh Vercel.
