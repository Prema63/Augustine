'use client';
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    stars: 5,
    text: "Been there with my family. Beautiful place, definitely recommended. Children also enjoyed it very much.",
    author: "Murice Stanton, UK",
  },
  {
    stars: 5,
    text: "This place is great! I had a very pleasant stay here. Great staff and beautiful suites with a fabulous view!",
    author: "Jessica Brown, USA",
  },
  {
    stars: 5,
    text: "Loved the ambiance and hospitality. A peaceful stay with breathtaking views.",
    author: "Rajesh Kumar, India",
  },
];

const Section6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="transition-all duration-700 ease-in-out">
          <div className="flex flex-col space-y-4 items-center text-gray-800 px-4">
            {/* Stars */}
            <div className="flex space-x-1 mb-4 text-yellow-500">
              {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                <span key={i} className="text-xl text-[#0b6354]">&#9733;</span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl font-medium italic max-w-2xl mb-3">
              “{testimonials[currentIndex].text}”
            </p>

            {/* Author */}
            <p className="text-base md:text-lg text-[#0b6354] font-semibold">
              {testimonials[currentIndex].author}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#0b6354] scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
