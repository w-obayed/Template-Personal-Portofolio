import React from 'react'
import PhotoCard from './ui/photoCard'
function galleryView() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div className="w-full h-auto bg-gradient-to-br from-[#1a0033] via-[#2a0044] to-[#4a0072] grid grid-cols-1 grid-rows-3 gap-2  p-6 font-sans overflow-auto">
      <div className="flex items-center gap-2 text-4xl ">
         {
           images.map((src, index) => (
             <PhotoCard key={index} src={src} />
           ))
         }
      </div>
      <div className="flex items-center gap-2 text-4xl ">
         {
           images.map((src, index) => (
             <PhotoCard key={index} src={src} />
           ))
         }
      </div>
      <div className="flex items-center gap-2 text-4xl ">
         {
           images.map((src, index) => (
             <PhotoCard key={index} src={src} />
           ))
         }
      </div>
    </div>
  )
}

export default galleryView
