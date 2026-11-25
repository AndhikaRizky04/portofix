import React from 'react';
import { FiBriefcase, FiPenTool, FiCheck } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { experiences } from '../../data/experience';

const icons = [<FiBriefcase key="b" />, <FiPenTool key="p" />];

export const Experience: React.FC = () => {
  return (
    <section id="pengalaman" className="mx-auto max-w-[1240px] px-3 md:px-6 pt-20 md:pt-24 scroll-mt-28">
      {/* Pita lime ala "Акции дня" */}
      <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-lime px-4 pb-5 pt-8 sm:px-6 sm:pb-8 md:px-10 md:pb-10">
        <div className="absolute inset-0 bg-lime-stripes opacity-40" aria-hidden="true" />
        <div className="relative">
          <SectionHeader title="Pengalaman Kerja" eyebrow={`${experiences.length} posisi`} />
        </div>

        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.perusahaan} delay={idx * 0.12}>
              <article className="card-lift group h-full rounded-[22px] border border-transparent bg-white p-5 sm:p-6 md:p-8 shadow-[0_20px_40px_-28px_rgba(10,46,23,0.6)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="inline-block rounded-full bg-lime-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest-700">
                      {exp.periode}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl leading-tight text-forest-900">
                      {exp.posisi}
                    </h3>
                    <div className="text-sm font-semibold text-lime">{exp.perusahaan}</div>
                  </div>
                  <span className="grid h-11 w-11 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl bg-forest-900 text-xl sm:text-2xl text-lime transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110">
                    {icons[idx % icons.length]}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {exp.poin.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-forest-950">
                        <FiCheck size={11} strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
