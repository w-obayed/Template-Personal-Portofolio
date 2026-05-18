import Image from 'next/image'
import React from 'react'

function photoCard({ src }) {
  return (
   <div className="w-full h-[180px]">
  <Image
    src={src}
    alt="Description"
    fill
    className="object-cover size-full aspect-4/3 shadow-md rounded-lg"
  />
</div>
  )
}

export default photoCard
