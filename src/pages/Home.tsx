import React, { useRef, useState, lazy, Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroBanner from '../components/hero/HeroBanner';
import TechMarquee from '../components/hero/TechMarquee';

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

import { useLenis } from '../hooks/useLenis';

export const Home: React.FC = () => {
  // Initialize Lenis smooth scroll
  useLenis(true);

  const [isCvOpen, setIsCvOpen] = useState(false);
  const cvTriggerRef = useRef<HTMLButtonElement | null>(null);

  const handleScrollTo = (id: string) => {
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(id, { duration: 1.2, offset: -80 });
    } else {
      const el = document.querySelector(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-paper text-ink">
      {/* Pola doodle hijau tipis di belakang seluruh konten */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-doodle opacity-[0.07]" />

      <Navbar />

      <div className="relative z-10">
      <HeroBanner onOpenCv={() => setIsCvOpen(true)} onScrollTo={handleScrollTo} />
      <TechMarquee />

      <main className="space-y-6 md:space-y-10 pb-10">
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Education />
        <Certifications />
        <Organizations />
        <SoftSkills />
        <Contact onOpenCv={() => setIsCvOpen(true)} />
      </main>

      {/* Fullscreen CV modal viewer */}
      <Suspense fallback={null}>
        <CVViewer
          isOpen={isCvOpen}
          onClose={() => setIsCvOpen(false)}
          triggerRef={cvTriggerRef}
        />
      </Suspense>

      <Footer />
      </div>
    </div>
  );
};
export default Home;
