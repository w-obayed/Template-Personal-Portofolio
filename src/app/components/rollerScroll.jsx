'use client';

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import Lenis from 'lenis';

import services from '../../API&Services/services';
import MobileTabView from './ui/mobileTabView';
import CircleSlide from './ui/circleSlide';
import DetailSlide from './ui/detailSlide';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'lenis/dist/lenis.css';

const VH_PER_SLIDE = 60; // How much vertical scroll (vh) per slide

export default function DiscoveryProcess() {
  const slides = services("discovery") || [];
  const TOTAL = slides.length;

  const masterRef    = useRef(null);
  const slaveRef     = useRef(null);
  const wrapRef      = useRef(null);   // the sticky outer wrapper
  const activeIdxRef = useRef(0);      // debounce between slides
  const rafIdRef     = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderH, setSliderH]           = useState(600);
  const [isMobile, setIsMobile]         = useState(false);

  // ── Responsive ────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
      setSliderH(Math.max(380, window.innerHeight - 160));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // ── Scroll handler (Lenis) ────────────────────────────────
  useEffect(() => {
    if (isMobile) return;

    const lenis = new Lenis({ smoothWheel: true });

    function raf(time) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    lenis.on('scroll', () => {
      const master = masterRef.current;
      const slave = slaveRef.current;
      const container = wrapRef.current;
      if (!master || !slave || !container) return;

      const rect = container.getBoundingClientRect();
      const scrollableH = container.offsetHeight - window.innerHeight;
      
      // Calculate progress (0 to 1) within this section
      // If scrollableH is 0 (e.g. only 1 slide), avoid division by zero
      const progress = scrollableH > 0 
        ? Math.min(Math.max(-rect.top / scrollableH, 0), 1)
        : 0;
      
      // Map progress to slide index
      const targetIdx = Math.min(
        Math.round(progress * (TOTAL - 1)),
        TOTAL - 1
      );

      if (targetIdx !== activeIdxRef.current) {
        activeIdxRef.current = targetIdx;
        master.slideTo(targetIdx);
        slave.slideTo(targetIdx);
        setCurrentIndex(targetIdx);
      }
    });

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
    };
  }, [isMobile, TOTAL]);

  // ── UI ────────────────────────────────────────────────────
  return (
    <div className="bg-[#05070d] text-white relative w-full py-16">
      {/* Background glow (fixed or absolute relative to the section) */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      {isMobile ? (
        <div className="w-full mx-auto px-6 py-16 relative z-10">
          <div className="flex justify-between items-center mb-16">
            <h1 className="text-4xl font-semibold text-white/90">Our Process</h1>
            <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition">
              For the inquiry &#8722; 1 minute
            </button>
          </div>
          <MobileTabView
            slides={slides}
            currentIndex={currentIndex}
            onSelect={setCurrentIndex}
          />
        </div>
      ) : (
        /*
         * DESKTOP — scroll-linked sticky wrapper
         * The outer div is tall enough to "hold" the section, allowing user to natively
         * scroll through it. The inner div stays sticky at the top of the viewport.
         */
        <div
          ref={wrapRef}
          className="relative w-full z-10"
          style={{ height: `${100 + (TOTAL - 1) * VH_PER_SLIDE}vh` }}
        >
          <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-6">
            
            {/* Header (stays fixed inside the sticky container) */}
            <div className="flex justify-between items-center mb-16 w-full shrink-0 pt-16">
              <h1 className="text-4xl font-semibold text-white/90">
                Our Process
              </h1>
              <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition">
                For the inquiry &#8722; 1 minute
              </button>
            </div>

            {/* Slider Content */}
            <div className="flex flex-col lg:flex-row gap-10 w-full h-full flex-1 min-h-0">

              {/* LEFT: Circle Phase Slider */}
              <div className="lg:w-[44%] w-full h-full shrink-0 overflow-hidden">
                <Swiper
                  modules={[EffectFade]}
                  effect="fade"
                  fadeEffect={{crossFade: true}}
                  slidesPerView={1}
                  speed={700}
                  allowTouchMove={false}
                  onSwiper={(sw) => (masterRef.current = sw)}
                  className="w-full h-full"
                >
                  {slides.map(({ phase }, slideIdx) => (
                    <SwiperSlide key={phase.id}>
                      <CircleSlide
                        phases={slides.map((s) => s.phase)}
                        activePhaseIndex={slideIdx}
                        containerH={sliderH}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* RIGHT: Detail Slide Content */}
              <div className="lg:w-[54%] w-full h-full overflow-hidden">
                <Swiper
                  modules={[EffectFade]}
                  effect="fade"
                  fadeEffect={{crossFade: true}}
                  slidesPerView={1}
                  speed={700}
                  allowTouchMove={false}
                  onSwiper={(sw) => (slaveRef.current = sw)}
                  className="w-full h-full"
                >
                  {slides.map(({ detail, phase }, slideIdx) => (
                    <SwiperSlide key={phase.id}>
                      <DetailSlide
                        detail={detail}
                        index={slideIdx}
                        total={TOTAL}
                        containerH={sliderH}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

