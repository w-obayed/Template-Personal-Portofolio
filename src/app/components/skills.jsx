import React from 'react'
import { useService } from '../../api/services';

export default function Skills() {

  const { data: skillData = {} } = useService("skill");

  return (
    <div className="bg-[#11081b] text-white py-6 pb-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Skills Section */}
         <div className="flex justify-center mb-20">
         <div className="p-px rounded-2xl bg-linear-to-r from-[#6E374A] to-[#5A3A32]">
            <h2 className="px-8 py-3 bg-[#11081b] backdrop-blur-md rounded-2xl text-4xl md:text-5xl font-semibold text-white font-family-heading">
            {skillData?.skill_title}
          </h2>
          </div>
        </div>

        <div className="mt-10 bg-[#251c2d] backdrop-blur-xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {(Array.isArray(skillData?.item) ? skillData.item : []).map((skill, index) => (
              <div 
                key={index} 
                className={`text-center flex-1 ${
                  index !== (Array.isArray(skillData?.item) ? skillData.item.length : 0) - 1 
                    ? "md:border-r border-white/10 md:pr-6" 
                    : ""
                }`}
              >
                <h3 className="text-white text-2xl font-bold uppercase mb-6 font-family-heading">
                  {skill.title}
                </h3>
                <div className="flex justify-center items-center gap-4 flex-wrap">
                  {(Array.isArray(skill.icon) ? skill.icon : []).map((item, iconIndex) => (
                    <div 
                      key={iconIndex} 
                      className="size-12 rounded-xl  flex items-center justify-center overflow-hidden"
                    >
                      <img 
                        src={item.url} 
                        alt={item.url?.split('/').pop()?.split('.')[0] || `icon-${iconIndex}`} 
                        className="w-full h-full object-cover"
                      />
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
