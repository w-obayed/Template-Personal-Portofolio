"use client";

import { motion } from "framer-motion";

function GradientButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative p-px rounded-full overflow-hidden bg-transparent shadow-2xl"
    >
      {/* ── Comet 1: clockwise, starts at 0° ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(106,137,204,0.5) 50deg, rgba(220,221,225,0.95) 80deg, rgba(255,255,255,1) 95deg, rgba(220,221,225,0.95) 110deg, rgba(106,137,204,0.5) 140deg, transparent 190deg)",
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Comet 2: same speed/direction, locked 180° behind comet 1 ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(106,137,204,0.5) 50deg, rgba(220,221,225,0.95) 80deg, rgba(255,255,255,1) 95deg, rgba(220,221,225,0.95) 110deg, rgba(106,137,204,0.5) 140deg, transparent 190deg)",
        }}
        initial={{ rotate: 180 }}
        animate={{ rotate: 540 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Inner button face ── */}
      <motion.div
        className="relative rounded-full px-5 py-2 font-[DM_Sans] bg-linear-to-r from-[#6a89cc] to-[#dcdde1] font-medium text-base text-black z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.div>
    </button>
  );
}

export default GradientButton;
