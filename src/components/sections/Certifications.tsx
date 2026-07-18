import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import TiltedCard from '../reactbits/TiltedCard';
import Lightbox from '../ui/Lightbox';
import { certifications } from '../../data/certifications';

export const Certifications: React.FC = () => {
  const [activeCertIndex, setActiveCertIndex] = useState<number | null>(null);

  // Map to format required by the Lightbox component
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
    setActiveCertIndex((prev) => 
      prev !== null ? (prev + 1) % certifications.length : null
    );
  };

  return (
    <section id="sertifikasi" className="py-16 border-hairline-b scroll-mt-14">
      <SectionHeader 
        title="Sertifikasi & Lisensi" 
        eyebrow="SERTIFIKASI · 3 SERTIFIKAT · VALIDASI" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => {
          const isBnsp = cert.nama.toLowerCase().includes('bnsp');
          return (
            <div 
              key={`cert-${idx}`}
              onClick={() => setActiveCertIndex(idx)}
              className="group border-hairline bg-ink-800 p-4 rounded-[4px] flex flex-col justify-between hover:border-steel/50 transition-standard cursor-pointer"
            >
              <div className="space-y-4">
                {/* Certificate Tilted Card Preview */}
                <div className="relative overflow-hidden bg-ink-900 rounded-[3px]">
                  {isBnsp && cert.berlakuHingga && (
                    <span className="absolute top-2 left-2 z-20 bg-ink-900/90 text-phosphor border border-phosphor font-mono text-[8px] font-semibold tracking-wider px-2 py-0.5 rounded-[2px] select-none">
                      BERLAKU HINGGA {cert.berlakuHingga}
                    </span>
                  )}
                  
                  <TiltedCard
                    imageSrc={cert.gambar}
                    alt={cert.nama}
                    rotateAmplitude={8}
                    scale={1.03}
                    className="w-full aspect-[4/3]"
                  />
                  {/* Calibration lines overlay on card */}
                  <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-10" />
                </div>

                {/* Details */}
                <div className="space-y-1 select-none">
                  <h3 className="font-display text-sm text-bone tracking-tight uppercase leading-snug">
                    {cert.nama}
                  </h3>
                  <p className="label-mono text-steel text-[10px]">
                    {cert.penerbit}
                  </p>
                </div>
              </div>

              {/* Bottom tag info */}
              <div className="border-t border-line mt-4 pt-3 flex items-center justify-between font-mono text-[9px] text-mute uppercase select-none">
                <span>VALID_SYS // CERT_VIEW</span>
                <span>{cert.tanggal}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Trigger */}
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
