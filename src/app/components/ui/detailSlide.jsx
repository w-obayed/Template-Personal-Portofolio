export default function DetailSlide({ detail, index, containerH }) {
  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: containerH }}
    >
      {/* BIG BACKGROUND NUMBER */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <span
          className="text-[320px] lg:text-[590px] leading-[590px] font-['Inter',sans-serif] font-black bg-linear-to-b from-white/10 to-white/0 bg-clip-text text-transparent select-none"
          style={{
            WebkitTextStroke: '6px rgba(121, 151, 206, 1)',
            textShadow: '0 0 40px rgba(29, 33, 43, 1)',
          }}
        >
          {index + 1}
        </span>
      </div>

      <div className='relative z-10 w-full flex flex-col space-y-6 lg:-ml-[20%]'>
         {
      detail.steps?.map((item, i) => (
      <div key={i} className="relative z-10 w-full flex justify-end">
        <div className="w-full max-w-[650px] flex flex-col gap-5">
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