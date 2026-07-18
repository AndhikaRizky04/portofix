import React from 'react';
import TechnicalImage from '../ui/TechnicalImage';
import { profile } from '../../data/profile';

export const Portrait: React.FC = () => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto p-4 border-hairline bg-ink-800 select-none">
      {/* Registration Marks / Crop Marks in Corners */}
      <div className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t border-l border-steel/50" />
      <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t border-r border-steel/50" />
      <div className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b border-l border-steel/50" />
      <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b border-r border-steel/50" />

      {/* Inner Image Container */}
      <div className="relative overflow-hidden border-hairline bg-ink-900 group">
        <TechnicalImage
          src={profile.fotoPath}
          alt={profile.nama}
          className="w-full h-auto aspect-[3/4] object-cover transition-standard duration-400 group-hover:filter-none duotone-filter"
          aspectRatio="aspect-[3/4]"
        />
        {/* Fine crosshair overlays */}
        <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-20" />
        {/* Subtle center alignment mark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-dashed border-steel/30 rounded-full flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-1 h-1 bg-phosphor rounded-full" />
        </div>
      </div>

      {/* Calibration metadata */}
      <div className="mt-3 flex flex-col gap-1 border-hairline-t pt-2.5 font-mono text-[9px] text-mute uppercase tracking-[0.08em]">
        <div className="flex items-center justify-between text-steel font-medium">
          <span>PORTRAIT // OPTICAL_SYS</span>
          <span>FLTR_DUO</span>
        </div>
        <div className="text-[10px] text-bone font-medium tracking-[0.1em] text-center mt-1 select-all">
          {profile.kontak.koordinat}
        </div>
      </div>
    </div>
  );
};
export default Portrait;
