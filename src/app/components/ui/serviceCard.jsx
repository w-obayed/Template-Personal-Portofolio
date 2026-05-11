
import React from "react";
import { ArrowUpRight } from "lucide-react";

function ServiceCard({ item }) {
  return (
    <div className="relative w-full h-full">

      {/* SVG shape */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 425 385"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fill */}
        <path
          d="M6 46C6 23.9086 23.9086 6 46 6H278.5C300.591 6 318.5 23.9086 318.5 46V48.3942C318.5 81.5313 345.663 108.394 378.8 108.394C400.891 108.394 419 126.303 419 148.394V338.343C419 360.434 401.091 378.343 379 378.343H46C23.9086 378.343 6 360.434 6 338.343V46Z"
          fill="white"
          fillOpacity="0.06"
        />

        {/* Border */}
        <path
          d="M278.5 3C302.248 3 321.5 22.2518 321.5 46V48.3945C321.5 79.8551 347.3 105.394 378.8 105.395C402.529 105.395 422 124.627 422 148.395V338.343C422 362.091 402.748 381.343 379 381.343H46C22.2518 381.343 3.00012 362.091 3 338.343V46C3 22.2518 22.2518 3 46 3H278.5Z"
          stroke="white"
          strokeOpacity="0.18"
          strokeWidth="4"
        />

        {/* Title (smaller) */}
        <text
          x="36"
          y="62"
          fontFamily="'Syne', sans-serif"
          fontSize="20"   // reduced from 22
          fontWeight="700"
          letterSpacing="1"
          fill="white"
        >
          {item?.title}
        </text>

        {/* Arrow background */}
        <circle cx="370" cy="56" r="24" fill="black" fillOpacity="0.75" />
      </svg>

      {/* Lucide Arrow (HTML layer for better control) */}
      <div className="absolute top-[34px] right-[26px] min-[500px]:right-[34px] md:right-[28px] lg:top-[34px] lg:right-[26px] xl:top-[34px] xl:right-[36px] z-10">
        <ArrowUpRight className="text-white size-8" />
      </div>

      {/* Image (reduced height + cleaner spacing) */}
      <div
        className="absolute left-[6%] right-[6%] bottom-[8%] overflow-hidden rounded-[14px]"
        style={{ top: "35%" }} // was 26% → reduced image height
      >
        <img
          src={item?.image}
          alt={item?.title}
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}

export default ServiceCard;
