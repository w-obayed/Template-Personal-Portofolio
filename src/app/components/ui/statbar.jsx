// import { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import services from "../../../API&Services/services";

// function useCountUp(target, duration = 1.6, inView = false) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!inView) return;
//     let start = null;
//     const step = (ts) => {
//       if (!start) start = ts;
//       const progress = Math.min((ts - start) / (duration * 1000), 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(eased * target));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [inView, target, duration]);
//   return count;
// }

// function StatItem({ value, suffix, label, delay }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   const count = useCountUp(value, 1.8, inView);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 18 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
//       className="flex flex-col gap-2 px-8 py-1"
//     >
//       <div
//         className="font-black leading-none tracking-tight text-white font-['Syne',sans-serif] text-[clamp(2.4rem,5vw,3.4rem)]"
//       >
//         {count}
//         <span className="text-[#e8521a]">{suffix}</span>
//       </div>
//       <div
//         className="text-gray-400 font-normal tracking-[0.01em] font-['DM_Sans',sans-serif] text-[clamp(0.85rem,1.2vw,1rem)]"
//       >
//         {label}
//       </div>
//     </motion.div>
//   );
// }

// export default function StatsBar() {
//   const STATS = services("stat");
//   return (
//     <>
//       <div className="max-w-7xl mx-auto flex items-center justify-center py-6 my-8">
//         <div
//           className="w-full flex flex-wrap flex-col md:flex-row items-center justify-between bg-[#1c1c1e] rounded-2xl px-4 py-7 border-2 border-white/5"
//         >
//           {STATS.map((stat, i) => (
//             <div key={stat.label} className="flex items-stretch">
//               <StatItem {...stat} delay={i * 0.1} />
//               {i < STATS.length - 1 && (
//                 <div className="self-stretch w-px bg-white/2 my-1" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import services from "../../../API&Services/services";

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
      className="flex flex-col gap-2 px-6 sm:px-8 py-3 sm:py-1 text-center md:text-left"
    >
      <div className="font-black leading-none tracking-tight text-white font-['Syne',sans-serif] text-4xl md:text-4xl min-[1050px]:text-7xl">
        {count}
        <span className="text-[#e8521a]">{suffix}</span>
      </div>

      <div className="text-gray-400 font-normal tracking-[0.01em] font-['DM_Sans',sans-serif] text-[clamp(0.8rem,1.3vw,1rem)]">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsBar() {
  const STATS = services("stat");

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center py-6 my-8 px-3">
      <div className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between bg-[#1c1c1e] rounded-2xl px-4 sm:px-6 py-6 sm:py-7 border-2 border-white/5">
        
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col md:flex-row items-stretch w-full md:w-auto"
          >
            <StatItem {...stat} delay={i * 0.1} />

            {i < STATS.length - 1 && (
              <>
                <div className="block md:hidden h-px w-full bg-white/10 my-2" />
              </>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}