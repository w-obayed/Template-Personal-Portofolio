'use client';

import { useState, useEffect, useRef } from 'react';

export default function DiscoveryProcess() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    { id: 0, label: 'Discovery' },
    { id: 1, label: 'UI / UX Design' },
    { id: 2, label: 'Development' },
    { id: 3, label: 'Quality Assurance' },
    { id: 4, label: 'Go Live' },
  ];

  const details = [
    {
      title: 'Free initial consultation',
      duration: '45 minutes',
      description:
        'The first meeting that laid the foundation for our joint project. Our initial contact marks the beginning of our collaboration...',
    },
    {
      title: 'Offer preparation',
      duration: '2–3 days',
      description:
        'Tailor-made solutions, specially developed for your needs. We analyze your requirements...',
    },
    {
      title: 'Concept',
      duration: '1 week',
      description:
        'The creative phase in which ideas take shape. We transform your ideas into tangible concepts...',
    },
  ];

    const containerRef = useRef(null);
    useEffect(() => {
      if(!containerRef.current) return 0;
      const handleScroll = () => {
        if(activePhase === 5) return 0;
        setActivePhase((prev) => (prev + 1) % phases.length);
      };

      window.addEventListener('wheel', handleScroll);

      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }, []);

useEffect(() => {
  const preventScroll = (e) => {
    if (activePhase !== phases.length - 1) {
      e.preventDefault();
    }
  };

  if (activePhase !== phases.length - 1) {
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
  }

  return () => {
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
  };
}, [activePhase]);

  return (
    <div className="min-h-screen bg-[#05070d] text-white relative overflow-hidden">
      
      {/*  Soft Glow Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="w-full mx-auto px-6 py-16 relative z-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-semibold text-white/90">Our Process</h1>

          <button className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition">
            For the inquiry – 1 minute
          </button>
        </div>

        <div  className="grid lg:grid-cols-14 gap-10">

          {/* LEFT SIDE */}
          <div ref={containerRef}  className="lg:col-span-6  flex justify-start items-center">

            <div  className="relative w-full aspect-square">

              {/* Big Glow Ring */}
              <div   className="absolute inset-0 bg-gray-500/50 rounded-full border border-white/10" />
                <svg className="absolute inset-0   w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="270"
                  fill="none"
                  stroke="blue"
                  strokeWidth="2"
                  strokeDasharray="3 10"
                />
              </svg>
              <div className="absolute inset-15 bg-gray-500/50 rounded-full border border-white/5" />
              <div className="absolute inset-35 bg-gray-500/20 rounded-full border-8 border-black" />
              <div className="absolute inset-53 bg-black rounded-full " />
              <div className="absolute inset-60 bg-gray-500/50 rounded-full " />
              <div className="absolute inset-65 bg-blue-400/50 rounded-full " />
              <div className="absolute inset-70 bg-blue-400/70  rounded-full " />

              {/* Center BIG NUMBER */}
{/*               <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[160px] font-bold text-white/10">
                  {activePhase + 1}
                </span>
              </div> */}


              {/* Nodes */}
              {phases.map((phase, index) => {
                const angle =
                  (index / phases.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 270;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={phase.id}
                    onClick={() => setActivePhase(index)}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className={`px-4 py-2 text-nowrap rounded-lg text-sm backdrop-blur-md border transition ${
                        activePhase === index
                          ? 'bg-white/20 shadow-[0_0_25px_rgba(251,191,36,0.8)] border-white/40 text-white '
                          : 'bg-white/5 border-white/10 text-white/50'
                      }`}
                    >
                      {phase.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative  lg:col-span-8 flex flex-col justify-center  space-y-6">
                <div>
                  <span className="text-[480px] text-black font-bold bg-gradient-to-b from-white/5 to-white/0 bg-clip-text  select-none"
                       style={{
                            WebkitTextStroke: '1px blue',
                            textShadow: '0 0 40px blue',
                          }}
                  >
                    {activePhase+1}
                  </span>
                </div>
              <div className="absolute left-38 right-0 flex flex-col justify-center gap-4 h-full">  
                {details.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActivePhase(index)}
                    className={`    p-6 rounded-2xl border backdrop-blur-xl transition-all cursor-pointer  overflow-hidden ${
                      activePhase === index
                        ? 'bg-white/10 border-white/30 shadow-[0_0_40px_rgba(59,130,246,0.2)]'
                        : 'bg-white/3 border-white/10'
                    }`}
                  >

                      <div className="relative w-full z-10">
                        <div className="flex justify-between mb-3">
                          <h3 className="text-xl font-semibold">
                            {item.title}
                          </h3>
                          <span className="text-sm text-white/60">
                            {item.duration}
                          </span>
                        </div>

                        <p className="text-sm text-white/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                  </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}