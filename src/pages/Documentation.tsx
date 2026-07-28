import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { galleryItems } from '../data/gallery';
import TechnicalImage from '../components/ui/TechnicalImage';
import Lightbox from '../components/ui/Lightbox';
import { motion } from 'framer-motion';

export const Documentation: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>('SEMUA');
  const [activeImgIndex, setActiveImgIndex] = useState<number | null>(null);

  const activities = ['SEMUA', 'PENGEMBANGAN', 'KOLABORASI', 'DIVISI HR', 'PELATIHAN'];

  const filteredItems = selectedActivity === 'SEMUA'
    ? galleryItems
    : galleryItems.filter(item => item.kegiatan.toUpperCase() === selectedActivity);

  const handlePrev = () => {
    setActiveImgIndex((prev) => 
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    );
  };

  const handleNext = () => {
    setActiveImgIndex((prev) => 
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  };

  return (
    <div className="relative min-h-screen bg-ink-900 bg-grid-blueprint text-bone p-6 md:p-12">
      {/* Back Button (Instrument Rail Corner style) */}
      <div className="fixed top-6 left-6 z-40 select-none">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 border-hairline bg-ink-800 py-2 px-4 rounded-[4px] label-mono text-xs text-mute hover:text-phosphor hover:border-phosphor transition-colors duration-150 focus-ring-amber"
        >
          <FiArrowLeft size={14} />
          <span>KEMBALI_BERANDA</span>
        </Link>
      </div>

      <div className="max-w-[1100px] mx-auto pt-20 space-y-10">
        {/* Header Metadata */}
        <div className="border-hairline-b pb-4 select-none">
          <div className="label-mono text-steel mb-2">
            DOKUMENTASI · MAGANG PT. PURA BARUTAMA · FEB–MAR 2025
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-bone">
            GALERI MAGANG UNIT OFFSET
          </h1>
        </div>

        {/* Activity Filters */}
        <div className="flex flex-wrap items-center gap-2 select-none">
          {activities.map((act) => {
            const isActive = selectedActivity === act;
            return (
              <button
                key={act}
                onClick={() => {
                  setSelectedActivity(act);
                  setActiveImgIndex(null);
                }}
                className={`label-mono py-1 px-3 border-hairline transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-phosphor text-ink-900 border-phosphor font-bold'
                    : 'text-mute hover:text-phosphor hover:border-phosphor'
                }`}
              >
                {act}
              </button>
            );
          })}
        </div>

        {/* Masonry Layout Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.src}
              onClick={() => setActiveImgIndex(index)}
              className="break-inside-avoid relative overflow-hidden border-hairline bg-ink-800 p-2 rounded-[4px] group cursor-pointer hover:border-steel/50 transition-standard select-none"
            >
              {/* Image Border Wrapper */}
              <div className="relative overflow-hidden bg-ink-900 border-hairline">
                <motion.div
                  layoutId={`gallery-img-${item.src}`}
                  className="w-full h-full"
                >
                  <TechnicalImage 
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover duotone-filter"
                    aspectRatio="none"
                  />
                </motion.div>
                {/* Blueprint grid overlay */}
                <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-10" />
              </div>

              {/* Factual Image Ticks/Labels */}
              <div className="mt-3 font-mono text-[9px] text-mute uppercase tracking-wider space-y-1">
                <div className="flex items-center justify-between text-steel font-medium">
                  <span>{item.kegiatan}</span>
                  <span>{item.w} x {item.h} px</span>
                </div>
                <div className="text-[10px] text-bone font-medium tracking-normal normal-case font-sans truncate">
                  {item.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Frame */}
      <Lightbox
        isOpen={activeImgIndex !== null}
        activeIndex={activeImgIndex ?? 0}
        items={filteredItems.map(item => ({
          src: item.src,
          alt: item.alt,
          caption: item.caption
        }))}
        onClose={() => setActiveImgIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
export default Documentation;
