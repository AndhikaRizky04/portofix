import React, { useRef, useState, lazy, Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import InstrumentRail from '../components/layout/InstrumentRail';
import Footer from '../components/layout/Footer';
import TelemetryPlot from '../components/hero/TelemetryPlot';
import Portrait from '../components/hero/Portrait';
import RoleTicker from '../components/hero/RoleTicker';
import SplitText from '../components/reactbits/SplitText';
import Magnet from '../components/reactbits/Magnet';
import StarBorder from '../components/reactbits/StarBorder';

const CVViewer = lazy(() => import('../components/ui/CVViewer'));


// Sections
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Portfolio from '../components/sections/Portfolio';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import Organizations from '../components/sections/Organizations';
import SoftSkills from '../components/sections/SoftSkills';
import Contact from '../components/sections/Contact';

import { profile } from '../data/profile';
import { useLenis } from '../hooks/useLenis';

export const Home: React.FC = () => {
  // Initialize Lenis smooth scroll
  useLenis(true);

  const [isCvOpen, setIsCvOpen] = useState(false);
  const cvTriggerRef = useRef<HTMLButtonElement | null>(null);

  const handleScrollTo = (id: string) => {
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(id, { duration: 1.2 });
    } else {
      const el = document.querySelector(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-ink-900 bg-grid-blueprint text-bone px-6 lg:pr-16 md:px-12">
      {/* Navigation */}
      <Navbar />

      {/* Right Instrumentation Monitor Bar */}
      <InstrumentRail />

      <main className="max-w-[1280px] mx-auto pt-24 space-y-16">
        {/* Section 1: Hero */}
        <section id="hero" className="min-h-[85vh] flex items-center border-hairline-b pb-16 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            {/* Left Content (Cols 1-6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="label-mono text-steel select-none">
                TERSEDIA UNTUK DIREKRUT · KUDUS, JAWA TENGAH
              </div>
              
              <div className="space-y-2">
                <h1 className="leading-none">
                  <SplitText 
                    text={profile.nama} 
                    className="font-display text-4xl sm:text-5xl md:text-6xl text-bone tracking-tight font-black select-all"
                    animateOn="load"
                    stagger={0.035}
                  />
                </h1>
                <div className="font-mono text-xs text-mute/80 uppercase tracking-widest mt-1.5 select-none">
                  {profile.gelarSingkat} · {profile.universitas}
                </div>
              </div>

              {/* Role Ticker */}
              <RoleTicker />

              {/* Description */}
              <p className="text-sm md:text-base text-mute leading-relaxed font-sans max-w-lg">
                {profile.deskripsi}
              </p>

              {/* 4 Interactive Buttons with Magnet physics */}
              <div className="flex flex-wrap items-center gap-4 pt-4 select-none">
                <Magnet>
                  <button
                    onClick={() => handleScrollTo('#portofolio')}
                    className="label-mono text-xs py-2.5 px-5 border-hairline bg-ink-800 text-bone hover:border-steel hover:text-phosphor transition-colors duration-150 rounded-[4px] cursor-pointer focus-ring-amber"
                  >
                    LIHAT PORTOFOLIO
                  </button>
                </Magnet>

                <Magnet>
                  <StarBorder onClick={() => setIsCvOpen(true)}>
                    <span className="label-mono text-xs font-bold text-phosphor tracking-wider">
                      LIHAT & UNDUH CV
                    </span>
                  </StarBorder>
                </Magnet>

                <Magnet>
                  <button
                    onClick={() => handleScrollTo('#kontak')}
                    className="label-mono text-xs py-2.5 px-4 text-mute hover:text-bone transition-colors duration-150 cursor-pointer focus-ring-amber"
                  >
                    HUBUNGI SAYA
                  </button>
                </Magnet>
              </div>
            </div>

            {/* Right Telemetry and Portrait (Cols 7-12) */}
            <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-4">
              {/* SVG interactive line plot mapping Andhika's 10 projects */}
              <TelemetryPlot />
              
              {/* Duotone Registration Profile portrait */}
              <Portrait />
            </div>
          </div>
        </section>

        {/* Section 2: Tentang Saya */}
        <About />

        {/* Section 3: Pengalaman */}
        <Experience />

        {/* Section 4: Portofolio */}
        <Portfolio />

        {/* Section 5: Keahlian */}
        <Skills />

        {/* Section 6: Pendidikan */}
        <Education />

        {/* Section 7: Sertifikasi */}
        <Certifications />

        {/* Section 8: Organisasi */}
        <Organizations />

        {/* Section 9: Soft Skills */}
        <SoftSkills />

        {/* Section 10: Kontak */}
        <Contact />
      </main>

      {/* Fullscreen CV modal viewer */}
      <Suspense fallback={null}>
        <CVViewer 
          isOpen={isCvOpen} 
          onClose={() => setIsCvOpen(false)} 
          triggerRef={cvTriggerRef}
        />
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;
