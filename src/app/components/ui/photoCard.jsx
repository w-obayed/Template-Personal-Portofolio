import Image from 'next/image'
import React from 'react'

function photoCard({ src }) {
  return (
   <div className="relative w-full h-45">
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
