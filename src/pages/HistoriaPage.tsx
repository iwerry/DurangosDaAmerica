import React from "react";
import { HistoriaSection } from "../components/HistoriaSection";
import { NewsSection } from "../components/NewsSection";

export const HistoriaPage = () => (
  <div className="min-h-screen bg-black pt-28">
    <NewsSection />
    <HistoriaSection />
  </div>
);
