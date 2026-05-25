const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { ChevronRight, RotateCcw, TreePine, Droplets, Mountain, Ship, Snowflake, Fish } from 'lucide-react';

const explorations = [
  {
    id: 'fjords',
    title: 'The Fjords',
    icon: Mountain,
    image: 'https://media.db.com/images/public/6a13809dd84c93a2c6328bfb/15d23812e_generated_3cfeca8b.png',
    intro: 'Norway\'s fjords were carved by glaciers over millions of years. These deep, narrow inlets of sea water are surrounded by steep cliffs and are home to some of the most dramatic landscapes on Earth.',
    topics: [
      { title: 'How Fjords Form', content: 'Fjords are created by glacial erosion. As glaciers advance and retreat over thousands of years, they carve deep U-shaped valleys. When the ice melts, seawater floods these valleys, creating fjords. Norway\'s Sognefjorden is the longest at 204 km and deepest at 1,308 meters.' },
      { title: 'Energy & Fjords', content: 'The steep walls of fjords create massive elevation differences that are perfect for hydropower. Water from melting snow and rain at the top drops hundreds of meters through turbines before reaching the fjord below, generating enormous amounts of electricity.' },
      { title: 'Ecosystem', content: 'Fjords are unique ecosystems where freshwater from rivers mixes with saltwater from the ocean. They support cold-water coral reefs, harbor seals, porpoises, and rich fishing grounds that have sustained Norwegian communities for centuries.' },
    ],
  },
  {
    id: 'arctic',
    title: 'The Arctic North',
    icon: Snowflake,
    image: 'https://media.db.com/images/public/6a13809dd84c93a2c6328bfb/0f3687731_generated_257411f0.png',
    intro: 'Northern Norway lies above the Arctic Circle, where the midnight sun never sets in summer and the Northern Lights dance across the sky in winter. This extreme region is a frontier for renewable energy innovation.',
    topics: [
      { title: 'Midnight Sun', content: 'Above the Arctic Circle, the sun doesn\'t set for weeks during summer (May-July). This phenomenon provides nearly 24 hours of daylight, which some researchers are exploring for extended solar energy generation during these months.' },
      { title: 'Wind Resources', content: 'Arctic winds are exceptionally strong and consistent. The cold air is denser, which means wind turbines can actually produce more power per rotation. Norway\'s northernmost wind farms operate at capacity factors above 40%—higher than most European installations.' },
      { title: 'Northern Lights', content: 'The aurora borealis occurs when charged particles from the sun interact with Earth\'s magnetic field. Norway\'s northern location makes it one of the best places on Earth to witness this phenomenon, drawing hundreds of thousands of tourists annually.' },
    ],
  },
  {
    id: 'forests',
    title: 'Boreal Forests',
    icon: TreePine,
    image: 'https://media.db.com/images/public/6a13809dd84c93a2c6328bfb/d8859a670_generated_4fc1e08f.png',
    intro: 'Norway\'s boreal forests cover 37% of the country and are a critical carbon sink, absorbing millions of tonnes of CO₂ annually while supporting a vast ecosystem of wildlife.',
    topics: [
      { title: 'Carbon Storage', content: 'Norwegian forests absorb approximately 25-30 million tonnes of CO₂ per year—more than half the country\'s total greenhouse gas emissions. This makes them a crucial part of Norway\'s climate strategy alongside renewable energy.' },
      { title: 'Biomass Energy', content: 'While not a major source, forest biomass provides heating energy for rural communities. Wood pellets and chips from sustainable forestry operations heat homes and buildings, especially in inland areas far from hydropower stations.' },
      { title: 'Biodiversity', content: 'These forests are home to lynx, wolverines, brown bears, and over 250 bird species. Norway has protected over 17% of its land area to preserve these ecosystems while balancing energy development.' },
    ],
  },
  {
    id: 'coast',
    title: 'The Coastline',
    icon: Ship,
    image: 'https://media.db.com/images/public/6a13809dd84c93a2c6328bfb/f5e8b2680_generated_17e90f7e.png',
    intro: 'Norway\'s 25,000+ kilometer coastline is one of the world\'s longest and most complex, dotted with over 50,000 islands and serving as the foundation for the nation\'s maritime energy future.',
    topics: [
      { title: 'Offshore Wind', content: 'Norway\'s continental shelf provides vast areas for offshore wind development. The Hywind Tampen project uses 11 floating wind turbines to power offshore oil platforms, reducing their emissions by 200,000 tonnes of CO₂ per year.' },
      { title: 'Electric Ferries', content: 'Over 80 electric and hybrid ferries now cross Norwegian fjords and coastal waters. The MF Ampere, launched in 2015, was the world\'s first fully electric car ferry, carrying 120 cars and 360 passengers across the Sognefjord.' },
      { title: 'Wave & Tidal Energy', content: 'Norway is researching wave and tidal energy technologies. The strong tidal currents along the coast and consistent North Sea waves could eventually add another renewable source to Norway\'s energy portfolio.' },
    ],
  },
];

export default function ExplorerGame() {
  const [selectedExploration, setSelectedExploration] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const exploration = explorations.find(e => e.id === selectedExploration);

  if (!exploration) {
    return (
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-glacier/50 mb-8">Choose a region of Norway to explore its geography and energy connections.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {explorations.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelectedExploration(exp.id)}
              className="glass rounded-xl overflow-hidden text-left transition-all duration-300 hover:border-cyan/30 group"
            >
              <div className="relative h-36 overflow-hidden">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-fjord via-fjord/40 to-transparent" />
              </div>
              <div className="p-5 flex items-center gap-3">
                <exp.icon className="w-5 h-5 text-cyan shrink-0" />
                <span className="font-bold text-glacier">{exp.title}</span>
                <ChevronRight className="w-4 h-4 text-glacier/30 ml-auto" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => { setSelectedExploration(null); setSelectedTopic(null); }}
        className="flex items-center gap-2 text-sm text-glacier/40 hover:text-glacier mb-6 transition-colors"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Back to regions
      </button>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img src={exploration.image} alt={exploration.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-fjord via-fjord/40 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <div className="flex items-center gap-2 mb-2">
            <exploration.icon className="w-5 h-5 text-cyan" />
            <span className="text-xs font-mono text-cyan uppercase tracking-wider">Exploring</span>
          </div>
          <h3 className="text-3xl font-bold text-glacier">{exploration.title}</h3>
        </div>
      </div>

      <p className="text-glacier/60 leading-relaxed mb-8">{exploration.intro}</p>

      <div className="space-y-3">
        {exploration.topics.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTopic(selectedTopic === idx ? null : idx)}
            className="w-full text-left"
          >
            <GlassCard className={`transition-all duration-300 ${selectedTopic === idx ? 'glow-cyan !border-cyan/30' : ''}`}>
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-glacier">{topic.title}</h4>
                <ChevronRight className={`w-4 h-4 text-glacier/30 transition-transform duration-200 ${selectedTopic === idx ? 'rotate-90' : ''}`} />
              </div>
              {selectedTopic === idx && (
                <p className="mt-4 text-sm text-glacier/50 leading-relaxed border-t border-white/5 pt-4">
                  {topic.content}
                </p>
              )}
            </GlassCard>
          </button>
        ))}
      </div>
    </div>
  );
}