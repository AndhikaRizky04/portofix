import React, { useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import TechnicalImage from '../ui/TechnicalImage';

interface TiltedCardProps {
  imageSrc: string;
  alt: string;
  className?: string;
  rotateAmplitude?: number;
  scale?: number;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  imageSrc,
  alt,
  className = '',
  rotateAmplitude = 8,
  scale = 1.02,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const rY = (mouseX / (width / 2)) * rotateAmplitude;
    const rX = -(mouseY / (height / 2)) * rotateAmplitude;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative cursor-pointer select-none overflow-hidden rounded-[4px] border-hairline bg-ink-700 transition-transform duration-300 ${className}`}
      style={{
        transform: isHovered && !isReducedMotion
          ? `perspective(1000px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          : 'perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)',
      }}
    >
      <TechnicalImage
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover aspect-[4/3] duotone-filter"
      />
    </div>
  );
};
export default TiltedCard;
