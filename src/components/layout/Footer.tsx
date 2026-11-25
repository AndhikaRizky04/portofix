import React from 'react';
import { HiLightningBolt } from 'react-icons/hi';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-forest-950 py-10 select-none">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime text-forest-950">
            <HiLightningBolt size={18} />
          </span>
          <span className="font-display text-xs text-white">
            Andhika Rizky Nur Wahyu <span className="text-white/50">&copy; {currentYear}</span>
          </span>
        </div>
        <div className="text-xs text-white/50">Dibangun dengan React, TypeScript, Tailwind & React Bits.</div>
      </div>
    </footer>
  );
};
export default Footer;
