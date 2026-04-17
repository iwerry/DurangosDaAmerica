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
    url: "https://www.youtube.com/results?search_query=Durangos+da+Am%C3%A9rica",
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
    url: "https://www.vevo.com/search?q=Durangos+da+America",
  },
];

// Triplicar para o loop ser suave e infinito
const items = [...platforms, ...platforms, ...platforms];

export const StreamingMarquee = () => {
  return (
    <div className="w-full relative overflow-hidden bg-black border-y border-brand-gold/10 py-6 flex items-center group">
      {/* Gradiente nas bordas para fade elegante */}
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
            className="flex-shrink-0 mx-10 md:mx-14 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] hover:scale-110"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="h-8 md:h-10 w-auto object-contain invert"
              title={item.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
