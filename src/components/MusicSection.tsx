import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";
import { IMAGES, RELEASES } from "../constants";
import React from "react";

interface MusicCardProps {
  release: typeof RELEASES[0];
}

const MusicCard = ({ release }: MusicCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative glass-panel overflow-hidden"
    >
      <div className="aspect-square relative overflow-hidden bg-black">
        <img 
          src={release.cover} 
          alt={release.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <Play className="fill-black text-black w-6 h-6 ml-1" />
          </motion.div>
        </div>
      </div>
      <div className="p-8">
        <span className="text-[9px] uppercase font-black tracking-[0.3em] text-brand-gold mb-3 block opacity-60">
          {release.type} — {release.year}
        </span>
        <h3 className="text-xl font-display font-black mb-6 group-hover:text-brand-gold transition-colors text-white tracking-tight">
          {release.title}
        </h3>
        <div className="flex gap-2">
          <a 
            href="https://open.spotify.com/intl-pt/artist/28lheRnAv1cNCoRkiObKy7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 py-4 transition-all duration-300"
          >
            <span className="text-[9px] uppercase tracking-[0.2em] font-black hover:text-brand-gold">Spotify</span>
          </a>
          <a 
            href={release.links?.spotify || "https://open.spotify.com/intl-pt/artist/28lheRnAv1cNCoRkiObKy7"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-zinc-500 hover:text-brand-gold" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const MusicSection = () => {
  return (
    <section id="músicas" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Immersive Side Panel */}
          <div className="lg:w-80 shrink-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 sticky top-32"
            >
              <div className="text-[9px] font-black uppercase tracking-[0.5em] text-brand-gold border-b border-brand-gold/20 pb-4 mb-8">
                Destaque Atual
              </div>
              <div className="aspect-square bg-white/5 border border-white/10 mb-6 flex items-center justify-center overflow-hidden">
                <img src={IMAGES.PHARAOH_COWBOY} alt="Featured" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-lg font-black mb-2 text-white">Sinfonia do Saara</h4>
              <p className="text-xs text-zinc-500 leading-relaxed mb-8 font-serif italic">
                O novo épico do metal nacional disponível em todas as plataformas.
              </p>
              <a 
                href="https://open.spotify.com/intl-pt/artist/28lheRnAv1cNCoRkiObKy7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-brand-gold py-4 text-[9px] font-black uppercase tracking-[0.3em] text-brand-gold hover:bg-brand-gold hover:text-black transition-all block text-center"
              >
                Ouvir no Spotify
              </a>
            </motion.div>
          </div>

          <div className="flex-1">
            <div className="mb-20">
              <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-4 text-white">Últimos Lançamentos</h2>
              <p className="text-zinc-500 tracking-[0.3em] font-bold text-[9px] uppercase">Exploração da Discografia Oficial</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RELEASES.map((release) => (
                <MusicCard key={release.id} release={release} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
