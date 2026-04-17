import { motion } from "motion/react";
import { GALLERY } from "../constants";
import React from "react";

export const GallerySection = () => {
  return (
    <section id="galeria" className="py-40 bg-black/20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-20">
          <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-6 block opacity-50">Arquivo Visual</span>
          <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white">GALERIA</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] md:aspect-square overflow-hidden glass-panel"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-gold mb-2">{item.category}</span>
                <h4 className="text-white font-black uppercase text-lg leading-tight">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
