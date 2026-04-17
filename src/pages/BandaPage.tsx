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

export const BandaPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 pt-28">
      {/* Hero EP */}
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
            <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-4 glass-panel px-4 py-2">
              <Disc className="w-3 h-3" /> Novo EP • Abril 2026
            </span>
            <h1 className="text-7xl md:text-9xl font-display font-black text-white tracking-tighter uppercase leading-none mb-3 drop-shadow-[0_0_40px_rgba(197,160,89,0.3)]">
              EXPERIÊNCIA
            </h1>
            <p className="text-zinc-300 text-lg font-serif italic border-l-2 border-brand-gold/50 pl-4 max-w-lg">
              "Mostrando que o mundo pode ser muito mais do que mostraram para você."
            </p>
            <div className="mt-6">
              <a
                href="https://open.spotify.com/intl-pt/artist/28lheRnAv1cNCoRkiObKy7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-brand-gold px-8 py-4 text-[9px] font-black uppercase tracking-[0.3em] text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-500"
              >
                Ouvir no Spotify
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Membros — cards arrastáveis */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-3 block opacity-60">
            A Formação
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter uppercase">
            A BANDA
          </h2>
          <p className="text-zinc-500 text-xs mt-3 tracking-widest font-bold uppercase">
            Arraste os cards · Explore a banda
          </p>
        </motion.div>

        {/* Área de drag — overflow-x para mobile */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              drag
              dragConstraints={{ left: -100, right: 100, top: -40, bottom: 40 }}
              dragElastic={0.15}
              whileDrag={{ scale: 1.04, zIndex: 50, boxShadow: "0 20px 60px rgba(212,175,55,0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="group relative flex-shrink-0 w-72 md:w-auto glass-panel overflow-hidden cursor-grab active:cursor-grabbing hover:border-brand-gold/30 transition-colors duration-500 snap-center select-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={member.photo}
                  alt={member.name}
                  draggable={false}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute top-4 right-4 glass-panel px-3 py-1">
                  <span className="text-[8px] font-black uppercase tracking-widest text-brand-gold">
                    Desde {member.since}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[8px] uppercase tracking-[0.4em] text-brand-gold font-black opacity-70 mb-1 block">
                  {member.role}
                </span>
                <h3 className="text-xl font-display font-black text-white mb-3 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-serif italic">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
