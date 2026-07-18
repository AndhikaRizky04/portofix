import React, { useEffect, useState } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const InstrumentRail: React.FC = () => {
  const progress = useScrollProgress();
  const [activeSection, setActiveSection] = useState('SYS_INIT');

  const sections = [
    { id: 'hero', label: 'SYS_INIT' },
    { id: 'tentang', label: 'ABOUT_ME' },
    { id: 'pengalaman', label: 'EXP_LINE' },
    { id: 'portofolio', label: 'PRJ_TELE' },
    { id: 'keahlian', label: 'SKL_TECH' },
    { id: 'sertifikasi', label: 'CRT_VALD' },
    { id: 'kontak', label: 'SYS_CONN' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Target viewport center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matched = sections.find((s) => s.id === entry.target.id);
          if (matched) {
            setActiveSection(matched.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((s) => {
      const element = document.getElementById(s.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden lg:flex fixed top-0 right-0 h-screen w-10 border-hairline-l bg-ink-900/60 z-30 flex-col items-center justify-between py-8 select-none font-mono text-[9px] tracking-widest text-mute">
      {/* Top: Blinking LED & Availability Status */}
      <div className="flex items-center gap-1.5 rotate-90 origin-center translate-y-12 w-32 justify-end">
        <span className="w-1.5 h-1.5 rounded-full bg-phosphor led-blink-amber" />
        <span className="text-[8px] text-steel font-medium tracking-[0.08em] whitespace-nowrap">
          TERSEDIA UNTUK DIREKRUT
        </span>
      </div>

      {/* Middle: Active Section (Rotated 90 deg counter-clockwise) */}
      <div className="-rotate-90 origin-center whitespace-nowrap select-none font-bold text-bone flex items-center justify-center">
        <span className="tracking-[0.12em]">{activeSection}</span>
      </div>

      {/* Bottom: Scroll Progress Percentage */}
      <div className="flex flex-col items-center gap-0.5 select-none">
        <span className="text-[10px] text-phosphor font-bold font-mono">
          {String(Math.round(progress)).padStart(3, '0')}%
        </span>
        <span className="text-[7px] text-mute/60 tracking-normal font-mono">
          TELEMETRY
        </span>
      </div>
    </div>
  );
};
export default InstrumentRail;
