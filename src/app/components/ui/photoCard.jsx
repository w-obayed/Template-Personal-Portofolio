import Image from 'next/image'
import React from 'react'

function photoCard({ src }) {
  return (
    <Image 
       width={350} 
       height={300} 
       src={src} 
       alt="Description"
       priority
       className="rounded-lg aspect-4/3 shadow-md object-cover size-full" 
    />
  )
}

export default photoCard
