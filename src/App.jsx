import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CulturalHero from './components/CulturalHero';
import DestinationsGrid from './components/DestinationsGrid';
import KarnatakaVectorMap from './components/KarnatakaVectorMap';
import CulturalTraditions from './components/CulturalTraditions';
import MinimalPlanner from './components/MinimalPlanner';
import DestinationModal from './components/DestinationModal';
import Footer from './components/Footer';
import { generateItinerary } from './utils/itineraryEngine';

export default function App() {
  // Planner State
  const [selectedCity, setSelectedCity] = useState('Bengaluru');
  const [selectedDays, setSelectedDays] = useState(5);
  const [selectedTheme, setSelectedTheme] = useState('heritage');
  const [activeItinerary, setActiveItinerary] = useState(null);

  // Modal State
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Generate itinerary
  const runGeneration = (params = {}) => {
    const origin = params.origin || selectedCity;
    const days = params.days || selectedDays;
    const interests = params.interests || [selectedTheme, 'heritage'];

    const result = generateItinerary({
      origin,
      days,
      interests,
      pace: 'balanced',
      travelers: 2,
      budget: 35000
    });
    setActiveItinerary(result);
  };

  // Initialize on mount
  useEffect(() => {
    runGeneration();
  }, []);

  // Smooth scroll helpers
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 flex flex-col font-sans selection:bg-[#c29b62]/30 selection:text-[#f3e3c3]">
      
      {/* 1. Minimal Fixed Navigation Bar */}
      <Navbar
        onScrollToHero={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onScrollToDestinations={() => scrollTo('destinations')}
        onScrollToMap={() => scrollTo('karnataka-map')}
        onScrollToHeritage={() => scrollTo('heritage')}
        onScrollToPlanner={() => scrollTo('planner')}
      />

      {/* 2. Majestic Cultural Hero */}
      <section id="hero" className="w-full">
        <CulturalHero
          onExploreClick={() => scrollTo('destinations')}
          onPlanClick={() => scrollTo('planner')}
          onMapClick={() => scrollTo('karnataka-map')}
        />
      </section>

      {/* 3. Curated Sanctuaries & Destinations Grid */}
      <DestinationsGrid
        onSelectDestination={setSelectedDestination}
      />

      {/* 4. Interactive Vector Map of Karnataka */}
      <section id="karnataka-map" className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <KarnatakaVectorMap
          onSelectDestination={setSelectedDestination}
          selectedDestId={selectedDestination?.id}
        />
      </section>

      {/* 5. Living Cultural Traditions */}
      <CulturalTraditions />

      {/* 6. Minimal, Elegant Yatra Expedition Planner */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <MinimalPlanner
          itinerary={activeItinerary}
          onGenerateItinerary={runGeneration}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
        />
      </section>

      {/* Destination Modal */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}

      {/* Tasteful Footer */}
      <Footer onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}
