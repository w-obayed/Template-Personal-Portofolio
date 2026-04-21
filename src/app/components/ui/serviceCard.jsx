import React from 'react'

function serviceCard({item}) {
  return (
           <div
                className="group rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-md p-4 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white text-lg md:text-xl font-bold tracking-wide">
                    {item?.title}
                  </h3>
                  <button className="w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-black transition">
                    ↗
                  </button>
                </div>

                <div className={`rounded-[22px] overflow-hidden bg-gradient-to-r ${item.bg} p-2`}>
                  <div className="relative h-44 md:h-52 rounded-[18px] overflow-hidden bg-black/20 flex items-center justify-center">
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
  )
}

export default serviceCard
