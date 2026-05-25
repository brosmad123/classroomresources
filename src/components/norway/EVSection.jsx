const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import StatCounter from './StatCounter';
import { Car, BatteryCharging, Globe, TrendingUp } from 'lucide-react';

const EV_IMG = 'https://media.db.com/images/public/6a13809dd84c93a2c6328bfb/2f98b4aec_generated_b47bd953.png';

export default function EVSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Electric Transport"
          title="The World's EV Capital"
          description="Norway leads the planet in electric vehicle adoption, with over 80% of all new cars sold being fully electric—a transformation powered by its clean grid."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* EV image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
            <img
              src={EV_IMG}
              alt="Electric vehicles charging at a modern Norwegian charging station during twilight"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fjord/90 via-fjord/30 to-transparent" />
            
            {/* Battery charge visual */}
            <div className="absolute bottom-8 left-8 right-8">
              <GlassCard className="!p-5">
                <p className="text-xs font-mono text-cyan uppercase tracking-wider mb-3">EV Adoption Rate — Norway vs World</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-glacier/70">Norway</span>
                      <span className="font-mono text-cyan">82%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan to-emerald" style={{ width: '82%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-glacier/70">EU Average</span>
                      <span className="font-mono text-glacier/50">15%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-glacier/20" style={{ width: '15%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-glacier/70">Global Average</span>
                      <span className="font-mono text-glacier/50">10%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-glacier/15" style={{ width: '10%' }} />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Stats + cards */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="!p-5 flex flex-col items-center justify-center">
                <StatCounter end={82} suffix="%" label="EV Market Share" />
              </GlassCard>
              <GlassCard className="!p-5 flex flex-col items-center justify-center" glow="emerald">
                <StatCounter end={700} suffix="K+" label="EVs on Road" />
              </GlassCard>
            </div>
            <GlassCard>
              <Car className="w-7 h-7 text-cyan mb-3" />
              <h4 className="text-base font-bold text-glacier mb-2">Tax Incentives</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                Electric vehicles in Norway are exempt from purchase taxes, VAT, and toll fees—making them cheaper than gas cars in many cases.
              </p>
            </GlassCard>
            <GlassCard glow="emerald">
              <BatteryCharging className="w-7 h-7 text-emerald mb-3" />
              <h4 className="text-base font-bold text-glacier mb-2">Charging Infrastructure</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                Over 18,000 public charging points span the country, with fast chargers along every major highway and even above the Arctic Circle.
              </p>
            </GlassCard>
            <GlassCard>
              <Globe className="w-7 h-7 text-cyan mb-3" />
              <h4 className="text-base font-bold text-glacier mb-2">Global Role Model</h4>
              <p className="text-sm text-glacier/50 leading-relaxed">
                Norway's success has become a blueprint for countries worldwide, proving that mass EV adoption is economically viable with the right policies.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}