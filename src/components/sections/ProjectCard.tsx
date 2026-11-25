import React from 'react';
import { FiExternalLink, FiGithub, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import TechnicalImage from '../ui/TechnicalImage';
import TechChip from '../ui/TechChip';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  wide?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, wide = false }) => {
  const isStunting = project.id === 'stunting-prediction';
  const primaryLink = project.demo || project.github || project.notebook;

  return (
    <article
      id={`project-card-${project.id}`}
      className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-transparent bg-mist scroll-mt-28"
    >
      <div className="flex items-start justify-between gap-3 p-5 pb-3">
        <div className="space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate">
            {project.kategori} · {project.tahun}
          </span>
          <h3 className={`font-display leading-tight text-forest-900 ${wide ? 'text-xl md:text-2xl' : 'text-base'}`}>
            {project.nama}
          </h3>
          {primaryLink && (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-lime hover:text-forest-700 transition-colors"
            >
              Detail <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          )}
        </div>
        {isStunting && (
          <span className="shrink-0 rounded-full bg-forest-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime">
            Deteksi dini
          </span>
        )}
      </div>

      <div className="relative mx-3 overflow-hidden rounded-2xl bg-white">
        <TechnicalImage
          src={project.gambar}
          alt={project.nama}
          className={`w-full object-cover duotone-filter transition-transform duration-700 group-hover:scale-[1.06] ${
            wide ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
          aspectRatio={wide ? 'aspect-[16/9]' : 'aspect-[4/3]'}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 p-5 pt-4">
        <p className={`text-sm leading-relaxed text-slate ${wide ? '' : 'line-clamp-3'}`}>{project.deskripsi}</p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <TechChip key={s} tech={s} />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-rule pt-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-forest-900 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-lime hover:text-forest-950 transition-colors"
              >
                <FiExternalLink size={12} /> Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-forest-900 ring-1 ring-rule hover:ring-lime hover:text-forest-700 transition-colors"
              >
                <FiGithub size={12} /> GitHub
              </a>
            )}
            {project.notebook && (
              <a
                href={project.notebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-lime-100 px-3 py-1.5 text-[11px] font-semibold text-forest-800 hover:bg-lime transition-colors"
              >
                <FiBookOpen size={12} /> Notebook
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
