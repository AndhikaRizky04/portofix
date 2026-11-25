import React from 'react';
import { HiLightningBolt } from 'react-icons/hi';
import { FiMapPin, FiBookOpen, FiAward, FiTarget } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import CountUp from '../reactbits/CountUp';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import { certifications } from '../../data/certifications';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-forest-800">{children}</span>
);

export const About: React.FC = () => {
  const biodata = [
    { icon: <FiMapPin />, label: 'Domisili', value: profile.biodata.domisili },
    { icon: <FiBookOpen />, label: 'Pendidikan', value: `${profile.biodata.pendidikan} · ${profile.biodata.universitas}` },
    { icon: <FiAward />, label: 'IPK', value: profile.biodata.ipk },
    { icon: <FiTarget />, label: 'Minat', value: profile.biodata.minat },
  ];

  return (
    <section id="tentang" className="mx-auto max-w-[1240px] px-6 pt-20 md:pt-24 scroll-mt-28">
      <SectionHeader title="Tentang Saya" eyebrow="Profil singkat" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-stretch">
        {/* Kartu kiri ala banner "Заряжайся свободой!" */}
        <Reveal className="lg:col-span-5" x={-30} y={0}>
          <div className="relative h-full overflow-hidden rounded-[28px] bg-mist p-6 sm:p-8 md:p-10">
            <div className="absolute inset-0 bg-dot-grid opacity-70" aria-hidden="true" />
            <HiLightningBolt className="pointer-events-none absolute -right-8 -bottom-8 text-[180px] md:text-[240px] text-lime/15" aria-hidden="true" />

            <div className="relative space-y-8">
              <div className="flex items-start gap-3">
                <HiLightningBolt className="mt-1 shrink-0 text-4xl text-lime" />
                <h3 className="font-display text-3xl md:text-4xl leading-[1.05] text-forest-900">
                  Kode rapi,
                  <br />
                  <span className="text-lime">solusi nyata!</span>
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="font-display text-3xl text-forest-900">
                    <CountUp end={projects.length} duration={1.6} suffix="+" />
                  </div>
                  <div className="text-xs font-medium text-slate">Proyek dibangun</div>
                </div>
                <div className="rounded-2xl bg-forest-900 p-4">
                  <div className="font-display text-3xl text-lime">
                    <CountUp end={3.54} decimals={2} duration={1.6} />
                  </div>
                  <div className="text-xs font-medium text-white/70">IPK / 4.00</div>
                </div>
                <div className="rounded-2xl bg-lime p-4">
                  <div className="font-display text-3xl text-forest-950">
                    <CountUp end={certifications.length} duration={1.4} />
                  </div>
                  <div className="text-xs font-semibold text-forest-900">Sertifikasi</div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="font-display text-3xl text-forest-900">
                    <CountUp end={2019} start={2000} duration={1.6} />
                  </div>
                  <div className="text-xs font-medium text-slate">Mulai ngoding</div>
                </div>
              </div>

              <button
                onClick={() => {
                  const lenis = (window as any).lenis;
                  if (lenis) lenis.scrollTo('#portofolio', { duration: 1.2, offset: -80 });
                  else document.querySelector('#portofolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-forest w-full rounded-xl py-3.5 text-sm font-bold cursor-pointer focus-ring"
              >
                Lihat hasil kerja saya
              </button>
            </div>
          </div>
        </Reveal>

        {/* Kolom kanan: narasi */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-[28px] leading-tight text-forest-900">
              Software engineer — dari logika backend ke <span className="text-lime">dampak nyata</span>
            </h3>

            <p className="text-[15px] leading-relaxed text-slate">
              Perjalanan saya di dunia rekayasa perangkat lunak dimulai sejak tahun 2019 di{' '}
              <Tag>SMK Raden Umar Said Kudus</Tag>, mengambil spesialisasi Rekayasa Perangkat Lunak. Selama masa studi
              S1 Teknik Informatika di <Tag>Universitas Dian Nuswantoro</Tag> (2022–2026), saya memfokuskan diri pada
              pengembangan full stack web, mobile, serta penerapan algoritma machine learning untuk memecahkan masalah
              analisis data praktis.
            </p>

            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime font-display text-sm text-forest-950">1</span>
                <p className="text-[15px] leading-relaxed text-slate">
                  Pada awal 2025, saya magang di <Tag>PT Pura Barutama (Unit Offset)</Tag>, merancang dan
                  mengimplementasikan aplikasi <Tag>Tracking System produksi</Tag> real-time berbasis ASP.NET yang
                  terintegrasi langsung dengan database Oracle — membentuk pemahaman saya akan sistem yang presisi dan
                  tangguh untuk pemantauan data skala industri.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-900 font-display text-sm text-lime">2</span>
                <p className="text-[15px] leading-relaxed text-slate">
                  Di bidang machine learning, saya membangun model klasifikasi untuk mendeteksi risiko stunting pada
                  balita menggunakan <Tag>CatBoost</Tag> dan <Tag>XGBoost</Tag> berdasarkan data antropometri.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime-100 font-display text-sm text-forest-800">3</span>
                <p className="text-[15px] leading-relaxed text-slate">
                  Fokus utama saya adalah menjembatani logika pemrograman backend dan pemrosesan data analitik guna
                  menghasilkan solusi perangkat lunak yang fungsional, tepat sasaran, dan padat data.
                </p>
              </li>
            </ol>

            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
              {biodata.map((b) => (
                <div key={b.label} className="flex items-start gap-3 rounded-2xl border border-rule bg-white p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-lime-100 text-forest-700">
                    {b.icon}
                  </span>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate">{b.label}</dt>
                    <dd className="text-sm font-semibold text-ink">{b.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
