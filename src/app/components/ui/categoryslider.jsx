"use client";
import React from 'react';
import { colorThemes, itemIcons } from '../../../api/techstackdata';

/**
 * IndependentSlider - Single horizontal slider with configurable direction
 * 
 * Features:
 * - Independent continuous marquee scroll with LTR or RTL direction
 * - Independent hover pause/resume from exact position without delay or jump
 * - Configurable color theme (purple, cyan, green)
 * - Smooth continuous scrolling
 * - Fully responsive
 * 
 * @param {Object} props
 * @param {string} props.id - Unique slider identifier
 * @param {Array} props.items - Array of items: [{id, name, icon}, ...]
 * @param {string} props.direction - "ltr" (left-to-right) or "rtl" (right-to-left)
 * @param {string} props.colorTheme - Color theme: "purple", "cyan", or "green"
 * @param {number} props.speed - Animation speed in milliseconds (default: 25000)
 */
export default function IndependentSlider({
  id = "slider",
  items = [],
  direction = "ltr",
  colorTheme = "purple",
  speed = 25000,
}) {
  const theme = colorThemes[colorTheme] || colorThemes.purple;

  if (!items || items.length === 0) {
    return null;
  }

  // Duplicate items 4 times to ensure seamless infinite looping on all screen sizes
  const duplicatedItems = [...items, ...items, ...items, ...items];
  const isReverse = direction === "rtl";
  const animName = isReverse ? `marquee-rtl-${id}` : `marquee-ltr-${id}`;
  // Standardize duration for ultra-smooth continuous marquee (slower, calmer scroll)
  const duration = `${(speed > 10000 ? speed * 1.6 : speed * 8.5) / 1000}s`;

  return (
    <div
      className="w-full overflow-hidden select-none"
      role="region"
      aria-label={`Slider: ${id}`}
    >
      <style>{`
        @keyframes marquee-ltr-${id} {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-rtl-${id} {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-track-${id} {
          display: flex;
          gap: 0.625rem;
          width: max-content;
          animation: ${animName} ${duration} linear infinite;
          will-change: transform;
        }
        .marquee-track-${id}:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className={`marquee-track-${id}`}>
        {duplicatedItems.map((item, index) => (
          <div key={`${id}-${item.id}-${index}`} className="shrink-0">
            {/* Item Badge Card */}
            <div
              className={`
                flex flex-row items-center justify-center gap-2
                px-2.5 py-1.5 rounded-full
                border border-current border-opacity-30
                transition-all duration-300
                cursor-default
                ${theme.badge}
                ${theme.hover}
              `}
              style={{
                color: theme.text.replace('text-', '').replace('-400', ''),
              }}
            >
              {/* Icon */}
              <div className={`flex items-center justify-center text-base ${theme.icon}`}>
                {itemIcons[item.icon] || itemIcons[item.id] || "◆"}
              </div>

              {/* Name */}
              <p className={`text-[16px] font-normal ${theme.text} text-center whitespace-nowrap font-family-description`}>
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}