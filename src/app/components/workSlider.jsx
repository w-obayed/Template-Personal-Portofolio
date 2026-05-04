"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "swiper/css";

const projects = [
  {
    id: 1,
    client: "KTM",
    category: "Case study",
    bgColor: "#7c2c00",
    accentColor: "#ff6a00",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    imageAlt: "KTM motorcycle app on laptop and phone",
  },
  {
    id: 2,
    client: "Vetain",
    category: "Case study",
    bgColor: "#3a3830",
    accentColor: "#b5a48a",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    imageAlt: "Vetain mobile app screens",
  },
  {
    id: 3,
    client: "FinFlow",
    category: "Case study",
    bgColor: "#0a2a4a",
    accentColor: "#2196f3",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    imageAlt: "FinFlow dashboard",
  },
  {
    id: 4,
    client: "Medica",
    category: "Case study",
    bgColor: "#1a3a2a",
    accentColor: "#22c55e",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    imageAlt: "Medica health app",
  },
  {
    id: 5,
    client: "Archi",
    category: "Case study",
    bgColor: "#2a1a3a",
    accentColor: "#a855f7",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&q=80",
    imageAlt: "Archi design platform",
  },
  {
    id: 6,
    client: "NovaPay",
    category: "Case study",
    bgColor: "#111827",
    accentColor: "#60a5fa",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    imageAlt: "NovaPay fintech mobile app",
  },
  {
    id: 7,
    client: "Shopora",
    category: "Case study",
    bgColor: "#3b0a2a",
    accentColor: "#fb7185",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    imageAlt: "Shopora ecommerce platform",
  },
  {
    id: 8,
    client: "CloudNest",
    category: "Case study",
    bgColor: "#0f172a",
    accentColor: "#38bdf8",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    imageAlt: "CloudNest dashboard analytics",
  },
  {
    id: 9,
    client: "Buildify",
    category: "Case study",
    bgColor: "#1c1917",
    accentColor: "#f59e0b",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    imageAlt: "Buildify construction management app",
  },
  {
    id: 10,
    client: "EduSpark",
    category: "Case study",
    bgColor: "#0b2a1a",
    accentColor: "#34d399",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    imageAlt: "EduSpark learning platform UI",
  },
];

// 1 intro slide + 10 project cards
const TOTAL_SLIDES = 1 + projects.length;

// How much vertical scroll distance each slide gets (vh units)
const VH_PER_SLIDE = 30;

export default function WorkSlider() {
  const swiperRef   = useRef(null);   // Swiper instance
  const containerRef = useRef(null);  // Outer scroll-distance div
  const activeIdxRef = useRef(0);     // Last slid-to index (avoids re-firing)
  const rafIdRef    = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });

    function raf(time) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      const swiper    = swiperRef.current;
      const container = containerRef.current;
      if (!swiper || !container) return;

      const rect           = container.getBoundingClientRect();
      const scrollableH    = container.offsetHeight - window.innerHeight;

      // 0 → 1 as the section scrolls through the viewport
      const progress = Math.min(Math.max(-rect.top / scrollableH, 0), 1);

      // Map to a slide index (0 … TOTAL_SLIDES-1)
      const targetIdx = Math.min(
        Math.round(progress * (TOTAL_SLIDES - 1)),
        TOTAL_SLIDES - 1
      );

      // Only call slideTo when the target changes → real Swiper animation fires
      if (targetIdx !== activeIdxRef.current) {
        activeIdxRef.current = targetIdx;
        swiper.slideTo(targetIdx); // ← native Swiper CSS slide transition
      }
    });

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
    };
  }, []);

  return (
    /*
     * Outer div height = 100vh (sticky viewport) + scroll room for each slide.
     * Each slide gets VH_PER_SLIDE vh of scroll distance before advancing.
     */
    <div
      ref={containerRef}
      className="bg-[#0e1016] w-full"
      style={{ height: `${100 + (TOTAL_SLIDES - 1) * VH_PER_SLIDE}vh` }}
    >
      {/* Sticky panel — stays pinned while the outer div scrolls past */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="w-full">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={3.2}
            centeredSlides={true}
            spaceBetween={20}
            speed={500}            /* Swiper CSS transition duration (ms) */
            allowTouchMove={false} /* scroll-driven only — disable drag    */
            className="w-full mt-20"
          >
            {/* ── Intro slide ── */}
            <SwiperSlide className="flex items-center justify-center">
              <div className="shrink-0 flex flex-col gap-6 px-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-['Syne',sans-serif]">
                  We let <span className="text-orange-400">our work</span>
                  <br />speak for itself.
                </h2>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs font-['DM_Sans',sans-serif]">
                  Our experts develop customized native apps and software
                  solutions using innovative technologies for your success.
                </p>
                <button className="flex items-center gap-2 border border-white/25 rounded-full px-5 py-2.5 text-white text-xs font-semibold tracking-widest hover:border-white/50 hover:bg-white/5 transition-all w-fit font-['DM_Sans',sans-serif]">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  GET IN TOUCH NOW
                </button>
              </div>
            </SwiperSlide>

            {/* ── Project cards ── */}
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                {({ isActive }) => (
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-500"
                    style={{
                      height:    "420px",
                      background: project.bgColor,
                      boxShadow:  isActive ? `0 0 60px ${project.accentColor}44` : "none",
                      opacity:    isActive ? 1 : 0.5,
                      transform:  isActive ? "scale(1)" : "scale(0.92)",
                    }}
                  >
                    {/* Card header */}
                    <div className="flex items-center justify-between px-5 pt-5 pb-3">
                      <span className="text-white text-lg font-semibold tracking-wide font-['Syne',sans-serif]">
                        {project.client}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-white/60 text-sm font-['DM_Sans',sans-serif]">
                          {project.category}
                        </span>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center border border-white/20 bg-white/10">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2 10L10 2M10 2H4M10 2V8"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Card image */}
                    <div className="mx-3 rounded-xl overflow-hidden h-[340px]">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}