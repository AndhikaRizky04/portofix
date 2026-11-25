import React from 'react';
import { HiLightningBolt } from 'react-icons/hi';

const items = [
  'Laravel', 'React / TSX', 'ASP.NET', 'Flutter', 'Machine Learning', 'Python',
  'Oracle Database', 'MySQL', 'Java', 'C#', 'AI Integration', 'REST API',
];

/** Pita berjalan berisi stack teknologi, mengikuti pita lime pada referensi. */
export const TechMarquee: React.FC = () => {
  const loop = [...items, ...items];
  return (
    <div className="relative mx-auto mt-6 max-w-[1240px] px-3 md:px-6">
      <div className="relative overflow-hidden rounded-2xl bg-lime py-3.5 select-none">
        <div className="absolute inset-0 bg-lime-stripes opacity-60" aria-hidden="true" />
        <div className="relative flex w-max animate-marquee items-center gap-8 pr-8">
          {loop.map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-8 whitespace-nowrap font-display text-sm text-forest-950">
              {t}
              <HiLightningBolt className="text-forest-900" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
