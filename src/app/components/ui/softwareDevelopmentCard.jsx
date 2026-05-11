
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import MessageCard from "./messageCard";


const techIcons = [
  { label: "C#",    color: "text-blue-400" },
  { label: "FB",    color: "text-orange-400" },
  { label: "GO",    color: "text-cyan-400" },
  { label: "AWS",   color: "text-orange-300" },
  { label: "Vue",   color: "text-green-400" },
  { label: "GQL",   color: "text-pink-500" },
  { label: "React", color: "text-sky-400" },
  { label: "RDX",   color: "text-purple-400" },
  { label: "Node",  color: "text-green-500" },
  { label: "Java",  color: "text-orange-500" },
  { label: "Nuxt",  color: "text-emerald-400" },
  { label: "PgSQL", color: "text-blue-500" },
  { label: "PHP",   color: "text-indigo-400" },
  { label: "CSS3",  color: "text-cyan-500" },
  { label: "WF",    color: "text-gray-200" },
  { label: "SRC",   color: "text-teal-400" },
  { label: "JS",    color: "text-yellow-400" },
  { label: "HTML5", color: "text-orange-500" },
];

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  ];

export default function SoftwareDevelopmentCard({ card, style }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center px-4 will-change-transform absolute top-0 left-0"
      style={style}
    >
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border-[0.5px] border-gray-400 h-full transition-shadow duration-600 ease-[ease]"
        style={{ backgroundImage: `url(${card.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >

        {/* 🔥 Overlay (from your first design) */}
        {/* <div className="absolute inset-0 rounded-2xl overflow-hidden bg-linear-to-r from-[#0c1120ee] via-[#0c112099] to-[#0c112055]" /> */}
       <div className="absolute inset-0 rounded-2xl bg-gray-900/90" />

        {/* 🔥 Glow blob (keep from slider system) */}
        <div
          className="absolute -top-[80px] -left-[60px] w-[340px] h-[340px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${card.accent}22 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row min-h-[420px] h-full">

          {/* ───────── LEFT (your design) ───────── */}
          <div className="flex-1 flex flex-col justify-center px-10 py-12 space-y-5">

            {/* Big number */}
            <h1 className="text-9xl leading-[128px] font-medium font-['Syne',sans-serif] text-[#889bc3]">
              {card.num}
            </h1>

            {/* Title */}
            <h1 className="text-[58px] font-extrabold text-white/80 leading-[55px] font-['Syne',sans-serif]">
              {card.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-[80%] leading-7 font-['DM_Sans',sans-serif]">
              {card.desc}
            </p>

            {/* Button */}
            <button className="inline-flex w-fit font-['Syne',sans-serif] items-center gap-2 bg-white/90 hover:bg-white text-[#0a0d14] font-semibold text-xs tracking-widest px-6 py-3 rounded-full transition-all shadow-[0_0_0_4px_rgba(74,222,128,0.15)]">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              {card.btn}
            </button>
          </div>

          {/* ───────── RIGHT (shadcn card from your first design) ───────── */}
          <div className="flex items-center justify-end px-8 py-8">

            <Card className="w-[350px] bg-gradient-to-r from-[#16171c] via-[#1f2128] to-white/5 backdrop-blur-3xl rounded-2xl">

              <CardHeader className="pb-2">
                <CardTitle className="text-white text-xl font-bold">
                  {card.quality}
                </CardTitle>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {card.qualityDesc}
                </p>
              </CardHeader>

              {card.num === "1" && <CardContent>
                <div className="grid grid-cols-5 gap-4">
                  {techIcons.map((icon, i) => (
                    <div
                       key={i}
                       className="h-14 w-14 flex items-center justify-center rounded-xl 
                                   bg-[#0e1116] 
                                   shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)]
                                   hover:bg-[#252c40] hover:scale-105 
                                   transition-all duration-300"
>
                        <span className={`${icon.color} font-black text-[10px]`}>
                             {icon.label}
                        </span>
                   </div>
                  ))}
                </div>
              </CardContent>}

              {card.num === "2" && <CardContent className="space-y-2 px-0 p"><div className="">
               <Swiper
                    modules={[Autoplay]}
                    spaceBetween={8}
                    slidesPerView={1.5}
                    loop={true}
                    freeMode={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false} 
                    className='w-full h-auto'
>
                    {
                        images.map((src, index) => (
                            <SwiperSlide key={index} >
                                <Image
                                    width={150} 
                                    height={150} 
                                    src={src} 
                                    alt="Description"
                                    priority
                                    className="rounded-lg max-h-[150px] aspect-4/3 shadow-md object-cover size-full" 
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
              </div>
              <div className="">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={8}
                    slidesPerView={1.5}
                    loop={true}
                    freeMode={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    allowTouchMove={false} 
                    className='w-full h-auto'
                >
                    {
                        images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    width={150} 
                                    height={150} 
                                    src={src} 
                                    alt="Description"
                                    priority
                                    className="rounded-lg max-h-[150px] aspect-4/3 shadow-md object-cover size-full" 
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
              </div></CardContent>}

              {card.num === "3" && <CardContent><MessageCard/></CardContent>}

            </Card>

          </div>
        </div>

      </div>
    </div>
  );
} 