"use client";
import { motion } from "framer-motion";
import services from '../../API&Services/services';

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
          className="absolute -inset-[6px] rounded-[20px] pointer-events-none blur-sm opacity-35 group-hover:opacity-90 transition-opacity duration-300"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${badge.glowColor}22, transparent 70%)` }}
        />

        {/* Card face — lifts on hover via Framer Motion */}
        <motion.div
          className="relative bg-gradient-to-br from-[#1c2338] to-[#131824] rounded-[14px] px-5 py-4 flex flex-col items-center gap-[13px] z-10 shadow-[0_5px_22px_rgba(0,0,0,0.38)]"
          whileHover={{ y: -4, boxShadow: `0 18px 45px rgba(0,0,0,0.55), 0 0 24px ${badge.glowColor}28` }}
          transition={{ duration: 0.3 }}
        >
          <p className="m-0 text-[10px] font-bold uppercase text-white font-['DM_Sans',sans-serif] tracking-[2.8px]">
            {badge.label}
          </p>
          <img className="w-full h-[40px] aspect-4/3" src={badge.logo} alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main section ────────────────────────────────────────────────────────── */
export default function TrustBadges() {
  const badge = services("badge") || [];
  
  return (
    <div
      className="bg-[radial-gradient(ellipse_at_30%_20%,#0f1728_0%,#0a0e18_60%,#0d1117_100%)] flex flex-col items-center justify-center px-7 py-[60px] font-['DM_Sans','Helvetica_Neue',sans-serif] relative overflow-hidden"
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
        className="absolute top-[10%] left-[5%] w-[520px] h-[520px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(55,90,210,0.07)_0%,transparent_70%)]"
        animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[5%] right-[5%] w-[440px] h-[440px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(200,60,60,0.05)_0%,transparent_70%)]"
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Cards */}
      <div className="flex gap-[18px] flex-wrap justify-center items-stretch z-10 w-full max-w-[1160px]">
        {badge.map((b, i) => <Card key={i} badge={b} index={i} />)}
      </div>
     
    </div>
  );
}