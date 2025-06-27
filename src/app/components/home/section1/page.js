'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Section1 = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/rooms/outline-list');
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-[100vh] overflow-hidden z-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://augustine.qodeinteractive.com/wp-content/uploads/2021/02/h1-rev2.jpg')",
          }}
        >
          <canvas
            width="1200"
            height="800"
            className="w-full h-full opacity-100"
            style={{ backgroundColor: 'transparent' }}
            aria-hidden="true"
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-md leading-tight">
            A DAY IN AUGUSTINE
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl font-medium drop-shadow">
            ...a world of seclusion and indulgence
          </p>

          <button
            onClick={handleClick}
            className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold text-sm sm:text-base lg:text-lg rounded hover:bg-[#0b6354] hover:text-white transition duration-300"
          >
            View All Apartments
          </button>
        </div>
      </section>

      {/* Textual Section */}
      <section className="space-y-6 my-16 sm:my-20 px-4 font-sarabun max-w-2xl mx-auto text-center">
        {/* Decorative Line */}
        <span className="block w-16 h-1 bg-gray-800 mx-auto mb-3"></span>

        <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
          This is Augustine
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          A Luxurious Way to Meet <br /> the Capitals of Europe
        </h2>

        <p className="text-sm sm:text-base text-gray-700 px-2 sm:px-6">
          All our hotels are equipped with premium suites and first-class entertainment areas. The comfort and the needs of our guests come before all else here. Visit one of our locations!
        </p>

        {/* Button */}
        <Link
          href="/rooms/outline-list"
          className="inline-block border border-gray-800 text-gray-800 px-6 sm:px-9 py-3 sm:py-5 text-sm sm:text-lg rounded hover:bg-[#0b6354] hover:text-white hover:border-[#0b6354] transition-colors duration-300"
        >
          View all apartments – A luxurious way
        </Link>
      </section>
    </>
  );
};

export default Section1;
