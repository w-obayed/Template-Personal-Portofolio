"use client"
import { useService } from '../../api/services';
import React from 'react'

function EducationAndExperience() {
  const {data:journeyData} = useService("journey");

  return (
    <div className="min-h-screen bg-[#11081b] text-white py-12 px-6 font-sans lg:pt-36">
      
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="flex justify-center mb-20">
         <div className="p-px rounded-2xl bg-linear-to-r from-[#6E374A] to-[#5A3A32]">
            <h2 className="px-8 py-3 bg-[#11081b] backdrop-blur-md rounded-2xl text-4xl md:text-5xl font-semibold text-white font-family-heading">
              {journeyData.title}
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Middle Line - Hidden only on mobile */}
          <div className="max-sm:hidden absolute left-1/2 top-0 transform -translate-x-1/2 w-0.75 h-full bg-linear-to-r from-[#6E374A] to-[#5A3A32]"></div>

          <div className="space-y-20">
            {journeyData.item.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative flex max-sm:flex-col max-sm:gap-4 items-center justify-between">

                  {/* LEFT SIDE */}
                  <div className={`w-[45%] max-sm:w-full ${isLeft ? 'block' : 'invisible'} max-sm:visible`}>
                    <div className="bg-linear-to-r from-[#6E374A] to-[#5A3A32] p-6 rounded-3xl shadow-xl backdrop-blur-md max-sm:text-left text-right">
                      <p className="text-base font-family-description">{item.time}</p>
                      <h3 className="text-xl font-semibold mt-1 font-family-heading">{item.period}</h3>
                      <p className="text-white/80 text-base font-family-description">{item.description}</p>
                    </div>
                  </div>

                  {/* CENTER DOT - Hidden only on mobile */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 max-sm:hidden">
                    <div className="w-6 h-6 bg-linear-to-r from-[#6E374A] to-[#5A3A32] rounded-full border-4 border-[#1a0033] shadow-lg"></div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className={`w-[45%] max-sm:w-full ${!isLeft ? 'block' : 'invisible'} max-sm:hidden`}>
                    <div className="bg-linear-to-r from-[#6E374A] to-[#5A3A32] p-6 rounded-3xl shadow-xl backdrop-blur-md">
                      <p className="text-base font-family-description">{item.time}</p>
                      <h3 className="text-xl font-semibold mt-1 font-family-heading">{item.period}</h3>
                      <p className="text-white/80 text-base font-family-description">{item.description}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

export default EducationAndExperience;