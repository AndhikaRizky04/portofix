import React from 'react';
import { FiCheck, FiArrowRight, FiDownload } from 'react-icons/fi';
import GhostFibers from '../reactbits/GhostFibers';
import StrokeText from '../reactbits/StrokeText';
import Shuffle from '../reactbits/Shuffle';
import Magnet from '../reactbits/Magnet';
import CountUp from '../reactbits/CountUp';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';

interface HeroBannerProps {
  onOpenCv: () => void;
  onScrollTo: (id: string) => void;
}

const highlights = ['React & Laravel', 'AI Integration', 'Sertifikasi BNSP'];

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenCv, onScrollTo }) => {
  return (
    <section id="hero" className="pt-[92px] md:pt-[120px] px-3 md:px-6 scroll-mt-24">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[28px] md:rounded-[36px] bg-forest-950 shadow-[0_40px_80px_-40px_rgba(4,23,11,0.8)]">
        {/* Latar animasi Ghost Fibers */}
        <div className="absolute inset-0" aria-hidden="true">
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

        {/* Gradasi agar teks tetap terbaca di atas fiber */}
        <div className="pointer-events-none absolute inset-0 bg-forest-950/55 lg:bg-transparent lg:bg-gradient-to-r lg:from-forest-950/90 lg:via-forest-950/45 lg:to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-950/80 to-transparent" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 px-5 py-8 sm:px-8 sm:py-12 md:px-12 lg:min-h-[640px] lg:grid-cols-12 lg:gap-12 lg:px-14 lg:py-16">
          {/* Kolom kiri: teks */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-lime-300 select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-lime led-blink-amber" />
              Tersedia untuk direkrut
            </span>

            <div className="space-y-1">
              <Shuffle
                text="Full-Stack Web Developer"
                tag="p"
                textAlign="left"
                effect="slide"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce
                triggerOnHover
                hoverRadius={0}
                motionBlur={false}
                respectReducedMotion
                maxDelay={0}
                scrambleCharset=""
                loop={false}
                loopDelay={0}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(1rem, 2.2vw, 1.5rem)',
                  letterSpacing: '0.04em',
                  color: 'var(--color-lime)',
                }}
              />

              <h1 className="sr-only">{profile.nama}</h1>
              <div className="max-w-[620px] -ml-1">
                <StrokeText
                  text="ANDHIKA"
                  className="stroke-text--left"
                  strokeColor="#A6DB5A"
                  fillColor="#FFFFFF"
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
                  fontWeight={800}
                  letterSpacing={-4}
                  marching={false}
                  hoverRedraw
                  shadow={false}
                  fontFamily="Montserrat, sans-serif"
                  reverse={false}
                />
              </div>
              <div className="max-w-[560px] -ml-0.5">
                <StrokeText
                  text="RIZKY NUR WAHYU"
                  className="stroke-text--left"
                  strokeColor="#8CC63F"
                  fillColor="#8CC63F"
                  strokeStyle="solid"
                  strokeWidth={1.2}
                  drawDuration={1.8}
                  fillDelay={0.4}
                  stagger={0.04}
                  ease="power2.out"
                  trigger="mount"
                  fillMode="none"
                  fontSize={64}
                  fontWeight={800}
                  letterSpacing={-1}
                  hoverRedraw
                  fontFamily="Montserrat, sans-serif"
                />
              </div>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-[15px]">
              {profile.deskripsi}
            </p>

            <ul className="flex flex-wrap gap-x-5 gap-y-2.5 select-none">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-medium text-white/85">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-lime text-forest-950">
                    <FiCheck size={12} strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
              <Magnet className="w-full sm:w-auto">
                <button
                  onClick={() => onScrollTo('#portofolio')}
                  className="btn-lime inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold cursor-pointer focus-ring sm:w-auto"
                >
                  Lihat Portofolio <FiArrowRight />
                </button>
              </Magnet>
              <Magnet className="w-full sm:w-auto">
                <button
                  onClick={onOpenCv}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl sm:w-auto border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:border-lime hover:text-lime transition-colors cursor-pointer focus-ring"
                >
                  <FiDownload /> Lihat & Unduh CV
                </button>
              </Magnet>
            </div>
          </div>

          {/* Kolom kanan: foto — ornamen berada di dalam area aman (padding) agar tidak terpotong */}
          <div className="order-first mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:order-none lg:col-span-5 lg:max-w-[400px]">
            <div className="relative px-5 pb-6 pt-4 sm:px-7 sm:pb-8">
              <div className="relative aspect-[4/5] w-full">
                {/* Panel lime bergaris di belakang foto */}
                <div
                  className="absolute inset-0 translate-x-3 translate-y-3 rotate-[4deg] rounded-[26px] bg-lime bg-lime-stripes shadow-[0_30px_60px_-30px_rgba(140,198,63,0.8)] sm:translate-x-4 sm:translate-y-4 sm:rounded-[30px]"
                  aria-hidden="true"
                />
                {/* Lingkaran putus-putus di pojok kanan atas */}
                <div
                  className="absolute -right-4 -top-4 hidden h-16 w-16 rounded-full border-2 border-dashed border-lime/50 animate-spin-slow sm:block"
                  aria-hidden="true"
                />

                <div className="group relative h-full overflow-hidden rounded-[24px] border-4 border-forest-900 bg-forest-800 sm:rounded-[28px]">
                  <img
                    src={profile.fotoPath}
                    alt={`Foto ${profile.nama}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-950/75 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-white sm:bottom-4 sm:left-4 sm:right-4">
                    <span className="truncate text-[11px] font-medium text-white/80 sm:text-xs">{profile.biodata.domisili}</span>
                    <span className="shrink-0 rounded-full bg-lime px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-forest-950 sm:text-[10px]">
                      Open to work
                    </span>
                  </div>
                </div>

                {/* Badge melayang — selaras di tepi kiri atas & kanan bawah */}
                <div className="absolute -left-5 top-6 animate-float rounded-2xl bg-white px-3 py-2 shadow-xl select-none sm:-left-7 sm:px-4 sm:py-3">
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-slate sm:text-[10px]">IPK</div>
                  <div className="font-display text-lg leading-none text-forest-900 sm:text-2xl">
                    <CountUp end={3.54} decimals={2} duration={1.6} />
                  </div>
                </div>
                <div className="absolute -right-5 bottom-14 animate-float-slow rounded-2xl bg-forest-900 px-3 py-2 shadow-xl ring-1 ring-lime/30 select-none sm:-right-7 sm:bottom-16 sm:px-4 sm:py-3">
                  <div className="font-display text-lg leading-none text-lime sm:text-2xl">
                    <CountUp end={projects.length} duration={1.6} suffix="+" />
                  </div>
                  <div className="text-[9px] font-semibold uppercase tracking-wider text-white/70 sm:text-[10px]">Proyek</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
