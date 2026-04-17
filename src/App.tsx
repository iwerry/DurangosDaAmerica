import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StreamingMarquee } from "./components/StreamingMarquee";
import { MusicSection } from "./components/MusicSection";
import { AboutSection } from "./components/AboutSection";
import { HistoriaSection } from "./components/HistoriaSection";
import { GallerySection } from "./components/GallerySection";
import { TourSection } from "./components/TourSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <div className="noise-overlay" />
      <Navbar />

      <Hero />

      <StreamingMarquee />

      <MusicSection />

      <AboutSection />

      <HistoriaSection />

      <GallerySection />

      <TourSection />

      <Footer />
    </div>
  );
}
