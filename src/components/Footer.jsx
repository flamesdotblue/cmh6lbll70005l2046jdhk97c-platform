import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-10 mt-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/60">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-sm bg-white/10 border border-white/20" />
          <span className="tracking-wide">Newthing</span>
        </div>
        <div className="text-xs md:text-sm text-center md:text-right">
          <span className="opacity-80">© {new Date().getFullYear()} Newthing. All rights reserved.</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </footer>
  );
}
