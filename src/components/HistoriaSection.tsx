import { motion } from "motion/react";
import React from "react";

export const HistoriaSection = () => {
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



        </div>
      </div>
    </section>
  );
};
