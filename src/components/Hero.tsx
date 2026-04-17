import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "../constants";
import React, { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Texture with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-15 pointer-events-none"
      >
        <img 
          src={IMAGES.TEXTURE_RUST} 
          alt="Texture" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main Artwork */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="relative z-10 flex flex-col items-center gap-8 px-6"
      >
        <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl">
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src={IMAGES.PHARAOH_COWBOY} 
            alt="Pharaoh Cowboy" 
            className="w-full drop-shadow-[0_0_60px_rgba(197,160,89,0.25)]"
          />
          <motion.img 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
            src={IMAGES.LOGO_COLOR} 
            alt="Logo" 
            className="absolute -bottom-12 md:-bottom-20 left-1/2 -translate-x-1/2 w-[140%] max-w-4xl drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 group-hover:text-brand-gold transition-colors">Role para explorar</span>
        <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-brand-gold group-hover:translate-y-1 transition-all" />
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 z-15 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/60"></div>
    </section>
  );
};
