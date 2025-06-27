'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-screen-xl">
        
        {/* Logo */}
        <Link
          href="https://augustine.qodeinteractive.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-20 flex items-center justify-center"
        >
          <Image
            src="/logo/logo.png" 
            alt="Main Logo"
            width={120}
            height={80}
            className="object-contain h-full w-auto"
            priority
          />
        </Link>

        {/* Right*/}
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
