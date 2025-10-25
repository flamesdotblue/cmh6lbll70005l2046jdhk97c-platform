import React from 'react';
import { motion } from 'framer-motion';

function Node({ color, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay }}
      className="relative flex flex-col items-center"
    >
      <div
        className="relative h-28 w-28 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.08)]"
        style={{
          boxShadow: '0 0 80px rgba(192,132,252,0.08)',
        }}
      >
        <div className="absolute inset-0 rounded-2xl"
             style={{
               background: 'conic-gradient(from 0deg, rgba(0,255,255,0.25), rgba(192,132,252,0.2), rgba(255,102,196,0.22), rgba(0,255,255,0.25))',
               WebkitMask: 'linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)',
               WebkitMaskComposite: 'xor',
               padding: '1px',
             }}
        />
        <div className="absolute inset-[2px] rounded-2xl bg-black/50" />
        <div className="absolute inset-0 rounded-2xl" style={{ filter: 'blur(18px)', opacity: 0.35, background: `radial-gradient(circle at 50% 50%, ${color}44, transparent 70%)` }} />
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-10 w-10 rounded-full" style={{ background: `radial-gradient(circle, ${color}, transparent 60%)` }} />
        </div>
      </div>
      <div className="mt-4 text-sm text-white/80">{label}</div>
    </motion.div>
  );
}

export default function Midsection() {
  return (
    <section id="flow" className="relative w-full py-28 md:py-36 z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-20 blur-3xl"
             style={{ background: 'radial-gradient(circle, rgba(0,255,255,0.08), rgba(192,132,252,0.05), rgba(255,102,196,0.05), transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-medium"
          >
            A universe of ideas, forming in real-time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-4 text-white/70 max-w-2xl mx-auto"
          >
            Abstract ecosystems of possibility — connected by creative energy. Smooth flows, glowing links, and new forms emerging from the black.
          </motion.p>
        </div>

        {/* Network diagram */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <div className="relative col-span-1 flex justify-center">
            <Node color="#00FFFF" label="Concepts" delay={0.05} />
          </div>
          <div className="relative col-span-1 flex justify-center">
            <Node color="#C084FC" label="Creation" delay={0.15} />
          </div>
          <div className="relative col-span-1 flex justify-center">
            <Node color="#FF66C4" label="Objects" delay={0.25} />
          </div>

          {/* SVG connective lines */}
          <svg className="pointer-events-none absolute left-0 top-0 h-full w-full" viewBox="0 0 1000 280" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#C084FC" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FF66C4" stopOpacity="0.7" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M 120 140 C 300 20, 700 260, 880 140" stroke="url(#grad1)" strokeWidth="2" fill="none" filter="url(#glow)" />
            <path d="M 120 170 C 360 120, 640 210, 880 170" stroke="url(#grad1)" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M 120 110 C 360 60, 640 120, 880 110" stroke="url(#grad1)" strokeWidth="1" fill="none" opacity="0.3" />
          </svg>
        </div>

        {/* Floating accents */}
        <div className="relative mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: 'Futuristic Simplicity', d: 'Minimal surfaces. Maximum intent. Holographic clarity.' },
            { t: 'Cinematic Atmosphere', d: 'Volumetric light, soft shadows, and glassy UI.' },
            { t: 'Creative Energy', d: 'Glowing flows connect thoughts to tangible forms.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6"
            >
              <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(0,255,255,0.12), rgba(192,132,252,0.08), rgba(255,102,196,0.12))', filter: 'blur(12px)', opacity: 0.35 }} />
              <div className="relative">
                <h3 className="text-lg font-medium">{item.t}</h3>
                <p className="mt-2 text-sm text-white/70">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
