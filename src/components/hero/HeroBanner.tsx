import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import StrokeText from '../reactbits/StrokeText';
import GhostFibers from '../reactbits/GhostFibers';
import { profile } from '../../data/profile';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface HeroBannerProps {
  onOpenCv: () => void;
  onScrollTo: (id: string) => void;
}

const WORD = 'ANDHIKA';
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Satu lapis kata besar. Dirender dua kali di posisi identik:
 * 'solid' di belakang foto, 'outline' di depan foto — sehingga huruf tampak "tembus" wajah.
 */
const Word: React.FC<{ variant: 'solid' | 'outline'; reduced: boolean }> = ({ variant, reduced }) => (
  <span className={`hero-word ${variant === 'outline' ? 'hero-word--outline' : 'hero-word--solid'}`}>
    {WORD.split('').map((ch, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={reduced ? false : { opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: EASE }}
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenCv, onScrollTo }) => {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Parallax halus: kata bergerak lebih lambat dari foto → kesan kedalaman.
  const wordY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -70]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 50]);

  const wordLayer = 'pointer-events-none absolute inset-x-0 top-[41%] flex -translate-y-1/2 justify-center select-none md:top-[43%]';

  return (
    <section ref={ref} id="hero" tabIndex={-1} className="px-3 pt-[84px] outline-none scroll-mt-24 md:px-6 md:pt-[100px]">
      <h1 className="sr-only">
        {profile.nama} — Full-Stack Web Developer
      </h1>

      <div className="hero-bg relative mx-auto h-[72svh] min-h-[500px] max-h-[860px] max-w-[1240px] overflow-hidden rounded-[28px] md:h-[86svh] md:min-h-[600px] md:rounded-[36px]">
        {/* 0. Latar Ghost Fibers (React Bits) — palet hijau tema */}
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <GhostFibers
            glowColor="#8CC63F"
            layers={3}
            twist={1.2}
            threads={72}
            fiberStyle="dots"
            depthOfField={0.85}
            hoverEffect="focus"
            intro
            mouseInteraction
            lineColor="#E4F6C8"
            secondaryColor="#1F7A3A"
            gradient="depth"
            waves={1}
            volume={0.7}
            spread={1}
            scale={1}
            rotation={18}
            perspective={0.65}
            density={1}
            thickness={1}
            tips={0}
            foldGlow={1}
            speed={0.5}
            flow={0.4}
            rollSpeed={0.15}
            focusDepth={0}
            particles={0.5}
            sparkle={0.5}
            glow={0.8}
            brightness={1}
            vignette={0.3}
            grain={0.06}
            mouseStrength={1}
            pulseOnClick
            lightMode={false}
          />
        </div>

        {/* 1. Kata solid — di belakang foto */}
        <motion.div aria-hidden="true" className={`${wordLayer} z-10`} style={{ y: wordY }}>
          <Word variant="solid" reduced={reduced} />
        </motion.div>

        {/* 2. Foto */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-20 flex h-[80%] justify-center md:h-[88%]"
          style={{ y: photoY }}
          initial={reduced ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
        >
          <img
            src={profile.fotoPath}
            alt={`Potret ${profile.nama}`}
            width={1722}
            height={1746}
            fetchPriority="high"
            decoding="async"
            draggable={false}
            className="hero-photo h-full w-auto max-w-none object-contain object-bottom select-none"
          />
        </motion.div>

        {/* 3. Kata outline — di depan foto */}
        <motion.div aria-hidden="true" className={`${wordLayer} z-30`} style={{ y: wordY }}>
          <Word variant="outline" reduced={reduced} />
        </motion.div>

        {/* 3b. Nama lengkap — StrokeText (React Bits), tepat di bawah kata besar, di depan foto */}
        <motion.div
          aria-hidden="true"
          className="hero-fullname pointer-events-auto absolute left-1/2 z-30 -translate-x-1/2"
          style={{ y: wordY }}
        >
          <StrokeText
            text="RIZKY NUR WAHYU"
            className="hero-fullname__text"
            strokeColor="#A6DB5A"
            fillColor="#8CC63F"
            strokeStyle="solid"
            strokeWidth={1.4}
            dashLength={10}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.05}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            wipeFrom="left"
            fontSize={128}
            fontWeight={400}
            letterSpacing={-1}
            marching={false}
            hoverRedraw
            shadow={false}
            fontFamily="Anton, sans-serif"
            reverse={false}
          />
        </motion.div>

        {/* 4. Teks sudut — seminimal mungkin */}
        <motion.div
          className="absolute inset-0 z-40 flex flex-col justify-between p-5 sm:p-7 md:p-10"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex items-start justify-between gap-4">
            <p className="flex items-center gap-2 text-[13px] text-white/80 md:text-sm">
              <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
              Full-Stack Web Developer
            </p>
            <button
              onClick={() => onScrollTo('#portofolio')}
              aria-label="Lihat portofolio"
              className="group grid size-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-lime hover:bg-lime hover:text-forest-950 focus-ring cursor-pointer md:size-12"
            >
              <FiArrowDownRight className="size-5 transition-transform duration-300 group-hover:rotate-[-45deg]" />
            </button>
          </div>

          <div className="flex items-end justify-between gap-4">
            <p className="text-[13px] leading-snug text-white/80 md:text-sm">
              Berbasis di
              <span className="block text-white/50">{profile.biodata.domisili}, Indonesia</span>
            </p>
            <button
              onClick={onOpenCv}
              className="group inline-flex items-center gap-1.5 rounded-full py-2 text-[13px] text-white/80 underline-offset-4 transition-colors hover:text-lime-300 hover:underline focus-ring cursor-pointer md:text-sm"
            >
              Lihat CV
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
