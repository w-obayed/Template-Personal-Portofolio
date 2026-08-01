"use client"
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useService } from "../../api/services";
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

  const { data: heroData } = useService("hero");

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Render nothing until the hero data is ready
  if (!heroData) return null;

  return (
    <>
      <section
        className="relative w-full h-full rounded-b-[50px] overflow-hidden flex flex-col items-center justify-start pt-40 pb-0 bg-[linear-gradient(160deg,#0a0a0f_0%,#0f0a1e_40%,#140d2a_70%,#0a0a0f_100%)]"
      >
        <div
          className="hidden lg:block absolute pointer-events-none right-60 bottom-0 w-full h-400 z-0 rounded-tr-[50%] rounded-br-[50%] overflow-hidden shadow-2xl bg-[linear-gradient(65deg,#000000_0%,#000000_30%,#4f46e5_60%,#9147ff_70%,#eab308_90%)]"
        />

        {/* Right large blob circle */}
        <div
          className="hidden lg:block absolute pointer-events-none -right-[40%] -bottom-[40%] w-[60%] h-250 z-0 rounded-[50%] shadow-2xl bg-[linear-gradient(140deg,#5d103f_10%,#000000_22%,#000000_100%)]"
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
            <h3
              className="text-white text-sm font-bold tracking-[0.18em] uppercase font-family-heading"
            >
              {heroData.title}
            </h3>
          </motion.div>

          {/* ── Heading ── */}
          <motion.h1
            custom={0.12}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center text-white font-black leading-[1.12] px-4 font-family-heading text-[clamp(1.2rem,5.5vw,3.9rem)] w-full max-w-250"
          >
            <span className="text-[#f97316]">{heroData.name}</span>{" "}
            {heroData.description}
          </motion.h1>

          <motion.div
            custom={0.28}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative flex items-end justify-center w-full max-w-237.5 min-h-100 md:min-h-screen"
          >
            <div
              className="absolute -bottom-[20%] md:-bottom-[20%] left-1/2 -translate-x-1/2 w-100 h-100 md:size-full rounded-full bg-[linear-gradient(170deg,#9747FF_0%,#9747ff_45%,#fe814b_80%,#fb923c_100%)] z-1"
            />
            <div
              className="absolute -bottom-[7%] md:-bottom-[7%] left-1/2 -translate-x-1/2 w-75 h-75 md:w-[75%] md:h-[75%] rounded-full bg-[#0f0a1e] z-2"
            />
            <div
              className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 size-100 md:size-full flex items-end justify-center"
            >
              <img
                src={heroData.src}
                alt={heroData.name || "Hero"}
                className="size-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}