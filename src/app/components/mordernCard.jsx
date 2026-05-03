"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { cn } from "../../lib/utils";


const cards = [
  {
    num: "1",
    title: "Software\nDevelopment",
    desc: "We use innovative solutions to create customized software and/or improve existing software.",
    btn: "SPEAK TO OUR EXPERTS",
    quality: "Quality in focus",
    qualityDesc:
      "Through feedback and iterations, we continuously improve your app, and our work is based on the latest state of the art.",
    accent: "#a855f7",
    icons: [
      { label: "C#",   color: "#9b59b6", bg: "#1a0a2e" },
      { label: "🔥",   color: "#f39c12", bg: "#1a0f00" },
      { label: "GO",   color: "#00acd7", bg: "#001a2e" },
      { label: "AWS",  color: "#ff9900", bg: "#1a0f00" },
      { label: "~",    color: "#5dade2", bg: "#0a1628" },
      { label: "V",    color: "#42b883", bg: "#001a0d" },
      { label: "GQL",  color: "#e535ab", bg: "#1a0020" },
      { label: "⚛",   color: "#61dafb", bg: "#001a2e" },
      { label: "Node", color: "#539e43", bg: "#001a0d" },
      { label: "Redux",color: "#764abc", bg: "#0f001a" },
      { label: "~~",   color: "#a855f7", bg: "#0f001a" },
      { label: "PG",   color: "#336791", bg: "#00102a" },
      { label: "PHP",  color: "#777bb4", bg: "#0a0a1a" },
      { label: "Java", color: "#f89820", bg: "#1a0f00" },
      { label: "▲",    color: "#ffffff", bg: "#0a0a0a" },
      { label: "W",    color: "#4353ff", bg: "#00001a" },
      { label: "CSS",  color: "#264de4", bg: "#00001a" },
      { label: "HTML", color: "#e34f26", bg: "#1a0500" },
      { label: "S",    color: "#38bdf8", bg: "#001a2e" },
      { label: "JS",   color: "#f7df1e", bg: "#1a1a00" },
    ],
  },
  {
    num: "2",
    title: "UI/UX\nDesign",
    desc: "Beautiful, intuitive interfaces crafted with precision. We turn ideas into delightful digital experiences.",
    btn: "VIEW OUR PORTFOLIO",
    quality: "Design-first approach",
    qualityDesc:
      "Every pixel is intentional. We prototype, test, and iterate until the experience feels completely effortless.",
    accent: "#ec4899",
    icons: [
      { label: "Fg",  color: "#a259ff", bg: "#0f001a" },
      { label: "Ai",  color: "#ff7c00", bg: "#1a0a00" },
      { label: "Ps",  color: "#31a8ff", bg: "#001628" },
      { label: "Xd",  color: "#ff61f6", bg: "#1a0018" },
      { label: "Sk",  color: "#f7b500", bg: "#1a1000" },
      { label: "Fr",  color: "#0055ff", bg: "#00001a" },
      { label: "Pr",  color: "#9999ff", bg: "#0a0a1a" },
      { label: "Ae",  color: "#9999ff", bg: "#0a0a1a" },
      { label: "LT",  color: "#ff4444", bg: "#1a0000" },
      { label: "ZP",  color: "#ff5c00", bg: "#1a0a00" },
      { label: "MD",  color: "#2196f3", bg: "#001628" },
      { label: "NV",  color: "#00d4aa", bg: "#001a15" },
      { label: "ST",  color: "#ff6b6b", bg: "#1a0000" },
      { label: "LN",  color: "#0076ff", bg: "#00001a" },
      { label: "SP",  color: "#7fff00", bg: "#0a1a00" },
      { label: "MX",  color: "#ff9500", bg: "#1a0f00" },
      { label: "BL",  color: "#ea4c89", bg: "#1a0010" },
      { label: "CV",  color: "#00c4cc", bg: "#001a1a" },
      { label: "CW",  color: "#ffffff", bg: "#111"    },
      { label: "IN",  color: "#e1306c", bg: "#1a0015" },
    ],
  },
  {
    num: "3",
    title: "Cloud &\nDevOps",
    desc: "Scale with confidence. We architect, deploy and manage cloud infrastructure for maximum reliability.",
    btn: "EXPLORE SOLUTIONS",
    quality: "Always online",
    qualityDesc:
      "99.9% uptime guaranteed. Automated pipelines, smart monitoring and rapid incident response included.",
    accent: "#38bdf8",
    icons: [
      { label: "AWS", color: "#ff9900", bg: "#1a0f00" },
      { label: "GCP", color: "#4285f4", bg: "#001628" },
      { label: "AZ",  color: "#0089d6", bg: "#001628" },
      { label: "DO",  color: "#0080ff", bg: "#00001a" },
      { label: "K8s", color: "#326ce5", bg: "#001628" },
      { label: "🐳",  color: "#2496ed", bg: "#001628" },
      { label: "TF",  color: "#7b42bc", bg: "#0f001a" },
      { label: "ANS", color: "#ee0000", bg: "#1a0000" },
      { label: "CI",  color: "#f8cb2e", bg: "#1a1400" },
      { label: "GH",  color: "#ffffff", bg: "#111"    },
      { label: "GL",  color: "#fc6d26", bg: "#1a0500" },
      { label: "NGX", color: "#009639", bg: "#001a0a" },
      { label: "RDS", color: "#527fff", bg: "#00001a" },
      { label: "S3",  color: "#569a31", bg: "#001a0a" },
      { label: "CDN", color: "#f48120", bg: "#1a0a00" },
      { label: "VPN", color: "#00bcd4", bg: "#001a1a" },
      { label: "ELK", color: "#f04e98", bg: "#1a0015" },
      { label: "GRF", color: "#f46800", bg: "#1a0500" },
      { label: "PRM", color: "#e6522c", bg: "#1a0500" },
      { label: "VLT", color: "#ffffff", bg: "#1a1a1a" },
    ],
  },
];

// ─── Single slide card ──────────────────────────────────────────────────────
function SlideCard({ card, style }) {
  const titleLines = card.title.split("\n");

  return (
    <div
      className="w-full h-full flex items-center justify-center px-4 will-change-transform absolute top-0 left-0"
      style={style}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/5 bg-[#0d0f14] h-[95%] transition-shadow duration-600 ease-[ease]"
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-size-[40px_40px]"
        />

        {/* Accent glow blob */}
        <div
          className={cn(
            "absolute pointer-events-none -top-[80px] -left-[60px] w-[340px] h-[340px] rounded-full transition-opacity duration-600 ease-[ease]",
            "opacity-100"
          )}
          style={{
            background: `radial-gradient(circle, ${card.accent}22 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex h-full flex-col md:flex-row min-h-[460px]">
          {/* ── LEFT ── */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-12 py-10 gap-5">
            {/* Big number */}
            <div
              className="text-7xl font-black leading-none select-none font-['Syne',sans-serif]"
              style={{ color: `${card.accent}18` }}
            >
              {card.num}
            </div>

            {/* Title */}
            <div className="text-3xl md:text-4xl font-bold text-white leading-tight font-['Syne',sans-serif]">
              {titleLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-white/50 leading-relaxed max-w-xs font-['DM_Sans',sans-serif]">
              {card.desc}
            </p>

            {/* CTA button */}
            <button
              className="flex items-center gap-2.5 rounded-full px-5 py-2.5 text-white text-xs font-semibold tracking-[0.12em] w-fit transition-all duration-200 hover:bg-white/10 font-['DM_Sans',sans-serif]"
              style={{ border: `1px solid ${card.accent}55` }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse bg-[#4ade80]" />
              {card.btn}
            </button>
          </div>

          {/* ── RIGHT ── */}
          <div className="w-full md:w-72 flex flex-col justify-center gap-4 px-6 md:px-0 md:pr-8 pb-8 md:py-8">
            {/* Quality box */}
            <div className="rounded-xl p-4 bg-white/4 border border-white/80">
              <p className="text-white text-sm font-semibold mb-1.5 font-['Syne',sans-serif]">
                {card.quality}
              </p>
              <p className="text-white/45 text-xs leading-relaxed font-['DM_Sans',sans-serif]">
                {card.qualityDesc}
              </p>
            </div>

            {/* Icons grid 5×4 */}
            <div className="grid grid-cols-5 gap-1.5">
              {card.icons.map((icon, i) => (
                <div
                  key={i}
                  className="rounded-xl flex items-center justify-center font-bold w-[46px] h-[46px] border-[0.5px] border-white/[0.07] text-[10px] font-['DM_Sans',sans-serif]"
                  style={{
                    background: icon.bg,
                    color: icon.color,
                  }}
                >
                  {icon.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide counter pill */}
        <div
          className="absolute bottom-4 left-6 text-xs font-semibold tracking-widest font-['DM_Sans',sans-serif]"
          style={{ color: card.accent }}
        >
          0{card.num} / 0{cards.length}
        </div>
      </div>
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────
export default function VerticalSlider() {
  const sectionRef = useRef(null);
  const lenisRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 → 1

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    lenisRef.current = lenis;

    const raf = (t) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const total = window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top / total, 0), 1);
      setProgress(scrolled);
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div ref={sectionRef} className="h-[200vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center">

        <div className="relative w-full h-[500px]">
          {cards.map((card, i) => {
            // 👇 control each card timing
            const totalTransitions = cards.length - 1;
            const relativeProgress = progress * totalTransitions;
            const diff = i - relativeProgress;

            let y = 0;
            let scale = 1;
            const opacity = 1; // No opacity change

            if (diff > 0) {
              // Card is waiting in the stack below
              y = diff * 20; // 20px stack gap
              scale = 1 - diff * 0.05;
            } else {
              // Card is active or moving up
              // 500px card height + 20px gap = 520px
              y = diff * 520;
              scale = 1;
            }

            return (
              <SlideCard
                key={i}
                card={card}
                style={{
                  transform: `translateY(${y}px) scale(${scale})`,
                  opacity,
                  zIndex: cards.length - i,
                }}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
}
