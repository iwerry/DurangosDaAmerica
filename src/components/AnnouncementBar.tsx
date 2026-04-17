import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

/**
 * AnnouncementBar — barra fixa no topo, acima do Navbar.
 * Editável em /public/data/announcement.json
 */
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
    // Verifica se o usuário já fechou esta sessão
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-brand-gold overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center justify-center gap-3 min-w-0">
            <p className="text-black text-[9px] font-black uppercase tracking-[0.3em] truncate">
              {data.text}
            </p>
            {data.link && (
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1 text-black/70 text-[8px] font-black uppercase tracking-widest hover:text-black transition-colors"
              >
                {data.linkLabel} <ChevronRight className="w-3 h-3" />
              </a>
            )}
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-black/60 hover:text-black transition-colors p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
