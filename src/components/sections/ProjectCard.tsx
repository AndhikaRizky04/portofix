import React, { useRef } from 'react';
import { FiArrowUpRight, FiBookOpen, FiExternalLink, FiGithub } from 'react-icons/fi';
import TechnicalImage from '../ui/TechnicalImage';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, featured = false }) => {
  const ref = useRef<HTMLElement>(null);
  const primaryLink = project.demo || project.github || project.notebook;

  // Posisi kursor disimpan sebagai CSS var → sorotan & tepi bercahaya mengikuti kursor tanpa re-render.
  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || e.pointerType === 'touch') return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const links = [
    project.demo && { href: project.demo, label: 'Demo', icon: <FiExternalLink /> },
    project.github && { href: project.github, label: 'GitHub', icon: <FiGithub /> },
    project.notebook && { href: project.notebook, label: 'Notebook', icon: <FiBookOpen /> },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  return (
    <article
      ref={ref}
      id={`project-card-${project.id}`}
      onPointerMove={onPointerMove}
      className="project-card group relative flex h-full flex-col overflow-hidden rounded-[26px] bg-forest-950 p-2 text-white ring-1 ring-white/[0.06] scroll-mt-28 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1"
    >
      {/* Sorotan + tepi bercahaya mengikuti kursor */}
      <div aria-hidden="true" className="project-card__spot pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div aria-hidden="true" className="project-card__edge pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Media */}
      <div
        className={cn(
          'relative overflow-hidden rounded-[20px] bg-forest-900 aspect-[16/10] lg:aspect-auto lg:flex-1',
          featured ? 'lg:min-h-[300px]' : 'lg:min-h-[190px]',
        )}
      >
        <TechnicalImage
          src={project.gambar}
          alt={`Tangkapan layar ${project.nama}`}
          aspectRatio="h-full"
          className={`absolute inset-0 h-full w-full object-cover ${project.sorotan ? 'object-left-top' : 'object-top'} opacity-85 saturate-[0.85] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06] group-hover:opacity-100 group-hover:saturate-100`}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent" />
        <span className="absolute left-4 top-3 font-mono text-xs text-white/70">{String(index + 1).padStart(2, '0')}</span>
        <Badge variant="glass" className="absolute right-3 top-3">
          {project.kategori}
        </Badge>
      </div>

      {/* Isi */}
      <div className="relative flex flex-col gap-4 px-3 pb-3 pt-5 sm:px-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 space-y-1.5">
            <span className="font-mono text-[11px] text-lime/80">{project.tahun}</span>
            <h3 className={cn('font-semibold leading-snug tracking-tight text-white', featured ? 'text-xl md:text-2xl' : 'text-lg')}>
              {primaryLink ? (
                <a
                  href={primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-none after:absolute after:inset-0 after:rounded-[26px] focus-visible:after:ring-2 focus-visible:after:ring-lime"
                >
                  {project.nama}
                </a>
              ) : (
                project.nama
              )}
            </h3>
          </div>
          {primaryLink && (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buka ${project.demo ? 'website' : 'source code'} ${project.nama}`}
              title={project.demo ? 'Lihat website' : 'Lihat source code'}
              className="relative z-20 grid size-11 shrink-0 place-items-center rounded-full border border-white/15 text-white/80 transition-all duration-500 cursor-pointer hover:scale-105 group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-forest-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
            >
              <FiArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>

        <p className={cn('text-sm leading-relaxed text-white/60', featured ? 'line-clamp-3 max-w-xl' : 'line-clamp-2')}>
          {project.deskripsi}
        </p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-1">
          <ul className="flex flex-wrap gap-1.5" aria-label="Teknologi">
            {project.stack.map((s) => (
              <li key={s}>
                <Badge variant="outline">{s}</Badge>
              </li>
            ))}
          </ul>
          {links.length > 1 && (
            <div className="relative z-10 flex gap-1.5">
              {links.map((l) => (
                <Button key={l.label} variant="outline" size="sm" asChild className="h-9 rounded-full px-3 text-xs">
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.icon}
                    {l.label}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
