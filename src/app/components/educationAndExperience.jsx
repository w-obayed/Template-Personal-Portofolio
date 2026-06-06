"use client"
import services from '../../API&Services/services';
import React from 'react'

function EducationAndExperience() {
  const educationData = services("EducationAndExperience") || [];

  return (
    <div className="min-h-screen bg-[#11081b] text-white py-12 px-6 font-sans">
      
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="flex justify-center mb-20">
         <div className="p-px rounded-2xl bg-linear-to-r from-[#6E374A] to-[#5A3A32]">
            <div className="px-8 py-3 bg-[#11081b] backdrop-blur-md rounded-2xl text-lg font-medium text-white font-['DM_Sans','Helvetica_Neue',sans-serif]">
              Education & Experience
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Middle Line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[3px] h-full bg-linear-to-r from-[#6E374A] to-[#5A3A32]"></div>

          <div className="space-y-20">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center justify-between">

                  {/* LEFT SIDE */}
                  <div className={`w-[45%] ${isLeft ? 'block' : 'invisible'}`}>
                    <div className="bg-linear-to-r from-[#6E374A] to-[#5A3A32] p-6 rounded-3xl shadow-xl backdrop-blur-md text-right">
                      <p className="bg-linear-to-t from-[#963017] to-[#a0234e] bg-clip-text text-transparent text-base font-['DM_Sans','Helvetica_Neue',sans-serif]">{item.date}</p>
                      <h3 className="text-lg font-semibold mt-1 font-['DM_Sans','Helvetica_Neue',sans-serif]">{item.institute}</h3>
                      <p className="text-white/70 text-base font-['DM_Sans','Helvetica_Neue',sans-serif]">({item.point})</p>
                    </div>
                  </div>

                  {/* CENTER DOT */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-6 bg-linear-to-r from-[#6E374A] to-[#5A3A32] rounded-full border-4 border-[#1a0033] shadow-lg"></div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className={`w-[45%] ${!isLeft ? 'block' : 'invisible'}`}>
                    <div className="bg-linear-to-r from-[#6E374A] to-[#5A3A32] p-6 rounded-3xl shadow-xl backdrop-blur-md">
                      <p className="bg-linear-to-t from-[#963017] to-[#a0234e] bg-clip-text text-transparent text-base font-['DM_Sans','Helvetica_Neue',sans-serif]">{item.date}</p>
                      <h3 className="text-lg font-semibold mt-1 font-['DM_Sans','Helvetica_Neue',sans-serif]">{item.institute}</h3>
                      <p className="text-white/70 text-base font-['DM_Sans','Helvetica_Neue',sans-serif]">({item.point})</p>
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