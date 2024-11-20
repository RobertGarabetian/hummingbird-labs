"use client";

import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.fillStyle = 'rgb(240, 248, 255)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const drawCurve = (offset: number) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let i = 0; i <= canvas.width; i += 20) {
          const x = i;
          const y = Math.sin(i * 0.003 + time + offset) * 100 + 
                   Math.sin(i * 0.001 + time + offset) * 150 +
                   canvas.height * 0.5;
          
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
      };

      // Draw multiple curves with different colors and opacity
      const curves = [
        { color: 'rgba(176, 224, 246, 0.3)', offset: 0 },
        { color: 'rgba(144, 202, 249, 0.2)', offset: 2 },
        { color: 'rgba(129, 212, 250, 0.1)', offset: 4 }
      ];

      curves.forEach(({ color, offset }) => {
        ctx.fillStyle = color;
        drawCurve(offset);
        ctx.fill();
      });

      time += 0.002;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: 'rgb(240, 248, 255)' }}
    />
  );
}