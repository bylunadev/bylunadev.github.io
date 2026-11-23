'use client';

import { useEffect, useRef } from 'react';

const CELL = 40;
const MAX_ALPHA = 0.16;
const FADE_PER_FRAME = 0.018;
const COLOR = '242, 87, 10';

export default function GridGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cells = new Map<string, number>();
    let frame = 0;
    let lastKey = '';

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const [key, value] of cells) {
        const next = value - FADE_PER_FRAME;
        if (next <= 0) { cells.delete(key); continue; }
        cells.set(key, next);
        const [col, row] = key.split(',').map(Number);
        ctx.fillStyle = `rgba(${COLOR}, ${next * MAX_ALPHA})`;
        ctx.fillRect(col * CELL + 1, row * CELL + 1, CELL - 1, CELL - 1);
      }
      frame = cells.size ? requestAnimationFrame(draw) : 0;
    };

    const light = (col: number, row: number, strength: number) => {
      const key = `${col},${row}`;
      cells.set(key, Math.max(cells.get(key) ?? 0, strength));
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const col = Math.floor(event.clientX / CELL);
      const row = Math.floor(event.clientY / CELL);
      const key = `${col},${row}`;
      if (key === lastKey) return;
      lastKey = key;
      light(col, row, 1);
      light(col + 1, row, 0.35); light(col - 1, row, 0.35);
      light(col, row + 1, 0.35); light(col, row - 1, 0.35);
      if (!frame) frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="grid-glow" aria-hidden="true" />;
}
