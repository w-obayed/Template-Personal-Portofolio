'use client';

import { useState } from 'react';

export default function DiscoveryProcess() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      label: 'Discovery',
      subtext: 'Initial Research',
    },
    {
      id: 1,
      label: 'UI / UX Design',
      subtext: 'Design Phase',
    },
    {
      id: 2,
      label: 'Development',
      subtext: 'Build Phase',
    },
    {
      id: 3,
      label: 'Quality Assurance',
      subtext: 'Testing Phase',
    },
    {
      id: 4,
      label: 'Go Live',
      subtext: 'Launch Phase',
    },
  ];

  const details = [
    {
      title: 'Free initial consultation',
      duration: '45 minutes',
      description:
        'The first meeting that laid the foundation for our joint project. Our initial contact marks the beginning of our collaboration and offers the opportunity to discuss your vision, goals, and requirements. We listen carefully, ask targeted questions, and begin the collaborative process to bring your ideas to life.',
    },
    {
      title: 'Offer preparation',
      duration: '2-3 days',
      description:
        'Tailor-made solutions, specially developed for your needs. Our services are specifically tailored to your needs and goals. We analyze your requirements, develop detailed plans, and offer customized solutions designed to exceed your expectations.',
    },
    {
      title: 'Concept',
      duration: '1 week',
      description:
        'The creative phase in which ideas take shape. During the concept phase, your ideas take shape. We work closely with you to understand your vision and develop a clear concept that reflects your goals. Through creative thinking, we transform your ideas into tangible concepts that serve as the foundation for further development.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden relative">
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-start mb-20">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">Our Process</h1>
            <p className="text-slate-400 text-lg">
              Transform your vision step by step
            </p>
          </div>
          <button className="px-6 py-2 rounded-full bg-blue-600/40 hover:bg-blue-600/60 text-blue-200 font-medium border border-blue-500/50 transition-all">
            For the inquiry - 1 minute
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side - Process Flow */}
          <div className="lg:col-span-5">
            {/* Circular Process Visualization */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Outer Circles */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20" />
              <div className="absolute inset-8 rounded-full border border-blue-500/10" />
              <div className="absolute inset-16 rounded-full border border-blue-500/5" />

              {/* Center Glow */}
              <div className="absolute inset-20 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

              {/* Phase Nodes - Positioned in Circle */}
              {phases.map((phase, index) => {
                const angle = (index / phases.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    {/* Node Circle */}
                    <div
                      className={`relative w-16 h-16 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 border-2 ${
                        activePhase === phase.id
                          ? 'bg-gradient-to-br from-blue-400 to-cyan-400 border-white shadow-xl shadow-blue-500/50 scale-125'
                          : 'bg-slate-700/60 border-slate-600/40 hover:border-blue-500/50'
                      }`}
                    >
                      <span className="text-white">
                        {activePhase === phase.id ? '✓' : index + 1}
                      </span>
                    </div>

                    {/* Label Below */}
                    <div
                      className={`absolute top-20 left-1/2 -translate-x-1/2 text-center whitespace-nowrap transition-all duration-300 ${
                        activePhase === phase.id ? 'text-blue-300' : 'text-slate-500'
                      }`}
                    >
                      <p className="font-semibold text-sm">{phase.label}</p>
                      <p className="text-xs text-slate-500">{phase.subtext}</p>
                    </div>
                  </button>
                );
              })}

              {/* SVG Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50%"
                  cy="50%"
                  r="120"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.3"
                />
              </svg>
            </div>
          </div>

          {/* Right Side - Details Panel */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6">
              {details.map((detail, index) => (
                <div
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`group rounded-2xl p-8 backdrop-blur-lg transition-all duration-500 cursor-pointer border overflow-hidden relative ${
                    activePhase === index
                      ? 'bg-slate-800/60 border-blue-500/50 shadow-2xl shadow-blue-500/20'
                      : 'bg-slate-800/30 border-slate-700/30 hover:border-slate-700/50'
                  }`}
                >
                  {/* Animated Background Gradient */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activePhase === index
                        ? 'opacity-10 bg-gradient-to-r from-blue-500 to-cyan-500'
                        : 'opacity-0'
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {detail.title}
                        </h3>
                        <p
                          className={`text-sm font-semibold transition-colors duration-300 ${
                            activePhase === index
                              ? 'text-cyan-300'
                              : 'text-slate-400'
                          }`}
                        >
                          {detail.duration}
                        </p>
                      </div>

                      {/* Indicator Dot */}
                      <div
                        className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 transition-all duration-300 ${
                          activePhase === index
                            ? 'bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-cyan-400/50'
                            : 'bg-slate-600'
                        }`}
                      />
                    </div>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        activePhase === index ? 'text-slate-200' : 'text-slate-400'
                      }`}
                    >
                      {detail.description}
                    </p>

                    {/* Bottom Border Accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                        activePhase === index
                          ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                          : 'bg-transparent'
                      }`}
                    />
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