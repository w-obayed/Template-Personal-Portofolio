import React from 'react'
import services from '../../API&Services/services';

function skills() {

  const skillData = services("skill") || [];

  return (
    <div className="bg-[#11081b] text-white py-6 pb-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Skills Section */}
        <div className="flex justify-center">
          <div className="px-6 py-2 border border-purple-500/30 rounded-2xl text-lg font-medium">
            Skills
          </div>
        </div>

        <div className="mt-10 bg-[#251c2d] backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
             {skillData.map((skill, index) => (
                <div key={index} className={`text-center flex-1 ${index !== skillData.length - 1 ? "md:border-r border-white/10 md:pr-6" : ""}`}>
                    <h3 className="text-white text-2xl font-bold uppercase mb-6">{skill.title}</h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {skill.items.map((item) => (
                        <div key={item.name} className="w-12 h-12 rounded-xl bg-[#311A43] shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center justify-center">
                            <img src={`/icons/${item.icon}`} alt={item.name} className="w-7 h-7"/>
                        </div>
                        ))}
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default skills
