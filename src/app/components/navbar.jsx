import services from '@/API&Services/services'
import React from 'react'

const navbar = async () => {
  const nav =  services("navbar")||[]
  return (
    <div>
      {
        nav.map((item,i)=>{
          return <div key={i}>{item.name}</div>
        })
     }
    </div>
  )
}

export default navbar