import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-hairline-t bg-ink-900 py-8 select-none">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xs text-mute tracking-normal">
          ANDHIKA RIZKY NUR WAHYU &copy; {currentYear}
        </div>
        <div className="label-mono text-steel text-[10px]">
          DIBANGUN DENGAN REACT, TYPESCRIPT, DAN TAILWIND.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
