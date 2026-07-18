import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { experiences } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="pengalaman" className="py-16 border-hairline-b scroll-mt-14">
      <SectionHeader 
        title="Pengalaman Kerja" 
        eyebrow="PENGALAMAN · 2 POSISI · HISTORIS" 
      />

      <div className="relative border-hairline-l pl-6 md:pl-10 space-y-12 ml-4">
        {experiences.map((exp, idx) => (
          <div key={`exp-${idx}`} className="relative">
            {/* Timeline Tick Mark (Amber Dot) */}
            <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-3 w-3 items-center justify-center bg-ink-900 border border-phosphor rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-phosphor led-blink-amber" />
            </span>

            {/* Position details */}
            <div className="space-y-1 mb-4 select-none">
              <div className="label-mono text-steel text-xs font-semibold">
                {exp.periode}
              </div>
              <h3 className="font-display text-lg md:text-xl text-bone tracking-tight uppercase">
                {exp.perusahaan}
              </h3>
              <div className="label-mono text-phosphor text-xs">
                {exp.posisi}
              </div>
            </div>

            {/* Work points list */}
            <ul className="space-y-2 text-sm text-mute leading-relaxed font-sans max-w-3xl list-disc pl-5">
              {exp.poin.map((p, pIdx) => (
                <li key={`point-${pIdx}`} className="marker:text-steel">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
