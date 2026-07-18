import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { softSkills } from '../../data/skills';

export const SoftSkills: React.FC = () => {
  return (
    <section id="softskills" className="py-16 border-hairline-b scroll-mt-14">
      <SectionHeader 
        title="Pengembangan Karakter" 
        eyebrow={`SOFT SKILL · ${softSkills.length} KATEGORI · PERSONAL`} 
      />

      <div className="flex flex-wrap gap-3">
        {softSkills.map((skill, idx) => (
          <span
            key={`soft-${idx}`}
            className="label-mono text-[11px] text-mute border-hairline bg-ink-800 py-1.5 px-4 rounded-[3px] select-none hover:border-phosphor hover:text-phosphor transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
export default SoftSkills;
