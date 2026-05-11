'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import services from '../../API&Services/services';
import MobileTabView from './ui/mobileTabView';
import CircleSlide from './ui/circleSlide';
import DetailSlide from './ui/detailSlide';

import 'swiper/css/effect-fade';
import 'swiper/css';

export default function DiscoveryProcess() {
  const slides = services("discovery") || [];
  const TOTAL = slides.length;

  const masterRef = useRef(null);
  const slaveRef  = useRef(null);
  const wrapRef   = useRef(null);   // the sticky outer wrapper
  const isLocked  = useRef(false);  // debounce between slides

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

  // ── Wheel handler ─────────────────────────────────────────
  const onWheel = useCallback((e) => {
    const master = masterRef.current;
    const slave  = slaveRef.current;
    if (!master || !slave) return;

    const isDown = e.deltaY > 0;

    // At boundaries → do nothing, let native scroll take over
    if (isDown  && master.isEnd)       return;
    if (!isDown && master.isBeginning) return;

    // We own this scroll event — stop the page from moving
    e.preventDefault();

    if (isLocked.current) return;
    isLocked.current = true;

    if (isDown) {
      master.slideNext(700);
      slave.slideNext(700);
      setCurrentIndex((i) => Math.min(i + 1, TOTAL - 1));
    } else {
      master.slidePrev(700);
      slave.slidePrev(700);
      setCurrentIndex((i) => Math.max(i - 1, 0));
    }

    setTimeout(() => { isLocked.current = false; }, 750);
  }, [TOTAL]);

  // ── Attach wheel listener (non-passive so preventDefault works) ──
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || isMobile) return;

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [onWheel, isMobile]);

  // ── UI ────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#05070d] text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="w-full mx-auto px-6 py-16 relative z-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-semibold text-white/90">
            Our Process
          </h1>
          <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition">
            For the inquiry − 1 minute
          </button>
        </div>

        {/* MOBILE */}
        {isMobile ? (
          <MobileTabView
            slides={slides}
            currentIndex={currentIndex}
            onSelect={setCurrentIndex}
          />
        ) : (
          /*
           * DESKTOP — sticky wrapper
           *
           * The outer div is tall enough to "hold" the section while
           * the inner div stays sticky at the top of the viewport.
           * While the user is inside this tall block, the sticky inner
           * div never moves — the page scroll is consumed by the wheel
           * handler above (preventDefault). Only when both swiper edges
           * are exhausted does the wheel fall through to native scroll,
           * letting the page continue to the next section.
           */
          <div
            ref={wrapRef}
            // style={{ height: `${TOTAL * 100}vh` }}
            className="relative h-screen"
          >
            <div className="sticky top-0 h-screen w-full overflow-hidden">

              <div className="flex flex-col lg:flex-row gap-10 w-full h-full">

                {/* LEFT */}
                <div className="lg:w-1/2 w-full h-full shrink-0 overflow-hidden">
                  <Swiper
                    modules={[EffectFade]}
                    effect="fade"
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

                {/* RIGHT */}
                <div className="lg:w-1/2 w-full h-full overflow-hidden">
                  <Swiper
                    modules={[EffectFade]}
                    effect="fade"
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
    </div>
  );
}

