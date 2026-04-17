import React, { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { NewsletterModal } from "./components/NewsletterModal";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StreamingMarquee } from "./components/StreamingMarquee";
import { MusicSection } from "./components/MusicSection";
import { AboutSection } from "./components/AboutSection";
import { HistoriaSection } from "./components/HistoriaSection";
import { GallerySection } from "./components/GallerySection";
import { TourSection } from "./components/TourSection";
import { ShopSection } from "./components/ShopSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}

      <div className={`min-h-screen font-sans transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="noise-overlay" />
        <NewsletterModal />
        <Navbar />

        <Hero />

        <StreamingMarquee />

        <MusicSection />

        <AboutSection />

        <HistoriaSection />

        <GallerySection />

        <TourSection />

        <ShopSection />

        <Footer />
      </div>
    </>
  );
}
