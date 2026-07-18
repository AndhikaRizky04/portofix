import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import { LayoutGroup, motion } from 'framer-motion';

export const Portfolio: React.FC = () => {
  const [selectedKategori, setSelectedKategori] = useState<string>('SEMUA');

  // Extract unique categories, uppercase them
  const categories = ['SEMUA', ...Array.from(new Set(projects.map((p) => p.kategori.toUpperCase())))];

  const filteredProjects = selectedKategori === 'SEMUA'
    ? projects
    : projects.filter((p) => p.kategori.toUpperCase() === selectedKategori);

  return (
    <section id="portofolio" className="py-16 border-hairline-b scroll-mt-14">
      <SectionHeader 
        title="Portofolio Proyek" 
        eyebrow="PORTOFOLIO · 10 PROYEK · 2023–2026" 
      />

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-8 select-none">
        {categories.map((cat) => {
          const isActive = selectedKategori === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedKategori(cat)}
              className={`label-mono py-1 px-3 border-hairline transition-colors duration-200 cursor-pointer ${
                isActive
                  ? 'bg-phosphor text-ink-900 border-phosphor font-bold'
                  : 'text-mute hover:text-phosphor hover:border-phosphor'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <LayoutGroup>
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </section>
  );
};
export default Portfolio;
