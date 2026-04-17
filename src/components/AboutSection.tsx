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

export const AboutSection = () => {
  return (
    <section id="banda" className="relative bg-zinc-950 overflow-hidden">

      {/* ── HERO DO EP ──────────────────────────────────────────────── */}
      <div className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        {/* Capa do EP como fundo */}
        <img
          src="/images/ep_experiencia.jpg"
          alt="EP Experiência"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        {/* Gradiente bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/60 to-black/20" />
        {/* Gradiente sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 via-transparent to-zinc-950/50" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-6 glass-panel px-4 py-2">
              <Disc className="w-3 h-3" /> Novo EP • Abril 2026
            </span>
            <h2 className="text-6xl md:text-9xl font-display font-black text-white tracking-tighter uppercase leading-none mb-4 drop-shadow-[0_0_40px_rgba(197,160,89,0.3)]">
              EXPERIÊNCIA
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl font-serif italic max-w-xl border-l-2 border-brand-gold/50 pl-4">
              "Mostrando que o mundo pode ser muito mais do que mostraram para você."
            </p>
            <div className="mt-8">
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

      {/* ── MEMBROS ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-4 block opacity-50">A Formação</span>
          <h3 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter uppercase">
            A BANDA
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="group glass-panel overflow-hidden hover:border-brand-gold/30 transition-all duration-500"
            >
              {/* Foto */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                {/* Badge de ano */}
                <div className="absolute top-4 right-4 glass-panel px-3 py-1">
                  <span className="text-[8px] font-black uppercase tracking-widest text-brand-gold">
                    Desde {member.since}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <span className="text-[8px] uppercase tracking-[0.4em] text-brand-gold font-black opacity-70 mb-2 block">
                  {member.role}
                </span>
                <h4 className="text-2xl font-display font-black text-white mb-4 tracking-tight">
                  {member.name}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-serif italic">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
