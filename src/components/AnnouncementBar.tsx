import { motion, AnimatePresence } from "motion/react";
import { X, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

interface AnnouncementData {
  active: boolean;
  text: string;
  link: string;
  linkLabel: string;
}

export const AnnouncementBar = () => {
  const [data, setData] = useState<AnnouncementData | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("announcement_dismissed")) {
      setDismissed(true);
      return;
    }
    fetch("/data/announcement.json")
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("announcement_dismissed", "true");
    setDismissed(true);
  };

  if (!data?.active || dismissed) return null;

  // Repetir o texto para o ticker ser contínuo
  const tickerText = `${data.text}  ·  ${data.linkLabel}  ·  `;
  const items = Array(8).fill(tickerText);

  return (
    <AnimatePresence>
      <motion.div
        data-announcement="true"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-brand-gold overflow-hidden"
      >
        <div className="relative flex items-center h-8">
          {/* Ícone fixo esquerda */}
          <div className="absolute left-0 z-10 bg-brand-gold pl-4 pr-3 h-full flex items-center border-r border-black/10">
            <Zap className="w-3 h-3 text-black fill-black" />
          </div>

          {/* Ticker — loop infinito */}
          <div className="overflow-hidden flex-1 pl-10 pr-10">
            <a href={data.link} target="_blank" rel="noopener noreferrer" className="block">
              <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 22, ease: "linear", repeat: Infinity }}
                style={{ willChange: "transform" }}
              >
                {items.map((t, i) => (
                  <span
                    key={i}
                    className="text-black text-[9px] font-black uppercase tracking-[0.25em] mr-12"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
            </a>
          </div>

          {/* X fixo direita */}
          <div className="absolute right-0 z-10 bg-brand-gold pr-4 pl-3 h-full flex items-center border-l border-black/10">
            <button
              onClick={handleDismiss}
              className="text-black/60 hover:text-black transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
