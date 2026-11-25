import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Gabungkan className kondisional + resolusi konflik utilitas Tailwind (pola shadcn/ui). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Scroll halus ke anchor memakai Lenis bila aktif, fallback ke scrollIntoView. */
export function scrollToHash(hash: string) {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(hash === '#top' ? 0 : hash, { duration: 1.2, offset: -96 });
    return;
  }
  if (hash === '#top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
}
