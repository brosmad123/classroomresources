import React from 'react';
import Navbar from '../components/norway/Navbar';
import HeroSection from '../components/norway/HeroSection';
import EnergyOverview from '../components/norway/EnergyOverview';
import HydroSection from '../components/norway/HydroSection';
import WindSection from '../components/norway/WindSection';
import EVSection from '../components/norway/EVSection';
import NorwayMap from '../components/norway/NorwayMap';
import Footer from '../components/norway/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-fjord">
      <Navbar />
      <HeroSection />
      <EnergyOverview />
      <HydroSection />
      <WindSection />
      <EVSection />
      <NorwayMap />
      <Footer />
    </div>
  );
}