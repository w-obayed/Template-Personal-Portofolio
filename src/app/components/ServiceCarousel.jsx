'use client';

import services from '../../API&Services/services';
import ServiceCard from "./ui/serviceCard";
import { useState } from 'react';


export default function ServiceCarousel() {
  const service = services("services") || [];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? service.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === service.length - 1 ? 0 : prev + 1));
  };

  const visible = [
    service[current],
    service[(current + 1) % service.length],
    service[(current + 2) % service.length],
  ];

  return (
    <section className="min-h-screen bg-[#1e1b1b] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl rounded-[32px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_rgba(255,255,255,0.05)_30%,_rgba(0,0,0,0.2)_100%)] border border-white/10 shadow-2xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white">
              My Services
            </h2>
          </div>

          <p className="max-w-xl text-sm md:text-base text-white/80 leading-relaxed">
            I help businesses and individuals bring their ideas to life through thoughtful. Whether you're building a product from scratch or improving an existing one, I offer services that focus on both aesthetics and usability.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visible.map((item, index) => (
              <ServiceCard key={index} item={item} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}