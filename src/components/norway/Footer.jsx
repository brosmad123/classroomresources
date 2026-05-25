import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-cyan/10 border border-cyan/20 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-cyan" />
            </div>
            <span className="font-inter font-bold text-glacier/80 text-xs tracking-widest uppercase">
              Norway Energy
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-glacier/40">
            <Link to="/" className="hover:text-glacier transition-colors">Home</Link>
            <Link to="/fun-facts" className="hover:text-glacier transition-colors">Fun Facts</Link>
            <Link to="/games" className="hover:text-glacier transition-colors">Energy Lab</Link>
            <Link to="/sources" className="hover:text-glacier transition-colors">Sources</Link>
          </div>
          <p className="text-xs text-glacier/30">
            School Project — 2026
          </p>
        </div>
      </div>
    </footer>
  );
}