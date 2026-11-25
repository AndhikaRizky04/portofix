import React from 'react';
import { FiBookOpen } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { educations } from '../../data/education';

export const Education: React.FC = () => {
  return (
    <section id="pendidikan" className="mx-auto max-w-[1240px] px-6 pt-20 md:pt-24 scroll-mt-28">
      <SectionHeader title="Riwayat Pendidikan" eyebrow={`${educations.length} jenjang`} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {educations.map((edu, idx) => {
          const [mulai, selesai] = edu.periode.split('–');
          return (
            <Reveal key={edu.institusi} delay={idx * 0.1}>
              <article className="card-lift group relative flex h-full gap-5 overflow-hidden rounded-[22px] border border-rule bg-white p-6 md:p-7">
                <div className="flex w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-forest-900 py-4 text-center">
                  <span className="font-display text-lg text-lime leading-none">{mulai}</span>
                  <span className="my-2 h-5 w-px bg-white/20" />
                  <span className="font-display text-lg text-white leading-none">{selesai || 'Kini'}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg leading-tight text-forest-900">{edu.institusi}</h3>
                  <div className="text-sm font-semibold text-lime">{edu.jurusan}</div>
                  {edu.detail && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold text-forest-800">
                      <FiBookOpen size={12} /> {edu.detail}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
