export default function DetailSlide({ detail, index, containerH }) {
  console.log(detail.description)
  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: containerH }}
    >
      {/* BIG BACKGROUND NUMBER */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none bg-[#05070d]">
        <span
          className="text-[320px] lg:text-[480px] leading-none font-black bg-linear-to-b from-white/10 to-white/0 bg-clip-text text-transparent select-none"
          style={{
            WebkitTextStroke: '1px rgba(59,130,246,0.6)',
            textShadow: '0 0 40px rgba(59,130,246,0.4)',
          }}
        >
          {index + 1}
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full flex justify-end">
        <div className="w-full max-w-[650px] flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/40 bg-white/10 backdrop-blur-xl p-6 lg:p-8 shadow-[0_0_50px_rgba(59,130,246,0.25)]">

            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="shrink-0 rounded-full px-4 py-1 text-2xl text-white/60">
                  {detail.title}
                </span>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/60">
                  {detail.duration}
                </span>
              </div>

              {
                detail.description?.map((item, i) => (
                  <p key={i} className="max-w-[90%] text-sm lg:text-base leading-relaxed text-white/60">
                    {item}
                  </p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}