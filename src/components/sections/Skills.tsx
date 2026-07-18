import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import TechChip from '../ui/TechChip';
import { skillCategories } from '../../data/skills';

export const Skills: React.FC = () => {
  // Count total tools across categories
  const totalTools = skillCategories.reduce((acc, cat) => acc + cat.tools.length, 0);

  return (
    <section id="keahlian" className="py-16 border-hairline-b scroll-mt-14">
      <SectionHeader 
        title="Keahlian Teknis" 
        eyebrow={`KEAHLIAN · 6 KATEGORI · ${totalTools} TOOL · KALIBRASI`} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <div 
            key={`skill-cat-${idx}`} 
            className="border-hairline bg-ink-800 p-5 rounded-[4px] space-y-4 select-none"
          >
            {/* Category Header */}
            <div className="label-mono text-steel border-hairline-b pb-2 flex items-center justify-between font-bold">
              <span>{cat.kategori}</span>
              <span className="text-[10px] text-mute font-normal">
                [{String(cat.tools.length).padStart(2, '0')}]
              </span>
            </div>

            {/* Chips Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              {cat.tools.map((t, tIdx) => (
                <TechChip key={`tool-${tIdx}`} tech={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
