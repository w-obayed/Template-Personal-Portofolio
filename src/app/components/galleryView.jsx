"use client";

import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import PhotoCard from './ui/photoCard'
import { Autoplay, Mousewheel } from 'swiper/modules';
import serviceCall from '../../API&Services/services';
import 'swiper/css';



export default function GalleryView() {
  const swiperRefs = useRef([]);
  const images = serviceCall("gallery") || [] ;

  const slider1 = images.slice(0, 8);
  const slider2 = images.slice(8, 16);
  const slider3 = images.slice(16, 24);


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
           slider1.map((src, index) => (
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
           slider2.map((src, index) => (
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
           slider3.map((src, index) => (
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
