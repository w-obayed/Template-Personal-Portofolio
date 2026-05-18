"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Lenis from "lenis";
import services from "../../API&Services/services";
import "lenis/dist/lenis.css";
import "swiper/css";

// How much vertical scroll distance each slide gets (vh units)
const VH_PER_SLIDE = 30;

export default function WorkSlider() {
  const swiperRef   = useRef(null);   // Swiper instance
  const containerRef = useRef(null);  // Outer scroll-distance div
  const activeIdxRef = useRef(0);     // Last slid-to index (avoids re-firing)
  const rafIdRef    = useRef(null);

  const projectData = services("Project") || [];
  const project = projectData.body;
  const TOTAL_SLIDES = 1 + project.length;
  

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
      className="bg-[#0e1016] w-full px-4 md:px-0"
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
            spaceBetween={20}
            speed={500}           
            allowTouchMove={false}
            breakpoints={{
            320: {
                 slidesPerView: 1.2,
                 centeredSlides: false,
            },
            640: {
                 slidesPerView: 2.2,
                 centeredSlides: true,
            },
            1024: {
                 slidesPerView: 3.2,
                 centeredSlides: true,
            },
            }}
            className="w-full mt-20"
          >
            {/* ── Intro slide ── */}
            <SwiperSlide className=" items-center justify-center flex!">
              <div className=" flex flex-col gap-6 px-4 pt-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight font-['Syne',sans-serif]"
                dangerouslySetInnerHTML={{
                    __html: projectData.head.title,
                }}>
                </h2>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs font-['DM_Sans',sans-serif]">
                  {projectData.head.description}
                </p>
                <button className="flex items-center gap-2 border border-white/25 rounded-full px-5 py-2.5 text-black bg-white text-xs font-semibold tracking-widest hover:border-white/50 hover:bg-white/5 transition-all w-fit font-['DM_Sans',sans-serif]">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  {projectData.head.btn}
                </button>
              </div>
            </SwiperSlide>

            {/* ── Project cards ── */}
            {project.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-500"
                    style={{
                      height:    "420px",
                      background: item.bgColor,
                      boxShadow:  isActive ? `0 0 60px ${item.accentColor}44` : "none",
                      opacity:    isActive ? 1 : 0.5,
                      transform:  isActive ? "scale(1)" : "scale(0.92)",
                    }}
                  >
                    {/* Card header */}
                    <div className="flex items-center justify-between px-5 pt-5 pb-3">
                      <span className="text-white text-lg font-semibold tracking-wide font-['Syne',sans-serif]">
                        {item.client}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-white/60 text-sm font-['DM_Sans',sans-serif]">
                          {item.category}
                        </span>
                        <a href={item.url} className="w-7 h-7 rounded-full flex items-center justify-center border border-white/20 bg-white">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2 10L10 2M10 2H4M10 2V8"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Card image */}
                    <div className="mx-3 rounded-xl overflow-hidden h-[340px]">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
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