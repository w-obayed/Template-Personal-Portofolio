"use client";

import { useState } from "react";

const cards = [
  {
    num: "1",
    title: "Software\nDevelopment",
    desc: "We use innovative solutions to create customized software and/or improve existing software.",
    btn: "SPEAK TO OUR EXPERTS",
    quality: "Quality in focus",
    qualityDesc:
      "Through feedback and iterations, we continuously improve your app, and our work is based on the latest state of the art.",
    icons: [
      { label: "C#", color: "#9b59b6", bg: "#1a0a2e" },
      { label: "🔥", color: "#f39c12", bg: "#1a0f00" },
      { label: "GO", color: "#00acd7", bg: "#001a2e" },
      { label: "AWS", color: "#ff9900", bg: "#1a0f00" },
      { label: "~", color: "#5dade2", bg: "#0a1628" },
      { label: "V", color: "#42b883", bg: "#001a0d" },
      { label: "GQL", color: "#e535ab", bg: "#1a0020" },
      { label: "⚛", color: "#61dafb", bg: "#001a2e" },
      { label: "Node", color: "#539e43", bg: "#001a0d" },
      { label: "Redux", color: "#764abc", bg: "#0f001a" },
      { label: "~~", color: "#a855f7", bg: "#0f001a" },
      { label: "PG", color: "#336791", bg: "#00102a" },
      { label: "PHP", color: "#777bb4", bg: "#0a0a1a" },
      { label: "Java", color: "#f89820", bg: "#1a0f00" },
      { label: "▲", color: "#ffffff", bg: "#0a0a0a" },
      { label: "W", color: "#4353ff", bg: "#00001a" },
      { label: "CSS", color: "#264de4", bg: "#00001a" },
      { label: "HTML", color: "#e34f26", bg: "#1a0500" },
      { label: "S", color: "#38bdf8", bg: "#001a2e" },
      { label: "JS", color: "#f7df1e", bg: "#1a1a00" },
    ],
  },
  {
    num: "2",
    title: "UI/UX\nDesign",
    desc: "Beautiful, intuitive interfaces crafted with precision. We turn ideas into delightful digital experiences.",
    btn: "VIEW OUR PORTFOLIO",
    quality: "Design-first approach",
    qualityDesc:
      "Every pixel is intentional. We prototype, test, and iterate until the experience feels completely effortless.",
    icons: [
      { label: "Fg", color: "#a259ff", bg: "#0f001a" },
      { label: "Ai", color: "#ff7c00", bg: "#1a0a00" },
      { label: "Ps", color: "#31a8ff", bg: "#001628" },
      { label: "Xd", color: "#ff61f6", bg: "#1a0018" },
      { label: "Sk", color: "#f7b500", bg: "#1a1000" },
      { label: "Fr", color: "#0055ff", bg: "#00001a" },
      { label: "Pr", color: "#9999ff", bg: "#0a0a1a" },
      { label: "Ae", color: "#9999ff", bg: "#0a0a1a" },
      { label: "LT", color: "#ff4444", bg: "#1a0000" },
      { label: "ZP", color: "#ff5c00", bg: "#1a0a00" },
      { label: "MD", color: "#2196f3", bg: "#001628" },
      { label: "NV", color: "#00d4aa", bg: "#001a15" },
      { label: "ST", color: "#ff6b6b", bg: "#1a0000" },
      { label: "LN", color: "#0076ff", bg: "#00001a" },
      { label: "SP", color: "#7fff00", bg: "#0a1a00" },
      { label: "MX", color: "#ff9500", bg: "#1a0f00" },
      { label: "BL", color: "#ea4c89", bg: "#1a0010" },
      { label: "CV", color: "#00c4cc", bg: "#001a1a" },
      { label: "CW", color: "#ffffff", bg: "#111" },
      { label: "IN", color: "#e1306c", bg: "#1a0015" },
    ],
  },
  {
    num: "3",
    title: "Cloud &\nDevOps",
    desc: "Scale with confidence. We architect, deploy and manage cloud infrastructure for maximum reliability.",
    btn: "EXPLORE SOLUTIONS",
    quality: "Always online",
    qualityDesc:
      "99.9% uptime guaranteed. Automated pipelines, smart monitoring and rapid incident response included.",
    icons: [
      { label: "AWS", color: "#ff9900", bg: "#1a0f00" },
      { label: "GCP", color: "#4285f4", bg: "#001628" },
      { label: "AZ", color: "#0089d6", bg: "#001628" },
      { label: "DO", color: "#0080ff", bg: "#00001a" },
      { label: "K8s", color: "#326ce5", bg: "#001628" },
      { label: "🐳", color: "#2496ed", bg: "#001628" },
      { label: "TF", color: "#7b42bc", bg: "#0f001a" },
      { label: "ANS", color: "#ee0000", bg: "#1a0000" },
      { label: "CI", color: "#f8cb2e", bg: "#1a1400" },
      { label: "GH", color: "#ffffff", bg: "#111" },
      { label: "GL", color: "#fc6d26", bg: "#1a0500" },
      { label: "NGX", color: "#009639", bg: "#001a0a" },
      { label: "RDS", color: "#527fff", bg: "#00001a" },
      { label: "S3", color: "#569a31", bg: "#001a0a" },
      { label: "CDN", color: "#f48120", bg: "#1a0a00" },
      { label: "VPN", color: "#00bcd4", bg: "#001a1a" },
      { label: "ELK", color: "#f04e98", bg: "#1a0015" },
      { label: "GRF", color: "#f46800", bg: "#1a0500" },
      { label: "PRM", color: "#e6522c", bg: "#1a0500" },
      { label: "VLT", color: "#000000", bg: "#1a1a1a" },
    ],
  },
  {
    num: "4",
    title: "AI & Machine\nLearning",
    desc: "Harness the power of data. We build intelligent systems that learn, adapt and create real business value.",
    btn: "GET STARTED",
    quality: "Data-driven results",
    qualityDesc:
      "From NLP to computer vision, we deploy production-ready AI models tailored precisely to your domain.",
    icons: [
      { label: "PT", color: "#ee4c2c", bg: "#1a0500" },
      { label: "TF", color: "#ff6f00", bg: "#1a0a00" },
      { label: "SK", color: "#f7931e", bg: "#1a0f00" },
      { label: "HF", color: "#ffd21e", bg: "#1a1400" },
      { label: "OAI", color: "#ffffff", bg: "#111" },
      { label: "CV", color: "#5c85d6", bg: "#001628" },
      { label: "NLP", color: "#00d4aa", bg: "#001a15" },
      { label: "LLM", color: "#a855f7", bg: "#0f001a" },
      { label: "RAG", color: "#38bdf8", bg: "#001a2e" },
      { label: "PD", color: "#150458", bg: "#0a0a1a" },
      { label: "NP", color: "#4dabf7", bg: "#001628" },
      { label: "SP", color: "#ff6b6b", bg: "#1a0000" },
      { label: "KRS", color: "#d00000", bg: "#1a0000" },
      { label: "MLF", color: "#0194e2", bg: "#001628" },
      { label: "DBR", color: "#ff3621", bg: "#1a0500" },
      { label: "VTX", color: "#4285f4", bg: "#001628" },
      { label: "SM", color: "#ff9900", bg: "#1a0f00" },
      { label: "AML", color: "#0089d6", bg: "#001628" },
      { label: "WNB", color: "#ffbe00", bg: "#1a1400" },
      { label: "COL", color: "#f9ab00", bg: "#1a1000" },
    ],
  },
];

export default function ModernSlider() {
  const [current, setCurrent] = useState(0);

  const goTo = (index) => {
    setCurrent((index + cards.length) % cards.length);
  };

  const card = cards[current];
  const titleLines = card.title.split("\n");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* Main Card */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0d0f14] border border-white/5"
          style={{ minHeight: "420px" }}>

          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex h-full" style={{ minHeight: "420px" }}>
            {/* LEFT SIDE */}
            <div className="flex-1 flex flex-col justify-center px-12 py-12 gap-5">
              {/* Number */}
              <div className="text-7xl font-black text-white/10 leading-none select-none">
                {card.num}
              </div>

              {/* Title */}
              <div className="text-4xl font-bold text-white leading-tight">
                {titleLines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                {card.desc}
              </p>

              {/* Button */}
              <button className="flex items-center gap-2 border border-white/25 rounded-full px-5 py-2.5 text-white text-xs font-semibold tracking-widest hover:border-white/50 hover:bg-white/5 transition-all w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                {card.btn}
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-72 flex flex-col justify-center gap-4 pr-8 py-8">
              {/* Quality Box */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white text-sm font-semibold mb-1.5">{card.quality}</p>
                <p className="text-white/45 text-xs leading-relaxed">{card.qualityDesc}</p>
              </div>

              {/* Icons Grid — 5 columns × 4 rows */}
              <div className="grid grid-cols-5 gap-1.5">
                {card.icons.map((icon, i) => (
                  <div
                    key={i}
                    className="rounded-xl flex items-center justify-center text-xs font-bold"
                    style={{
                      width: "46px",
                      height: "46px",
                      background: icon.bg,
                      color: icon.color,
                      border: "0.5px solid rgba(255,255,255,0.08)",
                      fontSize: "10px",
                    }}
                  >
                    {icon.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Up Arrow */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-all text-xs z-20"
          >
            ▲
          </button>

          {/* Down Arrow */}
          <button
            onClick={() => goTo(current + 1)}
            className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/20 transition-all text-xs z-20"
          >
            ▼
          </button>

          {/* Dot Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all ${
                  i === current
                    ? "w-4 h-2 bg-white"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}