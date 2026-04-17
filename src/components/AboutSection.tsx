import { motion } from "motion/react";
import { IMAGES } from "../constants";
import React from "react";

export const AboutSection = () => {
  return (
    <section id="banda" className="py-32 relative bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-5">
        <img src={IMAGES.TEXTURE_BRUSHED} className="w-full h-full object-cover grayscale" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-black leading-tight mb-8">
            ONDE O <span className="text-brand-gold">VELHO OESTE</span> <br />
            ENCONTRA O <span className="text-brand-red">METAL</span>.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6 font-serif italic border-l-4 border-brand-red pl-6">
            "Não somos apenas uma banda. <br/>Somos o eco de um deserto que nunca dorme."
          </p>
          <p className="text-zinc-500 mb-10 leading-relaxed max-w-lg text-sm md:text-base">
            Durangos da América forjou sua identidade nas chamas do metal moderno, 
            temperado com a rudeza do terroir sul-americano. Com riffs pesados que 
            lembram o galope de uma manada furiosa e letras que narram a sobrevivência 
            em terras esquecidas.
          </p>
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-black text-white">1.2M</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Streams</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-display font-black text-white">450+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Shows</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           className="relative"
        >
          <div className="absolute inset-0 bg-brand-gold/10 blur-[80px] rounded-full" />
          <img 
            src={IMAGES.PHARAOH_COWBOY} 
            alt="Band Art" 
            className="relative z-10 w-full drop-shadow-2xl grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
          />
        </motion.div>
      </div>
    </section>
  );
};
