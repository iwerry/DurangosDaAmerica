import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  featured: boolean;
}

export const NewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("/data/news.json")
      .then((r) => r.json())
      .then(setNews)
      .catch(() => {});
  }, []);

  if (!news.length) return null;

  const featured = news.find((n) => n.featured);
  const rest = news.filter((n) => !n.featured);

  return (
    <section id="news" className="py-28 relative bg-black overflow-hidden">
      {/* Borda dourada superior sutil */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-3 block opacity-60">
              Últimas Notícias
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white leading-none">
              NEWS
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-brand-gold transition-colors"
          >
            Ver tudo <ChevronRight className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Layout: Featured grande + lista lateral */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured — ocupa 3 colunas */}
          {featured && (
            <motion.a
              href={featured.link}
              target={featured.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 group relative overflow-hidden bg-zinc-900 border border-white/5 hover:border-brand-gold/20 transition-all duration-500 flex flex-col"
            >
              {/* Imagem */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-black/30 to-transparent" />
                {/* Glow edge cinematográfico */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none" />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-gold text-black text-[7px] font-black uppercase tracking-widest px-3 py-1">
                    {featured.tag}
                  </span>
                </div>
              </div>
              {/* Texto */}
              <div className="p-8 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <p className="text-zinc-600 text-[8px] uppercase tracking-[0.4em] font-black mb-3">
                    {featured.date}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight mb-3 group-hover:text-brand-gold transition-colors leading-tight">
                    {featured.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{featured.excerpt}</p>
                </div>
                <div className="flex items-center gap-2 text-brand-gold text-[9px] font-black uppercase tracking-[0.3em]">
                  Leia mais <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          )}

          {/* Lista dos demais — 2 colunas */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.map((item, idx) => (
              <motion.a
                key={item.id}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group flex gap-5 bg-zinc-900/50 border border-white/5 hover:border-brand-gold/20 p-5 transition-all duration-400"
              >
                {/* Thumb */}
                <div className="relative w-24 h-24 shrink-0 overflow-hidden bg-zinc-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Info */}
                <div className="flex flex-col justify-center gap-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-gold text-[7px] font-black uppercase tracking-widest">
                      {item.tag}
                    </span>
                    <span className="text-zinc-700 text-[7px]">·</span>
                    <span className="text-zinc-600 text-[7px] uppercase tracking-widest font-bold">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-zinc-100 group-hover:text-brand-gold transition-colors leading-tight line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">{item.excerpt}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Borda inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />
    </section>
  );
};
