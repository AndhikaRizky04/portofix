import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDocPage = location.pathname === '/dokumentasi';

  const navItems = [
    { label: 'Tentang', hash: '#tentang' },
    { label: 'Pengalaman', hash: '#pengalaman' },
    { label: 'Portofolio', hash: '#portofolio' },
    { label: 'Keahlian', hash: '#keahlian' },
    { label: 'Sertifikasi', hash: '#sertifikasi' },
    { label: 'Kontak', hash: '#kontak' },
  ];

  const handleNavClick = (hash: string) => {
    setIsOpen(false);
    if (isDocPage) {
      navigate('/' + hash);
    } else {
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(hash, { duration: 1.2 });
      } else {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-ink-900/95 border-hairline-b backdrop-blur-md select-none transition-standard">
      <div className="max-w-[1280px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={() => handleNavClick('#top')}
          className="font-display text-sm tracking-tight text-bone hover:text-phosphor transition-colors duration-150"
        >
          ANDHIKA RIZKY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => handleNavClick(item.hash)}
              className="label-mono text-mute hover:text-phosphor transition-colors duration-150 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/dokumentasi"
            className={`label-mono py-1 px-3 border-hairline transition-colors duration-150 ${
              isDocPage
                ? 'bg-phosphor text-ink-900 border-phosphor'
                : 'text-mute hover:text-phosphor hover:border-phosphor'
            }`}
          >
            DOKUMENTASI
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-bone hover:text-phosphor transition-colors p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-ink-900 border-hairline-b px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => handleNavClick(item.hash)}
              className="label-mono text-left text-mute hover:text-phosphor transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/dokumentasi"
            onClick={() => setIsOpen(false)}
            className={`label-mono text-center py-2 border-hairline transition-colors duration-150 ${
              isDocPage
                ? 'bg-phosphor text-ink-900 border-phosphor'
                : 'text-mute hover:text-phosphor hover:border-phosphor'
            }`}
          >
            DOKUMENTASI
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
