import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface SmartVideoProps {
  src: string;
  className?: string;
  paused?: boolean;
  controls?: boolean;
  silent?: boolean;
  onClick?: React.MouseEventHandler<HTMLVideoElement>;
}

/**
 * Lazy-loads video only when near the viewport and auto-pauses off-screen
 * to keep initial page load fast and save mobile data/CPU.
 */
export const SmartVideo = forwardRef<HTMLVideoElement, SmartVideoProps>(function SmartVideo(
  { src, className, paused = false, controls = false, silent = false, onClick },
  forwardedRef
) {
  const internalRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [inView, setInView] = useState(false);

  useImperativeHandle(forwardedRef, () => internalRef.current as HTMLVideoElement);

  useEffect(() => {
    const el = internalRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      setInView(true);
      return;
    }

    const loadObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: '240px 0px' }
    );

    const playObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        setInView(visible);
      },
      { threshold: 0.08 }
    );

    loadObserver.observe(el);
    playObserver.observe(el);

    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = internalRef.current;
    if (!el || !shouldLoad) return;

    if (inView && !paused) {
      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } else {
      el.pause();
    }
  }, [inView, paused, shouldLoad, src]);

  return (
    <video
      ref={internalRef}
      src={shouldLoad ? src : undefined}
      preload={shouldLoad ? 'metadata' : 'none'}
      loop
      muted
      playsInline
      controls={controls}
      className={className}
      onClick={onClick}
      onLoadedMetadata={(e) => {
        if (silent) {
          e.currentTarget.muted = true;
          e.currentTarget.volume = 0;
        }
      }}
      onVolumeChange={(e) => {
        if (silent && (!e.currentTarget.muted || e.currentTarget.volume !== 0)) {
          e.currentTarget.muted = true;
          e.currentTarget.volume = 0;
        }
      }}
    />
  );
});
