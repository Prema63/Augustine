"use client"
import React from 'react';

export default function Section1() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image*/}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/Room-img05.jpg')`,
        }}
      >
        {/* Subtitle overlay for */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />
      </div>

      {/* Content*/}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-wide leading-tight">
            Outline
            <span className="block mt-1 sm:mt-2">list</span>
          </h1>
          
          {/* Seprator */}
          <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-0.5 bg-white/40 mx-auto mt-4 sm:mt-6 md:mt-8 transition-all duration-300"></div>
          
          {/* subtitle*/}
          <p className="text-sm sm:text-base md:text-lg text-white/80 mt-4 sm:mt-6 max-w-md mx-auto font-light tracking-wide">
            Discover your perfect bedroom sanctuary
          </p>
        </div>
      </div>
    </section>
  );
}