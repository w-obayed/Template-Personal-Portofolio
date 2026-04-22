"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

// ─── Card data (from provided component) ───────────────────────────────────
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
  {
    num: "4",
    title: "AI & Machine\nLearning",
    desc: "Harness the power of data. We build intelligent systems that learn, adapt and create real business value.",
    btn: "GET STARTED",
    quality: "Data-driven results",
    qualityDesc:
      "From NLP to computer vision, we deploy production-ready AI models tailored precisely to your domain.",
    accent: "#f97316",
    icons: [
      { label: "PT",  color: "#ee4c2c", bg: "#1a0500" },
      { label: "TF",  color: "#ff6f00", bg: "#1a0a00" },
      { label: "SK",  color: "#f7931e", bg: "#1a0f00" },
      { label: "HF",  color: "#ffd21e", bg: "#1a1400" },
      { label: "OAI", color: "#ffffff", bg: "#111"    },
      { label: "CV",  color: "#5c85d6", bg: "#001628" },
      { label: "NLP", color: "#00d4aa", bg: "#001a15" },
      { label: "LLM", color: "#a855f7", bg: "#0f001a" },
      { label: "RAG", color: "#38bdf8", bg: "#001a2e" },
      { label: "PD",  color: "#4dabf7", bg: "#0a0a1a" },
      { label: "NP",  color: "#4dabf7", bg: "#001628" },
      { label: "SP",  color: "#ff6b6b", bg: "#1a0000" },
      { label: "KRS", color: "#d00000", bg: "#1a0000" },
      { label: "MLF", color: "#0194e2", bg: "#001628" },
      { label: "DBR", color: "#ff3621", bg: "#1a0500" },
      { label: "VTX", color: "#4285f4", bg: "#001628" },
      { label: "SM",  color: "#ff9900", bg: "#1a0f00" },
      { label: "AML", color: "#0089d6", bg: "#001628" },
      { label: "WNB", color: "#ffbe00", bg: "#1a1400" },
      { label: "COL", color: "#f9ab00", bg: "#1a1000" },
    ],
  },
];

// ─── Single slide card ──────────────────────────────────────────────────────
function SlideCard({ card, isActive }) {
  const titleLines = card.title.split("\n");

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-black px-4"
      style={{ willChange: "transform" }}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/5"
        style={{
          background: "#0d0f14",
          minHeight: "460px",
          boxShadow: isActive
            ? `0 0 80px -10px ${card.accent}40, 0 0 0 1px ${card.accent}20`
            : "none",
          transition: "box-shadow 0.6s ease",
        }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Accent glow blob */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-80px",
            left: "-60px",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${card.accent}22 0%, transparent 70%)`,
            transition: "opacity 0.6s ease",
            opacity: isActive ? 1 : 0,
          }}
        />

        <div className="relative z-10 flex h-full flex-col md:flex-row" style={{ minHeight: "460px" }}>
          {/* ── LEFT ── */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-12 py-10 gap-5">
            {/* Big number */}
            <div
              className="text-7xl font-black leading-none select-none"
              style={{ color: `${card.accent}18`, fontFamily: "'Syne', sans-serif" }}
            >
              {card.num}
            </div>

            {/* Title */}
            <div
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {titleLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-white/50 leading-relaxed max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {card.desc}
            </p>

            {/* CTA button */}
            <button
              className="flex items-center gap-2.5 rounded-full px-5 py-2.5 text-white text-xs font-semibold tracking-widest w-fit transition-all duration-200 hover:bg-white/10"
              style={{
                border: `1px solid ${card.accent}55`,
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.12em",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#4ade80" }}
              />
              {card.btn}
            </button>
          </div>

          {/* ── RIGHT ── */}
          <div className="w-full md:w-72 flex flex-col justify-center gap-4 px-6 md:px-0 md:pr-8 pb-8 md:py-8">
            {/* Quality box */}
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-white text-sm font-semibold mb-1.5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {card.quality}
              </p>
              <p
                className="text-white/45 text-xs leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {card.qualityDesc}
              </p>
            </div>

            {/* Icons grid 5×4 */}
            <div className="grid grid-cols-5 gap-1.5">
              {card.icons.map((icon, i) => (
                <div
                  key={i}
                  className="rounded-xl flex items-center justify-center font-bold"
                  style={{
                    width: "46px",
                    height: "46px",
                    background: icon.bg,
                    color: icon.color,
                    border: "0.5px solid rgba(255,255,255,0.07)",
                    fontSize: "10px",
                    fontFamily: "'DM Sans', sans-serif",
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
          className="absolute bottom-4 left-6 text-xs font-semibold tracking-widest"
          style={{ color: card.accent, fontFamily: "'DM Sans', sans-serif" }}
        >
          0{card.num} / 0{cards.length}
        </div>
      </div>
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────
export default function VerticalSlider() {
  const containerRef = useRef(null);
  const swiperRef = useRef(null);
  const lenisRef = useRef(null);
  const rafRef   = useRef(null);
  const lastScrollY = useRef(0);
  const isSliding   = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let Lenis;
    (async () => {
      // Dynamic import so it's safe with Next.js SSR
      const mod = await import("lenis");
      Lenis = mod.default ?? mod.Lenis;

      lenisRef.current = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lastScrollY.current = lenisRef.current.scroll;

      // Drive Swiper from Lenis scroll deltas
      lenisRef.current.on("scroll", ({ scroll }) => {
        if (!swiperRef.current || !containerRef.current) {
          lastScrollY.current = scroll;
          return;
        }

        const swiper = swiperRef.current;
        const rect = containerRef.current.getBoundingClientRect();
        
        // Calculate the absolute position of the container relative to the document
        const containerTop = scroll + rect.top;
        // The bottom threshold where the sticky unpins
        const containerBottom = containerTop + rect.height - window.innerHeight;

        const delta = scroll - lastScrollY.current;
        lastScrollY.current = scroll;

        if (isSliding.current) return;

        // Check if we are currently inside the sticky/pinned zone
        if (scroll >= containerTop && scroll <= containerBottom) {
          const THRESHOLD = 6;
          if (Math.abs(delta) < THRESHOLD) return;

          isSliding.current = true;

          if (delta > 0) {
            // Scroll down
            if (!swiper.isEnd) {
              swiper.slideNext();
              // Eliminate delay: teleport scroll to the exact bottom of sticky area immediately
              if (swiper.isEnd) {
                lenisRef.current.scrollTo(containerBottom, { immediate: true });
                lastScrollY.current = containerBottom;
              }
            }
          } else {
            // Scroll up
            if (!swiper.isBeginning) {
              swiper.slidePrev();
              // Eliminate delay: teleport scroll to the exact top of sticky area immediately
              if (swiper.isBeginning) {
                lenisRef.current.scrollTo(containerTop, { immediate: true });
                lastScrollY.current = containerTop;
              }
            }
          }
          
          // Cooldown matches Swiper transition speed to prevent rapid skipping
          setTimeout(() => { isSliding.current = false; }, 680);
        }
      });

      // RAF loop
      const raf = (time) => {
        lenisRef.current?.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };
      rafRef.current = requestAnimationFrame(raf);
    })();

    return () => {
      lenisRef.current?.destroy();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Dot / arrow nav — bypass Lenis, control Swiper directly
  const goTo = (index) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(index);
  };

  return (
    <>
      <div ref={containerRef} className="relative bg-black" style={{ height: `${cards.length * 100}vh` }}>
        {/* Sticky Swiper viewport */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            direction="vertical"
            mousewheel={false}
            allowTouchMove={false} // Manage touch completely via Lenis to ensure our custom scroll logic persists flawlessly
            speed={680}
            className="w-full h-screen"
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i} style={{ height: "100vh" }}>
                <SlideCard card={card} isActive={activeIndex === i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}