import React from 'react';
import { FiLayout, FiServer, FiSmartphone, FiDatabase, FiCpu, FiTool } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import TechChip from '../ui/TechChip';
import { skillCategories } from '../../data/skills';

const categoryIcon: Record<string, React.ReactNode> = {
  'Front-End': <FiLayout />,
  'Back-End': <FiServer />,
  Mobile: <FiSmartphone />,
  Database: <FiDatabase />,
  'Machine Learning': <FiCpu />,
  Tools: <FiTool />,
};

export const Skills: React.FC = () => {
  const totalTools = skillCategories.reduce((acc, cat) => acc + cat.tools.length, 0);

  return (
    <section id="keahlian" className="mx-auto max-w-[1240px] px-3 md:px-6 pt-20 md:pt-24 scroll-mt-28">
      <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-forest-900 px-6 py-12 md:px-12 md:py-16">
        <div className="absolute inset-0 bg-doodle-lime opacity-[0.06]" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/20 blur-3xl" aria-hidden="true" />

        <div className="relative">
          <SectionHeader
            tone="dark"
            title="Keahlian Teknis"
            eyebrow={`${skillCategories.length} kategori · ${totalTools} tools`}
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat, idx) => (
              <Reveal key={cat.kategori} delay={idx * 0.06}>
                <div className="group h-full rounded-[22px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-lime/60 hover:bg-white/[0.07]">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime text-xl text-forest-950 transition-transform duration-500 group-hover:rotate-[-10deg]">
                        {categoryIcon[cat.kategori] ?? <FiTool />}
                      </span>
                      <h3 className="font-display text-base text-white">{cat.kategori}</h3>
                    </div>
                    <span className="text-xs font-semibold text-lime-300">
                      {String(cat.tools.length).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((t) => (
                      <TechChip key={t} tech={t} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
