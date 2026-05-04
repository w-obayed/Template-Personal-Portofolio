"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Badge data ──────────────────────────────────────────────────────────── */
const badges = [
  {
    label: "WON AT",
    glowColor: "#C9A84C",
    logo: (
      <div className="flex items-center gap-[9px]">
        <div className="w-10 h-10 border-2 border-[#C9A84C] rounded-full flex items-center justify-center shrink-0">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M7 18 C5 13 6 8 10 8 C8 11 9 15 12 16"  stroke="#C9A84C" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <path d="M7 22 C5 26 7 30 11 29 C9 26 10 22 13 21" stroke="#C9A84C" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <path d="M29 18 C31 13 30 8 26 8 C28 11 27 15 24 16"  stroke="#C9A84C" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <path d="M29 22 C31 26 29 30 25 29 C27 26 26 22 23 21" stroke="#C9A84C" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <text x="18" y="21" textAnchor="middle" fill="#C9A84C" fontSize="10" fontWeight="bold" fontFamily="serif">W</text>
          </svg>
        </div>
        <div>
          <p className="m-0 text-[9px] text-[#C9A84C] font-bold leading-[1.4]" style={{ letterSpacing: "1.2px" }}>GERMAN WEB</p>
          <p className="m-0 text-[9px] text-[#C9A84C] font-bold leading-[1.4]" style={{ letterSpacing: "1.2px" }}>AWARDS</p>
          <p className="m-0 text-[7px] text-[#C9A84C]/55 mt-0.5" style={{ letterSpacing: "0.8px" }}>OFFICIAL WINNER</p>
        </div>
      </div>
    ),
  },
  {
    label: "AS KNOWN FROM",
    glowColor: "#E8A020",
    logo: (
      <div className="flex items-center gap-[10px]">
        <div className="w-[38px] h-[38px] bg-[#E8A020] rounded-[7px] grid grid-cols-2 grid-rows-2 p-[5px] gap-[3px] shrink-0">
          <div className="bg-[#1a1a1a] rounded-[2px]" />
          <div className="bg-[#1a1a1a] rounded-[2px]" />
          <div className="bg-[#1a1a1a] rounded-[2px]" />
          <div className="border-2 border-[#1a1a1a] rounded-[2px]" />
        </div>
        <div>
          <p className="m-0 text-[12px] text-white font-extrabold leading-[1.25]" style={{ letterSpacing: "0.3px" }}>MISSION</p>
          <p className="m-0 text-[12px] text-white font-extrabold leading-[1.25]" style={{ letterSpacing: "0.3px" }}>TOP FIVE</p>
        </div>
      </div>
    ),
  },
  {
    label: "LISTED AT",
    glowColor: "#e0e0e0",
    logo: (
      <div className="flex flex-col items-center gap-[3px]">
        <div className="bg-white rounded-[5px] px-3 pt-[5px] pb-[6px] flex flex-col items-center">
          <p className="m-0 text-[7px] text-[#444] font-semibold mb-0.5" style={{ letterSpacing: "1.2px" }}>Top-Bewertung</p>
          <div className="flex items-center gap-[5px]">
            <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="5,1 6.2,3.8 9,4.1 7,6 7.6,9 5,7.5 2.4,9 3,6 1,4.1 3.8,3.8" fill="#aaa"/></svg>
            <span className="text-[15px] font-bold text-[#111] font-['DM_Sans',sans-serif]" style={{ letterSpacing: "0.3px" }}>sortlist</span>
            <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="5,1 6.2,3.8 9,4.1 7,6 7.6,9 5,7.5 2.4,9 3,6 1,4.1 3.8,3.8" fill="#aaa"/></svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "PARTNER OF",
    glowColor: "#4A90D9",
    logo: (
      <div className="flex items-center gap-[10px]">
        <div
          className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg,#2a5caa,#1a3d7c)", boxShadow: "0 2px 10px rgba(74,144,217,0.35)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9.5" stroke="white" strokeWidth="1.2"/>
            <ellipse cx="12" cy="12" rx="4.5" ry="9.5" stroke="white" strokeWidth="1.2"/>
            <line x1="2.5" y1="12" x2="21.5" y2="12" stroke="white" strokeWidth="1.2"/>
            <line x1="4.5" y1="7"  x2="19.5" y2="7"  stroke="white" strokeWidth="0.9"/>
            <line x1="4.5" y1="17" x2="19.5" y2="17" stroke="white" strokeWidth="0.9"/>
          </svg>
        </div>
        <div>
          <p className="m-0 text-[11px] text-white font-bold leading-[1.3]" style={{ letterSpacing: "0.4px" }}>SENAT DER</p>
          <p className="m-0 text-[11px] text-white font-bold leading-[1.3]" style={{ letterSpacing: "0.4px" }}>WIRTSCHAFT</p>
        </div>
      </div>
    ),
  },
  {
    label: "PARTNER OF",
    glowColor: "#E84040",
    logo: (
      <div className="flex items-center gap-2">
        <div>
          <p className="m-0 text-[12px] text-white font-extrabold leading-[1.2]" style={{ letterSpacing: "0.2px" }}>FORTSCHRITT</p>
          <p className="m-0 text-[12px] text-white font-extrabold leading-[1.2]" style={{ letterSpacing: "0.2px" }}>CENTER</p>
          <p className="m-0 text-[7px] text-white/40 mt-[3px]" style={{ letterSpacing: "1px" }}>by Mittelstand</p>
        </div>
        <div className="flex flex-col gap-[3px] ml-[2px]">
          {[16, 11, 7].map((w, i) => (
            <div key={i} className="h-[7px] bg-[#E84040]" style={{ width: `${w}px`, clipPath: "polygon(0 0,100% 50%,0 100%)" }} />
          ))}
        </div>
      </div>
    ),
  },
];

/* ── Card ────────────────────────────────────────────────────────────────── */
function Card({ badge, index }) {
  return (
    /* 1 — Entry (opacity + scale spring) */
    <motion.div
      className="relative flex-1 min-w-[175px] max-w-[215px]"
      initial={{ opacity: 0, scale: 0.93 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, delay: index * 0.13, type: "spring", bounce: 0.4 }}
    >
      {/* 2 — Float (infinite y oscillation) */}
      <motion.div
        className="group relative"
        animate={{ y: [0, -(7 + index * 0.5), 0] }}
        transition={{ duration: 3.8 + index * 0.4, ease: "easeInOut", repeat: Infinity, delay: index * 0.5 }}
      >
        {/* Rotating conic-gradient border — requires CSS @property, kept as style */}
        <div
          className="absolute -inset-[1.5px] rounded-[16px] p-[1.5px] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `conic-gradient(from var(--angle,0deg), transparent 55%, ${badge.glowColor}cc 70%, ${badge.glowColor} 75%, ${badge.glowColor}cc 80%, transparent 45%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            animation: `rotateBorder 3.5s linear ${index * 0.55}s infinite`,
          }}
        />

        {/* Outer glow */}
        <div
          className="absolute -inset-[6px] rounded-[20px] pointer-events-none blur-[8px] opacity-35 group-hover:opacity-90 transition-opacity duration-300"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${badge.glowColor}22, transparent 70%)` }}
        />

        {/* Card face — lifts on hover via Framer Motion */}
        <motion.div
          className="relative bg-gradient-to-br from-[#1c2338] to-[#131824] rounded-[14px] px-5 pt-[18px] pb-[22px] flex flex-col items-center gap-[13px] z-10"
          style={{ boxShadow: "0 5px 22px rgba(0,0,0,0.38)" }}
          whileHover={{ y: -4, boxShadow: `0 18px 45px rgba(0,0,0,0.55), 0 0 24px ${badge.glowColor}28` }}
          transition={{ duration: 0.3 }}
        >
          <p className="m-0 text-[8px] font-bold uppercase text-white/[0.36] font-['DM_Sans',sans-serif]" style={{ letterSpacing: "2.8px" }}>
            {badge.label}
          </p>
          <div className="flex items-center justify-center min-h-[52px] w-full">
            {badge.logo}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main section ────────────────────────────────────────────────────────── */
export default function TrustBadges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, ease: "easeOut", delay },
  });

  return (
    <div
      ref={ref}
      className="min-h-screen bg-[radial-gradient(ellipse_at_30%_20%,#0f1728_0%,#0a0e18_60%,#0d1117_100%)] flex flex-col items-center justify-center px-7 py-[60px] font-['DM_Sans','Helvetica_Neue',sans-serif] relative overflow-hidden"
    >
      {/* CSS-only: @property for conic-gradient angle animation */}
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rotateBorder { to { --angle: 360deg; } }
      `}</style>

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(55,90,210,0.07) 0%,transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[5%] right-[5%] w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(200,60,60,0.05) 0%,transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Header */}
      <div className="text-center mb-[50px] z-10">
        <motion.p
          className="text-[9px] font-bold uppercase text-white/[0.28] tracking-[4.5px] mb-2.5"
          {...fadeUp(0.1)}
        >
          TRUSTED &amp; RECOGNIZED
        </motion.p>
        <motion.h2
          className="text-[clamp(26px,4vw,42px)] font-extrabold text-white mb-2.5 tracking-[-1px] leading-[1.1]"
          {...fadeUp(0.25)}
        >
          Awards &amp; Partnerships
        </motion.h2>
        <motion.p
          className="text-[14px] text-white/[0.36] max-w-[370px] mx-auto leading-[1.65]"
          {...fadeUp(0.4)}
        >
          Recognized by industry leaders and trusted by top-tier organizations worldwide.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="flex gap-[18px] flex-wrap justify-center items-stretch z-10 w-full max-w-[1160px]">
        {badges.map((b, i) => <Card key={i} badge={b} index={i} />)}
      </div>

      {/* Footer divider */}
      <motion.div
        className="mt-[52px] flex items-center gap-4 z-10 w-full max-w-[760px]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/[0.07]" />
        <span className="text-[9px] tracking-[3px] text-white/[0.16] uppercase">verified</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/[0.07]" />
      </motion.div>
    </div>
  );
}