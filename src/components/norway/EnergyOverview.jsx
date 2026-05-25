import React from 'react';
import StatCounter from './StatCounter';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { Droplets, Wind, Sun, Plug } from 'lucide-react';

const energyMix = [
  { icon: Droplets, label: 'Hydropower', percent: 88, color: 'text-cyan', bg: 'bg-cyan/10', bar: 'bg-cyan' },
  { icon: Wind, label: 'Wind Energy', percent: 8, color: 'text-emerald', bg: 'bg-emerald/10', bar: 'bg-emerald' },
  { icon: Sun, label: 'Solar & Other', percent: 2, color: 'text-amber-400', bg: 'bg-amber-400/10', bar: 'bg-amber-400' },
  { icon: Plug, label: 'Thermal', percent: 2, color: 'text-glacier/40', bg: 'bg-white/5', bar: 'bg-glacier/30' },
];

export default function EnergyOverview() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Energy Grid"
          title="The Numbers Behind the Grid"
          description="Norway generates almost all of its electricity from renewable sources—a feat unmatched by any other European nation."
          align="center"
        />

        {/* Big stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          <GlassCard className="flex items-center justify-center py-8">
            <StatCounter end={98} suffix="%" label="Renewable Grid" />
          </GlassCard>
          <GlassCard className="flex items-center justify-center py-8" glow="emerald">
            <StatCounter end={1700} suffix="+" label="Hydropower Plants" />
          </GlassCard>
          <GlassCard className="flex items-center justify-center py-8">
            <StatCounter end={80} suffix="%" label="New Cars Are EVs" />
          </GlassCard>
          <GlassCard className="flex items-center justify-center py-8" glow="emerald">
            <StatCounter end={153} suffix=" TWh" label="Annual Production" />
          </GlassCard>
        </div>

        {/* Energy mix bars */}
        <GlassCard className="p-8">
          <h3 className="text-lg font-bold text-glacier mb-6">Norway's Electricity Generation Mix</h3>
          <div className="space-y-5">
            {energyMix.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-glacier">{item.label}</span>
                    <span className="text-sm font-mono font-semibold text-glacier/70">{item.percent}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.bar} transition-all duration-1000`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}