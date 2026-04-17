import { motion } from "motion/react";
import { Play, ExternalLink, Headphones } from "lucide-react";
import { RELEASES } from "../constants";
import React from "react";

const SPOTIFY_ARTIST = "https://open.spotify.com/intl-pt/artist/28lheRnAv1cNCoRkiObKy7";

export const MusicSection = () => {
  return (
    <section id="músicas" className="py-32 relative overflow-hidden">
      {/* BG subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-4 block opacity-60">
              Discografia
            </span>
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter text-white leading-none">
              MÚSICA
            </h2>
          </div>
          <a
            href={SPOTIFY_ARTIST}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-brand-gold border border-brand-gold/30 px-6 py-3 hover:bg-brand-gold hover:text-black transition-all duration-300 self-start md:self-auto"
          >
            <Headphones className="w-4 h-4" /> Ver tudo no Spotify
          </a>
        </motion.div>

        {/* Grid de releases — estilo premium com capa grande */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RELEASES.map((release, idx) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="group relative overflow-hidden bg-zinc-900 border border-white/5 hover:border-brand-gold/20 transition-all duration-500"
            >
              {/* Capa grande com hover */}
              <div className="relative overflow-hidden">
                <div className={`${idx === 0 ? "aspect-[16/9]" : "aspect-square"} relative`}>
                  <img
                    src={release.cover}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-black/20 to-transparent" />

                  {/* Play button central */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <motion.a
                      href={SPOTIFY_ARTIST}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                    >
                      <Play className="fill-black text-black w-7 h-7 ml-1" />
                    </motion.a>
                  </div>

                  {/* Badge tipo */}
                  <div className="absolute top-4 left-4">
                    <span className="glass-panel px-3 py-1 text-[8px] font-black uppercase tracking-widest text-brand-gold">
                      {release.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info row */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-zinc-500 text-[8px] uppercase tracking-[0.4em] font-black mb-1">{release.year}</p>
                  <h3 className="text-xl font-display font-black text-white tracking-tight group-hover:text-brand-gold transition-colors">
                    {release.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={SPOTIFY_ARTIST}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/5 hover:bg-brand-gold/10 border border-white/10 hover:border-brand-gold/40 px-5 py-3 transition-all text-[9px] font-black uppercase tracking-[0.2em] text-zinc-300 hover:text-brand-gold"
                  >
                    Ouvir
                  </a>
                  <a
                    href={SPOTIFY_ARTIST}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-zinc-500 hover:text-brand-gold" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spotify Embed CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-10 border border-brand-gold/10 bg-zinc-950/60 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-zinc-500 text-[9px] uppercase tracking-[0.4em] font-black mb-2">Plataformas</p>
            <p className="text-white font-display font-black text-2xl">Ouça em qualquer lugar.</p>
          </div>
          <a
            href={SPOTIFY_ARTIST}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-brand-gold text-black font-black text-[10px] uppercase tracking-[0.4em] px-10 py-5 hover:bg-white transition-colors duration-300"
          >
            Abrir no Spotify
          </a>
        </motion.div>
      </div>
    </section>
  );
};
