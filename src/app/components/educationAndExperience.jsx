"use client"
import services from '../../API&Services/services';
import React from 'react'

function EducationAndExperience() {
  const educationData = services("EducationAndExperience") || [];
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f001f] via-[#1a0033] to-[#2a0044] text-white py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="flex justify-center mb-16">
          <div className="px-8 py-3 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-2xl text-lg font-medium">
            Education & Experience
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12 border-l-2 border-purple-500/40 space-y-16">
            {educationData.map((item, index) => 
                <div key={index} className="relative">
                  <div className="absolute -left-[9px] w-4 h-4 bg-purple-500 rounded-full border-4 border-[#1a0033]"></div>
                  <div className="bg-linear-to-br from-purple-900/80 to-pink-900/60 rounded-3xl p-6 ml-6 md:ml-8">
                    <div className="text-purple-300 text-sm font-medium">{item.date}</div>
                    <h3 className="text-xl font-semibold mt-1">{item.institute}</h3>
                    <p className="text-white/70">({item.point})</p>
                  </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default EducationAndExperience
