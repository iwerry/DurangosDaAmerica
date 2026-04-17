import { motion } from "motion/react";
import { IMAGES } from "../constants";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Música", to: "/musica" },
  { label: "Galeria", to: "/galeria" },
  { label: "Tour", to: "/tour" },
  { label: "Banda", to: "/banda" },
  { label: "História", to: "/historia" },
  { label: "Loja", to: "/loja" },
];

export const Navbar = () => {
  const location = useLocation();
  const [hasAnnouncement, setHasAnnouncement] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("announcement_dismissed")) {
      setHasAnnouncement(false);
    }
  }, []);

  return (
    <nav
      style={{ top: hasAnnouncement ? "2rem" : 0 }}
      className="fixed left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-brand-gold/10 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            src={IMAGES.LOGO_OUTLINE}
            alt="Durangos da América"
            className="h-10 md:h-12 object-contain"
          />
        </Link>

        {/* Links centrais */}
        <div className="hidden md:flex items-center gap-8 text-[9px] font-black tracking-[0.4em] uppercase text-zinc-400">
          {navLinks.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative hover:text-brand-gold transition-all hover:tracking-[0.5em] pb-1 ${active ? "text-brand-gold" : ""}`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-gold"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Spotify */}
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
