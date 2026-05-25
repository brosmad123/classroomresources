import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { Droplets, Wind, Sun, Flame, Atom, Factory, Zap, RotateCcw } from 'lucide-react';

const CITY_DEMAND = 1000; // MW

const energySources = [
  { id: 'hydro', name: 'Hydropower', icon: Droplets, costPerMW: 35, co2PerMW: 4, mw: 200, color: 'text-cyan', renewable: true, desc: 'Dams & turbines' },
  { id: 'wind', name: 'Wind Farm', icon: Wind, costPerMW: 45, co2PerMW: 7, mw: 150, color: 'text-emerald', renewable: true, desc: 'Onshore turbines' },
  { id: 'solar', name: 'Solar Array', icon: Sun, costPerMW: 50, co2PerMW: 20, mw: 100, color: 'text-amber-400', renewable: true, desc: 'Photovoltaic panels' },
  { id: 'gas', name: 'Natural Gas', icon: Flame, costPerMW: 55, co2PerMW: 450, mw: 300, color: 'text-orange-400', renewable: false, desc: 'Gas turbine plant' },
  { id: 'coal', name: 'Coal Plant', icon: Factory, costPerMW: 65, co2PerMW: 900, mw: 400, color: 'text-red-400', renewable: false, desc: 'Steam generator' },
  { id: 'nuclear', name: 'Nuclear', icon: Atom, costPerMW: 70, co2PerMW: 6, mw: 500, color: 'text-purple-400', renewable: false, desc: 'Fission reactor' },
];

export default function GridSimulator() {
  const [grid, setGrid] = useState([]);

  const totalMW = grid.reduce((sum, id) => {
    const source = energySources.find(s => s.id === id);
    return sum + (source?.mw || 0);
  }, 0);

  const totalCost = grid.reduce((sum, id) => {
    const source = energySources.find(s => s.id === id);
    return sum + ((source?.costPerMW || 0) * (source?.mw || 0));
  }, 0);

  const totalCO2 = grid.reduce((sum, id) => {
    const source = energySources.find(s => s.id === id);
    return sum + ((source?.co2PerMW || 0) * (source?.mw || 0));
  }, 0);

  const renewableMW = grid.reduce((sum, id) => {
    const source = energySources.find(s => s.id === id);
    return sum + (source?.renewable ? (source?.mw || 0) : 0);
  }, 0);

  const renewablePercent = totalMW > 0 ? Math.round((renewableMW / totalMW) * 100) : 0;
  const powered = totalMW >= CITY_DEMAND;

  const addSource = (id) => {
    setGrid([...grid, id]);
  };

  const removeSource = (idx) => {
    setGrid(grid.filter((_, i) => i !== idx));
  };

  const getCostGrade = () => {
    if (!powered) return { label: 'Insufficient Power', color: 'text-red-400' };
    const costPerMW = totalCost / totalMW;
    if (costPerMW < 40) return { label: 'Excellent', color: 'text-emerald' };
    if (costPerMW < 55) return { label: 'Good', color: 'text-cyan' };
    if (costPerMW < 65) return { label: 'Average', color: 'text-amber-400' };
    return { label: 'Expensive', color: 'text-red-400' };
  };

  const grade = getCostGrade();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Source selection */}
        <div className="lg:col-span-2 space-y-3">
          <p className="text-xs font-mono text-glacier/40 uppercase tracking-wider mb-2">Available Sources</p>
          {energySources.map((source) => (
            <button
              key={source.id}
              onClick={() => addSource(source.id)}
              className="w-full glass rounded-xl p-4 flex items-center gap-3 transition-all duration-200 hover:border-cyan/30 text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <source.icon className={`w-5 h-5 ${source.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-glacier">{source.name}</span>
                  <span className="text-xs font-mono text-glacier/40">{source.mw} MW</span>
                </div>
                <div className="flex gap-3 mt-1 text-[11px] text-glacier/40">
                  <span>${source.costPerMW}/MW</span>
                  <span>{source.co2PerMW}g CO₂/kWh</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Grid status */}
        <div className="lg:col-span-3 space-y-4">
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-mono text-cyan uppercase tracking-wider">City Power Demand</p>
                <p className="text-2xl font-bold text-glacier mt-1">{CITY_DEMAND} MW</p>
              </div>
              <button onClick={() => setGrid([])} className="p-2 rounded-lg bg-white/5 text-glacier/40 hover:text-glacier transition-colors">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Power bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-glacier/50">Supplied: {totalMW} MW</span>
                <span className={powered ? 'text-emerald' : 'text-red-400'}>
                  {powered ? 'Grid Powered ✓' : `Need ${CITY_DEMAND - totalMW} MW more`}
                </span>
              </div>
              <div className="h-4 rounded-full bg-white/5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    renewablePercent > 80 ? 'bg-gradient-to-r from-cyan to-emerald' :
                    renewablePercent > 50 ? 'bg-cyan' :
                    'bg-gradient-to-r from-orange-400 to-red-400'
                  }`}
                  style={{ width: `${Math.min((totalMW / CITY_DEMAND) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white/[0.03]">
                <p className="stat-mono text-lg font-bold text-cyan">${(totalCost / 1000).toFixed(1)}K</p>
                <p className="text-[10px] text-glacier/40 uppercase mt-1">Total Cost</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03]">
                <p className="stat-mono text-lg font-bold text-emerald">{renewablePercent}%</p>
                <p className="text-[10px] text-glacier/40 uppercase mt-1">Renewable</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03]">
                <p className={`stat-mono text-lg font-bold ${grade.color}`}>{grade.label}</p>
                <p className="text-[10px] text-glacier/40 uppercase mt-1">Rating</p>
              </div>
            </div>
          </GlassCard>

          {/* Built grid */}
          <div>
            <p className="text-xs font-mono text-glacier/40 uppercase tracking-wider mb-3">Your Energy Grid</p>
            {grid.length === 0 ? (
              <GlassCard>
                <p className="text-center text-glacier/30 py-6 text-sm">Click energy sources on the left to build your grid.</p>
              </GlassCard>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {grid.map((id, idx) => {
                  const source = energySources.find(s => s.id === id);
                  return (
                    <button
                      key={idx}
                      onClick={() => removeSource(idx)}
                      className="glass rounded-xl p-3 flex items-center gap-2 transition-all duration-200 hover:border-red-500/30 group"
                    >
                      <source.icon className={`w-4 h-4 ${source.color} shrink-0`} />
                      <span className="text-xs text-glacier/70 truncate">{source.name}</span>
                      <span className="text-[10px] text-glacier/30 ml-auto group-hover:text-red-400 shrink-0">✕</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* CO2 output */}
          {grid.length > 0 && (
            <GlassCard className="!p-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${totalCO2 < 5000 ? 'bg-emerald' : totalCO2 < 50000 ? 'bg-amber-400' : 'bg-red-400'}`} />
                <div>
                  <p className="text-xs text-glacier/50">Estimated CO₂ Emissions</p>
                  <p className="stat-mono text-sm font-bold text-glacier">{(totalCO2 / 1000).toFixed(1)} tonnes CO₂/hour</p>
                </div>
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}