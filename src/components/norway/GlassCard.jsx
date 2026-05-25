import React from 'react';

export default function GlassCard({ children, className = '', glow = 'cyan', hover = true }) {
  const glowClass = glow === 'emerald' ? 'hover:border-emerald/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'hover:border-cyan/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]';

  return (
    <div className={`glass rounded-xl p-6 transition-all duration-300 ${hover ? glowClass : ''} ${className}`}>
      {children}
    </div>
  );
}