import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 325, suffix: "+", label: "Happy Client" },
  { value: 5,   suffix: "+", label: "Years Exp." },
  { value: 100, suffix: "+", label: "Completed Project" },
  { value: 25,  suffix: "M+", label: "In tracked Revenue" },
];

function useCountUp(target, duration = 1.6, inView = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, 1.8, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className="flex flex-col gap-2 px-8 py-1"
    >
      <div
        className="font-black leading-none tracking-tight"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
          color: "#fff",
        }}
      >
        {count}
        <span style={{ color: "#e8521a" }}>{suffix}</span>
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
          color: "#9ca3af",
          fontWeight: 400,
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <>
      <div className="w-7xl mx-auto flex items-center justify-center py-6 my-8">
        <div
          className="w-full flex flex-wrap items-center justify-between"
          style={{
            background: "#1c1c1e",
            borderRadius: "16px",
            padding: "28px 16px",
          }}
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-stretch">
              <StatItem {...stat} delay={i * 0.1} />
              {i < STATS.length - 1 && (
                <div
                  className="self-stretch"
                  style={{
                    width: "1px",
                    background: "rgba(255,255,255,0.07)",
                    margin: "4px 0",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}