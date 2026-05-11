import Image from 'next/image'
import React from 'react'

function photoCard({ src }) {
  return (
    <Image 
       width={200} 
       height={200} 
       src={src} 
       alt="Description"
       priority
       className="rounded-lg max-h-[150px] object-cover size-full aspect-4/3 shadow-md" 
    />
  )
}

export default photoCard
