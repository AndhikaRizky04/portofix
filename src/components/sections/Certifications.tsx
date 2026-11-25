import React, { useState } from 'react';
import { FiMaximize2 } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import TiltedCard from '../reactbits/TiltedCard';
import Lightbox from '../ui/Lightbox';
import { certifications } from '../../data/certifications';

export const Certifications: React.FC = () => {
  const [activeCertIndex, setActiveCertIndex] = useState<number | null>(null);

  const certItems = certifications.map((c) => ({
    src: c.gambar,
    alt: c.nama,
    caption: `${c.penerbit} · ${c.tanggal} ${c.nomorSertifikat ? `· ${c.nomorSertifikat}` : ''}`,
  }));

  const handlePrev = () => {
    setActiveCertIndex((prev) =>
      prev !== null ? (prev - 1 + certifications.length) % certifications.length : null
    );
  };

  const handleNext = () => {
    setActiveCertIndex((prev) => (prev !== null ? (prev + 1) % certifications.length : null));
  };

  return (
    <section id="sertifikasi" className="mx-auto max-w-[1240px] px-6 pt-20 md:pt-24 scroll-mt-28">
      <SectionHeader title="Sertifikasi & Lisensi" eyebrow={`${certifications.length} sertifikat`} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {certifications.map((cert, idx) => {
          const isBnsp = cert.nama.toLowerCase().includes('bnsp');
          return (
            <Reveal key={cert.nama} delay={idx * 0.1}>
              <button
                type="button"
                onClick={() => setActiveCertIndex(idx)}
                className="card-lift group flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-transparent bg-mist p-3 text-left cursor-pointer focus-ring"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  {isBnsp && cert.berlakuHingga && (
                    <span className="absolute left-3 top-3 z-20 rounded-full bg-forest-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime">
                      Berlaku s.d. {cert.berlakuHingga}
                    </span>
                  )}
                  <span className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-forest-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <FiMaximize2 size={14} />
                  </span>
                  <TiltedCard
                    imageSrc={cert.gambar}
                    alt={cert.nama}
                    rotateAmplitude={8}
                    scale={1.03}
                    className="w-full aspect-[4/3] border-0! bg-white!"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-3 px-2 pb-2 pt-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-sm leading-snug text-forest-900">{cert.nama}</h3>
                    <p className="text-xs font-medium text-slate">{cert.penerbit}</p>
                  </div>
                  <span className="inline-flex w-fit rounded-full bg-lime-100 px-3 py-1 text-[11px] font-semibold text-forest-800">
                    {cert.tanggal}
                  </span>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <Lightbox
        isOpen={activeCertIndex !== null}
        activeIndex={activeCertIndex ?? 0}
        items={certItems}
        onClose={() => setActiveCertIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};

export default Certifications;
