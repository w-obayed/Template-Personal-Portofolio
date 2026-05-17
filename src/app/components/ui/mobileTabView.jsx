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
            className={`px-4 py-2 rounded-xl text-[18px] font-normal text-nowrap shadow-xl/20 transition-all duration-500 backdrop-blur-md ${i === currentIndex
                ? 'bg-slate-400 text-white text-xl font-bold shadow-[0_0_35px_rgba(59,130,246,0.6)]'
                : 'bg-white/5 border-white/10 text-white/40'
              }`}
          >
            {phase.label}
          </button>
        ))}
      </div>

      {/* Active content card */}
     <div className="space-y-4">
      {
      detail.steps?.map((item, i) => (
      <div key={i} className="relative z-10 w-full flex ">
        <div className="w-full flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(250,250,250,0.3)_0%,rgba(0,0,0,1)_40%)] backdrop-blur-xl p-6 lg:p-8 shadow-[0_0_50px_rgba(59,130,246,0.25)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl pointer-events-none" />
            <div  className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="shrink-0 rounded-full text-2xl text-white/60">
                  {item.title}
                </span>
                <span className="shrink-0 rounded-full text-sm text-white/60">
                  {item.duration}
                </span>
              </div>
              <p className="max-w-[90%] text-sm lg:text-base leading-relaxed text-white/60">
                    {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
        ))
       }
     </div>
    </div>
  );
}