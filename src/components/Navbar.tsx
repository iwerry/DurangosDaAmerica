import { motion } from "motion/react";
import { IMAGES } from "../constants";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Ajusta posição se a AnnouncementBar estiver visível
    const bar = document.querySelector('[data-announcement]') as HTMLElement;
    if (bar) setOffset(bar.offsetHeight);
  }, []);

  return (
    <nav style={{ top: offset }} className="fixed left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            src={IMAGES.LOGO_OUTLINE} 
            alt="Durangos Logo" 
            className="h-10 md:h-12 object-contain"
          />
        </div>
        <div className="hidden md:flex items-center gap-10 text-[9px] font-black tracking-[0.4em] uppercase text-zinc-400">
          {['Música', 'Galeria', 'Tour', 'Banda', 'História', 'Loja'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-gold transition-all hover:tracking-[0.5em]">
              {item}
            </a>
          ))}
        </div>
        <a 
          href="https://open.spotify.com/intl-pt/artist/28lheRnAv1cNCoRkiObKy7"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-brand-gold/30 px-6 py-2 text-brand-gold font-black uppercase text-[9px] tracking-[0.3em] hover:bg-brand-gold hover:text-black transition-all duration-500"
        >
          Spotify
        </a>
      </div>
    </nav>
  );
};
