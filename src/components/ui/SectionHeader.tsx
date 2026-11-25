import React from 'react';
import Shuffle from '../reactbits/Shuffle';

interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  /** 'light' untuk section terang, 'dark' untuk section hijau tua */
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  eyebrow,
  tone = 'light',
  align = 'left',
  action,
}) => {
  const isDark = tone === 'dark';
  const centered = align === 'center';

  return (
    <div
      className={`mb-10 flex flex-col gap-4 md:flex-row md:items-end ${
        centered ? 'md:justify-center text-center items-center' : 'md:justify-between'
      }`}
    >
      <div className={`flex flex-col gap-3 ${centered ? 'items-center' : 'items-start'}`}>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] select-none ${
            isDark ? 'bg-white/10 text-lime-300' : 'bg-lime-100 text-forest-700'
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {eyebrow}
        </span>
        <Shuffle
          text={title}
          tag="h2"
          textAlign={centered ? 'center' : 'left'}
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce
          triggerOnHover
          respectReducedMotion
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: isDark ? '#FFFFFF' : 'var(--color-forest-900)',
          }}
        />
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};

export default SectionHeader;
