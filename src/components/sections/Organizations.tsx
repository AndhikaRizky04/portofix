import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { organizations } from '../../data/organizations';

export const Organizations: React.FC = () => {
  return (
    <section id="organisasi" className="py-16 border-hairline-b scroll-mt-14">
      <SectionHeader 
        title="Organisasi & Kegiatan" 
        eyebrow="ORGANISASI · 2 ENTRI · KEGIATAN" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {organizations.map((org, idx) => (
          <div 
            key={`org-${idx}`} 
            className="border-hairline bg-ink-800 p-5 rounded-[4px] flex flex-col justify-between hover:border-steel/30 transition-standard select-none"
          >
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-sm md:text-base text-bone tracking-tight uppercase">
                  {org.nama}
                </h3>
                <span className="label-mono text-phosphor text-[9px] bg-ink-900 py-0.5 px-2 border-hairline">
                  {org.peran}
                </span>
              </div>

              {/* Description */}
              {org.deskripsi && (
                <p className="text-sm text-mute leading-relaxed font-sans">
                  {org.deskripsi}
                </p>
              )}
            </div>

            {/* Tags Row */}
            <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-line">
              {org.tags.map((tag, tIdx) => (
                <span 
                  key={`tag-${tIdx}`}
                  className="label-mono text-[9px] text-steel border-hairline py-0.5 px-2 rounded-[2px] bg-ink-850"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Organizations;
