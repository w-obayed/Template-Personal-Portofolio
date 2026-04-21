"use client";

import { useState, useRef } from "react";

// ✅ শুধু এই array-তে value দাও — বাকি সব auto card হয়ে যাবে
const projects = [
  {
    id: 1,
    client: "KTM",
    category: "Case study",
    bgColor: "#7c2c00",        // card background color
    accentColor: "#ff6a00",    // glow / accent color
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    imageAlt: "KTM motorcycle app on laptop and phone",
  },
  {
    id: 2,
    client: "Vetain",
    category: "Case study",
    bgColor: "#3a3830",
    accentColor: "#b5a48a",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    imageAlt: "Vetain mobile app screens",
  },
  {
    id: 3,
    client: "FinFlow",
    category: "Case study",
    bgColor: "#0a2a4a",
    accentColor: "#2196f3",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    imageAlt: "FinFlow dashboard",
  },
  {
    id: 4,
    client: "Medica",
    category: "Case study",
    bgColor: "#1a3a2a",
    accentColor: "#22c55e",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    imageAlt: "Medica health app",
  },
  {
    id: 5,
    client: "Archi",
    category: "Case study",
    bgColor: "#2a1a3a",
    accentColor: "#a855f7",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&q=80",
    imageAlt: "Archi design platform",
  },
];

// ✅ Card Template — এটাই সব কার্ডের জন্য ব্যবহার হয়
function ProjectCard({ project, style, onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-0 rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{
        width: "420px",
        height: "420px",
        background: project.bgColor,
        boxShadow: `0 0 60px ${project.accentColor}33`,
        transition: "all 0.55s cubic-bezier(.4,0,.2,1)",
        ...style,
      }}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-white text-lg font-semibold tracking-wide">
          {project.client}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-white/60 text-sm">{project.category}</span>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center border border-white/20"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Card Image */}
      <div className="mx-3 rounded-xl overflow-hidden" style={{ height: "340px" }}>
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default function WorkSlider() {
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef(null);
  const total = projects.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Position each card relative to current
  function getCardStyle(index) {
    const diff = ((index - current + total) % total);
    // Convert to signed: -2, -1, 0, 1, 2
    const signed = diff > total / 2 ? diff - total : diff;

    if (signed === 0) {
      // Active / center card
      return {
        left: "50%",
        transform: "translateX(-50%) scale(1)",
        zIndex: 10,
        opacity: 1,
        filter: "brightness(1)",
      };
    } else if (signed === 1) {
      // Right card — partially visible
      return {
        left: "50%",
        transform: "translateX(32%) scale(0.88)",
        zIndex: 7,
        opacity: 0.75,
        filter: "brightness(0.6)",
      };
    } else if (signed === -1) {
      // Left card — partially visible
      return {
        left: "50%",
        transform: "translateX(-132%) scale(0.88)",
        zIndex: 7,
        opacity: 0.75,
        filter: "brightness(0.6)",
      };
    } else if (signed === 2) {
      return {
        left: "50%",
        transform: "translateX(80%) scale(0.76)",
        zIndex: 4,
        opacity: 0.3,
        filter: "brightness(0.4)",
      };
    } else if (signed === -2) {
      return {
        left: "50%",
        transform: "translateX(-180%) scale(0.76)",
        zIndex: 4,
        opacity: 0.3,
        filter: "brightness(0.4)",
      };
    } else {
      return {
        left: "50%",
        transform: "translateX(-50%) scale(0.6)",
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none",
      };
    }
  }

  // Drag / swipe support
  const onDragStart = (e) => {
    dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
  };
  const onDragEnd = (e) => {
    if (dragStartX.current === null) return;
    const endX = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStartX.current = null;
  };

  return (
    <div className="min-h-screen bg-[#0e1016] flex flex-col justify-center overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(30,30,50,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-0">

        {/* LEFT TEXT */}
        <div className="lg:w-[38%] shrink-0 flex flex-col gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            We let{" "}
            <span className="text-orange-400">our work</span>
            <br />
            speak for itself.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Our experts develop customized native apps and software solutions
            using innovative technologies for your success.
          </p>
          <button className="flex items-center gap-2 border border-white/25 rounded-full px-5 py-2.5 text-white text-xs font-semibold tracking-widest hover:border-white/50 hover:bg-white/5 transition-all w-fit">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            GET IN TOUCH NOW
          </button>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-1.5 ml-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-2 bg-white"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — CARDS SLIDER */}
        <div className="lg:flex-1 w-full">
          <div
            className="relative"
            style={{ height: "440px" }}
            onMouseDown={onDragStart}
            onMouseUp={onDragEnd}
            onTouchStart={onDragStart}
            onTouchEnd={onDragEnd}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                style={getCardStyle(index)}
                onClick={() => {
                  const diff = ((index - current + total) % total);
                  const signed = diff > total / 2 ? diff - total : diff;
                  if (signed === 1) next();
                  else if (signed === -1) prev();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}