import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { educations } from '../../data/education';

export const Education: React.FC = () => {
  return (
    <section id="pendidikan" className="py-16 border-hairline-b scroll-mt-14">
      <SectionHeader 
        title="Riwayat Pendidikan" 
        eyebrow="PENDIDIKAN · 2 ENTRI · AKADEMIK" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {educations.map((edu, idx) => (
          <div 
            key={`edu-${idx}`} 
            className="flex gap-6 border-hairline bg-ink-800 p-5 rounded-[4px] select-none"
          >
            {/* Year Column (Left, large mono) */}
            <div className="flex flex-col items-center justify-start border-hairline-r pr-5 text-phosphor min-w-[70px]">
              <span className="font-mono text-lg font-bold tracking-wider leading-none">
                {edu.periode.split('–')[0]}
              </span>
              <span className="font-mono text-[10px] text-mute/60 mt-1 select-none">
                MULAI
              </span>
              <div className="w-px h-6 bg-line my-2" />
              <span className="font-mono text-lg font-bold tracking-wider leading-none">
                {edu.periode.split('–')[1] || 'SELESAI'}
              </span>
            </div>

            {/* Content Column (Right) */}
            <div className="space-y-1">
              <h3 className="font-display text-sm md:text-base text-bone tracking-tight uppercase">
                {edu.institusi}
              </h3>
              <div className="label-mono text-steel text-xs">
                {edu.jurusan}
              </div>
              {edu.detail && (
                <div className="font-mono text-[11px] text-phosphor font-medium mt-2 bg-ink-900 py-1 px-2 border-hairline inline-block">
                  {edu.detail}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;
