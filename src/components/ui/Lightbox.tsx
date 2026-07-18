import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import TechnicalImage from './TechnicalImage';

interface LightboxProps {
  isOpen: boolean;
  activeIndex: number;
  items: { src: string; alt: string; caption: string }[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  activeIndex,
  items,
  onClose,
  onPrev,
  onNext,
}) => {
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft') onPrev();
        if (e.key === 'ArrowRight') onNext();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[activeIndex];
  const counterLabel = `${String(activeIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-ink-900/95 backdrop-blur-md p-6 select-none"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Top Header Grid */}
        <div className="w-full max-w-5xl flex items-center justify-between z-10 select-none">
          <span className="font-mono text-[9px] text-steel tracking-widest uppercase">
            VAL_GRID // LIGHTBOX_METADATA_STREAM
          </span>
          <button
            onClick={onClose}
            className="text-mute hover:text-phosphor transition-colors duration-150 p-1.5 cursor-pointer"
            aria-label="Tutup"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Center Display with Controls */}
        <div className="w-full max-w-5xl flex-1 flex items-center justify-between gap-4 relative min-h-0 py-4">
          {/* Navigation Prev */}
          <button
            onClick={onPrev}
            className="absolute left-2 md:left-4 z-25 p-2 border-hairline bg-ink-800/80 text-bone hover:text-phosphor hover:border-phosphor transition-colors duration-150 cursor-pointer"
            aria-label="Sebelumnya"
          >
            <FiChevronLeft size={18} />
          </button>

          {/* Shared Layout Image Frame */}
          <div className="w-full h-full flex items-center justify-center p-2 relative z-10">
            <motion.div
              layoutId={isReducedMotion ? undefined : `gallery-img-${currentItem.src}`}
              className="max-w-[85vw] max-h-[60vh] md:max-h-[70vh] border-hairline bg-ink-800 relative overflow-hidden"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <TechnicalImage
                src={currentItem.src}
                alt={currentItem.alt}
                className="max-h-[60vh] md:max-h-[70vh] object-contain w-auto h-auto"
                aspectRatio="none"
              />
            </motion.div>
          </div>

          {/* Navigation Next */}
          <button
            onClick={onNext}
            className="absolute right-2 md:right-4 z-25 p-2 border-hairline bg-ink-800/80 text-bone hover:text-phosphor hover:border-phosphor transition-colors duration-150 cursor-pointer"
            aria-label="Berikutnya"
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Bottom Details Footer */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 border-hairline-t pt-4 z-10 font-mono text-xs select-none">
          <div className="text-center md:text-left text-bone max-w-xl">
            <p className="font-sans font-medium text-sm text-bone mb-1">{currentItem.alt}</p>
            <p className="text-[10px] text-mute uppercase tracking-normal">{currentItem.caption}</p>
          </div>
          <div className="text-phosphor font-bold tracking-[0.15em] text-xs bg-ink-850 py-1.5 px-3 border-hairline">
            {counterLabel}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Lightbox;
