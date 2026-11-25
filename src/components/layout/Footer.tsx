import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiArrowUp, FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMessageSquare } from 'react-icons/fi';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';
import { scrollToHash } from '../../lib/utils';
import { Button } from '../ui/button';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isDocPage = location.pathname === '/dokumentasi';

  const go = (hash: string) => {
    if (isDocPage) navigate('/' + (hash === '#top' ? '' : hash));
    else scrollToHash(hash);
  };

  const socials = [
    { label: 'GitHub', value: profile.kontak.github.replace('https://', ''), href: profile.kontak.github, icon: <FiGithub /> },
    { label: 'LinkedIn', value: profile.kontak.linkedin.replace('https://', ''), href: profile.kontak.linkedin, icon: <FiLinkedin /> },
    { label: 'WhatsApp', value: 'Chat langsung', href: `https://wa.me/${profile.kontak.whatsapp}`, icon: <FiMessageSquare /> },
    { label: 'Email', value: 'Kirim pesan', href: `mailto:${profile.kontak.email}`, icon: <FiMail /> },
  ];

  const linkCls =
    'group inline-flex items-center gap-2 rounded-md py-1.5 text-sm text-white/65 transition-colors hover:text-lime-300 focus-ring cursor-pointer';

  return (
    <footer className="relative mt-16 overflow-hidden bg-forest-950 text-white md:mt-24">
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 md:px-6">
        {/* Baris ajakan */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-end md:justify-between md:py-16">
          <div className="max-w-xl space-y-3">
            <p className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Punya ide atau posisi yang cocok? <span className="text-lime">Mari bicara.</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={() => go('#kontak')}>
              Hubungi Saya <FiArrowUpRight />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.cvPath} target="_blank" rel="noopener noreferrer">
                Buka CV (PDF)
              </a>
            </Button>
          </div>
        </div>

        {/* Kolom tautan */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-12">
          <div className="col-span-2 space-y-4 md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={profile.logoPath}
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                decoding="async"
                className="size-10 shrink-0 rounded-xl object-cover ring-1 ring-lime/40"
              />
              <div className="leading-tight">
                <div className="text-sm font-semibold">{profile.nama}</div>
                <div className="text-xs text-white/50">{profile.biodata.domisili}, Jawa Tengah</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Membangun aplikasi web yang rapi dari basis data sampai antarmuka — React, Laravel, dan integrasi AI.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/10 px-3 py-1 text-xs text-lime-300">
              <span className="size-1.5 rounded-full bg-lime led-blink-amber" /> Terbuka untuk peluang kerja
            </span>
          </div>

          <nav aria-label="Navigasi footer" className="md:col-span-3">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/45">Navigasi</h2>
            <ul>
              {navItems.map((n) => (
                <li key={n.hash}>
                  <button onClick={() => go(n.hash)} className={linkCls}>
                    {n.label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/dokumentasi" className={linkCls}>
                  Dokumentasi
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/45">Terhubung</h2>
            <ul>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`${linkCls} min-w-0`}
                  >
                    <span className="text-lime" aria-hidden="true">{s.icon}</span>
                    <span className="text-white/85">{s.label}</span>
                    <span className="hidden truncate text-white/40 sm:inline">— {s.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-forest-950">
        <div className="mx-auto flex max-w-[1240px] flex-col-reverse items-start justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-8 md:px-6">
          <p className="text-xs text-white/50">
            &copy; {year} {profile.nama}. Dibangun dengan React, TypeScript &amp; Tailwind.
          </p>
          <button
            onClick={() => go('#top')}
            className="group inline-flex items-center gap-2 rounded-lg text-xs font-medium text-white/70 transition-colors hover:text-lime-300 focus-ring cursor-pointer"
          >
            Kembali ke atas
            <span className="grid size-9 place-items-center rounded-lg bg-white/[0.07] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:bg-lime group-hover:text-forest-950">
              <FiArrowUp />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
