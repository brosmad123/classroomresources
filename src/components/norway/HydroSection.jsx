const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { Droplets, Mountain, Gauge, Factory } from 'lucide-react';

const FJORD_IMG = 'https://media.db.com/images/public/6a13809dd84c93a2c6328bfb/15d23812e_generated_3cfeca8b.png';

export default function HydroSection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Hydroelectric Power"
          title="The Backbone of Norway's Grid"
          description="Norway's dramatic topography—steep mountains, deep fjords, and abundant rainfall—makes it one of the most ideal locations on Earth for hydropower generation."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src={FJORD_IMG}
              alt="Norwegian fjord landscape with deep blue water between mountain walls"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fjord via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <GlassCard className="!p-4">
                <p className="text-xs font-mono text-cyan uppercase tracking-wider mb-1">Dam Diagram</p>
                <div className="flex items-center gap-3">
                  {/* Simple SVG dam diagram */}
                  <svg viewBox="0 0 200 100" className="w-full h-20" fill="none">
                    {/* Mountain left */}
                    <polygon points="0,100 40,20 60,40 80,100" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.3)" strokeWidth="1"/>
                    {/* Dam wall */}
                    <rect x="75" y="30" width="8" height="70" fill="rgba(248,250,252,0.15)" stroke="rgba(248,250,252,0.3)" strokeWidth="1" rx="1"/>
                    {/* Water reservoir */}
                    <rect x="0" y="50" width="75" height="50" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5"/>
                    {/* Water flow */}
                    <path d="M83 70 Q100 70 100 80 Q100 90 115 90" stroke="#22D3EE" strokeWidth="2" strokeDasharray="4 3">
                      <animate attributeName="stroke-dashoffset" from="14" to="0" dur="1s" repeatCount="indefinite"/>
                    </path>
                    {/* Turbine */}
                    <circle cx="125" cy="85" r="10" fill="rgba(16,185,129,0.1)" stroke="#10B981" strokeWidth="1"/>
                    <line x1="125" y1="75" x2="125" y2="95" stroke="#10B981" strokeWidth="1">
                      <animateTransform attributeName="transform" type="rotate" from="0 125 85" to="360 125 85" dur="2s" repeatCount="indefinite"/>
                    </line>
                    <line x1="115" y1="85" x2="135" y2="85" stroke="#10B981" strokeWidth="1">
                      <animateTransform attributeName="transform" type="rotate" from="0 125 85" to="360 125 85" dur="2s" repeatCount="indefinite"/>
                    </line>
                    {/* Power lines */}
                    <line x1="140" y1="85" x2="200" y2="60" stroke="rgba(248,250,252,0.2)" strokeWidth="0.5" strokeDasharray="3 2"/>
                    {/* Mountain right */}
                    <polygon points="150,100 180,30 200,50 200,100" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="1"/>
                    {/* Labels */}
                    <text x="30" y="45" fill="rgba(34,211,238,0.6)" fontSize="6" fontFamily="monospace">RESERVOIR</text>
                    <text x="110" y="75" fill="rgba(16,185,129,0.6)" fontSize="5" fontFamily="monospace">TURBINE</text>
                    <text x="160" y="55" fill="rgba(248,250,252,0.4)" fontSize="5" fontFamily="monospace">GRID</text>
                  </svg>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard>
              <Droplets className="w-8 h-8 text-cyan mb-4" />
              <h4 className="text-lg font-bold text-glacier mb-2">1,700+ Plants</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                Norway operates over 1,700 hydropower plants across the country, from massive reservoir systems to small run-of-river stations.
              </p>
            </GlassCard>
            <GlassCard glow="emerald">
              <Mountain className="w-8 h-8 text-emerald mb-4" />
              <h4 className="text-lg font-bold text-glacier mb-2">Perfect Geography</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                Steep mountain terrain and heavy rainfall create enormous elevation differences, providing natural gravitational energy for turbines.
              </p>
            </GlassCard>
            <GlassCard>
              <Gauge className="w-8 h-8 text-cyan mb-4" />
              <h4 className="text-lg font-bold text-glacier mb-2">136 TWh/year</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                Hydropower alone produces roughly 136 terawatt-hours annually—enough to power over 13 million homes.
              </p>
            </GlassCard>
            <GlassCard glow="emerald">
              <Factory className="w-8 h-8 text-emerald mb-4" />
              <h4 className="text-lg font-bold text-glacier mb-2">Pumped Storage</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                Some plants pump water back uphill during low demand, storing energy like a giant battery for peak hours.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}