import { motion } from "motion/react";
import { Disc } from "lucide-react";
import React from "react";

const members = [
  {
    name: "Miro Ferraz",
    role: "Guitarra Solo / Luthier",
    photo: "/images/gallery/pic2.jpg",
    bio: "O cientista do som. Constrói as próprias armas na batalha — literalmente. Miro é mestre luthier e responsável pelo timbre único que nenhum catálogo de música oferece. Quarenta anos de distorção calculada.",
    since: "1982",
  },
  {
    name: "Daniel Rodrigues",
    role: "Guitarra / Composição",
    photo: "/images/gallery/pic4.jpg",
    bio: "O arquiteto das texturas. Entre riffs e acordes que rasgam o asfalto, Daniel tece as camadas que transformam barulho em manifesto. Não toca guitarra — conversa com ela.",
    since: "2024",
  },
  {
    name: "Marcelo Baqueta",
    role: "Bateria",
    photo: "/images/gallery/pic3.jpg",
    bio: "O motor da máquina. Marcelo não segura o tempo — ele o dobra. Cada bumbo é um soco no concreto do Guará. Sua batida é a linha do trem que ninguém consegue ignorar.",
    since: "2024",
  },
  {
    name: "Carlos Sorrac",
    role: "Vocal",
    photo: "/images/gallery/pic5.jpg",
    bio: "A voz que sobreviveu ao deserto. Carlos canta como quem tem algo urgente a dizer antes que o tempo acabe — porque tem. Guttural quando precisa, lírico quando quer. Sempre verdadeiro.",
    since: "2024",
  },
  {
    name: "Bruno Formiga",
    role: "Baixo",
    photo: "/images/gallery/pic1.jpg",
    bio: "A fundação que você sente antes de ouvir. Bruno é o contrapeso de todo o caos acima dele — o baixo que você sente no peito antes dos seus ouvidos perceberem. Silencioso fora do palco. Devastador dentro.",
    since: "2024",
  },
];

// Triplicar para loop contínuo e suave CSS Marquee
const items = [...members, ...members, ...members, ...members];

export const BandaPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Hero EP - Foto do Álbum/Experiência chamativa */}
      <div className="relative h-[65vh] flex items-end overflow-hidden">
        <img
          src="/images/ep_experiencia.jpg"
          alt="EP Experiência"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 via-transparent to-zinc-950/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-14">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-4 glass-panel px-4 py-2 hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => window.dispatchEvent(new Event("openNewsletter"))}>
              <Disc className="w-3 h-3 text-brand-gold animate-spin-slow" /> Pré-Lançamento Abril 2026
            </span>
            <h1 className="text-7xl md:text-9xl font-display font-black text-white tracking-tighter uppercase leading-none mb-3 drop-shadow-[0_0_40px_rgba(197,160,89,0.3)]">
              EXPERIÊNCIA
            </h1>
            <p className="text-zinc-300 text-lg font-serif italic border-l-2 border-brand-gold/50 pl-4 max-w-lg">
              "Mostrando que o mundo pode ser muito mais do que mostraram para você."
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://open.spotify.com/intl-pt/artist/28lheRnAv1cNCoRkiObKy7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-brand-gold px-8 py-4 text-[9px] font-black uppercase tracking-[0.3em] text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-500"
              >
                Ouvir no Spotify
              </a>
              <button 
                onClick={() => window.dispatchEvent(new Event("openNewsletter"))} 
                className="inline-block bg-white/5 border border-white/10 px-8 py-4 text-[9px] font-black uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                Assinar Newsletter
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Membros — slides infinitos */}
      <div className="w-full py-24 overflow-hidden relative">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-3 block opacity-60">
            A Formação
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter uppercase">
            A BANDA
          </h2>
        </motion.div>

        {/* CSS Marquee */}
        <div className="flex group w-[200%] sm:w-[150%] md:w-[250%] lg:w-[350%]">
          <div className="flex w-full animate-marquee-fast group-hover:[animation-play-state:paused] gap-6 pl-6">
            {items.map((member, idx) => (
              <div
                key={idx}
                className="group/card relative flex-shrink-0 w-80 md:w-96 glass-panel overflow-hidden transition-colors duration-500 will-change-transform"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover/card:opacity-90 group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 glass-panel px-3 py-1">
                    <span className="text-[8px] font-black uppercase tracking-widest text-brand-gold">
                      Desde {member.since}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-brand-gold font-black opacity-80 mb-2 block">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-display font-black text-white mb-3 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed font-serif italic line-clamp-3 group-hover/card:line-clamp-none transition-all">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
