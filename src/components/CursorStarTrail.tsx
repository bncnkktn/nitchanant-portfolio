import { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  age: number;
  maxAge: number;
  hueIdx: number;
}

interface StarParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  vRot: number;
  age: number;
  maxAge: number;
  color: string;
  shape: 'star4' | 'star5' | 'dot';
}

const PALETTE = [
  '#ff8c7a', // rosy peach
  '#ffcf4d', // butter yellow
  '#be9eff', // lavender
  '#6ecbff', // sky blue
  '#5ee3a8', // fresh mint
];

function drawStar4(ctx: CanvasRenderingContext2D, r: number) {
  const inner = r * 0.32;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const rad = i % 2 === 0 ? r : inner;
    const angle = (i * Math.PI) / 4;
    const px = Math.cos(angle) * rad;
    const py = Math.sin(angle) * rad;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
}

function drawStar5(ctx: CanvasRenderingContext2D, r: number) {
  const inner = r * 0.44;
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r : inner;
    const angle = (i * Math.PI) / 5 - Math.PI / 2;
    const px = Math.cos(angle) * rad;
    const py = Math.sin(angle) * rad;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
}

export function CursorStarTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced motion & skip touch-only devices
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const points: TrailPoint[] = [];
    const stars: StarParticle[] = [];
    let rafId: number | null = null;
    let lastX = -999;
    let lastY = -999;
    let colorStep = 0;
    let distSinceStar = 0;

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & draw tapered multi-color ribbon trail
      for (let i = points.length - 1; i >= 0; i--) {
        points[i].age += 1;
        if (points[i].age >= points[i].maxAge) {
          points.splice(i, 1);
        }
      }

      if (points.length > 2) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < points.length; i++) {
          const p0 = points[i - 1];
          const p1 = points[i];
          const life = 1 - p1.age / p1.maxAge;
          if (life <= 0) continue;

          // Prevent huge jump lines when cursor re-enters viewport
          const segDist = Math.hypot(p1.x - p0.x, p1.y - p0.y);
          if (segDist > 160) continue;

          const midX = (p0.x + p1.x) * 0.5;
          const midY = (p0.y + p1.y) * 0.5;
          const prevMidX = i > 1 ? (points[i - 2].x + p0.x) * 0.5 : p0.x;
          const prevMidY = i > 1 ? (points[i - 2].y + p0.y) * 0.5 : p0.y;

          ctx.beginPath();
          ctx.moveTo(prevMidX, prevMidY);
          ctx.quadraticCurveTo(p0.x, p0.y, midX, midY);

          ctx.strokeStyle = PALETTE[p1.hueIdx % PALETTE.length];
          ctx.globalAlpha = Math.pow(life, 1.45) * 0.62;
          ctx.lineWidth = Math.max(0.8, life * 4.2);
          ctx.stroke();
        }
      }

      // Update & draw twinkling pastel stars
      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.age += 1;
        if (s.age >= s.maxAge) {
          stars.splice(i, 1);
          continue;
        }

        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.015; // very gentle float drift
        s.vx *= 0.985;
        s.rotation += s.vRot;

        const progress = s.age / s.maxAge;
        const alpha = progress < 0.15 ? progress / 0.15 : Math.pow(1 - progress, 1.3);
        const scale = 0.55 + (1 - progress) * 0.65;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.globalAlpha = Math.min(1, alpha * 0.88);
        ctx.fillStyle = s.color;

        if (s.shape === 'star4') {
          drawStar4(ctx, s.size * scale);
        } else if (s.shape === 'star5') {
          drawStar5(ctx, s.size * scale);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, s.size * 0.45 * scale, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      ctx.globalAlpha = 1;

      if (points.length > 0 || stars.length > 0) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    const ensureRunning = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const dx = lastX === -999 ? 0 : x - lastX;
      const dy = lastY === -999 ? 0 : y - lastY;
      const dist = Math.hypot(dx, dy);

      if (dist < 2 && lastX !== -999) return;

      lastX = x;
      lastY = y;
      colorStep += 0.14;
      distSinceStar += dist;

      points.push({
        x,
        y,
        age: 0,
        maxAge: 28,
        hueIdx: Math.floor(colorStep) % PALETTE.length,
      });

      if (points.length > 48) {
        points.shift();
      }

      // Spawn colorful stars smoothly based on travel distance
      if (distSinceStar >= 18) {
        distSinceStar = 0;
        const shapes: StarParticle['shape'][] = ['star4', 'star5', 'star4', 'dot'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = PALETTE[Math.floor(colorStep + Math.random() * 2) % PALETTE.length];
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.25 + Math.random() * 0.75;

        stars.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed - dx * 0.025,
          vy: Math.sin(angle) * speed - dy * 0.025,
          size: shape === 'dot' ? 3.5 + Math.random() * 2.5 : 4.5 + Math.random() * 5.2,
          rotation: Math.random() * Math.PI,
          vRot: (Math.random() - 0.5) * 0.09,
          age: 0,
          maxAge: 34 + Math.floor(Math.random() * 20),
          color,
          shape,
        });

        if (stars.length > 75) {
          stars.shift();
        }
      }

      ensureRunning();
    };

    const onPointerLeave = () => {
      lastX = -999;
      lastY = -999;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-star-canvas" aria-hidden="true" />;
}
