"use client"

import { useEffect } from "react";
import { motion } from "framer-motion";
import services from "../../API&Services/services";
import Lenis from "lenis";
import StatsBar from "./ui/statbar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HeroSection() {
  const heroData = services("hero") || [];

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    // Fallback RAF if autoRaf relies on an external ticker not present in this setup:
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
    <section
      className="relative w-full min-h-screen rounded-b-[50px] overflow-hidden flex flex-col items-center justify-start pt-24 pb-0 font-['DM_Sans',sans-serif] bg-[linear-gradient(160deg,#0a0a0f_0%,#0f0a1e_40%,#140d2a_70%,#0a0a0f_100%)]"
    >
      {/* ── Background ambient blobs ── */}

      {/* Top-right orange/purple ambient */}
      <div
        className="absolute pointer-events-none right-60 bottom-0 w-[1500px] h-[1500px] rounded-[50%] overflow-hidden shadow-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(194,100,30,0.55)_0%,rgba(120,30,180,0.35)_55%,transparent_80%)]"
      />

      {/* Right large blob circle */}
      <div
        className="absolute pointer-events-none -right-[40%] -bottom-[40%] w-[1000px] h-[1000px] rounded-[50%] shadow-2xl bg-[linear-gradient(180deg,rgba(80,20,160,0.5)_0%,rgba(168,50,200,0.4)_60%,transparent_100%)]"
      />

      {/* ── Badge ── */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-6 px-5 py-2 border-[1.5px] border-white/55 rounded-[6px]"
      >
        <span
          className="text-white text-sm font-bold tracking-[0.18em] uppercase font-['DM Sans',sans-serif]"
        >
         {heroData[0]?.title}
        </span>
      </motion.div>

      {/* ── Heading ── */}
      <motion.h1
        custom={0.12}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center text-white font-black leading-[1.12] px-4 font-['DM Sans',sans-serif] text-[clamp(2.2rem,5.5vw,4.2rem)] max-w-[1000px]"
      >
        <span className="text-[#f97316]">{heroData[0]?.name}</span>{" "}
        {heroData[0]?.description}
      </motion.h1>

      {/* ── Image Stage ── */}
      <motion.div
        custom={0.28}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative flex items-end justify-center w-full max-w-[800px] min-h-[720px]"
      >
        {/* Glow behind */}
        <div className="absolute -bottom-100 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35)_0%,transparent_70%)] z-0 pointer-events-none" />

        {/* Outer gradient ring */}
        <div
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[linear-gradient(170deg,#7c3aed_0%,#c026d3_45%,#f472b6_80%,#fb923c_100%)] z-1"
        />

        {/* Inner dark circle — creates the ring effect */}
        <div
          className="absolute -bottom-22 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#0f0a1e] z-2"
        />

        {/* Placeholder person image — transparent PNG from web */}
        <div
          className="absolute z-10 -bottom-5 left-1/2 -translate-x-1/2 w-full h-full flex items-end justify-center"
        >
          {/* Silhouette placeholder that matches the design aesthetic */}
          <img src="https://www.pngarts.com/files/2/Cristiano-Ronaldo-PNG-Picture.png" alt="Cristiano Ronaldo PNG Picture" />
        </div>
      </motion.div>
    </section>
    <div className="bg-[linear-gradient(135deg,#a54fe7,#f57c5b,#ce66a0,#b759c8,#e77473,#c25fb5,#db6d89,#9948fb)]"><StatsBar /></div>
    </>
  );
}