import React, { useState } from 'react';
import Navbar from '../components/norway/Navbar';
import Footer from '../components/norway/Footer';
import SectionHeader from '../components/norway/SectionHeader';
import GlassCard from '../components/norway/GlassCard';
import { ExternalLink, BookOpen, Globe, Building2, BarChart3, Leaf, ChevronDown } from 'lucide-react';

const sources = [
  {
    category: 'Government & Policy',
    icon: Building2,
    items: [
      {
        name: 'Norwegian Ministry of Petroleum and Energy',
        url: 'https://www.regjeringen.no/en/topics/energy/',
        description: 'Official government data on Norway\'s energy policy, hydropower regulations, and renewable energy targets including the 2030 carbon neutrality goal.',
        dataUsed: 'National energy statistics, policy frameworks, and official renewable energy targets.',
      },
      {
        name: 'Norwegian Water Resources and Energy Directorate (NVE)',
        url: 'https://www.nve.no/english/',
        description: 'The regulatory authority for water resources and energy in Norway, providing comprehensive data on hydropower, wind energy, and grid management.',
        dataUsed: 'Hydropower plant counts (1,700+), installed capacity figures, and energy production data.',
      },
      {
        name: 'Statkraft',
        url: 'https://www.statkraft.com/',
        description: 'Europe\'s largest generator of renewable energy, headquartered in Norway. Operates hydropower, wind, solar, and gas-fired power plants.',
        dataUsed: 'Hydropower operational data, reservoir storage capacity, and renewable energy generation statistics.',
      },
    ],
  },
  {
    category: 'International Energy Data',
    icon: BarChart3,
    items: [
      {
        name: 'International Energy Agency (IEA)',
        url: 'https://www.iea.org/countries/norway',
        description: 'Comprehensive energy statistics and country profiles for Norway, including electricity generation mix, CO₂ emissions, and energy trade data.',
        dataUsed: 'Energy generation breakdowns, international comparison data, and emission statistics.',
      },
      {
        name: 'International Renewable Energy Agency (IRENA)',
        url: 'https://www.irena.org/',
        description: 'Global renewable energy statistics and country-level data used for comparative analysis of Norway\'s renewable energy achievements.',
        dataUsed: 'Global renewable energy rankings, installed capacity comparisons, and cost data.',
      },
      {
        name: 'Our World in Data — Energy',
        url: 'https://ourworldindata.org/energy/country/norway',
        description: 'Open-source research and data visualization platform providing long-term energy trends and per-capita comparisons.',
        dataUsed: 'Historical energy data, per-capita comparisons, and renewable energy share visualizations.',
      },
    ],
  },
  {
    category: 'Electric Vehicles',
    icon: Leaf,
    items: [
      {
        name: 'Norwegian EV Association (Elbilforeningen)',
        url: 'https://elbil.no/english/',
        description: 'The world\'s largest EV owner organization, providing real-time data on Norway\'s electric vehicle market and charging infrastructure.',
        dataUsed: 'EV market share statistics (82%), charging point counts (18,000+), and adoption trends.',
      },
      {
        name: 'European Alternative Fuels Observatory (EAFO)',
        url: 'https://alternative-fuels-observatory.ec.europa.eu/',
        description: 'EU-funded platform tracking alternative fuel vehicle adoption across Europe.',
        dataUsed: 'EU vs Norway EV comparison data and charging infrastructure density statistics.',
      },
    ],
  },
  {
    category: 'Research & Academic',
    icon: BookOpen,
    items: [
      {
        name: 'SINTEF — Norwegian Research Institute',
        url: 'https://www.sintef.no/en/',
        description: 'One of Europe\'s largest independent research organizations, conducting cutting-edge research on energy technology, climate, and sustainability.',
        dataUsed: 'Technical data on hydropower efficiency, floating wind technology, and carbon capture research.',
      },
      {
        name: 'Equinor — Hywind Projects',
        url: 'https://www.equinor.com/energy/hywind-tampen',
        description: 'Data on the Hywind Tampen floating wind farm—the world\'s largest—and Norway\'s offshore energy innovation.',
        dataUsed: 'Floating wind farm specifications, CO₂ reduction figures, and offshore energy data.',
      },
      {
        name: 'Statistics Norway (SSB)',
        url: 'https://www.ssb.no/en/energi-og-industri',
        description: 'Norway\'s national statistics bureau providing official data on energy production, consumption, and environmental impact.',
        dataUsed: 'Official production figures (153 TWh), population data, and economic statistics.',
      },
    ],
  },
];

export default function Sources() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen bg-fjord">
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            tag="Academic Archive"
            title="Sources & References"
            description="All data, statistics, and claims on this website are sourced from authoritative government agencies, international organizations, and peer-reviewed research."
            align="center"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {sources.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center">
                  <group.icon className="w-4 h-4 text-cyan" />
                </div>
                <h3 className="text-lg font-bold text-glacier">{group.category}</h3>
              </div>

              <div className="space-y-3">
                {group.items.map((source) => {
                  const isExpanded = expanded === source.name;
                  return (
                    <button
                      key={source.name}
                      onClick={() => setExpanded(isExpanded ? null : source.name)}
                      className="w-full text-left"
                    >
                      <GlassCard className={`transition-all duration-300 ${isExpanded ? 'glow-cyan !border-cyan/30' : ''}`}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-glacier text-sm">{source.name}</h4>
                            <p className="text-xs text-glacier/40 mt-1 truncate">{source.url}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 rounded-lg bg-white/5 text-glacier/40 hover:text-cyan transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                            <ChevronDown className={`w-4 h-4 text-glacier/30 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
                            <p className="text-sm text-glacier/50 leading-relaxed">{source.description}</p>
                            <div className="p-3 rounded-lg bg-white/[0.03]">
                              <p className="text-[10px] font-mono text-cyan/60 uppercase tracking-wider mb-1">Data Used From This Source</p>
                              <p className="text-xs text-glacier/40">{source.dataUsed}</p>
                            </div>
                          </div>
                        )}
                      </GlassCard>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Citation notice */}
          <GlassCard className="!mt-12" glow="emerald">
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-emerald shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-glacier mb-2">Citation & Academic Integrity</h4>
                <p className="text-sm text-glacier/50 leading-relaxed">
                  This website was created as a school project. All data has been cross-referenced across multiple sources for accuracy. Statistics are current as of 2024-2025. If you use information from this site, please cite the original sources listed above.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}