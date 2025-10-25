import React from 'react';
import BackgroundFX from './components/BackgroundFX';
import Hero from './components/Hero';
import Midsection from './components/Midsection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased overflow-x-hidden">
      <BackgroundFX />
      <Hero />
      <Midsection />
      <Footer />
    </div>
  );
}
