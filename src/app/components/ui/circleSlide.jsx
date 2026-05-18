export default function CircleSlide({ phases, activePhaseIndex, containerH }) {
  const radius = Math.round(containerH * 0.37);

  return (
    <div
      className="relative w-full flex items-center justify-center select-none"
      style={{ height: containerH }}
    >
      {/* OUTER GLOW */}
      <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl" />

      {/* OUTER RING */}
      <div
        className="absolute rounded-full drop-shadow-lg bg-white/5 backdrop-blur-xl h-[94%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* SVG DASH CIRCLE */}
      <svg
        className="absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 h-[94%] aspect-square"
        aria-hidden="true"
      >
        <circle
          cx="50%" cy="50%"
          r={radius}
          className="fill-transparent stroke-slate-400 stroke-2"
          strokeDasharray="4 12"
        />
      </svg>

      {/* MIDDLE CIRCLES */}
      <div
        className="absolute rounded-full shadow-[inset_0_0_40px_rgba(17,24,39,0.9)] bg-white/3 h-[72%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="absolute rounded-full bg-white/3 h-[50%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[inset_0_8px_16px_rgba(17,24,39,0.8)]"
      />

      {/* CENTER */}
   <div
  className="absolute top-1/2 left-1/2 h-[24%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)]"
/>
      <div  
        className="absolute rounded-full bg-gray-500/40 shadow-xl/30 backdrop-blur-xl h-[18%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="absolute rounded-full bg-gray-500/50 shadow-xl h-[12%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* ORBIT NODES */}
      {phases.map((item, i) => {
        const angle    = (i / phases.length) * 2 * Math.PI - Math.PI / 2;
        const isActive = i === activePhaseIndex;
        const x        = Math.cos(angle) * radius;
        const y        = Math.sin(angle) * radius;

        return (
          <div
            key={item.id}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
            }}
          >
            <div
              className={`px-4 py-2 rounded-xl text-sm font-medium text-nowrap shadow-xl/20 transition-all duration-500 backdrop-blur-md ${
                isActive
                  ? 'bg-slate-400 text-white text-3xl font-bold py-3 px-7 shadow-[0_0_35px_rgba(59,130,246,0.6)] scale-110'
                  : 'bg-white/5 border-white/10 text-white/40'
              }`}
            >
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
