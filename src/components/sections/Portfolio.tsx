import React, { useState } from 'react';
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/utils';

const ALL = 'Semua';

export const Portfolio: React.FC = () => {
  const [kategori, setKategori] = useState<string>(ALL);
  const reduced = useReducedMotion();

  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.kategori)))];
  const count = (c: string) => (c === ALL ? projects.length : projects.filter((p) => p.kategori === c).length);
  const filtered = kategori === ALL ? projects : projects.filter((p) => p.kategori === kategori);

  // Bento: di tampilan "Semua", proyek unggulan memakan 2 kolom dan berselang-seling kiri/kanan.
  let featuredSeen = 0;

  return (
    <section id="portofolio" className="mx-auto max-w-[1240px] px-4 pt-20 md:px-6 md:pt-24 scroll-mt-28">
      <SectionHeader title="Portofolio Proyek" eyebrow={`${projects.length} proyek · 2023–2026`} />

      {/* Filter kategori */}
      <div role="tablist" aria-label="Filter kategori proyek" className="no-scrollbar -mx-4 mb-8 flex gap-1.5 overflow-x-auto px-4 select-none sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {categories.map((c) => {
          const active = kategori === c;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={active}
              onClick={() => setKategori(c)}
              className={cn(
                'relative inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-[13px] font-medium transition-colors cursor-pointer focus-ring',
                active ? 'text-forest-950' : 'bg-mist text-slate hover:bg-lime-100 hover:text-forest-900',
              )}
            >
              {active && (
                <motion.span
                  layoutId="portfolio-filter"
                  className="absolute inset-0 rounded-full bg-lime"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{c}</span>
              <span className={cn('relative font-mono text-[11px]', active ? 'text-forest-950/60' : 'text-slate/70')}>
                {count(c)}
              </span>
            </button>
          );
        })}
      </div>

      <LayoutGroup>
        <motion.div layout={!reduced} className="grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const featured = kategori === ALL && !!project.unggulan;
              const alternate = featured && featuredSeen++ % 2 === 1;
              return (
                <motion.div
                  layout={!reduced}
                  key={project.id}
                  className={cn(featured && 'sm:col-span-2', featured && project.sorotan && 'lg:row-span-2', alternate && 'lg:col-start-2')}
                  initial={reduced ? false : { opacity: 0, y: 40, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} index={projects.indexOf(project)} featured={featured} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  );
};

export default Portfolio;
