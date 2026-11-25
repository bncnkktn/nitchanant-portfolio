import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

export interface IndicatorStyle {
  transform: string;
  width: number;
  height: number;
  opacity: number;
}

/**
 * Measures the active tab/button inside a container and returns smooth
 * transform/width/height styles for a sliding pill indicator.
 */
export function useSlidingIndicator<T extends HTMLElement = HTMLDivElement>(
  activeKey: string | number,
  extraDep?: string | number
) {
  const containerRef = useRef<T | null>(null);
  const [style, setStyle] = useState<IndicatorStyle>({
    transform: 'translate3d(0, 0, 0)',
    width: 0,
    height: 0,
    opacity: 0,
  });

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeEl = container.querySelector<HTMLElement>(
      '[aria-selected="true"], [aria-pressed="true"], .active'
    );
    if (!activeEl) {
      setStyle((prev) => (prev.opacity === 0 ? prev : { ...prev, opacity: 0 }));
      return;
    }

    const left = activeEl.offsetLeft;
    const top = activeEl.offsetTop;
    const width = activeEl.offsetWidth;
    const height = activeEl.offsetHeight;

    setStyle({
      transform: `translate3d(${left}px, ${top}px, 0)`,
      width,
      height,
      opacity: width > 0 ? 1 : 0,
    });
  }, []);

  useLayoutEffect(() => {
    measure();
    // Re-measure one frame later in case web fonts or language widths settled
    const raf = window.requestAnimationFrame(measure);
    return () => window.cancelAnimationFrame(raf);
  }, [activeKey, extraDep, measure]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => measure());
    ro.observe(container);
    window.addEventListener('resize', measure);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure, activeKey, extraDep]);

  return { containerRef, style };
}
