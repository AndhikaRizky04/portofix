import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { HiLightningBolt } from 'react-icons/hi';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const progress = useScrollProgress();
  const isDocPage = location.pathname === '/dokumentasi';

  const navItems = [
    { label: 'Tentang', hash: '#tentang' },
    { label: 'Pengalaman', hash: '#pengalaman' },
    { label: 'Portofolio', hash: '#portofolio' },
    { label: 'Keahlian', hash: '#keahlian' },
    { label: 'Sertifikasi', hash: '#sertifikasi' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setIsOpen(false);
    if (isDocPage) {
      navigate('/' + hash);
      return;
    }
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(hash === '#top' ? 0 : hash, { duration: 1.2, offset: -80 });
    } else if (hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 select-none transition-standard ${
        scrolled ? 'bg-forest-900/95 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md' : 'bg-forest-900'
      }`}
    >
      {/* Baris info tipis ala referensi */}
      <div
        className={`hidden md:block border-b border-white/5 transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-8 opacity-100'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 h-8 flex items-center justify-between text-[11px] text-white/55">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-lime led-blink-amber" />
              Tersedia untuk direkrut
            </span>
            <span>Kaliwungu, Kudus · Jawa Tengah</span>
          </div>
          <a href="mailto:andhikawahyu65@gmail.com" className="hover:text-lime transition-colors">
            andhikawahyu65@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link
          to="/"
          onClick={() => handleNavClick('#top')}
          className="group flex items-center gap-2.5 focus-ring rounded-md"
          aria-label="Beranda"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime text-forest-950 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
            <HiLightningBolt size={20} />
          </span>
          <span className="font-display text-[13px] leading-[1.05] text-white">
            ANDHIKA
            <br />
            <span className="text-lime">RIZKY</span>
          </span>
        </Link>

        {/* Navigasi desktop */}
        <div className="hidden lg:flex items-center gap-1 rounded-full bg-white/5 p-1">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => handleNavClick(item.hash)}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-white/75 hover:text-forest-950 hover:bg-lime transition-colors duration-200 cursor-pointer focus-ring"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/dokumentasi"
            className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 focus-ring ${
              isDocPage ? 'bg-lime text-forest-950' : 'text-white/75 hover:text-forest-950 hover:bg-lime'
            }`}
          >
            Dokumentasi
          </Link>
        </div>

        <button
          onClick={() => handleNavClick('#kontak')}
          className="hidden lg:inline-flex btn-lime items-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-bold cursor-pointer focus-ring"
        >
          Hubungi Saya <FiArrowUpRight />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white hover:bg-lime hover:text-forest-950 transition-colors focus-ring"
          aria-label="Buka menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Progres scroll */}
      <div className="h-[3px] w-full bg-white/5">
        <div className="h-full bg-lime transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>

      {/* Drawer mobile */}
      {isOpen && (
        <div className="lg:hidden bg-forest-900 border-t border-white/10 px-6 py-5 flex flex-col gap-2">
          {[...navItems, { label: 'Kontak', hash: '#kontak' }].map((item) => (
            <button
              key={item.hash}
              onClick={() => handleNavClick(item.hash)}
              className="text-left rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-lime hover:text-forest-950 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/dokumentasi"
            onClick={() => setIsOpen(false)}
            className="mt-2 btn-lime rounded-lg px-3 py-2.5 text-center text-sm font-bold"
          >
            Dokumentasi Magang
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
