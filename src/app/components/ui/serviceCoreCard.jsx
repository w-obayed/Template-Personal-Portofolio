
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function ServiceCoreCard({ card }) {
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center px-4">

      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border-[0.5px] border-gray-400 h-full transition-shadow duration-600 ease-[ease]"
        style={{ backgroundImage: `url(${card.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >

        {/* 🔥 Overlay (from your first design) */}
       <div className="absolute inset-0 rounded-2xl bg-black/90" />

        {/* 🔥 Glow blob (keep from slider system) */}
        <div
          className="absolute -top-[80px] -left-[60px] w-[340px] h-[340px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${card.accent}22 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:min-h-[420px] md:h-full">

          {/* ───────── LEFT (your design) ───────── */}
          <div className="flex-1 flex flex-col justify-center px-10 mb-4 md:mb-0 py-5 md:py-12 space-y-3 md:space-y-4 lg:space-y-5">

            {/* Big number */}
            <h1 className="text-[clamp(3rem,8vw,128px)] font-medium font-['Syne',sans-serif] text-[#889bc3]">
              {card.num}
            </h1>

            {/* Title */}
            <h1 className="text-[clamp(1.5rem,4vw,58px)] font-extrabold text-white/80 font-['Syne',sans-serif]">
              {card.title}
            </h1>

            {/* Description */}
            <p className="text-[clamp(1rem,2vw,16px)] text-muted-foreground max-w-[80%] font-['DM_Sans',sans-serif]">
              {card.desc}
            </p>

            {/* Button */}
            <button className="inline-flex w-fit font-['Syne',sans-serif] items-center gap-2 bg-white/90 hover:bg-white text-[#0a0d14] font-semibold text-xs tracking-widest px-6 py-3 rounded-full transition-all shadow-[0_0_0_4px_rgba(74,222,128,0.15)]">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              {card.btn}
            </button>
          </div>

          {/* ───────── RIGHT (shadcn card from your first design) ───────── */}
          <div className="flex items-center justify-end px-8 md:py-8">

            <Card className="w-full md:w-[350px] border-none shadow-none bg-transparent md:border md:shadow md:bg-card md:bg-gradient-to-r from-[#16171c] via-[#1f2128] to-white/5 md:backdrop-blur-3xl rounded-2xl">

              <CardHeader className="pb-2 hidden md:block">
                <CardTitle className="text-white text-xl font-bold">
                  {card.items.cardTitle}
                </CardTitle>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {card.items.cardDesc}
                </p>
              </CardHeader>

              <CardContent className="space-y-2 px-0 p"><div className="">
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
                        card.items.imageSrc.map((src, index) => (
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
                        card.items.imageSrc.map((src, index) => (
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
              </div></CardContent>

            </Card>

          </div>
        </div>

      </div>
    </div>
  );
}
