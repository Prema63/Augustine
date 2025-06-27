'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-screen-xl">
        
        {/* Left: Search Button */}
        <Link
          href="#"
          className="flex items-center text-sm font-medium text-gray-700 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <span className="ml-4">Search</span>
        </Link>

        {/* Center: Logo */}
        <Link
          href="https://augustine.qodeinteractive.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-20 flex items-center justify-center"
        >
          <Image
            src="/logo/logo.png" // ✅ Updated path
            alt="Main Logo"
            width={120}
            height={80}
            className="object-contain h-full w-auto"
            priority
          />
        </Link>

        {/* Right: Menu / Apartment Button */}
        <button className="group flex items-center justify-center relative">
          <span className="text-sm text-[#0b6354] mr-3">Apartment</span>
          <div className="w-6 h-6 relative flex items-center justify-center">
            <span className="absolute w-4 h-4 rounded-full bg-[#0b6354] transition-all duration-300 ease-in-out group-hover:w-3 group-hover:h-3 scale-105" />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
