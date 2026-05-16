// @ts-nocheck
"use client";

import { Bodoni_Moda, Inter } from "next/font/google";
import content from "../data/content.json";

const display = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });
const body = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const ACCENT = "#5BA3D0";
const ACCENT_BRIGHT = "#82C9E8";
const ACCENT_DEEP = "#1F4865";
const BG = "#08111C";
const BG_ALT = "#0E1B2C";
const TEXT = "#E8EEF5";
const TEXT_MUTED = "#94A6BC";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        .fade-up { animation: fadeUp 0.9s ease-out forwards; }
        .fade-up-d1 { animation: fadeUp 0.9s 0.2s ease-out both; }
        .fade-up-d2 { animation: fadeUp 0.9s 0.4s ease-out both; }
        .glow { animation: glow 3s ease-in-out infinite; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg" style={{ backgroundColor: "rgba(8,17,28,0.85)", borderBottom: `1px solid ${ACCENT}22` }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className={display.className} style={{ fontSize: "1.35rem", fontWeight: 500, letterSpacing: "0.15em", color: ACCENT_BRIGHT, textTransform: "uppercase" }}>
            The Blue Room
          </span>
          <div className="flex items-center gap-7">
            <a href="#menu" className="hidden md:inline text-xs uppercase tracking-widest hover:text-white" style={{ color: TEXT_MUTED }}>Menu</a>
            <a href="#reviews" className="hidden md:inline text-xs uppercase tracking-widest hover:text-white" style={{ color: TEXT_MUTED }}>Reviews</a>
            <a href="#visit" className="hidden md:inline text-xs uppercase tracking-widest hover:text-white" style={{ color: TEXT_MUTED }}>Visit</a>
            <a href={phoneTel} className="px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-transform hover:scale-105" style={{ backgroundColor: ACCENT, color: BG }}>Reserve</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")`, filter: "brightness(0.55)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,17,28,0.5) 0%, rgba(8,17,28,0.4) 50%, rgba(8,17,28,1) 100%)" }} />
        <div className="absolute inset-0 glow" style={{ background: `radial-gradient(circle at 30% 50%, ${ACCENT}25 0%, transparent 50%)` }} />
        <div className="relative max-w-6xl mx-auto px-6 z-10 fade-up text-center md:text-left">
          <p className="uppercase tracking-[0.4em] text-xs font-semibold mb-8" style={{ color: ACCENT_BRIGHT }}>Established Burbank • Open until 2 AM</p>
          <h1 className={display.className} style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)", color: "white", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.03em" }}>
            {content.hero.heading}
          </h1>
          <p className="text-lg md:text-xl mt-8 max-w-xl mx-auto md:mx-0 fade-up-d1" style={{ color: TEXT_MUTED, lineHeight: 1.6 }}>{content.hero.subheading}</p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start fade-up-d2">
            <a href={content.hero.ctaLink} className="px-9 py-4 rounded-full text-sm uppercase tracking-widest font-semibold transition-transform hover:scale-105" style={{ backgroundColor: ACCENT, color: BG }}>{content.hero.ctaText}</a>
            <a href="#menu" className="px-9 py-4 rounded-full border text-sm uppercase tracking-widest font-semibold transition-all hover:bg-white/10" style={{ borderColor: `${ACCENT}66`, color: TEXT }}>The Menu</a>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-28 md:py-36 text-center">
        <p className="uppercase tracking-[0.4em] text-xs font-semibold mb-6" style={{ color: ACCENT }}>The Room</p>
        <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 500, color: "white", lineHeight: 1.1, fontStyle: "italic" }}>{content.about.heading}</h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
          {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section id="menu" className="py-28 md:py-36" style={{ backgroundColor: BG_ALT, borderTop: `1px solid ${ACCENT}15`, borderBottom: `1px solid ${ACCENT}15` }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-xs font-semibold mb-4" style={{ color: ACCENT }}>The pour</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: "white", fontStyle: "italic" }}>What we make.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
            {content.services.map((s, i) => (
              <div key={i} className="border-b pb-8" style={{ borderColor: `${ACCENT}33` }}>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className={display.className} style={{ fontWeight: 500, fontSize: "1.6rem", color: "white", fontStyle: "italic" }}>{s.title}</h3>
                  {s.price && <span className="text-sm font-semibold" style={{ color: ACCENT_BRIGHT }}>{s.price}</span>}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="max-w-6xl mx-auto px-6 py-28 md:py-36">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-xs font-semibold mb-4" style={{ color: ACCENT }}>Word on the street</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: "white", fontStyle: "italic" }}>What they say.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {content.reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-xl" style={{ backgroundColor: BG_ALT, border: `1px solid ${ACCENT}22` }}>
              <div className="flex gap-1 mb-5" style={{ color: ACCENT_BRIGHT }}>
                {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-base leading-relaxed italic" style={{ color: TEXT_MUTED }}>"{r.text}"</p>
              <p className="mt-6 text-xs uppercase tracking-widest" style={{ color: ACCENT_BRIGHT }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="py-28 md:py-36" style={{ backgroundColor: BG_ALT, borderTop: `1px solid ${ACCENT}15` }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase tracking-[0.4em] text-xs font-semibold mb-4" style={{ color: ACCENT }}>The address</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: "white", fontStyle: "italic", lineHeight: 1.05 }}>Find us in Burbank.</h2>
            <p className="mt-8 text-lg" style={{ color: TEXT_MUTED }}>{content.contact.address}</p>
            <a href={phoneTel} className="block mt-2 text-3xl font-bold transition-opacity hover:opacity-80" style={{ color: ACCENT_BRIGHT }}>{content.contact.phone}</a>
            <table className="mt-10 w-full text-sm">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} className="border-b" style={{ borderColor: `${ACCENT}22` }}>
                    <td className="py-3 uppercase tracking-wider text-xs font-semibold" style={{ color: "white" }}>{day}</td>
                    <td className="py-3 text-right" style={{ color: TEXT_MUTED }}>{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ minHeight: "480px", border: `1px solid ${ACCENT}33` }}>
            <iframe title="The Blue Room Location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "480px", filter: "invert(0.92) hue-rotate(180deg) brightness(0.95)" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-28 md:py-36 text-center">
        <h3 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, color: "white", fontStyle: "italic", lineHeight: 1.05 }}>The night is young.</h3>
        <a href={phoneTel} className="inline-block mt-10 px-12 py-5 rounded-full text-sm uppercase tracking-widest font-semibold transition-transform hover:scale-105" style={{ backgroundColor: ACCENT, color: BG }}>Reserve {content.contact.phone}</a>
      </section>

      <footer style={{ borderTop: `1px solid ${ACCENT}22`, backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm" style={{ color: TEXT_MUTED }}>
          <div>
            <p className={display.className} style={{ fontSize: "1.25rem", fontWeight: 500, color: ACCENT_BRIGHT, letterSpacing: "0.15em", textTransform: "uppercase" }}>The Blue Room</p>
            <p className="mt-3">{content.contact.address}</p>
            <p className="mt-1"><a href={phoneTel} className="hover:text-white">{content.contact.phone}</a></p>
          </div>
          <div className="text-xs uppercase tracking-widest">© {new Date().getFullYear()} The Blue Room</div>
        </div>
      </footer>
    </main>
  );
}