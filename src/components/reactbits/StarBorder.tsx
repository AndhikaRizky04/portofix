import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const StarBorder: React.FC<StarBorderProps> = ({
  children,
  className = '',
  onClick,
}) => {
  const isReducedMotion = useReducedMotion();

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[4px] border-hairline bg-ink-900 text-bone cursor-pointer focus-ring-amber ${className}`}
    >
      {/* Conic gradient border trace. Disabled on prefers-reduced-motion */}
      {!isReducedMotion && (
        <div
          className="absolute inset-[-150%] z-0 bg-[conic-gradient(from_0deg,transparent_30%,var(--color-phosphor)_45%,var(--color-phosphor)_55%,transparent_70%)] animate-[spin_5s_linear_infinite]"
          style={{ mixBlendMode: 'screen' }}
        />
      )}
      
      {/* Inner surface */}
      <div className="relative z-10 m-[1px] rounded-[3px] bg-ink-900 py-2.5 px-5 flex items-center justify-center transition-colors duration-200 group-hover:bg-ink-800 text-bone">
        {children}
      </div>
    </button>
  );
};
export default StarBorder;
