'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import services from '../../API&Services/services';
import ServiceCard from "./ui/serviceCard";
import 'swiper/css';

// How much vertical scroll distance each slide gets (vh)
const VH_PER_SLIDE = 30;

export default function ServiceCarousel() {
  const service = services("services") || [];

  // TOTAL_SLIDES computed from real data length, not services.length (function arity)
  const TOTAL_SLIDES = service.length;

  const swiperRef    = useRef(null);  // Swiper instance
  const containerRef = useRef(null);  // Outer scroll-distance div
  const activeIdxRef = useRef(0);     // Last slid-to index (avoids re-firing)
  const rafIdRef     = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });

    // rAF loop — drives Lenis every frame
    function raf(time) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    // Scroll handler — maps progress → slide index → slideTo
    lenis.on("scroll", () => {
      const swiper    = swiperRef.current;
      const container = containerRef.current;
      if (!swiper || !container) return;

      const rect        = container.getBoundingClientRect();
      const scrollableH = container.offsetHeight - window.innerHeight;

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
      style={{ height: `${100 + (TOTAL_SLIDES - 1) * VH_PER_SLIDE}vh` }}
    >
      {/* Sticky panel — stays pinned while the outer div scrolls past */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <section className="bg-[radial-gradient(circle_at_top_left,#ffffff24,#ffffff0d_30%,#00000033_100%)] rounded-[56px] border border-white/10 shadow-2xl py-12 mx-4">
          <div className="w-full max-w-7xl mx-auto px-6">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white font-['Syne',sans-serif]">
                My Services
              </h2>
              <p className="max-w-xl text-sm md:text-base text-white/80 leading-relaxed font-['DM_Sans',sans-serif]">
                I help businesses and individuals bring their ideas to life through
                thoughtful design. Whether you&apos;re building a product from scratch or
                improving an existing one, I offer services that focus on both
                aesthetics and usability.
              </p>
            </div>

            {/* Swiper */}
            <div className="w-full">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={3}
                spaceBetween={15}
                speed={500}            /* Swiper CSS transition duration (ms) */
                allowTouchMove={false} /* scroll-driven only — disable drag   */
                className="w-full h-auto"
              >
                {service.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ServiceCard item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}