import React, { useEffect, useRef } from 'react';

// Full-screen starfield / particle flow background with subtle motion
export default function BackgroundFX() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', onResize);

    const PARTICLE_COUNT = Math.min(220, Math.floor((width * height) / 18000));
    let particles = [];

    function initParticles() {
      particles = new Array(PARTICLE_COUNT).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.6 + 0.4, // depth multiplier
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        r: Math.random() * 0.8 + 0.2,
        c: Math.random(),
      }));
    }

    initParticles();

    const gradientMatte = () => {
      const g = ctx.createRadialGradient(width * 0.5, height * 0.2, 0, width * 0.5, height * 0.2, Math.max(width, height));
      g.addColorStop(0, '#000000');
      g.addColorStop(1, '#050505');
      return g;
    };

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradientMatte();
      ctx.fillRect(0, 0, width, height);

      // faint nebula glow
      const nebula = ctx.createRadialGradient(width * 0.7, height * 0.8, 0, width * 0.7, height * 0.8, Math.min(width, height) * 0.7);
      nebula.addColorStop(0, 'rgba(0,255,255,0.06)');
      nebula.addColorStop(0.5, 'rgba(192,132,252,0.04)');
      nebula.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, width, height);

      // particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // subtle color shift across palette
        const c = p.c;
        let color;
        if (c < 0.33) color = 'rgba(0,255,255,0.6)'; // cyan
        else if (c < 0.66) color = 'rgba(192,132,252,0.5)'; // violet
        else color = 'rgba(255,102,196,0.5)'; // magenta

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.z, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* soft corner vignettes */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(0,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_100%,rgba(192,132,252,0.05),transparent_60%)]" />
    </div>
  );
}
