import { motion } from "motion/react";
import { ShoppingBag, Tag, Package } from "lucide-react";
import React from "react";

const products = [
  {
    id: 1,
    name: "Camiseta Preta — Calavera Durango",
    category: "Apparel",
    price: "R$ 89",
    image: "/images/merch_tshirt.jpg",
    badge: "Novo",
    sold: false,
  },
  {
    id: 2,
    name: "Vinil Colorido — EP Experiência",
    category: "Colecionável",
    price: "R$ 149",
    image: "/images/merch_vinyl.jpg",
    badge: "Edição Limitada",
    sold: false,
  },
  {
    id: 3,
    name: "Camiseta Branca — Logo Vintage",
    category: "Apparel",
    price: "R$ 79",
    image: "/images/merch_tshirt.jpg",
    badge: null,
    sold: true,
  },
  {
    id: 4,
    name: "Patch Bordado — Durangos 1982",
    category: "Acessórios",
    price: "R$ 35",
    image: "/images/releases/rel1.jpg",
    badge: "Bestseller",
    sold: false,
  },
  {
    id: 5,
    name: "Moletom Preto — Experiência Tour",
    category: "Apparel",
    price: "R$ 189",
    image: "/images/merch_tshirt.jpg",
    badge: "Pré-venda",
    sold: false,
  },
  {
    id: 6,
    name: "Boné Dad Hat — Logo Bordado",
    category: "Acessórios",
    price: "R$ 69",
    image: "/images/releases/rel2.jpg",
    badge: "Novo",
    sold: false,
  },
  {
    id: 7,
    name: "Pôster A2 — Arte Pharaoh Cowboy",
    category: "Colecionável",
    price: "R$ 55",
    image: "/images/releases/rel3.jpg",
    badge: null,
    sold: false,
  },
];

const categories = ["Todos", "Apparel", "Colecionável", "Acessórios", "Digital"];

export const LojaPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-950 pt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold mb-4 block opacity-60">
            Merch Oficial
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter text-white leading-none">
              LOJA
            </h1>
            <div className="flex items-center gap-3 text-zinc-500">
              <Package className="w-4 h-4" />
              <span className="text-[9px] font-black uppercase tracking-widest">Entrega Brasil · Encomenda especial</span>
            </div>
          </div>
        </motion.div>

        {/* Filtros */}
        <div className="flex gap-0 border-b border-white/5 mb-12 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-6 py-4 text-[9px] font-black uppercase tracking-[0.3em] border-b-2 transition-all ${
                activeCategory === cat
                  ? "border-brand-gold text-brand-gold"
                  : "border-transparent text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              className={`group relative flex flex-col bg-zinc-900 border border-white/5 hover:border-brand-gold/20 transition-all duration-500 ${product.sold ? "opacity-50" : ""}`}
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-gold text-black text-[7px] font-black uppercase tracking-widest px-2 py-1">
                      {product.badge}
                    </span>
                  </div>
                )}
                {product.sold && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <span className="text-zinc-400 font-black uppercase text-[9px] tracking-widest border border-zinc-500/50 px-4 py-2">
                      Esgotado
                    </span>
                  </div>
                )}
                {!product.sold && (
                  <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-black/80 backdrop-blur-sm border border-white/10 py-3 text-[9px] font-black uppercase tracking-[0.3em] text-white hover:bg-brand-gold hover:text-black transition-colors flex items-center justify-center gap-2">
                      <ShoppingBag className="w-3 h-3" /> Encomendar
                    </button>
                  </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <p className="text-zinc-600 text-[7px] uppercase tracking-[0.4em] font-black mb-1 flex items-center gap-1">
                    <Tag className="w-2.5 h-2.5" /> {product.category}
                  </p>
                  <h4 className="text-sm font-black text-zinc-100 leading-tight group-hover:text-brand-gold transition-colors">
                    {product.name}
                  </h4>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-display font-black text-white">{product.price}</span>
                  {!product.sold && (
                    <button className="text-[8px] font-black uppercase tracking-widest text-brand-gold border border-brand-gold/30 px-3 py-2 hover:bg-brand-gold hover:text-black transition-all">
                      + Info
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-12 border border-dashed border-brand-gold/20"
        >
          <ShoppingBag className="w-8 h-8 text-brand-gold/40 mx-auto mb-4" />
          <p className="text-zinc-400 font-serif italic mb-2">Não encontrou o que procura?</p>
          <p className="text-white font-black uppercase tracking-widest text-sm mb-6">
            Encomendas especiais e kits de fã disponíveis.
          </p>
          <a
            href="mailto:contato@durangosdaamerica.com"
            className="inline-block border border-brand-gold/40 text-brand-gold font-black text-[9px] uppercase tracking-[0.4em] px-10 py-4 hover:bg-brand-gold hover:text-black transition-all duration-300"
          >
            Entrar em contato
          </a>
        </motion.div>
      </div>
    </div>
  );
};
