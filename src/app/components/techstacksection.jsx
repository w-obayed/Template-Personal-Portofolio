"use client";
import React from 'react';
import { threeSlidersData } from '../../api/techstackdata';
import IndependentSlider from './ui/categoryslider';


export default function TechStackSection() {
  const { section_title, sliders } = threeSlidersData;

  return (
    <section className="w-full pb-30">
      <div className="w-full">
        {/* Section Title */}
        <div className="mb-8 md:mb-12 lg:mb-16 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight font-family-heading">
            {section_title}
          </h2>
        </div>

        <div className="space-y-2.5">
          {sliders.map((sliderConfig) => (
            <div
              key={sliderConfig.id}
              className="w-full overflow-hidden"
            >
              <IndependentSlider
                id={sliderConfig.id}
                items={sliderConfig.items}
                direction={sliderConfig.direction}
                colorTheme={sliderConfig.colorTheme}
                speed={10000}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}