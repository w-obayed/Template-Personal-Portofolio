"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Lenis from "lenis";
import { useService, sanitizeHtml } from "../../api/services";
import "lenis/dist/lenis.css";
import "swiper/css";
import Link from "next/link";

const VH_PER_SLIDE = 12;

export default function WorkSlider() {
  const swiperRef   = useRef(null);   
  const containerRef = useRef(null);  
  const activeIdxRef = useRef(0);     
  const rafIdRef    = useRef(null);

  const { data: projectData } = useService("portfolio");
  const project = projectData.body ?? [];
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
  }, [TOTAL_SLIDES]);

   // Handle WhatsApp button click
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801638512035", "_blank");
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#05070d] w-full px-4 md:px-0"
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
            preventClicks={false}
            preventClicksPropagation={false}
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
            <SwiperSlide className="">
              <div className=" flex flex-col justify-center gap-6 p-2 md:p-4">
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight font-family-heading"
                dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(projectData.head.title),
                }}>
                </h2>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs font-family-description">
                  {projectData.head.description}
                </p>
                <button onClick={handleWhatsAppClick} className="flex items-center gap-2 border border-white/25 rounded-full px-5 py-2.5 text-black bg-white text-xs font-semibold tracking-widest cursor-pointer transition-all w-fit font-family-heading">
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
                    className="rounded-2xl flex flex-col overflow-hidden transition-all duration-500 p-2 md:p-6 space-y-4"
                    style={{
                      height:    "420px",
                      background: item.bgColor,
                      boxShadow:  isActive ? `0 0 60px ${item.bgColor}44` : "none",
                      opacity:    isActive ? 1 : 0.5,
                      transform:  isActive ? "scale(1)" : "scale(0.92)",
                    }}
                  >
                    {/* Card header */}
                    <div className="flex items-center justify-between">
                      <span className="text-white text-lg font-semibold tracking-wide font-family-heading">
                        {item.client}
                      </span>
                      <div className="flex items-center gap-2">
                         <Link href={item.url}
                           onClick={(e) => e.stopPropagation()}
                           target="_blank"
                           rel="noopener noreferrer" className="text-white/80 text-sm font-family-description">
                          View Project
                        </Link>
                       <Link
                           href={item.url}
                           onClick={(e) => e.stopPropagation()}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-7 h-7 rounded-full flex items-center justify-center border border-white/20 bg-white"
                       >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2 10L10 2M10 2H4M10 2V8"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* Card image */}
                    <div className="rounded-xl flex-1 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.imageAlt || "Project image"}
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