import { motion } from "motion/react";
import { Instagram, Youtube, Disc, Globe } from "lucide-react";
import { IMAGES } from "../constants";
import React from "react";

export const Footer = () => {
  return (
    <>
      <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
        <img 
          src={IMAGES.TEXTURE_GOLD} 
          alt="Gold Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <img src={IMAGES.LOGO_OUTLINE} alt="Outline Logo" className="h-24 md:h-40 mx-auto mb-8 opacity-60" />
          <h3 className="text-3xl md:text-5xl font-display font-black tracking-widest uppercase mb-4">A Lenda Continua</h3>
          <p className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs">Durangos da América</p>
        </motion.div>
      </section>

      <footer className="py-24 bg-black border-t border-white/5 whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <img src={IMAGES.LOGO_BLACK} alt="Logo" className="h-16 opacity-30" />
            
            <div className="flex gap-10">
              {[Instagram, Youtube, Disc, Globe].map((Icon, i) => (
                <motion.a 
                  whileHover={{ scale: 1.2, color: '#c5a059' }}
                  key={i} 
                  href="#" 
                  className="text-zinc-600 transition-all border border-zinc-600/20 p-4 rounded-full"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <button className="bg-white/5 border border-white/10 px-8 py-4 text-[10px] uppercase font-black tracking-widest hover:bg-white hover:text-black transition-all">
              Newsletter
            </button>
          </div>

          <div className="w-full h-[1px] bg-white/5 mb-10" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-1 items-center md:items-start whitespace-normal">
              <p className="text-zinc-600 text-[9px] uppercase tracking-widest font-black">© 2026 DURANGOS DA AMÉRICA</p>
              <p className="text-zinc-700 text-[8px] uppercase tracking-widest font-bold">Desenvolvimento: Draft Creative Studio Ltda</p>
            </div>
            <div className="flex gap-8 text-[9px] uppercase tracking-widest font-black text-zinc-500">
              <a href="#" className="hover:text-brand-gold">Terms</a>
              <a href="#" className="hover:text-brand-gold">Privacy</a>
              <a href="#" className="hover:text-brand-gold">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
