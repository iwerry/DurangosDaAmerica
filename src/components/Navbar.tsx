import { motion } from "motion/react";
import { IMAGES } from "../constants";
import { Link, useLocation } from "react-router-dom";
import React from "react";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-brand-gold/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo que volta pro Home e recarrega a animação */}
        <Link to="/" onClick={() => window.dispatchEvent(new Event("reloadApp"))}>
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
      </div>
    </nav>
  );
};
