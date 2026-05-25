const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import Navbar from '../components/norway/Navbar';
import Footer from '../components/norway/Footer';
import SectionHeader from '../components/norway/SectionHeader';
import GlassCard from '../components/norway/GlassCard';
import StatCounter from '../components/norway/StatCounter';
import { Droplets, Zap, Car, Wind, ThermometerSnowflake, Globe, Mountain, Battery, Ship, TreePine } from 'lucide-react';

const AURORA_IMG = 'https://media.db.com/images/public/6a13809dd84c93a2c6328bfb/0f3687731_generated_257411f0.png';

const quickFacts = [
  { icon: Droplets, title: 'Water Battery', fact: 'Norway\'s hydropower reservoirs can store 87 TWh of energy—equal to the entire EU\'s pumped hydro storage combined.', color: 'text-cyan' },
  { icon: Zap, title: 'Energy Exporter', fact: 'Norway exports electricity to the UK, Germany, Denmark, and the Netherlands through undersea cables spanning hundreds of kilometers.', color: 'text-emerald' },
  { icon: Car, title: 'No Gas Required', fact: 'In 2024, 82% of all new cars sold in Norway were fully electric—the highest EV adoption rate of any country on Earth.', color: 'text-cyan' },
  { icon: Wind, title: 'Floating Wind', fact: 'Norway built the world\'s first floating offshore wind farm (Hywind Scotland) and the largest floating wind project (Hywind Tampen).', color: 'text-emerald' },
  { icon: ThermometerSnowflake, title: 'Cold Power', fact: 'Cold temperatures actually increase the efficiency of wind turbines and reduce energy losses in transmission lines.', color: 'text-cyan' },
  { icon: Globe, title: 'Carbon Neutral Goal', fact: 'Norway aims to achieve carbon neutrality by 2030—one of the most ambitious climate targets globally.', color: 'text-emerald' },
  { icon: Mountain, title: 'Elevation Advantage', fact: 'The average Norwegian hydropower plant has a "head" (water drop height) of 300+ meters, maximizing energy per liter.', color: 'text-cyan' },
  { icon: Battery, title: 'Battery Nation', fact: 'Norway is building one of Europe\'s largest battery gigafactories in Mo i Rana, powered entirely by renewable energy.', color: 'text-emerald' },
  { icon: Ship, title: 'Electric Ferries', fact: 'Over 80 electric and hybrid ferries now operate on Norwegian fjords, including the world\'s first fully electric car ferry.', color: 'text-cyan' },
  { icon: TreePine, title: 'Carbon Capture', fact: 'The Longship project is Europe\'s first full-scale carbon capture and storage facility, burying CO₂ beneath the North Sea.', color: 'text-emerald' },
];

const bigStats = [
  { end: 98, suffix: '%', label: 'Electricity From Renewables' },
  { end: 5.4, suffix: 'M', label: 'Population', decimals: 1 },
  { end: 1700, suffix: '+', label: 'Hydropower Plants' },
  { end: 82, suffix: '%', label: 'New Cars Are Electric' },
  { end: 25148, suffix: 'km', label: 'Coastline Length' },
  { end: 87, suffix: 'TWh', label: 'Hydro Storage Capacity' },
];

export default function FunFacts() {
  return (
    <div className="min-h-screen bg-fjord">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={AURORA_IMG} alt="Northern Lights over Norwegian mountain lake" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-fjord/60 via-fjord/80 to-fjord" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Did You Know?"
            title="Norway Energy Fun Facts"
            description="Surprising numbers and stories behind the world's most renewable nation."
            align="center"
          />
        </div>
      </section>

      {/* Big stat counters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {bigStats.map((stat) => (
              <GlassCard key={stat.label} className="flex items-center justify-center py-8">
                <StatCounter end={stat.end} suffix={stat.suffix} label={stat.label} decimals={stat.decimals || 0} />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick facts grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-glacier mb-8 text-center">Quick Facts</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {quickFacts.map((item) => (
              <GlassCard key={item.title} glow={item.color === 'text-emerald' ? 'emerald' : 'cyan'}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-glacier mb-1">{item.title}</h4>
                    <p className="text-sm text-glacier/50 leading-relaxed">{item.fact}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}