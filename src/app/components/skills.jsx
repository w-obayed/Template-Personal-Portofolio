import React from 'react'

function skills() {
  return (
    <div className=" bg-linear-to-br from-[#0f001f] via-[#1a0033] to-[#2a0044] text-white py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Skills Section */}
        <div className="mt-24 flex justify-center">
          <div className="px-8 py-3 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-2xl text-lg font-medium">
            Skills
          </div>
        </div>

        <div className="mt-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* UI & UX */}
            <div>
              <h4 className="text-center text-purple-300 font-semibold mb-4">UI & UX</h4>
              <div className="flex justify-center gap-6 text-4xl">
                <span>🎨</span>
                <span>Xd</span>
                <span>🌐</span>
              </div>
            </div>

            {/* Graphic Design */}
            <div>
              <h4 className="text-center text-purple-300 font-semibold mb-4">GRAPHIC DESIGN</h4>
              <div className="flex justify-center gap-6 text-4xl">
                <span>𝐀𝐢</span>
                <span>𝐏𝐬</span>
              </div>
            </div>

            {/* Web Design */}
            <div>
              <h4 className="text-center text-purple-300 font-semibold mb-4">WEB DESIGN</h4>
              <div className="flex justify-center gap-6 text-4xl">
                <span className="text-orange-400">𝕊</span>
                <span className="text-blue-400">𝕋</span>
                <span className="text-yellow-400">𝐉𝐒</span>
                <span className="text-purple-400">𝐁</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default skills
