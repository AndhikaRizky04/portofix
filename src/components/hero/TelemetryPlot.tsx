import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { projects } from '../../data/projects';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const TelemetryPlot: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const vertexRefs = useRef<(SVGCircleElement | null)[]>([]);
  const gridRefs = useRef<(SVGLineElement | null)[]>([]);
  const isReducedMotion = useReducedMotion();

  // Width and height of our viewport coordinate space
  const svgWidth = 600;
  const svgHeight = 200;

  const paddingX = 50;
  const paddingY = 40;
  const chartWidth = 500;
  const chartHeight = 120;

  // Static Y map coordinates mapping for Andhika's projects representing varying complexity metrics
  // y values: smaller number is HIGHER visually (origin is top-left in SVG)
  const yValues = [140, 120, 150, 90, 130, 110, 50, 80, 40, 30];

  const points = projects.map((proj, idx) => {
    const x = paddingX + idx * (chartWidth / (projects.length - 1));
    const y = yValues[idx];
    return { x, y, proj };
  });

  // Create SVG path string
  const pathD = points.reduce((acc, p, idx) => {
    return idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, '');

  useEffect(() => {
    // 1. Trace path animation
    if (!isReducedMotion && pathRef.current) {
      const length = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.2,
      });
    } else if (pathRef.current) {
      gsap.set(pathRef.current, { strokeDasharray: 'none', strokeDashoffset: 0 });
    }

    // 2. Grid lines fade-in animation
    if (!isReducedMotion && gridRefs.current.length > 0) {
      gsap.fromTo(
        gridRefs.current.filter(Boolean),
        { opacity: 0 },
        { opacity: 0.15, duration: 0.6, stagger: 0.05, ease: 'power1.out' }
      );
    }

    // 3. Vertex appearing animation
    if (!isReducedMotion && vertexRefs.current.length > 0) {
      gsap.fromTo(
        vertexRefs.current.filter(Boolean),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'back.out(1.8)', delay: 0.8 }
      );
    }
  }, [isReducedMotion]);

  const handleVertexClick = (id: string) => {
    const targetElement = document.getElementById(`project-card-${id}`);
    const lenisInstance = (window as any).lenis;
    if (lenisInstance && targetElement) {
      lenisInstance.scrollTo(targetElement, { 
        offset: -80, // sticky offset
        duration: 1.4,
        onComplete: () => {
          targetElement.classList.remove('blink-amber-border');
          void targetElement.offsetWidth; // Force reflow
          targetElement.classList.add('blink-amber-border');
        }
      });
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      targetElement.classList.add('blink-amber-border');
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full border-hairline bg-ink-800 p-4 select-none overflow-x-auto scrollbar-thin overflow-y-hidden"
    >
      {/* Background blueprint details */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-20" />
      
      {/* Outer crop decoration */}
      <div className="absolute top-1 left-1 font-mono text-[7px] text-mute/50">PLOT // TM_SCALE_22.26</div>
      <div className="absolute bottom-1 right-1 font-mono text-[7px] text-mute/50">OSC_AMB // ACTIVE</div>

      {/* SVG Canvas */}
      <div className="min-w-[560px] md:min-w-0">
        <svg 
          viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
          className="w-full h-auto overflow-visible"
        >
          {/* Grid lines (X levels) */}
          {[40, 80, 120, 160].map((y, idx) => (
            <line
              key={`h-grid-${idx}`}
              ref={el => { gridRefs.current[idx] = el; }}
              x1={paddingX - 10}
              y1={y}
              x2={paddingX + chartWidth + 10}
              y2={y}
              stroke="var(--color-line)"
              strokeWidth="0.8"
              strokeDasharray="4 4"
              className="opacity-15"
            />
          ))}

          {/* Grid lines (Y ticks / coordinates) */}
          {points.map((p, idx) => (
            <line
              key={`v-grid-${idx}`}
              ref={el => { gridRefs.current[idx + 4] = el; }}
              x1={p.x}
              y1={paddingY - 10}
              x2={p.x}
              y2={paddingY + chartHeight + 10}
              stroke="var(--color-line)"
              strokeWidth="0.8"
              strokeDasharray="2 2"
              className="opacity-10"
            />
          ))}

          {/* Axis Labels (Time / Year) */}
          <text x={paddingX} y={paddingY + chartHeight + 25} className="fill-mute font-mono text-[8px] tracking-widest text-center">2022</text>
          <text x={paddingX + chartWidth * 0.25} y={paddingY + chartHeight + 25} className="fill-mute font-mono text-[8px] tracking-widest text-center">2023</text>
          <text x={paddingX + chartWidth * 0.5} y={paddingY + chartHeight + 25} className="fill-mute font-mono text-[8px] tracking-widest text-center">2024</text>
          <text x={paddingX + chartWidth * 0.75} y={paddingY + chartHeight + 25} className="fill-mute font-mono text-[8px] tracking-widest text-center">2025</text>
          <text x={paddingX + chartWidth} y={paddingY + chartHeight + 25} className="fill-mute font-mono text-[8px] tracking-widest text-center">2026</text>

          {/* Telemetry Trace Path Line */}
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke={hoveredIdx !== null ? "rgba(242, 169, 59, 0.3)" : "var(--color-phosphor)"}
            strokeWidth="1.5"
            className="transition-all duration-300"
          />

          {/* Vertices (Interactive points) */}
          {points.map((p, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;

            return (
              <g 
                key={`vertex-${idx}`}
                className="cursor-pointer"
                onClick={() => handleVertexClick(p.proj.id)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Hover ring glow */}
                {isHovered && (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="8"
                    fill="none"
                    stroke="var(--color-phosphor)"
                    strokeWidth="1"
                    className="animate-ping opacity-60"
                  />
                )}

                {/* Outer Ring */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="5"
                  fill="var(--color-ink-900)"
                  stroke={isHovered ? "var(--color-phosphor)" : "var(--color-steel)"}
                  strokeWidth="1"
                  className="transition-all duration-200"
                  opacity={isAnyHovered && !isHovered ? 0.3 : 1.0}
                />

                {/* Inner Dot */}
                <circle
                  ref={el => { vertexRefs.current[idx] = el; }}
                  cx={p.x}
                  cy={p.y}
                  r={isHovered ? "2.5" : "1.8"}
                  fill={isHovered ? "var(--color-phosphor)" : "var(--color-phosphor-d)"}
                  className="origin-center transition-all duration-200"
                  opacity={isAnyHovered && !isHovered ? 0.3 : 1.0}
                />
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip Overlay (Absolute Position overlay inside chart container) */}
        {hoveredIdx !== null && (
          <div 
            className="absolute z-30 pointer-events-none bg-ink-900 border-hairline py-1.5 px-3 rounded-[3px] shadow-lg flex flex-col font-mono text-[9px] tracking-widest text-left max-w-[200px]"
            style={{
              left: `${points[hoveredIdx].x - 50}px`,
              top: `${points[hoveredIdx].y - 30}px`,
            }}
          >
            <div className="text-phosphor font-bold uppercase truncate">
              {points[hoveredIdx].proj.nama}
            </div>
            <div className="text-steel font-medium truncate mt-0.5">
              {points[hoveredIdx].proj.stack.join(', ')}
            </div>
            <div className="text-mute text-[8px] mt-0.5 text-right font-medium">
              YEAR: {points[hoveredIdx].proj.tahun}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TelemetryPlot;
