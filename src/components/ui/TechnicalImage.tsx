import React, { useState } from 'react';

interface TechnicalImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const TechnicalImage: React.FC<TechnicalImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
}) => {
  const [error, setError] = useState(false);

  const getFileName = (path: string) => {
    return path.split('/').pop() || 'ASSET_DNE.WEBP';
  };

  if (error || !src) {
    return (
      <div 
        className={`relative bg-ink-800 border-hairline flex flex-col items-center justify-center p-4 text-center select-none overflow-hidden ${aspectRatio} ${className}`}
      >
        {/* Blueprint Lines and Crosshairs */}
        <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-40" />
        
        {/* Four Crop Marks in Corners */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-mute/30" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-mute/30" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-mute/30" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-mute/30" />
        
        {/* Center Crosshair */}
        <div className="w-6 h-6 border border-dashed border-mute/30 rounded-full flex items-center justify-center opacity-60">
          <div className="w-1.5 h-1.5 bg-phosphor-d rounded-full" />
        </div>
        
        {/* Metadata Details */}
        <div className="mt-3 font-mono text-[9px] text-mute uppercase tracking-widest space-y-1 z-10">
          <div className="text-steel font-bold">{getFileName(src)}</div>
          <div className="max-w-[200px] truncate">{alt}</div>
          <div className="text-[7px] text-mute/50">CALIBRATION UNIT // TRACE_DNE</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      loading="lazy"
      className={className}
    />
  );
};
export default TechnicalImage;
