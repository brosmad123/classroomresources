import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';

const regions = [
  { id: 'north', name: 'Northern Norway', x: 140, y: 30, desc: 'Wind farms, Arctic research stations, and the Hywind Tampen floating wind farm offshore.', energy: 'Wind + Hydro' },
  { id: 'central', name: 'Trøndelag', x: 120, y: 130, desc: 'Major onshore wind installations at Fosen—one of Europe\'s largest onshore wind projects.', energy: 'Wind' },
  { id: 'west', name: 'Western Fjords', x: 80, y: 190, desc: 'Dense concentration of hydropower stations utilizing fjord elevation drops.', energy: 'Hydropower' },
  { id: 'south', name: 'Southern Norway', x: 110, y: 260, desc: 'Norway\'s energy export hub with subsea cables to the UK, Germany, and Denmark.', energy: 'Hydro + Export' },
  { id: 'east', name: 'Oslo Region', x: 140, y: 230, desc: 'Electric vehicle capital: highest EV density in the world. 50%+ of all cars are electric.', energy: 'EV Hub' },
];

export default function NorwayMap() {
  const [active, setActive] = useState(null);
  const activeRegion = regions.find(r => r.id === active);

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Geography"
          title="Energy Across Norway"
          description="Click on the map to explore how different regions of Norway contribute to the nation's renewable energy output."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* SVG Map */}
          <div className="flex justify-center">
            <svg viewBox="0 0 220 310" className="w-full max-w-xs h-auto">
              {/* Simplified Norway outline */}
              <path
                d="M130,5 L160,15 L170,40 L155,60 L165,80 L150,100 L155,120 L140,140 L130,160 L110,175 L95,190 L80,210 L75,230 L90,245 L110,260 L130,270 L140,290 L120,305 L100,295 L80,280 L65,260 L55,240 L50,220 L60,200 L70,180 L85,160 L90,140 L80,120 L90,100 L85,80 L100,60 L110,40 L120,20 Z"
                fill="rgba(34,211,238,0.05)"
                stroke="rgba(34,211,238,0.3)"
                strokeWidth="1.5"
              />
              {/* Region dots */}
              {regions.map((region) => (
                <g key={region.id} onClick={() => setActive(active === region.id ? null : region.id)} className="cursor-pointer">
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={active === region.id ? 10 : 6}
                    fill={active === region.id ? 'rgba(34,211,238,0.3)' : 'rgba(34,211,238,0.1)'}
                    stroke="#22D3EE"
                    strokeWidth={active === region.id ? 2 : 1}
                    className="transition-all duration-300"
                  />
                  <circle cx={region.x} cy={region.y} r="2.5" fill="#22D3EE">
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <text x={region.x + 14} y={region.y + 4} fill="rgba(248,250,252,0.5)" fontSize="7" fontFamily="monospace">
                    {region.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Info panel */}
          <div>
            {activeRegion ? (
              <GlassCard className="glow-cyan">
                <span className="inline-block px-2 py-0.5 rounded bg-cyan/10 text-cyan text-xs font-mono uppercase tracking-wider mb-3">
                  {activeRegion.energy}
                </span>
                <h3 className="text-2xl font-bold text-glacier mb-3">{activeRegion.name}</h3>
                <p className="text-glacier/60 leading-relaxed">{activeRegion.desc}</p>
              </GlassCard>
            ) : (
              <GlassCard>
                <p className="text-glacier/40 text-center py-8">
                  Click on a region dot on the map to learn about its energy profile.
                </p>
              </GlassCard>
            )}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {regions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActive(active === r.id ? null : r.id)}
                  className={`text-left px-4 py-3 rounded-lg border transition-all duration-200 text-sm ${
                    active === r.id
                      ? 'border-cyan/40 bg-cyan/5 text-glacier'
                      : 'border-white/5 bg-white/[0.02] text-glacier/50 hover:border-white/10 hover:text-glacier/70'
                  }`}
                >
                  <span className="font-medium">{r.name}</span>
                  <span className="block text-xs mt-0.5 opacity-60">{r.energy}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}