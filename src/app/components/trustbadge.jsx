"use client";
import { motion } from "framer-motion";
import { useService } from '../../api/services';
import BadgeImage from "./ui/badgeImage";

/* ── Card ────────────────────────────────────────────────────────────────── */


/* ── Main section ────────────────────────────────────────────────────────── */
export default function TrustBadges() {
  const { data: badge = [] } = useService("badge");
  
  return (
    <div
      className="flex flex-col items-center justify-center px-7 py-15 relative overflow-hidden bg"
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
        className="absolute top-[10%] left-[5%] w-130 h-130 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(55,90,210,0.07)_0%,transparent_70%)]"
        animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[5%] right-[5%] w-110 h-110 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(200,60,60,0.05)_0%,transparent_70%)]"
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Cards */}
      <div className="flex gap-4.5 flex-wrap justify-center items-stretch z-10 w-full max-w-290 max-sm:max-w-full">
        {(Array.isArray(badge) ? badge : []).map((b, i) => <BadgeImage key={i} badge={b} index={i} />)}
      </div>
     
    </div>
  );
}