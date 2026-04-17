import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import React from "react";

export const TourSection = () => {
  const dates = [
    { city: "SÃO PAULO, BR", venue: "AUDIO CLUB", date: "22 JUN", soldOut: false },
    { city: "RIO DE JANEIRO, BR", venue: "CIRCO VOADOR", date: "28 JUN", soldOut: true },
    { city: "CURITIBA, BR", venue: "TORK N ROLL", date: "05 JUL", soldOut: false },
    { city: "BUENOS AIRES, AR", venue: "THE ROXY", date: "12 JUL", soldOut: false },
  ];

  return (
    <section id="tour" className="py-32 relative border-y border-brand-gold/5 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-6 block opacity-50">Confirmação de Datas</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tight text-white">TURNÊ <span className="opacity-20">2024</span></h2>
          </div>
          <button className="flex items-center gap-3 text-[9px] uppercase font-black tracking-[0.4em] text-zinc-500 hover:text-brand-gold group transition-all">
            Ver agenda completa <Calendar className="w-4 h-4 opacity-50 group-hover:opacity-100" />
          </button>
        </div>

        <div className="grid gap-4">
          {dates.map((tour, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 glass-panel hover:bg-white/5 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-12">
                <div className="text-2xl font-display font-black text-center w-20 text-white">
                  {tour.date.split(' ')[0]}<br/>
                  <span className="text-zinc-600 text-[9px] font-mono font-bold tracking-widest">{tour.date.split(' ')[1]}</span>
                </div>
                <div className="w-[1px] h-12 bg-brand-gold/10 hidden md:block" />
                <div>
                  <h3 className="text-2xl font-black mb-1 text-zinc-100 group-hover:text-brand-gold transition-colors tracking-tight">{tour.city}</h3>
                  <p className="text-zinc-500 text-[9px] tracking-[0.3em] font-black uppercase opacity-60 font-mono">{tour.venue}</p>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                {tour.soldOut ? (
                  <span className="text-zinc-700 font-black uppercase text-[8px] tracking-[0.3em] border border-zinc-700/50 px-8 py-3">Esgotado</span>
                ) : (
                  <button className="bg-transparent border border-white/20 text-white font-black uppercase text-[9px] tracking-[0.3em] px-10 py-4 hover:bg-white hover:text-black transition-all">Ingressos</button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
