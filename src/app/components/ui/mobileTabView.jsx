export default function MobileTabView({ slides, currentIndex, onSelect }) {
  const { detail } = slides[currentIndex];

  return (
    <div className="flex flex-col gap-6">

      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2">
        {slides.map(({ phase }, i) => (
          <button
            key={phase.id}
            onClick={() => onSelect(i)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-300 backdrop-blur-md ${i === currentIndex
                ? 'bg-blue-500/20 border-blue-400/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                : 'bg-white/5 border-white/10 text-white/40 hover:text-white/70 hover:bg-white/10'
              }`}
          >
            {phase.label}
          </button>
        ))}
      </div>

      {/* Active content card */}
      <div
        key={currentIndex}
        className="relative overflow-hidden rounded-3xl border border-blue-400/30 bg-white/4 backdrop-blur-xl p-6"
        style={{ animation: 'fadeSlideIn 0.35s ease forwards' }}
      >
        <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-blue-300">Phase {currentIndex + 1}</span>
              <h3 className="mt-1 text-xl font-bold text-white">{detail.title}</h3>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
              {detail.duration}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">{detail.description}</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}