import { motion } from "framer-motion";
import Image from "next/image";

export default function BadgeImage({ badge, index }) {
  return (
    /* 1 — Entry (opacity + scale spring) */
    <motion.div
      className="relative flex-1 min-w-43.75 max-w-53.75"
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
          className="absolute -inset-1.5 rounded-[20px] pointer-events-none blur-sm opacity-35 group-hover:opacity-90 transition-opacity duration-300"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${badge.glowColor}22, transparent 70%)` }}
        />

        {/* Card face — lifts on hover via Framer Motion */}
        <motion.div
          className="relative bg-gray-800/20 h-28 rounded-[14px] px-5 py-4 flex flex-col items-center justify-center text-center gap-3.25 z-10 shadow-[0_5px_22px_rgba(0,0,0,0.38)] border-[.5px] border-gray-500/20"
          whileHover={{ y: -4, boxShadow: `0 18px 45px rgba(0,0,0,0.55), 0 0 24px ${badge.glowColor}28` }}
          transition={{ duration: 0.3 }}
        >
          <p className="m-0 text-[10px] font-bold uppercase text-white font-family-description tracking-[2.8px]">
            {badge.label}
          </p>
          <Image
            className="w-full h-full overflow-hidden aspect-4/3 object-contain"
            src={badge.logo}
            alt={badge.label || "Badge Logo"}
            width={220}
            height={90}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}