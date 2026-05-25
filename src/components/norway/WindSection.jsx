const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { Wind, MapPin, TrendingUp, Zap } from 'lucide-react';

const WIND_IMG = 'https://media.db.com/images/public/6a13809dd84c93a2c6328bfb/d8859a670_generated_4fc1e08f.png';

export default function WindSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Wind Energy"
          title="Harnessing Arctic Winds"
          description="Norway's coastline stretches over 25,000 kilometers, exposing it to some of the strongest and most consistent winds in Europe."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-4">
            <GlassCard>
              <Wind className="w-7 h-7 text-emerald mb-3" />
              <h4 className="text-base font-bold text-glacier mb-2">Onshore Fleet</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                Norway has rapidly expanded its onshore wind capacity to over 5,000 MW, with major wind farms in Rogaland, Trøndelag, and Nordland counties.
              </p>
            </GlassCard>
            <GlassCard glow="emerald">
              <MapPin className="w-7 h-7 text-cyan mb-3" />
              <h4 className="text-base font-bold text-glacier mb-2">Offshore Potential</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                The Hywind Tampen floating wind farm—the world's largest—powers offshore oil and gas platforms, reducing their carbon footprint by 35%.
              </p>
            </GlassCard>
            <GlassCard>
              <TrendingUp className="w-7 h-7 text-emerald mb-3" />
              <h4 className="text-base font-bold text-glacier mb-2">Growth Trajectory</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                Wind energy production has grown over 700% in the last decade, making it Norway's fastest-growing renewable source.
              </p>
            </GlassCard>
            <GlassCard glow="emerald">
              <Zap className="w-7 h-7 text-cyan mb-3" />
              <h4 className="text-base font-bold text-glacier mb-2">15 TWh by 2030</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                Government targets aim for wind energy to contribute 15+ terawatt-hours per year by 2030, up from 8 TWh today.
              </p>
            </GlassCard>
          </div>

          {/* Image column */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden min-h-[400px]">
            <img
              src={WIND_IMG}
              alt="Modern wind turbines on Norwegian coastal ridge against dramatic sky"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fjord/80 via-fjord/20 to-transparent" />
            
            {/* Wind turbine SVG overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <GlassCard className="!p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan uppercase tracking-wider">Wind Turbine Output</span>
                  <span className="text-xs font-mono text-emerald">LIVE SIMULATION</span>
                </div>
                <svg viewBox="0 0 300 60" className="w-full h-12" fill="none">
                  {/* Wind flow lines */}
                  {[0, 15, 30, 45].map((y, i) => (
                    <line key={i} x1="0" y1={y + 5} x2="80" y2={y + 5} stroke="rgba(34,211,238,0.15)" strokeWidth="1">
                      <animate attributeName="x1" values="-20;0;-20" dur={`${2 + i * 0.3}s`} repeatCount="indefinite"/>
                      <animate attributeName="x2" values="60;80;60" dur={`${2 + i * 0.3}s`} repeatCount="indefinite"/>
                    </line>
                  ))}
                  {/* Turbine tower */}
                  <rect x="95" y="25" width="3" height="35" fill="rgba(248,250,252,0.3)" rx="1"/>
                  {/* Turbine blades */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 96.5 25" to="360 96.5 25" dur="3s" repeatCount="indefinite"/>
                    <line x1="96.5" y1="5" x2="96.5" y2="25" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="79" y1="35" x2="96.5" y2="25" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="114" y1="35" x2="96.5" y2="25" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round"/>
                  </g>
                  <circle cx="96.5" cy="25" r="2" fill="#22D3EE"/>
                  {/* Power output bar */}
                  <rect x="140" y="20" width="150" height="8" rx="4" fill="rgba(255,255,255,0.05)"/>
                  <rect x="140" y="20" width="120" height="8" rx="4" fill="#10B981">
                    <animate attributeName="width" values="100;130;100" dur="4s" repeatCount="indefinite"/>
                  </rect>
                  <text x="140" y="45" fill="rgba(248,250,252,0.5)" fontSize="7" fontFamily="monospace">OUTPUT: ~5.2 MW per turbine</text>
                </svg>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}