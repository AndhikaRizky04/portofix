import type { CSSProperties, FC } from 'react';

export interface StrokeTextProps {
  text?: string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  drawDuration?: number;
  fillDelay?: number;
  stagger?: number;
  ease?: string;
  trigger?: 'mount' | 'scroll' | 'hover' | 'loop';
  fillMode?: 'wipe' | 'fade' | 'none';
  wipeFrom?: 'left' | 'right' | 'top' | 'bottom';
  fontSize?: number;
  fontWeight?: number | string;
  fontFamily?: string;
  letterSpacing?: number;
  reverse?: boolean;
  strokeStyle?: 'solid' | 'dashed' | 'dotted';
  dashLength?: number;
  marching?: boolean;
  hoverRedraw?: boolean;
  shadow?: boolean;
  shadowColor?: string;
  className?: string;
  style?: CSSProperties;
}

declare const StrokeText: FC<StrokeTextProps>;
export default StrokeText;
