import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import { LoadingScreen } from "./components/LoadingScreen";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { NewsletterModal } from "./components/NewsletterModal";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Home sections
import { Hero } from "./components/Hero";
import { StreamingMarquee } from "./components/StreamingMarquee";
import { NewsSection } from "./components/NewsSection";

// Pages
import { MusicaPage } from "./pages/MusicaPage";
import { GaleriaPage } from "./pages/GaleriaPage";
import { TourPage } from "./pages/TourPage";
import { BandaPage } from "./pages/BandaPage";
import { HistoriaPage } from "./pages/HistoriaPage";
import { LojaPage } from "./pages/LojaPage";

// Animação de transição entre páginas
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const HomePage = () => (
  <PageWrapper>
    <Hero />
    <StreamingMarquee />
    <NewsSection />
  </PageWrapper>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/musica" element={<PageWrapper><MusicaPage /></PageWrapper>} />
        <Route path="/galeria" element={<PageWrapper><GaleriaPage /></PageWrapper>} />
        <Route path="/tour" element={<PageWrapper><TourPage /></PageWrapper>} />
        <Route path="/banda" element={<PageWrapper><BandaPage /></PageWrapper>} />
        <Route path="/historia" element={<PageWrapper><HistoriaPage /></PageWrapper>} />
        <Route path="/loja" element={<PageWrapper><LojaPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}

      <div className={`min-h-screen font-sans transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="noise-overlay" />
        <NewsletterModal />
        <AnnouncementBar />
        <Navbar />

        <AnimatedRoutes />

        <Footer />
      </div>
    </BrowserRouter>
  );
}
