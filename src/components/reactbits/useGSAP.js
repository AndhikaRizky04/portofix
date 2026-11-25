// Shim minimal pengganti `useGSAP` dari @gsap/react (paket belum terpasang).
// Perilaku sama untuk pemakaian di Shuffle: jalankan callback di dalam gsap.context
// terikat `scope`, jalankan ulang saat dependencies berubah, lalu revert + cleanup.
import { useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useGSAP(callback, config = {}) {
  const { dependencies = [], scope } = config;
  useIsoLayoutEffect(() => {
    let cleanup;
    const ctx = gsap.context(() => {
      cleanup = callback();
    }, scope && 'current' in scope ? scope.current ?? undefined : scope);
    return () => {
      if (typeof cleanup === 'function') cleanup();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

export default useGSAP;
