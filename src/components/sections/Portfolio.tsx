import React, { useState } from 'react';
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

export const Portfolio: React.FC = () => {
  const [selectedKategori, setSelectedKategori] = useState<string>('SEMUA');

  const categories = ['SEMUA', ...Array.from(new Set(projects.map((p) => p.kategori.toUpperCase())))];

  const filteredProjects =
    selectedKategori === 'SEMUA'
      ? projects
      : projects.filter((p) => p.kategori.toUpperCase() === selectedKategori);

  return (
    <section id="portofolio" className="mx-auto max-w-[1240px] px-6 pt-20 md:pt-24 scroll-mt-28">
      <SectionHeader title="Portofolio Proyek" eyebrow={`${projects.length} proyek · 2023–2026`} />

      {/* Filter kategori */}
      <div className="mb-8 flex flex-wrap items-center gap-2 select-none">
        {categories.map((cat) => {
          const isActive = selectedKategori === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedKategori(cat)}
              className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer focus-ring ${
                isActive ? 'text-forest-950' : 'bg-mist text-slate hover:text-forest-900 hover:bg-lime-100'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="portfolio-filter-pill"
                  className="absolute inset-0 rounded-full bg-lime"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Grid kartu ala "Категории товаров" */}
      <LayoutGroup>
        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                className={project.unggulan && selectedKategori === 'SEMUA' && i < 2 ? 'sm:col-span-2' : ''}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} wide={!!project.unggulan && selectedKategori === 'SEMUA' && i < 2} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  );
};

export default Portfolio;
