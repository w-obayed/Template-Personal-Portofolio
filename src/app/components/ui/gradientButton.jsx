"use client";

import { motion } from "framer-motion";

function GradientButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative p-[1.5px] rounded-xl bg-transparent overflow-hidden"
    >
      {/* Animated Gradient Border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, #22c55e, #eab308, #a855f7, #22c55e)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner Button */}
      <motion.div
        className="relative rounded-xl px-5 py-2 bg-white font-semibold text-base text-black z-10"
        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        {children}
      </motion.div>
    </button>
  );
}

export default GradientButton;
