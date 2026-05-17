"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Lenis from "lenis";
import services from "../../API&Services/services";
import "lenis/dist/lenis.css";
import "swiper/css";

const VH_PER_SLIDE = 30;

export default function Testimonial() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const activeIdxRef = useRef(0);
  const rafIdRef = useRef(null);

  const testimonial = services("testimonial") || [];
  const TOTAL_SLIDES = testimonial.length;

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });

    function raf(time) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      const swiper = swiperRef.current;
      const container = containerRef.current;
      if (!swiper || !container) return;

      const rect = container.getBoundingClientRect();
      const scrollableH = container.offsetHeight - window.innerHeight;

      const progress = Math.min(Math.max(-rect.top / scrollableH, 0), 1);

      const targetIdx = Math.min(
        Math.round(progress * (TOTAL_SLIDES - 1)),
        TOTAL_SLIDES - 1
      );

      if (targetIdx !== activeIdxRef.current) {
        activeIdxRef.current = targetIdx;
        swiper.slideTo(targetIdx);
      }
    });

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
    };
  }, [TOTAL_SLIDES]);

  return (
    <div
      ref={containerRef}
      className="bg-[#0e1016] w-full px-4 md:px-0"
      style={{ height: `${100 + (TOTAL_SLIDES - 1) * VH_PER_SLIDE}vh` }}
    >
      {/* Sticky Section */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="w-full">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={20}
            speed={500}
            allowTouchMove={false}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 1.4,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="w-full overflow-visible"
          >
            {testimonial.map((item) => (
              <SwiperSlide key={item.id} className="transition-transform duration-300">
                <div className="relative w-full h-full p-2 md:p-7 rounded-2xl bg-[#1a1a1a] border border-zinc-800">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-zinc-700 bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-bold">
                        {item.initials}
                      </div>

                      <div>
                        <p className="text-white font-bold text-base leading-tight tracking-wide">
                          {item.name}
                        </p>
                        <p className="text-sm font-semibold mt-0.5 text-orange-400">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <div className="shrink-0 w-[48px] h-[31px] border-2 border-orange-400 rounded flex items-center justify-center">
                      <svg
                        width="26"
                        height="19"
                        viewBox="0 0 26 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 2L9 17"
                          stroke="hsla(18, 99%, 65%, 1)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 2L14 17"
                          stroke="hsla(18, 99%, 65%, 1)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13 2L19 17"
                          stroke="hsla(18, 99%, 65%, 1)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}