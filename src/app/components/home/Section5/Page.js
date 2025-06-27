'use client';
import React, { useState } from 'react';

const VideoHeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Café & Wine Bar",
      image: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/h1-img7.jpg",
    },
    {
      title: "Spa & Wellness",
      image: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/12/h1-img-20.jpg",
    },
    {
      title: "Restaurant",
      image: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/12/h1-img-21.jpg",
    },
    {
      title: "Meetings & Events",
      image: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/12/h1-img-23.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* Video Hero Section */}
      <div className="relative w-full mx-auto h-0 pb-[40%] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          src="https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/video1.mp4"
        />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h3 className="text-2xl md:text-5xl font-semibold text-white mb-4">
              Discover A Place Where Magic Starts
            </h3>
            <p className="max-w-2xl mx-auto text-white text-sm md:text-base leading-7">
              Dictum varius duis at consectetur lorem donec massa sapien faucibus.
              Tincidunt arcu non sodales neque sodales ut etiam sit amet.
              Enim nulla aliquet porttitor.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-5 py-16 lg:py-24">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience luxury and comfort with our carefully curated amenities
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">
            {/* Left Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              {items.map((item, index) => (
                <button
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`block w-full text-left p-6 rounded-xl transition-all duration-500 transform hover:scale-105 group
                    ${index === activeIndex
                      ? "text-black shadow-2xl translate-x-2"
                      : "bg-white hover:text-gray-700 shadow-md hover:shadow-xl border border-gray-100"
                    }`}
                >
                  <span className={`text-xl md:text-2xl lg:text-3xl font-semibold transition-all duration-300
                    ${index === activeIndex ? "text-gray-700" : "text-gray-800"}`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Side*/}
            <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                    ${index === activeIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                    <div className="w-12 h-1 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              ))}
              {/* Navigation Dots */}
              <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
                {items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300
                      ${index === activeIndex
                        ? "bg-black scale-125 shadow-lg"
                        : "bg-white bg-opacity-50 hover:bg-opacity-75"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spa Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        <div className="md:col-span-2 w-full h-[600px]">
          <img
            src="https://augustine.qodeinteractive.com/wp-content/uploads/2020/12/h1-img-20.jpg"
            alt="Spa"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>

        <div className="space-y-4 flex flex-col pl-7 justify-between">
          <div className="space-y-8">
            <span className="block w-10 h-1 bg-green-700"></span>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Spa moments</p>
            <h4 className="text-4xl font-semibold text-gray-800 leading-8">
              Relaxing Moments at Our Spa Center.
            </h4>
          </div>

          <p className="text-gray-600 leading-9 text-base">
            Dictum varius duis at consectetur lorem donec massa sapien faucibus.
            Tincidunt arcu non para sodales neque sodales ut etiam sit.
          </p>

          <ul className="space-y-2">
            {[
              "Thermal water with ancient baths",
              "Turkish bath",
              "Turkish sauna",
              "Relax and therapy massage",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-800">
                <span className="text-green-700 text-lg mt-1">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://augustine.qodeinteractive.com/rooms/full-info-list/"
            className="block w-full border rounded border-gray-800 text-gray-800 px-5 py-5 text-lg hover:bg-[#0b6354] hover:text-white transition-colors duration-300 hover:border-[#0b6354]"
          >
            Book a Stay
          </a>
        </div>
      </section>
    </div>
  );
};

export default VideoHeroSection;
