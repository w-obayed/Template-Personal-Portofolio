"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import ServiceCoreCard from "./ui/serviceCoreCard";
import { useService } from "../../api/services";


const VH_PER_SLIDE = 100;

export default function VerticalSlider() {
  const sectionRef  = useRef(null);
  const lenisRef    = useRef(null);
  const progressRef = useRef(0);
  const cardRefs    = useRef([]);

  const { data: expertise } = useService("expertise");
  const items = expertise?.items ?? [];
  const N = items.length;

  const updateCards = (progress) => {
    const totalTransitions = Math.max(N - 1, 1);
    const relativeProgress = progress * totalTransitions;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const diff = i - relativeProgress;
      let y, scale;

      if (diff > 0) {
        // Card is ahead — stack slightly above with a subtle scale-down
        y = diff * 24;
        scale = Math.max(1 - diff * 0.04, 0.8);
      } else {
        // Card has been scrolled past — slide it up out of view
        const GAP_PX = 16;
        const cardH = el.offsetHeight || 600;
        y = diff * (cardH + GAP_PX);
        scale = 1;
      }

      el.style.transform = `translateY(${y}px) scale(${scale})`;
    });
  };

  useEffect(() => {
    if (N === 0) return;

    const lenis = new Lenis({ smoothWheel: true });
    lenisRef.current = lenis;

    let rafId;
    const raf = (t) => {
      lenis.raf(t);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect        = section.getBoundingClientRect();
      const scrollableH = section.offsetHeight - window.innerHeight;
      const progress    = Math.min(Math.max(-rect.top / scrollableH, 0), 1);

      progressRef.current = progress;
      updateCards(progress);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [N]);

  // Section height: one viewport to enter + one per slide + one to exit
  const sectionH = `${100 + N * VH_PER_SLIDE}vh`;


  return (
    <div
      ref={sectionRef}
      className="bg-black pt-40"
      style={{ height: sectionH }}
    >
      {/* Sticky panel — stays pinned while the outer div scrolls past */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* ── Section header (always visible inside the sticky frame) ── */}
        <div className="flex flex-col items-center gap-3 w-full md:max-w-[min(60%,760px)] mx-auto text-center px-4 mb-6 md:mb-10 shrink-0">
          <h2 className="font-family-heading text-[clamp(1.5rem,4vw,3rem)] font-bold text-white leading-tight">
            {expertise.title}
          </h2>
          <p className="font-family-description text-sm md:text-base font-medium text-white/80">
            {expertise.description}
          </p>
        </div>

        {/* ── Card stack ── */}
        <div className="relative w-full flex-1 min-h-0 px-4 md:px-8">
          {items.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="w-full absolute top-0 left-0 cardHeight"
              style={{
                transform: `translateY(${i * 24}px) scale(${Math.max(1 - i * 0.04, 0.8)})`,
                zIndex: N - i,
                willChange: "transform",
              }}
            >
              <ServiceCoreCard card={card} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
