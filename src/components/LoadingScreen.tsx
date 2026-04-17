import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../constants";
import React, { useEffect, useState } from "react";

export const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "out">("logo");

  useEffect(() => {
    // Logo aparece → fica 2s → sai
    const t1 = setTimeout(() => setPhase("out"), 2400);
    const t2 = setTimeout(() => onFinish(), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== null && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Noise */}
          <div className="noise-overlay" />

          {/* Linha horizontal animada */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase === "out" ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-gold/20 origin-left"
          />

          {/* Textura de fundo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "out" ? 0 : 0.06 }}
            className="absolute inset-0"
          >
            <img src={IMAGES.TEXTURE_RUST} className="w-full h-full object-cover" />
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{
              opacity: phase === "out" ? 0 : 1,
              scale: phase === "out" ? 1.08 : 1,
              y: phase === "out" ? -30 : 0,
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Glow ring atrás da logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: phase === "out" ? 2 : 1, opacity: phase === "out" ? 0 : 0.15 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-80 h-80 rounded-full bg-brand-gold blur-[80px] pointer-events-none"
            />

            <motion.img
              src={IMAGES.LOGO_OUTLINE}
              alt="Durangos da América"
              className="w-72 md:w-96 relative z-10 drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              animate={{ opacity: phase === "out" ? 0 : 0.5, letterSpacing: "0.6em" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[9px] uppercase font-black text-brand-gold tracking-[0.6em]"
            >
              Desde 1982 · Guará · DF
            </motion.p>
          </motion.div>

          {/* Barra de progresso */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-white/10 overflow-hidden"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.2, ease: "linear" }}
              className="h-full bg-brand-gold origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
