"use client"

import { useEffect } from "react";
import { motion } from "framer-motion";
import services from "../../API&Services/services";
import Lenis from "lenis";

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
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-start pt-24 pb-0 font-['DM_Sans',sans-serif] bg-[linear-gradient(160deg,#0a0a0f_0%,#0f0a1e_40%,#140d2a_70%,#0a0a0f_100%)]"
    >
      {/* ── Background ambient blobs ── */}

      {/* Top-right orange/purple ambient */}
      <div
        className="absolute pointer-events-none left-0 bottom-0 right-[100px] w-[1500px] h-[1500px] rounded-[50%] overflow-hidden shadow-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(194,100,30,0.55)_0%,rgba(120,30,180,0.35)_55%,transparent_80%)]"
      />

      {/* Right large blob circle */}
      <div
        className="absolute pointer-events-none -right-[20%] -bottom-[40%] w-[800px] h-[800px] rounded-[50%] shadow-2xl bg-[linear-gradient(180deg,rgba(80,20,160,0.5)_0%,rgba(168,50,200,0.4)_60%,transparent_100%)]"
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
        className="relative mt-14 flex items-end justify-center w-full max-w-[560px] min-h-[420px]"
      >
        {/* Glow behind */}
        <div className="absolute -bottom-[40px] left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35)_0%,transparent_70%)] z-0 pointer-events-none" />

        {/* Outer gradient ring */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[linear-gradient(170deg,#7c3aed_0%,#c026d3_45%,#f472b6_80%,#fb923c_100%)] z-1"
        />

        {/* Inner dark circle — creates the ring effect */}
        <div
          className="absolute bottom-[28px] left-1/2 -translate-x-1/2 w-[364px] h-[364px] rounded-full bg-[#0f0a1e] z-2"
        />

        {/* Placeholder person image — transparent PNG from web */}
        <div
          className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 w-[380px] h-[440px] flex items-end justify-center"
        >
          {/* Silhouette placeholder that matches the design aesthetic */}
          <svg
            viewBox="0 0 320 440"
            width="320"
            height="440"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_24px_rgba(168,85,247,0.4)]"
          >
            <defs>
              <radialGradient id="skinGrad" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#c8a882" />
                <stop offset="100%" stopColor="#8a6040" />
              </radialGradient>
              <radialGradient id="shirtGrad" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#c8c4be" />
                <stop offset="100%" stopColor="#9e9890" />
              </radialGradient>
              <linearGradient id="tealOverlay" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2a1a0a" />
                <stop offset="100%" stopColor="#1a0f05" />
              </linearGradient>
            </defs>

            {/* Body / shirt */}
            <ellipse cx="160" cy="430" rx="130" ry="60" fill="url(#shirtGrad)" />
            <rect x="50" y="300" width="220" height="160" rx="30" fill="url(#shirtGrad)" />
            <rect x="30" y="295" width="80" height="120" rx="20" fill="url(#shirtGrad)" />
            <rect x="210" y="295" width="80" height="120" rx="20" fill="url(#shirtGrad)" />

            {/* Neck */}
            <rect x="136" y="255" width="48" height="60" rx="10" fill="url(#skinGrad)" />

            {/* Head */}
            <ellipse cx="160" cy="210" rx="78" ry="90" fill="url(#skinGrad)" />

            {/* Beard */}
            <ellipse cx="160" cy="268" rx="58" ry="35" fill="#3a2010" opacity="0.95" />
            <ellipse cx="135" cy="255" rx="28" ry="22" fill="#3a2010" opacity="0.9" />
            <ellipse cx="185" cy="255" rx="28" ry="22" fill="#3a2010" opacity="0.9" />
            <ellipse cx="160" cy="250" rx="42" ry="20" fill="#4a2a14" />

            {/* Mustache */}
            <ellipse cx="160" cy="234" rx="28" ry="10" fill="#2a1408" />

            {/* Eyes */}
            <ellipse cx="133" cy="198" rx="13" ry="10" fill="#1a0f06" />
            <ellipse cx="187" cy="198" rx="13" ry="10" fill="#1a0f06" />
            <ellipse cx="133" cy="197" rx="5" ry="5" fill="#3a2010" />
            <ellipse cx="187" cy="197" rx="5" ry="5" fill="#3a2010" />
            <ellipse cx="135" cy="195" rx="2" ry="2" fill="white" opacity="0.7" />
            <ellipse cx="189" cy="195" rx="2" ry="2" fill="white" opacity="0.7" />

            {/* Eyebrows */}
            <path d="M120 182 Q133 175 148 181" stroke="#2a1408" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M172 181 Q187 175 200 182" stroke="#2a1408" strokeWidth="4" fill="none" strokeLinecap="round" />

            {/* Nose */}
            <path d="M153 205 Q148 225 155 230 Q160 233 165 230 Q172 225 167 205" stroke="#c09060" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Hair */}
            <ellipse cx="160" cy="145" rx="80" ry="55" fill="url(#hairGrad)" />
            <path d="M82 190 Q75 150 88 130 Q100 110 115 118" fill="url(#hairGrad)" />
            <path d="M238 190 Q245 150 232 130 Q220 110 205 118" fill="url(#hairGrad)" />
            <path d="M100 130 Q110 100 160 95 Q210 100 220 130" fill="url(#hairGrad)" />

            {/* Teal/purple color overlay for atmosphere */}
            <ellipse cx="160" cy="280" rx="130" ry="180" fill="url(#tealOverlay)" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}