"use client";

import React from 'react';

export default function WhatsAppButton() {
  const whatsappNumber = "8801638512035";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <>
      <style>{`
        /* 1 & 6. Layered Continuous Pulse Rings & Soft Glow */
        @keyframes wa-ring-pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6);
          }
          50% {
            opacity: 0.4;
            box-shadow: 0 0 15px 4px rgba(34, 197, 94, 0.4);
          }
          100% {
            transform: scale(1.45);
            opacity: 0;
            box-shadow: 0 0 0 20px rgba(34, 197, 94, 0);
          }
        }

        .wa-pulse-ring-1 {
          animation: wa-ring-pulse 2.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }

        .wa-pulse-ring-2 {
          animation: wa-ring-pulse 2.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite 1.2s;
        }

        /* 2. Gentle Floating Movement */
        @keyframes wa-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        .wa-float-anim {
          animation: wa-float 3.5s ease-in-out infinite;
        }

        /* 3 & 7. Occasional Subtle Wiggle for Icon Attention Sequence */
        @keyframes wa-icon-wiggle {
          0%, 80%, 100% {
            transform: rotate(0deg) scale(1);
          }
          83% {
            transform: rotate(-12deg) scale(1.08);
          }
          86% {
            transform: rotate(12deg) scale(1.08);
          }
          89% {
            transform: rotate(-8deg) scale(1.05);
          }
          92% {
            transform: rotate(8deg) scale(1.05);
          }
          95% {
            transform: rotate(-3deg) scale(1.02);
          }
          98% {
            transform: rotate(0deg) scale(1);
          }
        }

        .wa-icon-anim {
          animation: wa-icon-wiggle 6s ease-in-out infinite;
        }

        /* Subtle Ambient Back-Glow */
        @keyframes wa-ambient-glow {
          0%, 100% {
            opacity: 0.35;
            filter: blur(8px);
          }
          50% {
            opacity: 0.65;
            filter: blur(12px);
          }
        }

        .wa-glow-anim {
          animation: wa-ambient-glow 3.5s ease-in-out infinite;
        }

        /* Pause background loops on hover */
        .group:hover .wa-pulse-ring-1,
        .group:hover .wa-pulse-ring-2,
        .group:hover .wa-float-anim,
        .group:hover .wa-icon-anim {
          animation-play-state: paused;
        }

        /* Accessibility: Respect Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .wa-pulse-ring-1,
          .wa-pulse-ring-2,
          .wa-float-anim,
          .wa-icon-anim,
          .wa-glow-anim {
            animation: none !important;
          }
        }
      `}</style>

      {/* Fixed Positioning Container */}
      <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 group">
        {/* Floating Wrapper */}
        <div className="relative flex items-center justify-center wa-float-anim">
          
          {/* Continuous Pulse Rings */}
          <div className="absolute inset-0 rounded-full bg-green-500/20 wa-pulse-ring-1 pointer-events-none" />
          <div className="absolute inset-0 rounded-full bg-green-500/20 wa-pulse-ring-2 pointer-events-none" />

          {/* Soft Green Glow Layer */}
          <div className="absolute -inset-1 rounded-full bg-green-500/40 wa-glow-anim pointer-events-none transition-opacity duration-300 group-hover:opacity-80 group-hover:blur-md" />

          {/* Interactive Button */}
          <button
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
            className={`
              relative
              flex items-center justify-center
              w-14 h-14 md:w-16 md:h-16
              rounded-full
              bg-white shadow-lg shadow-green-500/20
              transition-all duration-300 ease-out
              group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-green-500/40
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
              cursor-pointer
            `}
          >
            {/* WhatsApp SVG Icon */}
            <div className="wa-icon-anim transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>Whatsapp-color</title>
                  <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Color-" transform="translate(-700.000000, -360.000000)" fill="#67C15E">
                      <path
                        d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                        id="Whatsapp"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}