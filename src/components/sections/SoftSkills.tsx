import React from 'react';
import {
  FiMessageCircle, FiMic, FiUsers, FiGitMerge, FiZap, FiClock, FiRefreshCw, FiShield, FiStar,
} from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { softSkills } from '../../data/skills';

const iconFor: Record<string, React.ReactNode> = {
  Komunikasi: <FiMessageCircle />,
  'Public Speaking': <FiMic />,
  'Kerja Sama Tim': <FiUsers />,
  Kolaborasi: <FiGitMerge />,
  'Problem Solving': <FiZap />,
  'Manajemen Waktu': <FiClock />,
  Adaptasi: <FiRefreshCw />,
  'Tanggung Jawab': <FiShield />,
};

/** Baris ikon bulat ala "Преимущества" pada referensi. */
export const SoftSkills: React.FC = () => {
  return (
    <section id="softskills" className="mx-auto max-w-[1240px] px-6 pt-20 md:pt-24 scroll-mt-28">
      <SectionHeader title="Nilai yang Saya Bawa" eyebrow={`${softSkills.length} soft skill`} />

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
        {softSkills.map((skill, idx) => (
          <Reveal key={skill} delay={idx * 0.05} y={16}>
            <div className="group flex flex-col items-center gap-3 text-center select-none">
              <span className="relative grid h-16 w-16 place-items-center rounded-full bg-lime text-2xl text-forest-950 shadow-[0_12px_24px_-12px_rgba(140,198,63,0.9)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-8deg]">
                <span className="absolute inset-0 rounded-full ring-2 ring-lime/40 scale-110 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
                {iconFor[skill] ?? <FiStar />}
              </span>
              <span className="text-sm font-semibold text-forest-900">{skill}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
