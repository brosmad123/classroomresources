const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, BookOpen, Sparkles } from 'lucide-react';

const HERO_IMG = 'https://media.db.com/images/public/6a13809dd84c93a2c6328bfb/f5e8b2680_generated_17e90f7e.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Norwegian hydroelectric dam aerial view in dramatic blue hour lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fjord/70 via-fjord/50 to-fjord" />
        <div className="absolute inset-0 bg-gradient-to-r from-fjord/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            <span className="text-xs font-mono font-medium text-cyan uppercase tracking-widest">
              Powered by 98% Renewable Energy
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-inter font-black text-glacier leading-[0.95] tracking-tight">
            Norway's
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald">
              Renewable
            </span>
            <br />
            Energy Usage
          </h1>

          <p className="mt-8 text-lg md:text-xl text-glacier/50 max-w-xl leading-relaxed font-light">
            How one nation harnesses the raw power of its fjords, mountains, and Arctic winds to lead the world in clean energy and electric transportation.
          </p>

          {/* Hero buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/games"
              className="group relative overflow-hidden px-8 py-4 rounded-xl border border-cyan/30 text-glacier font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:border-cyan/60"
            >
              <span className="absolute inset-0 bg-cyan/0 group-hover:bg-cyan/10 transition-colors duration-300" />
              <span className="relative flex items-center gap-3">
                <Beaker className="w-4 h-4 text-cyan" />
                Explore the Energy Lab
              </span>
            </Link>
            <Link
              to="/sources"
              className="group relative overflow-hidden px-8 py-4 rounded-xl border border-white/10 text-glacier/70 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:border-white/20 hover:text-glacier"
            >
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
              <span className="relative flex items-center gap-3">
                <BookOpen className="w-4 h-4" />
                Academic Archive
              </span>
            </Link>
            <Link
              to="/fun-facts"
              className="group relative overflow-hidden px-8 py-4 rounded-xl border border-emerald/30 text-glacier/70 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:border-emerald/60 hover:text-glacier"
            >
              <span className="absolute inset-0 bg-emerald/0 group-hover:bg-emerald/10 transition-colors duration-300" />
              <span className="relative flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-emerald" />
                Fun Facts
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-glacier/30 uppercase tracking-widest font-mono">Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-cyan/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}