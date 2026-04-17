import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";
import React, { useState } from "react";

const upcomingDates: never[] = [];

const historicShows = [
  {
    year: "1982",
    event: "A Primeira Faculta",
    venue: "Guará — DF",
    description: "O marco zero da banda. O festival onde a genealogia do grupo se consolidou e os talentos de Murilo Lima e Miro Ferraz foram revelados ao público pela primeira vez.",
    highlight: true,
  },
  {
    year: "1986",
    event: "Kamikazes Moto Clube",
    venue: "Brasília — DF",
    description: "Apresentação histórica para o clube de motociclistas, solidificando a conexão da banda com a subcultura do rock e das estradas.",
    highlight: false,
  },
  {
    year: "Anos 90",
    event: "Shows em Caminhões-Palanque",
    venue: "Cidades Satélites — DF",
    description: "Apresentações improvisadas que simbolizam a era da precariedade logística. A banda tocava sem mesa de som básica e transportava equipamentos de forma rudimentar — pura resistência.",
    highlight: false,
  },
  {
    year: "2009",
    event: "Espaço de Ensaios — Abertura",
    venue: "Guará — DF",
    description: "Registro de shows e ensaios abertos. Destaque para a apresentação da banda Terror Revolucionário, marcando a abertura do espaço para o som extremo.",
    highlight: false,
  },
  {
    year: "Set / 2012",
    event: "Slamdancer Festival 2",
    venue: "Brasília — DF",
    description: "Um dos shows mais emblemáticos da fase madura. Homenagem a Raul Seixas. Os Durangos encerraram o evento como 'fim de festa', sendo recebidos por uma nova geração de fãs.",
    highlight: true,
  },
  {
    year: "2013",
    event: "Show com The Barbiras",
    venue: "Brasília — DF",
    description: "Apresentação conjunta com a banda feminina, reforçando a rede de colaboração e diversidade do rock candango.",
    highlight: false,
  },
  {
    year: "2017",
    event: "BCMW — Brasília Capital Moto Week",
    venue: "Brasília — DF",
    description: "Presença no maior evento de motociclismo do Centro-Oeste, levando o rock independente do Guará para um palco de alcance nacional.",
    highlight: true,
  },
  {
    year: "1982–2025",
    event: "Circuito Do Próprio Bolso",
    venue: "Diversas cidades — DF e Brasil",
    description: "Mais de 500 shows registrados ao longo de quatro décadas. Ruas, festivais independentes e centros culturais do DF. O legado definitivo da resistência cultural.",
    highlight: true,
  },
];

export const TourSection = () => {
  const [activeTab, setActiveTab] = useState<"proximos" | "historico">("proximos");

  return (
    <section id="tour" className="py-32 relative border-y border-brand-gold/5 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-6 block opacity-50">
              Agenda de Shows
            </span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tight text-white">
              TURNÊ <span className="opacity-20">2026</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[9px] uppercase font-black tracking-[0.4em] text-zinc-500">
            <Calendar className="w-4 h-4 opacity-50" />
            Novas datas em breve
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mb-12 border-b border-white/5">
          {[
            { key: "proximos", label: "Próximos Shows" },
            { key: "historico", label: "Shows Históricos" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "proximos" | "historico")}
              className={`px-8 py-4 text-[9px] font-black uppercase tracking-[0.3em] border-b-2 transition-all ${
                activeTab === tab.key
                  ? "border-brand-gold text-brand-gold"
                  : "border-transparent text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Próximos Shows */}
        <AnimatePresence mode="wait">
          {activeTab === "proximos" && (
            <motion.div
              key="proximos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {upcomingDates.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-28 text-center gap-8">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="w-24 h-24 rounded-full border border-brand-gold/20 flex items-center justify-center"
                  >
                    <Calendar className="w-10 h-10 text-brand-gold/40" />
                  </motion.div>
                  <div>
                    <p className="text-3xl md:text-4xl font-display font-black text-white tracking-tight mb-3">
                      EM BREVE NOVAS DATAS
                    </p>
                    <p className="text-zinc-500 text-sm tracking-widest uppercase font-bold">
                      Acompanhe nossas redes para os anúncios
                    </p>
                  </div>
                  <div className="flex gap-6 flex-wrap justify-center">
                    <span className="glass-panel px-6 py-3 text-[9px] font-black uppercase tracking-widest text-brand-gold flex items-center gap-2">
                      <Clock className="w-3 h-3" /> Temporada 2026
                    </span>
                    <span className="glass-panel px-6 py-3 text-[9px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> Brasília — DF e Brasil
                    </span>
                  </div>
                </div>
              ) : null}
            </motion.div>
          )}

          {/* Shows Históricos */}
          {activeTab === "historico" && (
            <motion.div
              key="historico"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4"
            >
              {historicShows.map((show, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.5 }}
                  className={`group flex flex-col md:flex-row md:items-center justify-between p-8 glass-panel hover:bg-white/5 transition-all ${
                    show.highlight ? "border-l-2 border-brand-gold" : "border-l-2 border-transparent"
                  }`}
                >
                  <div className="flex items-start gap-10 flex-1">
                    <div className="text-center shrink-0 w-24">
                      <span className="text-lg font-display font-black text-brand-gold leading-tight block">
                        {show.year}
                      </span>
                    </div>
                    <div className="w-[1px] h-full min-h-[40px] bg-brand-gold/10 hidden md:block shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-black mb-1 text-zinc-100 group-hover:text-brand-gold transition-colors tracking-tight">
                        {show.event}
                      </h3>
                      <p className="text-zinc-500 text-[9px] tracking-[0.3em] font-black uppercase mb-3 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {show.venue}
                      </p>
                      <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">{show.description}</p>
                    </div>
                  </div>
                  {show.highlight && (
                    <div className="mt-6 md:mt-0 md:ml-6 shrink-0">
                      <span className="text-brand-gold font-black uppercase text-[8px] tracking-[0.3em] border border-brand-gold/40 px-4 py-2">
                        Histórico
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
