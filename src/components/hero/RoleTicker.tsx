import React from 'react';
import RotatingText from '../reactbits/RotatingText';
import { profile } from '../../data/profile';

export const RoleTicker: React.FC = () => {
  return (
    <div className="font-mono text-[11px] md:text-xs text-steel tracking-widest font-semibold uppercase flex items-center gap-2 select-none h-6">
      <span>// TELEMETRY_ROLE:</span>
      <RotatingText 
        texts={profile.peran} 
        interval={2400} 
        className="text-phosphor font-bold" 
      />
    </div>
  );
};
export default RoleTicker;
