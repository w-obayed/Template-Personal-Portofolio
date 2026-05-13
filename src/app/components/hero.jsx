"use client"

import { useEffect } from "react";
import { motion } from "framer-motion";
import services from "../../API&Services/services";
import Lenis from "lenis";
import StatsBar from "./ui/statbar";
import Image from "next/image";

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
      <div
        className="hidden lg:block absolute pointer-events-none right-60 bottom-0 w-full h-[1600px] z-0 rounded-tr-[50%] rounded-br-[50%] overflow-hidden shadow-2xl bg-[linear-gradient(65deg,#000000_0%,#000000_30%,#4f46e5_60%,#9147ff_70%,#eab308_90%)]"
      />

      {/* Right large blob circle */}
      <div
        className="hidden lg:block absolute pointer-events-none -right-[40%] -bottom-[40%] w-[60%] h-[1000px] z-0 rounded-[50%] shadow-2xl bg-[linear-gradient(140deg,#5d103f_10%,#000000_22%,#000000_100%)]"
      />

      <div className="w-full flex flex-col items-center px-4 mt-8 z-10">
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
        className="text-center text-white font-black leading-[1.12] px-4 font-['DM Sans',sans-serif] text-[clamp(1.2rem,5.5vw,4.2rem)] w-full max-w-[1000px]"
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
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[linear-gradient(170deg,#9747FF_0%,#9747ff_45%,#fe814b_80%,#fb923c_100%)] z-1"
        />

        {/* Inner dark circle — creates the ring effect */}
        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-[#0f0a1e] z-2"
        />

        {/* Placeholder person image — transparent PNG from web */}
        <div
          className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 w-full h-full flex items-end justify-center"
        >
          {/* Silhouette placeholder that matches the design aesthetic */}
          <Image
            src="/azad.png"
            alt="Azad"
            width={800}
            height={800}
            className="w-full h-full"
          />
        </div>
      </motion.div>
      </div>
    </section>
    <div className="bg-primary"><StatsBar /></div>
    </>
  );
}