"use client"
import services from '../../API&Services/services';
import React from 'react'

function EducationAndExperience() {
  const educationData = services("EducationAndExperience") || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f001f] via-[#1a0033] to-[#2a0044] text-white py-20 px-6 font-sans">
      
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="flex justify-center mb-20">
          <div className="px-8 py-3 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-2xl text-lg font-medium">
            Education & Experience
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Middle Line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[3px] h-full bg-purple-500/40"></div>

          <div className="space-y-20">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center justify-between">

                  {/* LEFT SIDE */}
                  <div className={`w-[45%] ${isLeft ? 'block' : 'invisible'}`}>
                    <div className="bg-gradient-to-br from-purple-900/80 to-pink-900/60 p-6 rounded-3xl shadow-xl backdrop-blur-md">
                      <p className="text-purple-300 text-sm">{item.date}</p>
                      <h3 className="text-lg font-semibold mt-1">{item.institute}</h3>
                      <p className="text-white/70 text-sm">({item.point})</p>
                    </div>
                  </div>

                  {/* CENTER DOT */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-[#1a0033] shadow-lg"></div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className={`w-[45%] ${!isLeft ? 'block' : 'invisible'}`}>
                    <div className="bg-gradient-to-br from-purple-900/80 to-pink-900/60 p-6 rounded-3xl shadow-xl backdrop-blur-md">
                      <p className="text-purple-300 text-sm">{item.date}</p>
                      <h3 className="text-lg font-semibold mt-1">{item.institute}</h3>
                      <p className="text-white/70 text-sm">({item.point})</p>
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