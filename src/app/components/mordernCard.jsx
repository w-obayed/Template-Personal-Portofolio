"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import SoftwareDevelopmentCard from "./ui/softwareDevelopmentCard";


const cards = [
  {
    num: "1",
    title: "Software\nDevelopment",
    desc: "We use innovative solutions to create customized software and/or improve existing software.",
    btn: "SPEAK TO OUR EXPERTS",
    quality: "Quality in focus",
    qualityDesc:
      "Through feedback and iterations, we continuously improve your app, and our work is based on the latest state of the art.",
    backgroundImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&q=80",
  },
  {
    num: "2",
    title: "UI/UX\nDesign",
    desc: "Beautiful, intuitive interfaces crafted with precision. We turn ideas into delightful digital experiences.",
    btn: "VIEW OUR PORTFOLIO",
    quality: "Design-first approach",
    qualityDesc:
      "Every pixel is intentional. We prototype, test, and iterate until the experience feels completely effortless.",
      backgroundImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&q=80",
  },
  {
    num: "3",
    title: "IT consulting / digitization",
    desc: "Scale with confidence. We architect, deploy and manage cloud infrastructure for maximum reliability.",
    btn: "EXPLORE SOLUTIONS",
    quality: "Always online",
    qualityDesc:
      "99.9% uptime guaranteed. Automated pipelines, smart monitoring and rapid incident response included.",
      backgroundImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=900&q=80",
  },
];

// ─── Main component ─────────────────────────────────────────────────────────
export default function VerticalSlider() {
  const sectionRef = useRef(null);
  const lenisRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    lenisRef.current = lenis;

    const raf = (t) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const total = window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top / total, 0), 1);
      setProgress(scrolled);
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div ref={sectionRef} className="h-[200vh] bg-black pt-16">
      <div className="flex flex-col items-center justify-center gap-4 z-10 w-full max-w-[760px] mx-auto text-center">
          <p className="font-['DM_Sans',sans-serif] text-base font-bold tracking-[0.12em] text-muted-foreground">our service</p>
          <h1 className="font-['DM_Sans',sans-serif] text-4xl font-bold text-white leading-tight">Not just a software partner , but rather a holistic solution.</h1>
        </div>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full h-[600px]">
          {cards.map((card, i) => {
            const totalTransitions = cards.length - 1;
            const relativeProgress = progress * totalTransitions;
            const diff = i - relativeProgress;

            let y = 0;
            let scale = 1;
            const opacity = 1; 

            if (diff > 0) {
              y = diff * 20; 
              scale = 1 - diff * 0.05;
            } else {
              
              y = diff * 620;
              scale = 1;
            }

            return (
              <SoftwareDevelopmentCard
                key={i}
                card={card}
                style={{
                  transform: `translateY(${y}px) scale(${scale})`,
                  opacity,
                  zIndex: cards.length - i,
                }}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
}
