import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMessageSquare, FiFileText } from 'react-icons/fi';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useActiveSection } from '../../hooks/useActiveSection';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';
import { cn, scrollToHash } from '../../lib/utils';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

const sectionIds = ['hero', ...navItems.map((n) => n.hash.slice(1)), 'kontak'];

/** Logo: avatar 3D berlatar hijau. */
const Monogram: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src={profile.logoPath}
    alt=""
    aria-hidden="true"
    width={40}
    height={40}
    decoding="async"
    draggable={false}
    className={cn('size-10 shrink-0 rounded-xl object-cover ring-1 ring-lime/40', className)}
  />
);

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const pendingHash = useRef<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const progress = useScrollProgress();
  const active = useActiveSection(sectionIds);
  const isDocPage = location.pathname === '/dokumentasi';

  // Menyusut saat scroll, sembunyi saat scroll turun jauh, muncul lagi saat scroll naik.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 480 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y < 480) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hentikan Lenis selama sheet terbuka agar latar tidak ikut bergulir.
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open]);

  const go = (hash: string) => {
    if (isDocPage) {
      navigate('/' + (hash === '#top' ? '' : hash));
      return;
    }
    scrollToHash(hash);
  };

  const goFromSheet = (hash: string) => {
    pendingHash.current = hash;
    setOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 px-3 pt-3 select-none transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] md:px-6 md:pt-4',
        hidden && !open && '-translate-y-[130%]',
      )}
      onFocusCapture={() => setHidden(false)}
    >
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-forest-950"
      >
        Lewati ke konten
      </a>

      <nav
        aria-label="Navigasi utama"
        className={cn(
          'relative mx-auto flex max-w-[1240px] items-center justify-between gap-3 overflow-hidden rounded-2xl pl-2 pr-2 ring-1 transition-[height,background-color,box-shadow] duration-300',
          scrolled
            ? 'h-14 bg-forest-950/80 ring-white/10 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.7)] backdrop-blur-xl md:h-[60px]'
            : 'h-16 bg-forest-950 ring-white/[0.06] md:h-[68px]',
        )}
      >
        <Link
          to="/"
          onClick={() => go('#top')}
          className="group flex min-w-0 items-center gap-3 rounded-xl py-1 pl-1 pr-2 focus-ring"
          aria-label="Andhika Rizky — kembali ke beranda"
        >
          <Monogram className="transition-transform duration-300 group-hover:-rotate-6" />
          <span className="hidden truncate text-[15px] font-semibold tracking-tight text-white sm:block">Andhika Rizky</span>
        </Link>

        {/* Navigasi desktop dengan penanda section aktif yang meluncur */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive = !isDocPage && active === item.hash.slice(1);
            return (
              <li key={item.hash}>
                <button
                  onClick={() => go(item.hash)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative flex h-10 items-center rounded-xl px-4 text-[13px] font-medium transition-colors cursor-pointer focus-ring',
                    isActive ? 'text-forest-950' : 'text-white/70 hover:text-white',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl bg-lime"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              </li>
            );
          })}
          <li>
            <Link
              to="/dokumentasi"
              aria-current={isDocPage ? 'page' : undefined}
              className={cn(
                'flex h-10 items-center rounded-xl px-3.5 text-[13px] font-medium transition-colors focus-ring',
                isDocPage ? 'bg-lime text-forest-950' : 'text-white/70 hover:text-white',
              )}
            >
              Dokumentasi
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Button onClick={() => go('#kontak')} className="hidden md:inline-flex" size="sm">
            Hubungi Saya <FiArrowUpRight />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="group grid size-11 place-items-center rounded-xl bg-white/[0.07] transition-colors hover:bg-lime focus-ring cursor-pointer lg:hidden"
                aria-label="Buka menu navigasi"
              >
                <span className="flex w-5 flex-col items-end gap-[5px]" aria-hidden="true">
                  <span className="h-0.5 w-5 rounded-full bg-white transition-colors group-hover:bg-forest-950" />
                  <span className="h-0.5 w-3.5 rounded-full bg-lime transition-all group-hover:w-5 group-hover:bg-forest-950" />
                </span>
              </button>
            </SheetTrigger>
            <SheetContent
              onCloseAutoFocus={(e) => {
                const hash = pendingHash.current;
                if (!hash) return;
                pendingHash.current = null;
                e.preventDefault();
                go(hash);
              }}
            >
              <SheetHeader className="border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Monogram />
                  <div>
                    <SheetTitle>Andhika Rizky</SheetTitle>
                    <SheetDescription>Navigasi portofolio</SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              <nav aria-label="Navigasi seluler" className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="flex flex-col">
                  {[...navItems, { label: 'Kontak', hash: '#kontak' }].map((item) => {
                    const isActive = !isDocPage && active === item.hash.slice(1);
                    return (
                      <li key={item.hash}>
                        <button
                          onClick={() => goFromSheet(item.hash)}
                          aria-current={isActive ? 'true' : undefined}
                          className={cn(
                            'group flex w-full items-center rounded-xl px-3 py-3 text-left transition-colors cursor-pointer focus-ring',
                            isActive ? 'bg-lime/10' : 'hover:bg-white/[0.05]',
                          )}
                        >
                          <span
                            className={cn(
                              'text-xl font-semibold tracking-tight transition-colors',
                              isActive ? 'text-lime' : 'text-white group-hover:text-lime-300',
                            )}
                          >
                            {item.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  to="/dokumentasi"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-between rounded-xl border border-white/10 px-4 py-3.5 text-sm font-medium text-white/80 transition-colors hover:border-lime/50 hover:text-lime-300 focus-ring"
                >
                  <span className="flex items-center gap-2.5">
                    <FiFileText className="text-lime" /> Dokumentasi Magang
                  </span>
                  <FiArrowUpRight />
                </Link>
              </nav>

              <SheetFooter className="border-t border-white/10">
                <span className="flex items-center gap-2 text-xs text-white/60">
                  <span className="size-1.5 rounded-full bg-lime led-blink-amber" /> Terbuka untuk peluang kerja
                </span>
                <div className="flex gap-2">
                  {[
                    { href: profile.kontak.github, label: 'GitHub', icon: <FiGithub /> },
                    { href: profile.kontak.linkedin, label: 'LinkedIn', icon: <FiLinkedin /> },
                    { href: `https://wa.me/${profile.kontak.whatsapp}`, label: 'WhatsApp', icon: <FiMessageSquare /> },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid size-11 place-items-center rounded-xl bg-white/[0.06] text-white/80 transition-colors hover:bg-lime hover:text-forest-950 focus-ring"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Progres scroll — garis tipis di dasar pill */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] origin-left bg-lime"
          style={{ width: '100%', transform: `scaleX(${progress / 100})` }}
        />
      </nav>
    </header>
  );
};
export default Navbar;
