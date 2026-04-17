import { motion, useScroll, useTransform } from "motion/react";
import { 
  Play, 
  Music, 
  ExternalLink, 
  Instagram, 
  Youtube, 
  Disc, 
  Calendar,
  ChevronDown,
  Globe
} from "lucide-react";
import { IMAGES, RELEASES, GALLERY } from "./constants";
import React, { useRef, useState } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            src={IMAGES.LOGO_OUTLINE} 
            alt="Durangos Logo" 
            className="h-10 md:h-12 object-contain"
          />
        </div>
        <div className="hidden md:flex items-center gap-10 text-[9px] font-black tracking-[0.4em] uppercase text-zinc-400">
          {['Música', 'Galeria', 'Tour', 'Banda', 'História', 'Loja'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-gold transition-all hover:tracking-[0.5em]">
              {item}
            </a>
          ))}
        </div>
        <a 
          href="https://open.spotify.com/intl-pt/artist/28lheRnAv1cNCoRkiObKy7"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-brand-gold/30 px-6 py-2 text-brand-gold font-black uppercase text-[9px] tracking-[0.3em] hover:bg-brand-gold hover:text-black transition-all duration-500"
        >
          Spotify
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Texture with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-15 pointer-events-none"
      >
        <img 
          src={IMAGES.TEXTURE_RUST} 
          alt="Texture" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main Artwork */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="relative z-10 flex flex-col items-center gap-8 px-6"
      >
        <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl">
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src={IMAGES.PHARAOH_COWBOY} 
            alt="Pharaoh Cowboy" 
            className="w-full drop-shadow-[0_0_60px_rgba(197,160,89,0.25)]"
          />
          <motion.img 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
            src={IMAGES.LOGO_COLOR} 
            alt="Logo" 
            className="absolute -bottom-12 md:-bottom-20 left-1/2 -translate-x-1/2 w-[140%] max-w-4xl drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 group-hover:text-brand-gold transition-colors">Role para explorar</span>
        <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-brand-gold group-hover:translate-y-1 transition-all" />
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 z-15 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/60"></div>
    </section>
  );
};

interface MusicCardProps {
  release: typeof RELEASES[0];
  key?: any;
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

const AboutSection = () => {
  return (
    <section id="banda" className="py-32 relative bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-5">
        <img src={IMAGES.TEXTURE_BRUSHED} className="w-full h-full object-cover grayscale" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-black leading-tight mb-8">
            ONDE O <span className="text-brand-gold">VELHO OESTE</span> <br />
            ENCONTRA O <span className="text-brand-red">METAL</span>.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6 font-serif italic border-l-4 border-brand-red pl-6">
            "Não somos apenas uma banda. <br/>Somos o eco de um deserto que nunca dorme."
          </p>
          <p className="text-zinc-500 mb-10 leading-relaxed max-w-lg text-sm md:text-base">
            Durangos da América forjou sua identidade nas chamas do metal moderno, 
            temperado com a rudeza do terroir sul-americano. Com riffs pesados que 
            lembram o galope de uma manada furiosa e letras que narram a sobrevivência 
            em terras esquecidas.
          </p>
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-black text-white">1.2M</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Streams</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-display font-black text-white">450+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Shows</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           className="relative"
        >
          <div className="absolute inset-0 bg-brand-gold/10 blur-[80px] rounded-full" />
          <img 
            src={IMAGES.PHARAOH_COWBOY} 
            alt="Band Art" 
            className="relative z-10 w-full drop-shadow-2xl grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
          />
        </motion.div>
      </div>
    </section>
  );
};

const TourSection = () => {
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

const GallerySection = () => {
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
};const HistoriaSection = () => {
  return (
    <section id="história" className="py-32 relative bg-black/90 text-zinc-300 border-t border-brand-gold/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20 text-center">
             <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white mb-6 uppercase">A Força do <br/><span className="text-brand-gold">Rock Independente</span></h2>
             <span className="text-sm font-mono tracking-widest text-brand-gold">1982–2026</span>
             <p className="mt-8 text-xl font-serif italic text-zinc-400">A história da banda é o retrato fiel da Brasília "lado B", onde a música surge não pelo mercado, mas pela necessidade vital de expressão em meio ao asfalto das cidades satélites.</p>
        </div>

        <div className="space-y-16 mt-16 font-sans">
          
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="glass-panel p-8 border-l-4 border-brand-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl font-black">1</div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">A Gênese no Guará (1982)</h3>
            <p className="mb-4">O marco zero ocorre na "Primeira Faculta", em 1982. Enquanto o Plano Piloto fervilhava com bandas que logo estariam nas rádios nacionais, o Guará consolidava uma cena autoral e crua.</p>
            <p className="text-zinc-400"><strong className="text-white">Protagonistas:</strong> Murilo Lima (lírica e voz) e Miro Ferraz (guitarra e técnica).</p>
            <p className="text-zinc-400 mt-2"><strong className="text-white">A Filosofia:</strong> O "faça você mesmo" (DIY). Sem amplificadores de ponta ou estúdios caros, o som era forjado na precariedade e na urgência da transição democrática brasileira.</p>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="glass-panel p-8 border-r-4 border-brand-red text-right relative overflow-hidden">
            <div className="absolute top-0 left-0 p-8 opacity-10 text-8xl font-black">2</div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">O Elo com o "Do Próprio Bolso"</h3>
            <p className="mb-4">A banda e o fanzine de Mário Pazcheco são indissociáveis. O fanzine não era apenas um registro, era o ecossistema que sustentava a banda.</p>
            <p className="text-zinc-400"><strong className="text-white">Resistência:</strong> Em uma era sem internet, a rede de contatos era feita via fitas cassete, xerox de fanzines e encontros no Conic.</p>
            <p className="text-zinc-400 mt-2"><strong className="text-white">Documentação:</strong> Através do Do Próprio Bolso, a Durangos teve sua trajetória catalogada — desde os shows em "caminhões-palanque" até os festivais de grande porte.</p>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="glass-panel p-8 border-l-4 border-brand-gold relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl font-black">3</div>
             <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">A Luthieria e a Identidade Sonora</h3>
             <p className="mb-4">Um dos capítulos mais fascinantes é a evolução de Miro Ferraz. Ao se tornar um mestre luthier, ele transformou a escassez em vantagem técnica.</p>
             <p className="text-zinc-400"><strong className="text-white">Som Sob Medida:</strong> A banda passou a tocar com instrumentos fabricados artesanalmente por um de seus membros, garantindo um timbre único que marcas comerciais não ofereciam na época.</p>
             <p className="text-zinc-400 mt-2"><strong className="text-white">Impacto Local:</strong> Essa expertise de Miro transbordou para toda a cena do Guará, influenciando gerações de guitarristas brasilienses.</p>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="glass-panel p-8 border-r-4 border-brand-red text-right relative overflow-hidden">
            <div className="absolute top-0 left-0 p-8 opacity-10 text-8xl font-black">4</div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Discografia de Luta</h3>
            <p className="mb-4">As letras da Durangos da América sempre fugiram do óbvio, abordando desde crises existenciais até ativismo político e ecológico:</p>
            <ul className="text-zinc-400 space-y-2 list-none">
              <li><strong className="text-white">"Tempo Estranho" & "Agonia":</strong> O retrato da ansiedade juvenil sob o concreto.</li>
              <li><strong className="text-white">"Ecologia dos Homens":</strong> Pioneirismo ao tratar do impacto urbano no Cerrado.</li>
              <li><strong className="text-white">"Crueldade Crua" & "Cadê a CPI":</strong> A música como arma de denúncia contra a corrupção.</li>
            </ul>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="glass-panel p-8 border-l-4 border-brand-gold relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl font-black">5</div>
             <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Legado e Continuidade</h3>
             <p className="mb-4">A capacidade de dialogar com diferentes épocas é o que define a longevidade do grupo:</p>
             <p className="text-zinc-400"><strong className="text-white">O Episódio Sting:</strong> A visita do líder do The Police ao Guará (1988/89) simboliza como a periferia de Brasília estava conectada globalmente ao rock.</p>
             <p className="text-zinc-400 mt-2"><strong className="text-white">Novo Milênio:</strong> Em festivais como o Slamdancer, a banda mostrou que ainda pulsa, atraindo os "adolescentes marchadores".</p>
          </motion.div>

          <div className="py-20 text-center border-t border-brand-gold/10 mt-16">
             <h3 className="text-4xl font-display font-black text-white uppercase tracking-widest mb-10">O Veredito</h3>
             <p className="text-lg leading-relaxed max-w-3xl mx-auto italic text-zinc-400">
               Os Durangos da América são a prova de que a história não é feita apenas por quem vende milhões de discos, mas por quem mantém a chama da cultura viva em sua comunidade. Eles representam a Brasília que não está nos monumentos, mas nas quadras, nos becos e nas guitarras distorcidas.
             </p>
          </div>

          <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{ once: true }} className="mt-10 p-12 bg-zinc-950 border border-brand-gold/30 relative overflow-hidden group">
             <div className="absolute inset-0 bg-brand-gold/5 blur-[50px] mix-blend-screen" />
             <div className="relative z-10 text-center">
               <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-gold mb-6 block">Novo Álbum • Lançamento Abril 2026</span>
               <h3 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter uppercase drop-shadow-[0_0_20px_rgba(197,160,89,0.3)]">EXPERIÊNCIA</h3>
               <p className="text-zinc-400 max-w-2xl mx-auto mb-12 italic text-lg border-l-2 border-brand-gold/50 pl-4 py-2">
                 Mostrando que o mundo pode ser muito mais do que mostraram para você.
               </p>
               
               <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center border-t border-b border-brand-gold/10 py-8">
                 <div><span className="block text-xl text-white font-black uppercase tracking-tight">Miro Ferraz</span><span className="text-xs tracking-widest text-brand-gold uppercase mt-1 block">Guitarra Solo</span></div>
                 <div><span className="block text-xl text-white font-black uppercase tracking-tight">Werry</span><span className="text-xs tracking-widest text-brand-gold uppercase mt-1 block">Guitarrista</span></div>
                 <div><span className="block text-xl text-white font-black uppercase tracking-tight">Marcelo Baqueta</span><span className="text-xs tracking-widest text-brand-gold uppercase mt-1 block">Bateria</span></div>
                 <div><span className="block text-xl text-white font-black uppercase tracking-tight">Carlos Sorrac</span><span className="text-xs tracking-widest text-brand-gold uppercase mt-1 block">Vocal</span></div>
                 <div><span className="block text-xl text-white font-black uppercase tracking-tight">Bruno Formiga</span><span className="text-xs tracking-widest text-brand-gold uppercase mt-1 block">Baixo</span></div>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <div className="noise-overlay" />
      <Navbar />
      
      <Hero />
      
      {/* Side Panel HUD for Latest Release */}
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

      <AboutSection />
      
      <HistoriaSection />
      
      <GallerySection />
      
      <TourSection />

      {/* Epic Branding Banner */}
      <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
        <img 
          src={IMAGES.TEXTURE_GOLD} 
          alt="Gold Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <img src={IMAGES.LOGO_OUTLINE} alt="Outline Logo" className="h-24 md:h-40 mx-auto mb-8 opacity-60" />
          <h3 className="text-3xl md:text-5xl font-display font-black tracking-widest uppercase mb-4">A Lenda Continua</h3>
          <p className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs">Durangos da América</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <img src={IMAGES.LOGO_BLACK} alt="Logo" className="h-16 opacity-30" />
            
            <div className="flex gap-10">
              {[Instagram, Youtube, Disc, Globe].map((Icon, i) => (
                <motion.a 
                  whileHover={{ scale: 1.2, color: '#c5a059' }}
                  key={i} 
                  href="#" 
                  className="text-zinc-600 transition-all border border-zinc-600/20 p-4 rounded-full"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <button className="bg-white/5 border border-white/10 px-8 py-4 text-[10px] uppercase font-black tracking-widest hover:bg-white hover:text-black transition-all">
              Newsletter
            </button>
          </div>

          <div className="w-full h-[1px] bg-white/5 mb-10" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-600 text-[9px] uppercase tracking-widest font-black">© 2024 DURANGOS DA AMÉRICA PRODUCTION</p>
            <div className="flex gap-8 text-[9px] uppercase tracking-widest font-black text-zinc-500">
              <a href="#" className="hover:text-brand-gold">Terms</a>
              <a href="#" className="hover:text-brand-gold">Privacy</a>
              <a href="#" className="hover:text-brand-gold">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
