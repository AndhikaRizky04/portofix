import React from 'react';
import { FiMail, FiMessageSquare, FiLinkedin, FiGithub, FiMapPin, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { HiLightningBolt } from 'react-icons/hi';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { profile } from '../../data/profile';

interface ContactProps {
  onOpenCv?: () => void;
}

/** 6285290459396 -> +62 852 9045 9396 */
const formatWa = (num: string) => {
  const d = num.replace(/\D/g, '');
  if (!d.startsWith('62')) return num;
  const rest = d.slice(2);
  return `+62 ${rest.slice(0, 3)} ${rest.slice(3, 7)} ${rest.slice(7)}`.trim();
};

export const Contact: React.FC<ContactProps> = ({ onOpenCv }) => {
  const links = [
    { icon: <FiMail />, label: 'Email', value: profile.kontak.email, href: `mailto:${profile.kontak.email}` },
    { icon: <FiMessageSquare />, label: 'WhatsApp', value: formatWa(profile.kontak.whatsapp), href: `https://wa.me/${profile.kontak.whatsapp}` },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: profile.kontak.linkedin.replace('https://', ''), href: profile.kontak.linkedin },
    { icon: <FiGithub />, label: 'GitHub', value: profile.kontak.github.replace('https://', ''), href: profile.kontak.github },
    { icon: <FiMapPin />, label: 'Lokasi', value: profile.kontak.lokasi },
  ];

  return (
    <section id="kontak" className="mx-auto max-w-[1240px] px-3 md:px-6 pt-20 md:pt-24 scroll-mt-28">
      <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-forest-900 px-6 py-12 md:px-12 md:py-16">
        <div className="absolute inset-0 bg-doodle-lime opacity-[0.06]" aria-hidden="true" />
        <HiLightningBolt className="pointer-events-none absolute -right-10 -bottom-12 text-[200px] md:text-[300px] text-lime/10" aria-hidden="true" />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader tone="dark" title="Mari Berkolaborasi" eyebrow="Kontak" />
            <p className="-mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
              Saya siap berkontribusi sebagai Software Engineer atau Machine Learning Specialist untuk membangun sistem
              pemantauan, pelacakan, dan pengolahan data yang presisi di perusahaan Anda.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.kontak.email}`}
                className="btn-lime inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold focus-ring"
              >
                Kirim Email <FiArrowUpRight />
              </a>
              {onOpenCv && (
                <button
                  onClick={onOpenCv}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:border-lime hover:text-lime transition-colors cursor-pointer focus-ring"
                >
                  <FiDownload /> Unduh CV
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            {links.map((l, idx) => {
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lime text-lg text-forest-950 transition-transform duration-300 group-hover:rotate-[-8deg]">
                    {l.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">{l.label}</span>
                    <span className="block truncate text-sm font-semibold text-white">{l.value}</span>
                  </span>
                  {l.href && (
                    <FiArrowUpRight className="shrink-0 text-white/40 transition-all duration-300 group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </>
              );
              const cls =
                'group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 transition-colors duration-300';
              return (
                <Reveal key={l.label} delay={idx * 0.06} x={24} y={0}>
                  {l.href ? (
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`${cls} hover:border-lime/60 hover:bg-white/[0.08] focus-ring`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
