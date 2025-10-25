import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center z-10 overflow-hidden">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle cinematic gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight drop-shadow-[0_1px_20px_rgba(0,0,0,0.5)]"
        >
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#ffffff_0%,#cfcfcf_40%,#ffffff_80%)]">
            Something New is Coming.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="mt-6 text-base md:text-lg text-white/80"
        >
          Newthing — where ideas from the unknown take form.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
          className="mt-10"
        >
          <a
            href="#flow"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/60 text-white/90 backdrop-blur-md hover:border-white transition-colors relative"
          >
            <span className="relative z-[1]">Notify Me</span>
            {/* glow */}
            <span className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* ground reflection / holographic projection hint */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-20 w-[80%] max-w-4xl h-40 rounded-[50%] blur-3xl opacity-40"
             style={{
               background: 'radial-gradient(closest-side, rgba(0,255,255,0.25), rgba(192,132,252,0.18), rgba(255,102,196,0.14), transparent 70%)'
             }}
        />
      </div>
    </section>
  );
}
