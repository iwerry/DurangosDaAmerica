import React from "react";

const platforms = [
  {
    name: "Spotify",
    logo: "/playsmusic/spotify.svg",
    url: "https://open.spotify.com/intl-pt/artist/28lheRnAv1cNCoRkiObKy7",
  },
  {
    name: "Apple Music",
    logo: "/playsmusic/AppleMusic.svg",
    url: "https://music.apple.com/search?term=Durangos+da+America",
  },
  {
    name: "Deezer",
    logo: "/playsmusic/Deezer.svg",
    url: "https://www.deezer.com/search/Durangos%20da%20Am%C3%A9rica",
  },
  {
    name: "YouTube",
    logo: "/playsmusic/youtube.svg",
    url: "https://www.youtube.com/@DurangosDaAm%C3%A9rica1986",
  },
  {
    name: "Amazon Music",
    logo: "/playsmusic/AmazonMusic.svg",
    url: "https://music.amazon.com/search/Durangos+da+America",
  },
  {
    name: "TikTok",
    logo: "/playsmusic/tiktok.svg",
    url: "https://www.tiktok.com/search?q=Durangos+da+America",
  },
  {
    name: "Vevo",
    logo: "/playsmusic/Vevo.svg",
    url: "https://www.youtube.com/@DurangosDaAm%C3%A9rica1986",
  },
];

// Triplicar para loop suave e infinito
const items = [...platforms, ...platforms, ...platforms];

export const StreamingMarquee = () => {
  return (
    <div className="w-full relative overflow-hidden bg-black border-y border-white/10 py-7 flex items-center group">
      {/* Gradiente nas bordas */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Durangos da América no ${item.name}`}
            className="flex-shrink-0 mx-12 md:mx-16 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:scale-110"
          >
            {/* brightness-0 torna negro, invert inverte para branco */}
            <img
              src={item.logo}
              alt={item.name}
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
              title={item.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
