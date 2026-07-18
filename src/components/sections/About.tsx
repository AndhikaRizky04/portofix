import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import CountUp from '../reactbits/CountUp';
import TechnicalImage from '../ui/TechnicalImage';
import { profile } from '../../data/profile';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="py-16 border-hairline-b scroll-mt-14">
      <SectionHeader 
        title="Tentang Saya" 
        eyebrow="TENTANG SAYA · SPESIFIKASI DIRI · AKTIF" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: Foto & Tabel Spesifikasi */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative border-hairline bg-ink-800 p-2 overflow-hidden rounded-[4px] select-none max-w-[280px]">
            <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-steel/40" />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-steel/40" />
            <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-steel/40" />
            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-steel/40" />
            
            <TechnicalImage 
              src={profile.fotoPath} 
              alt={profile.nama}
              className="w-full h-auto aspect-[1/1] object-cover border-hairline duotone-filter"
              aspectRatio="aspect-[1/1]"
            />
          </div>

          {/* Tabel Spesifikasi */}
          <div className="border-hairline bg-ink-850 rounded-[4px] overflow-hidden select-none">
            <div className="bg-ink-800 px-4 py-2 border-hairline-b label-mono text-steel">
              SPEC_DATA // BIODATA
            </div>
            <div className="divide-y divide-line text-xs font-mono">
              <div className="flex justify-between p-3 gap-4">
                <span className="text-mute uppercase tracking-widest">DOMISILI</span>
                <span className="text-bone text-right">{profile.biodata.domisili}</span>
              </div>
              <div className="flex justify-between p-3 gap-4">
                <span className="text-mute uppercase tracking-widest">PENDIDIKAN</span>
                <span className="text-bone text-right">{profile.biodata.pendidikan}</span>
              </div>
              <div className="flex justify-between p-3 gap-4">
                <span className="text-mute uppercase tracking-widest">UNIVERSITAS</span>
                <span className="text-bone text-right">{profile.biodata.universitas}</span>
              </div>
              <div className="flex justify-between p-3 gap-4 items-center">
                <span className="text-mute uppercase tracking-widest">IPK_SCORE</span>
                <span className="text-phosphor font-bold">
                  <CountUp end={3.54} decimals={2} duration={1.5} /> / 4.00
                </span>
              </div>
              <div className="flex justify-between p-3 gap-4">
                <span className="text-mute uppercase tracking-widest">MINAT</span>
                <span className="text-bone text-right">{profile.biodata.minat}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Narasi Realistis */}
        <div className="lg:col-span-7 space-y-6 text-sm text-mute leading-relaxed font-sans">
          <p>
            Perjalanan saya di dunia rekayasa perangkat lunak dimulai sejak tahun 2019 di{' '}
            <strong className="text-bone font-medium">SMK Raden Umar Said Kudus</strong>, mengambil spesialisasi{' '}
            <span className="text-steel font-mono uppercase text-[11px] tracking-wider">Rekayasa Perangkat Lunak</span>. 
            Selama masa studi S1 Teknik Informatika di{' '}
            <strong className="text-bone font-medium">Universitas Dian Nuswantoro</strong> (2022–2026), saya memfokuskan 
            diri pada pengembangan full stack web, mobile, serta penerapan algoritma machine learning untuk memecahkan 
            masalah analisis data praktis.
          </p>
          <p>
            Pada awal 2025, saya berkesempatan magang di{' '}
            <strong className="text-bone font-medium">PT Pura Barutama (Unit Offset)</strong>. Di sana, saya merancang 
            dan mengimplementasikan aplikasi <strong className="text-bone font-medium">Tracking System produksi</strong> alur 
            produksi real-time berbasis <span className="text-steel font-mono uppercase text-[11px] tracking-wider">ASP.NET</span>{' '}
            yang terintegrasi langsung dengan database <span className="text-steel font-mono uppercase text-[11px] tracking-wider">Oracle</span>. 
            Pengalaman langsung di lantai produksi pabrik ini membentuk pemahaman saya akan pentingnya membangun sistem yang presisi, 
            terkalibrasi, dan tangguh untuk pemantauan data skala industri.
          </p>
          <p>
            Di bidang machine learning, saya membangun model klasifikasi untuk mendeteksi risiko stunting pada balita menggunakan 
            algoritma <span className="text-steel font-mono uppercase text-[11px] tracking-wider">CatBoost</span> dan{' '}
            <span className="text-steel font-mono uppercase text-[11px] tracking-wider">XGBoost</span> berdasarkan data antropometri balita. 
            Fokus utama saya adalah menjembatani logika pemrograman backend dan pemrosesan data analitik guna menghasilkan solusi 
            perangkat lunak yang fungsional, tepat sasaran, dan padat data.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
