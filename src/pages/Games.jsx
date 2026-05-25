import React, { useState } from 'react';
import Navbar from '../components/norway/Navbar';
import Footer from '../components/norway/Footer';
import SectionHeader from '../components/norway/SectionHeader';
import EnergyQuiz from '../components/norway/EnergyQuiz';
import GridSimulator from '../components/norway/GridSimulator';
import ExplorerGame from '../components/norway/ExplorerGame';
import { Brain, Cpu, Compass } from 'lucide-react';

const tabs = [
  { id: 'quiz', label: 'Energy Quiz', icon: Brain, desc: 'Test your knowledge' },
  { id: 'simulator', label: 'Grid Simulator', icon: Cpu, desc: 'Build a power grid' },
  { id: 'explorer', label: 'Norway Explorer', icon: Compass, desc: 'Explore the geography' },
];

export default function Games() {
  const [activeTab, setActiveTab] = useState('quiz');

  return (
    <div className="min-h-screen bg-fjord">
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Interactive"
            title="The Energy Lab"
            description="Learn about Norway's renewable energy through interactive games, simulations, and exploration."
            align="center"
          />

          {/* Tab bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'border-cyan/40 bg-cyan/10 text-glacier'
                    : 'border-white/5 bg-white/[0.02] text-glacier/50 hover:border-white/10 hover:text-glacier/70'
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-cyan' : ''}`} />
                <div className="text-left">
                  <span className="block">{tab.label}</span>
                  <span className="block text-[10px] opacity-50">{tab.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {activeTab === 'quiz' && <EnergyQuiz />}
          {activeTab === 'simulator' && <GridSimulator />}
          {activeTab === 'explorer' && <ExplorerGame />}
        </div>
      </section>

      <Footer />
    </div>
  );
}