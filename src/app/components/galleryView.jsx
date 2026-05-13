"use client";

import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import PhotoCard from './ui/photoCard'
import { Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';

const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  ];


export default function GalleryView() {
  
  const swiperRefs = useRef([]);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (swiperRefs.current.length === 0) return;

      const isScrollingDown = currentScrollY > lastScrollY;

      swiperRefs.current.forEach((swiper, index) => {
        if (!swiper || !swiper.autoplay) return;

        // Swiper at index 1 is meant to scroll in reverse normally
        const isMiddleSwiper = index === 1;
        
        // If scrolling down, use normal directions. If scrolling up, invert them.
        let shouldReverse = isScrollingDown ? isMiddleSwiper : !isMiddleSwiper;

        if (swiper.params.autoplay.reverseDirection !== shouldReverse) {
          swiper.params.autoplay.reverseDirection = shouldReverse;
          swiper.autoplay.stop();
          swiper.autoplay.start();
        }
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className="w-full h-auto bg-black space-y-4 font-sans">
      <div className="">
        <Swiper
         onSwiper={(swiper) => {
           swiperRefs.current[0] = swiper;
         }}
         modules={[Autoplay, Mousewheel]}
         spaceBetween={16}
         slidesPerView={6.5}
         loop={true}
         freeMode={true}
         speed={4000}
         mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
         autoplay={{
              delay: 0,
              disableOnInteraction: false,
         }}
         allowTouchMove={false} 
         breakpoints={{
                    320: {
                      slidesPerView: 1.5,
                    },
                    640: {
                      slidesPerView: 2.5,
                    },
                    1024: {
                      slidesPerView: 6.5,
                    },
                  }}
         className='w-full h-auto'
>
         {
           images.map((src, index) => (
            <SwiperSlide key={index}>
               <PhotoCard src={src} />
            </SwiperSlide>
           ))
         }
        </Swiper>
      </div>
      <div className=" ">
        <Swiper
         onSwiper={(swiper) => {
           swiperRefs.current[1] = swiper;
         }}
        modules={[Autoplay, Mousewheel]}
         spaceBetween={16}
         slidesPerView={6.5}
         loop={true}
         freeMode={true}
         speed={4000}
         mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
         autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
         }}
         allowTouchMove={false} 
         breakpoints={{
                    320: {
                      slidesPerView: 1.5,
                    },
                    640: {
                      slidesPerView: 2.5,
                    },
                    1024: {
                      slidesPerView: 6.5,
                    },
                  }}
         className='w-full h-auto'
        >
         {
           images.map((src, index) => (
            <SwiperSlide key={index}>
               <PhotoCard src={src} />
            </SwiperSlide>
           ))
         }
        </Swiper>
      </div>
      <div className="">
         <Swiper
         onSwiper={(swiper) => {
           swiperRefs.current[2] = swiper;
         }}
          modules={[Autoplay, Mousewheel]}
         spaceBetween={16}
         slidesPerView={6.5}
         loop={true}
         freeMode={true}
         speed={4000}
         mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
         autoplay={{
              delay: 0,
              disableOnInteraction: false,
         }}
         allowTouchMove={false} 
         breakpoints={{
                    320: {
                      slidesPerView: 1.5,
                    },
                    640: {
                      slidesPerView: 2.5,
                    },
                    1024: {
                      slidesPerView: 6.5,
                    },
                  }}
         className='w-full h-auto'
        >
         {
           images.map((src, index) => (
            <SwiperSlide key={index}>
               <PhotoCard src={src} />
            </SwiperSlide>
           ))
         }
        </Swiper>
      </div>
    </div>
  )
}
