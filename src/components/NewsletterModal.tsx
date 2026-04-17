import { motion, AnimatePresence } from "motion/react";
import { X, Mail } from "lucide-react";
import { IMAGES } from "../constants";
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "durangos_newsletter_done";

export const NewsletterModal = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Escuta evento global para forçar a abertura
    const handleOpen = () => setVisible(true);
    window.addEventListener("openNewsletter", handleOpen);

    // Auto-open normal (só se não preencheu)
    if (!localStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 10000);
      return () => {
        clearTimeout(t);
        window.removeEventListener("openNewsletter", handleOpen);
      };
    }

    return () => window.removeEventListener("openNewsletter", handleOpen);
  }, []);

  const handleClose = () => setVisible(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Preencha nome e e-mail.");
      return;
    }
    setError("");

    const entry = { name, email, date: new Date().toISOString() };

    // Tenta salvar via API (funciona em dev com Vite ou Vercel serverless)
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
    } catch (_) {
      // Silently ignore — localStorage é o fallback
    }

    // Garante que não mostra de novo
    localStorage.setItem(STORAGE_KEY, "true");
    setSubmitted(true);
    setTimeout(() => setVisible(false), 2500);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay — clique fora fecha */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-md bg-zinc-950 border border-brand-gold/20 overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.1)]">
              {/* Textura de fundo */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <img src="/images/texturas/Dourado.png" className="w-full h-full object-cover" />
              </div>

              {/* Fechar */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 text-zinc-600 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-10 p-10">
                {!submitted ? (
                  <>
                    {/* Logo da banda */}
                    <div className="flex justify-center mb-6">
                      <img
                        src={IMAGES.LOGO_OUTLINE}
                        alt="Durangos da América"
                        className="h-14 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                      />
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl md:text-3xl font-display font-black text-white text-center uppercase tracking-tight mb-2">
                       Entre no Círculo
                    </h3>
                    <p className="text-center text-zinc-400 text-sm font-serif italic mb-8">
                      Notícias, lançamentos e shows antes de todo mundo.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-gold/50 px-5 py-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-gold/50 px-5 py-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                      />
                      {error && <p className="text-brand-red text-xs font-bold">{error}</p>}
                      <button
                        type="submit"
                        className="mt-2 w-full bg-brand-gold text-black font-black text-[10px] uppercase tracking-[0.4em] py-5 hover:bg-white transition-colors duration-300"
                      >
                        Entrar na Lista
                      </button>
                    </form>

                    <p className="text-zinc-700 text-[9px] text-center mt-6 leading-relaxed">
                      Sem spam. Apenas o que importa. Cancele quando quiser.
                    </p>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full border border-brand-gold/50 flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-7 h-7 text-brand-gold" />
                    </div>
                    <h4 className="text-2xl font-display font-black text-white mb-2">Você está dentro.</h4>
                    <p className="text-zinc-400 text-sm font-serif italic">
                      Bem-vindo ao círculo dos Durangos. 🤘
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
