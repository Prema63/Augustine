'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo/logo.png" // Make sure this is in /public/logo/logo.png
            alt="Logo"
            width={120}
            height={48}
            className="mb-4 object-contain h-12 w-auto"
            priority
          />
          <p className="text-sm text-center md:text-left text-gray-600">
            Discover experiences with us — your trusted guide to unique journeys.
          </p>
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          {["Home", "About Us", "Activities", "Contact Us", "Cart", "Checkout"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="text-sm hover:text-[#0b6354] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm">Turgut Ozal Millet Cd.</p>
          <p className="text-sm">23466 Şişa Niyadak 897</p>
          <p className="text-sm mb-2">Istanbul, Turkey</p>
          <a href="tel:+9022555825555" className="text-sm hover:text-[#0b6354] transition">
            0225 5582 55 55
          </a>
          <a href="tel:+9005554865556" className="text-sm hover:text-[#0b6354] transition">
            0055 5486 55 56
          </a>
        </div>

        {/* Email & Social */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="text-lg font-semibold mb-2">Get in Touch</h4>
          <a href="mailto:augustine@example.com" className="text-sm hover:text-[#0b6354] transition">
            augustine@example.com
          </a>
          <a href="mailto:augustine@qodeinteractive.com" className="text-sm hover:text-[#0b6354] transition">
            augustine@qodeinteractive.com
          </a>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {[
              { icon: 'facebook', href: '#' },
              { icon: 'twitter', href: '#' },
              { icon: 'instagram', href: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-500 hover:text-[#0b6354] transition"
              >
                <i className={`fab fa-${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-2 md:space-y-0">
          <div>Terms of Use / Privacy Policy</div>
          <div>© 2025 Qode Interactive. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
