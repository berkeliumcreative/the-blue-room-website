// @ts-nocheck
"use client";

import { Inter } from "next/font/google";
import content from "../data/content.json";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

// Soft UI Evolution — Night indigo + dream violet on dark
const NIGHT = "#0A0B1E";
const INDIGO = "#1A1B3E";
const INDIGO_LIGHT = "#2A2D5E";
const VIOLET = "#7B6FF5";
const VIOLET_GLOW = "#A899FF";
const TEXT = "#E8E8FF";
const TEXT_MUTED = "#9090B8";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  // Categorize the directory-style menu
  const categories = [
    { name: "Cocktails", filter: ["Classic Cocktails", "House Originals"] },
    { name: "Wine & Beer", filter: ["Wine & Beer"] },
    { name: "Bites", filter: ["Small Plates"] },
    { name: "Specials", filter: ["Happy Hour", "Private Bookings"] },
  ];

  return (
    <main className={inter.className} style={{ backgroundColor: NIGHT, color: TEXT, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 20px ${VIOLET}33, inset 0 0 20px ${VIOLET}11; } 50% { box-shadow: 0 0 40px ${VIOLET}55, inset 0 0 25px ${VIOLET}22; } }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(.2,.9,.2,1) forwards; }
        .fade-up-d1 { animation: fadeUp 0.8s 0.2s cubic-bezier(.2,.9,.2,1) both; }
        .fade-up-d2 { animation: fadeUp 0.8s 0.4s cubic-bezier(.2,.9,.2,1) both; }
        .soft-card {
          background: linear-gradient(145deg, ${INDIGO_LIGHT}, ${INDIGO});
          box-shadow: 8px 8px 24px ${NIGHT}, -4px -4px 12px ${INDIGO_LIGHT}55;
          border: 1px solid ${VIOLET}22;
          transition: transform 250ms cubic-bezier(.2,.9,.2,1), box-shadow 250ms;
        }
        .soft-card:hover { transform: translateY(-3px); box-shadow: 12px 12px 32px ${NIGHT}, -6px -6px 16px ${VIOLET}22, 0 0 30px ${VIOLET}33; }
        .soft-btn {
          background: linear-gradient(135deg, ${VIOLET}, #5D52D8);
          box-shadow: 4px 4px 12px ${NIGHT}, inset 0 1px 0 ${VIOLET_GLOW};
          transition: all 200ms;
        }
        .soft-btn:hover { box-shadow: 6px 6px 18px ${NIGHT}, 0 0 24px ${VIOLET}66, inset 0 1px 0 ${VIOLET_GLOW}; }
        .soft-pill {
          background: ${INDIGO};
          box-shadow: inset 3px 3px 8px ${NIGHT}, inset -3px -3px 8px ${INDIGO_LIGHT};
        }
      `}</style>

      <nav className="sticky top-0 z-50 backdrop-blur-xl" style={{ backgroundColor: NIGHT + "DD", borderBottom: `1px solid ${VIOLET}22` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <span className="flex items-center gap-3">
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: `radial-gradient(circle, ${VIOLET_GLOW}, ${VIOLET})`, boxShadow: `0 0 12px ${VIOLET}` }} />
            <span style={{ fontSize: "1.05rem", fontWeight: 600, color: TEXT, letterSpacing: "0.15em", textTransform: "uppercase" }}>The Blue Room</span>
          </span>
          <div className="flex items-center gap-6">
            <a href="#directory" className="hidden md:inline text-sm hover:text-white" style={{ color: TEXT_MUTED }}>Menu</a>
            <a href="#visit" className="hidden md:inline text-sm hover:text-white" style={{ color: TEXT_MUTED }}>Visit</a>
            <a href={phoneTel} className="soft-btn px-5 py-2.5 text-sm font-medium" style={{ color: TEXT, borderRadius: "12px" }}>Reserve</a>
          </div>
        </div>
      </nav>

      {/* HERO — Soft UI, indigo+violet glow */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url("${content.hero.image}")`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(2px) brightness(0.4)" }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center top, ${VIOLET}22 0%, transparent 50%), linear-gradient(180deg, ${NIGHT}99 0%, ${NIGHT} 100%)` }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${VIOLET}, transparent 70%)`, filter: "blur(60px)" }} />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center fade-up">
          <div className="soft-pill inline-block px-5 py-2 mb-10" style={{ borderRadius: "999px" }}>
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: VIOLET_GLOW }}>● Open Nightly · Until 2 AM</span>
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 9vw, 7rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.04em", color: TEXT }}>
            After dark.<br /><span style={{ background: `linear-gradient(135deg, ${VIOLET_GLOW}, ${VIOLET})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 500 }}>The room glows.</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto fade-up-d1" style={{ color: TEXT_MUTED, lineHeight: 1.65 }}>{content.hero.subheading}</p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center fade-up-d2">
            <a href={content.hero.ctaLink} className="soft-btn px-9 py-4 text-sm font-medium tracking-wide" style={{ color: TEXT, borderRadius: "14px" }}>Reserve a Table</a>
            <a href="#directory" className="soft-pill px-9 py-4 text-sm font-medium tracking-wide" style={{ color: TEXT, borderRadius: "14px" }}>Browse the Menu</a>
          </div>
        </div>
      </section>

      {/* STORY — soft floating block */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="soft-card p-10 md:p-16" style={{ borderRadius: "24px" }}>
          <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: VIOLET_GLOW }}>The Room</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: TEXT, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            <span style={{ fontWeight: 500 }}>{content.about.heading.split(". ").slice(0,2).join(". ")}.</span>{" "}
            <span style={{ color: TEXT_MUTED }}>{content.about.heading.split(". ").slice(2).join(". ")}</span>
          </h2>
          <div className="mt-10 space-y-6 text-lg" style={{ color: TEXT_MUTED, lineHeight: 1.7 }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* DIRECTORY — categorized menu */}
      <section id="directory" className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: VIOLET_GLOW }}>The Directory</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: TEXT, lineHeight: 1.0, letterSpacing: "-0.03em" }}>
            Find your <span style={{ color: VIOLET, fontWeight: 500 }}>drink.</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {categories.map((c, i) => (
            <div key={i} className="soft-pill px-6 py-2.5 text-sm font-medium" style={{ color: VIOLET_GLOW, borderRadius: "999px" }}>{c.name}</div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {content.services.map((s, i) => (
            <div key={i} className="soft-card p-8" style={{ borderRadius: "20px" }}>
              <div className="flex items-start justify-between mb-5">
                <div className="soft-pill px-3 py-1 text-[10px] font-bold tracking-widest uppercase" style={{ color: VIOLET_GLOW, borderRadius: "8px" }}>0{i + 1}</div>
                {s.price && <span className="text-sm font-medium" style={{ color: VIOLET_GLOW }}>{s.price}</span>}
              </div>
              <h3 style={{ fontWeight: 500, fontSize: "1.4rem", color: TEXT, letterSpacing: "-0.01em" }}>{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS — soft cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: VIOLET_GLOW }}>Word on the Street</p>
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: TEXT, lineHeight: 1.0, letterSpacing: "-0.03em" }}>
            What <span style={{ color: VIOLET, fontWeight: 500 }}>they say.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {content.reviews.map((r, i) => (
            <div key={i} className="soft-card p-8" style={{ borderRadius: "20px" }}>
              <div className="flex gap-0.5 mb-5 text-base" style={{ color: VIOLET_GLOW }}>
                {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-base leading-relaxed" style={{ color: TEXT }}>&ldquo;{r.text}&rdquo;</p>
              <p className="mt-6 text-xs tracking-widest uppercase font-medium" style={{ color: VIOLET_GLOW }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT — soft surface with embedded map */}
      <section id="visit" className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="soft-card p-8 md:p-12 grid md:grid-cols-12 gap-10" style={{ borderRadius: "24px" }}>
          <div className="md:col-span-5">
            <p className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: VIOLET_GLOW }}>Find Us</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: TEXT, lineHeight: 1.0, letterSpacing: "-0.02em" }}>
              On San<br /><span style={{ color: VIOLET, fontWeight: 500 }}>Fernando Blvd.</span>
            </h2>
            <p className="mt-7 text-lg" style={{ color: TEXT_MUTED }}>{content.contact.address}</p>
            <a href={phoneTel} className="block mt-2 text-3xl font-light transition-opacity hover:opacity-80" style={{ color: VIOLET_GLOW, letterSpacing: "-0.01em" }}>{content.contact.phone}</a>
            <div className="mt-10 space-y-1">
              {Object.entries(content.contact.hours).map(([day, time]) => (
                <div key={day} className="flex justify-between py-2.5 text-sm" style={{ borderBottom: `1px solid ${VIOLET}15` }}>
                  <span className="font-medium uppercase tracking-wider text-xs" style={{ color: TEXT }}>{day}</span>
                  <span style={{ color: TEXT_MUTED }}>{String(time)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 overflow-hidden" style={{ borderRadius: "16px", minHeight: "480px", boxShadow: `inset 0 0 0 1px ${VIOLET}33` }}>
            <iframe title="The Blue Room" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "480px", filter: "invert(0.92) hue-rotate(220deg) brightness(0.95)" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      <footer className="border-t" style={{ borderColor: `${VIOLET}22` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm">
          <div>
            <p style={{ fontSize: "1rem", fontWeight: 600, color: TEXT, letterSpacing: "0.15em", textTransform: "uppercase" }}>The Blue Room</p>
            <p className="mt-2" style={{ color: TEXT_MUTED }}>{content.contact.address}</p>
            <p className="mt-1"><a href={phoneTel} style={{ color: VIOLET_GLOW }} className="hover:opacity-70">{content.contact.phone}</a></p>
          </div>
          <div className="text-xs uppercase tracking-widest" style={{ color: TEXT_MUTED }}>© {new Date().getFullYear()} The Blue Room</div>
        </div>
      </footer>
    </main>
  );
}
