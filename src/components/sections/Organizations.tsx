import React from 'react';
import { FiUsers } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { organizations } from '../../data/organizations';

export const Organizations: React.FC = () => {
  return (
    <section id="organisasi" className="mx-auto max-w-[1240px] px-6 pt-20 md:pt-24 scroll-mt-28">
      <SectionHeader title="Organisasi & Kegiatan" eyebrow={`${organizations.length} kegiatan`} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {organizations.map((org, idx) => (
          <Reveal key={org.nama} delay={idx * 0.1}>
            <article className="card-lift group flex h-full flex-col justify-between rounded-[22px] border border-rule bg-white p-6 md:p-7">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime-100 text-lg text-forest-700 transition-colors duration-300 group-hover:bg-lime group-hover:text-forest-950">
                      <FiUsers />
                    </span>
                    <h3 className="font-display text-base md:text-lg leading-tight text-forest-900">{org.nama}</h3>
                  </div>
                  <span className="shrink-0 rounded-full bg-forest-900 px-3 py-1 text-[11px] font-semibold text-lime">
                    {org.peran}
                  </span>
                </div>
                {org.deskripsi && <p className="text-sm leading-relaxed text-slate">{org.deskripsi}</p>}
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-rule pt-4">
                {org.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-mist px-3 py-1 text-[11px] font-medium text-forest-800">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Organizations;
