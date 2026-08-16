
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent } from "../../../components/ui/card";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function ServiceCoreCard({ card }) {
   const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801638512035", "_blank");
  };
  return (
    <div className="w-full h-auto md:h-full flex flex-wrap items-center justify-center px-2 sm:px-4">

      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border-[0.5px] border-gray-400 h-auto md:h-full transition-shadow duration-600 ease-[ease]"
        style={{ backgroundImage: `url(${card.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >

        {/* 🔥 Overlay (from your first design) */}
       <div className="absolute inset-0 rounded-2xl bg-black/90" />

        {/* 🔥 Glow blob (keep from slider system) */}
        <div
          className="absolute -top-20 -left-15 w-85 h-85 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${card.accent}22 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:min-h-105 h-auto md:h-full justify-between">

          {/* ───────── LEFT (your design) ───────── */}
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-10 mb-2 md:mb-0 py-4 sm:py-6 md:py-12 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">

            {/* Big number */}
            <h1 className="text-[clamp(2rem,6vw,128px)] font-medium font-family-heading text-[#889bc3] leading-none">
              {card.num}
            </h1>

            {/* Title */}
            <h1 className="text-[clamp(1.1rem,3.5vw,58px)] font-extrabold text-white font-family-heading leading-tight">
              {card.title}
            </h1>

            {/* Description */}
            <p className="text-[clamp(10px,3.2vw,16px)] text-white/80 md:max-w-[80%] max-w-full font-family-description">
              {card.desc}
            </p>

            {/* Button */}
            <button onClick={handleWhatsAppClick} className="inline-flex w-fit font-family-heading items-center gap-2 bg-white/90 hover:bg-white text-[#0a0d14] font-semibold text-xs tracking-widest px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all shadow-[0_0_0_4px_rgba(74,222,128,0.15)] cursor-pointer mt-1">
              <span className="w-2 h-2 hidden md:block rounded-full bg-green-400" />
              {card.btn}
            </button>
          </div>

          {/* ───────── RIGHT (shadcn card from your first design) ───────── */}
          <div className="flex items-center justify-center md:justify-end px-3 sm:px-6 md:px-8 pt-2 pb-4 md:py-8">

            <Card className="w-full md:w-87.5 border-none shadow-none bg-transparent md:border md:shadow md:bg-card md:bg-linear-to-r from-[#16171c] via-[#1f2128] to-white/5 md:backdrop-blur-3xl rounded-2xl">

              <CardContent className="space-y-3 sm:space-y-4 md:space-y-5 px-0 py-1 md:py-10">
                <div className="w-full">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1.5}
                    breakpoints={{
                      320: { slidesPerView: 1.6, spaceBetween: 8 },
                      480: { slidesPerView: 1.5, spaceBetween: 12 },
                    }}
                    loop={true}
                    freeMode={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false} 
                    className='w-full'
                  >
                    {
                        card.items.imageSrc.map((src, index) => (
                            <SwiperSlide key={index} className="h-auto!">
                                <Image
                                    width={180} 
                                    height={180} 
                                    src={src} 
                                    alt="Description"
                                    priority
                                    className="rounded-lg max-h-28 sm:max-h-36 md:max-h-45 aspect-4/3 shadow-md object-cover size-full" 
                                />
                            </SwiperSlide>
                        ))
                    }
                  </Swiper>
                </div>
                <div className="w-full">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1.5}
                    breakpoints={{
                      320: { slidesPerView: 1.6, spaceBetween: 8 },
                      480: { slidesPerView: 1.5, spaceBetween: 12 },
                    }}
                    loop={true}
                    freeMode={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    allowTouchMove={false} 
                    className='w-full'
                  >
                    {
                        card.items.imageSrc.map((src, index) => (
                            <SwiperSlide key={index} className="h-auto!">
                                <Image
                                    width={150} 
                                    height={150} 
                                    src={src} 
                                    alt="Description"
                                    priority
                                    className="rounded-lg max-h-24 sm:max-h-32 md:max-h-37.5 aspect-4/3 shadow-md object-cover size-full" 
                                />
                            </SwiperSlide>
                        ))
                    }
                  </Swiper>
                </div>
              </CardContent>

            </Card>

          </div>
        </div>

      </div>
    </div>
  );
}
