import React from 'react';
import SpotlightCard from '../reactbits/SpotlightCard';
import TechChip from '../ui/TechChip';
import TechnicalImage from '../ui/TechnicalImage';
import type { Project } from '../../data/projects';
import { FiExternalLink, FiGithub, FiBookOpen } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isStunting = project.id === 'stunting-prediction';

  return (
    <div
      id={`project-card-${project.id}`}
      className={`transition-all duration-300 scroll-mt-20 ${
        project.unggulan ? 'lg:col-span-2' : ''
      }`}
    >
      <SpotlightCard className="h-full flex flex-col justify-between p-5 border border-line bg-ink-700 hover:border-steel/50 transition-standard">
        <div className="space-y-4">
          {/* Image Surface */}
          <div className="relative overflow-hidden border-hairline bg-ink-900 group rounded-[3px]">
            {isStunting && (
              <span className="absolute top-2.5 left-2.5 z-20 bg-alert text-bone font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-[2px] border border-alert select-none animate-pulse">
                DETEKSI DINI
              </span>
            )}
            <TechnicalImage
              src={project.gambar}
              alt={project.nama}
              className="w-full h-auto aspect-[16/10] object-cover transition-standard duration-400 group-hover:filter-none duotone-filter"
              aspectRatio="aspect-[16/10]"
            />
            {/* Fine Blueprint Grids overlay */}
            <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-20" />
          </div>

          {/* Heading and Category */}
          <div className="space-y-1 select-none">
            <div className="flex items-center justify-between gap-2">
              <span className="label-mono text-steel text-[10px]">
                {project.kategori}
              </span>
              <span className="label-mono text-mute text-[9px]">
                {project.tahun}
              </span>
            </div>
            <h3 className="font-display text-base md:text-lg text-bone tracking-tight uppercase">
              {project.nama}
            </h3>
          </div>

          {/* Description Paragraph */}
          <p className="text-sm text-mute leading-relaxed font-sans">
            {project.deskripsi}
          </p>
        </div>

        {/* Tech Chips and Actions Links */}
        <div className="space-y-4 mt-6">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s, idx) => (
              <TechChip key={`chip-${idx}`} tech={s} />
            ))}
          </div>

          <div className="flex items-center gap-4 pt-3 border-t border-line font-mono text-[10px] tracking-widest text-mute">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-phosphor transition-colors duration-150"
              >
                <FiExternalLink size={12} />
                <span>DEMO_SYS</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-phosphor transition-colors duration-150"
              >
                <FiGithub size={12} />
                <span>GITHUB_SRC</span>
              </a>
            )}
            {project.notebook && (
              <a
                href={project.notebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-steel hover:text-phosphor transition-colors duration-150 font-semibold"
              >
                <FiBookOpen size={12} />
                <span>JUPYTER_NB</span>
              </a>
            )}
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};
export default ProjectCard;
