'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Section4 = () => {
  const router = useRouter()
   const handleClick = () => {
    router.push('/rooms/outline-list');
  };
  return (
    <>
      {/* Background Image  */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[70vh] md:h-[80vh] py-16 px-4 md:px-0"
        style={{
          backgroundImage: "url('https://augustine.qodeinteractive.com/wp-content/uploads/2021/01/h1-img-24.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/*  Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Authentic Place for the Best Memories
            </h3>
            <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed opacity-90">
              Dictum varius duis at consectetur lorem donec massa sapien faucibus.
              Tincidunt arcu non sodales neque sodales ut etiam sit amet.
              Enim nulla aliquet porttitor.
            </p>
           
          </div>
        </div>
      </section>

      {/* Suites Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image*/}
            <div className="flex flex-col space-y-8">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <div
                  className="w-full h-72 sm:h-96 lg:h-[450px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://api.staybluo.com/property_assets/property_images/395/1681285506-1.jpg')",
                  }}
                ></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-180"></div>
              </div>

              <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-1 text-center">
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 hover:text-[#0b6354] transition-colors duration-300 cursor-pointer">
                    Sunny Place
                  </p>
                </div>
                
                <div className="flex-shrink-0 mx-6">
                  <div
                  onClick={handleClick}
                   className="w-32 sm:w-36 h-12 rounded-full bg-[#0b6354] flex items-center justify-center hover:scale-95 hover:bg-[#084a3f] transition-all duration-300 cursor-pointer group shadow-lg">
                    <p className="text-white text-sm font-medium tracking-wide group-hover:tracking-wider transition-all duration-300">
                      VIEW MORE
                    </p>
                  </div>
                </div>
                
                <div className="flex-1 text-center">
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                    <span className="text-[#0b6354]">01</span> 
                    <span className="text-gray-400 mx-2">/</span> 
                    <span className="text-gray-600">03</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 lg:pl-8">
              {/* Title  */}
              <div className="relative">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-200 absolute -top-4 -left-2 select-none pointer-events-none">
                  Suites
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-700 relative z-10 hover:text-[#0b6354] transition-colors duration-500">
                  Suites
                </h1>
              </div>

              {/* Content Area */}
              <div className="space-y-8 relative">
                
                <div className="space-y-6">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold relative">
                    THIS IS AUGUSTINE
                  </p>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-800 leading-tight hover:text-gray-900 transition-colors duration-300">
                    Sunny Room Apartment
                  </h2>

                  <div className="relative pl-6">
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-xl">
                      Dictum varius duis at consectetur lorem donec massa sapien faucibus.
                      Tincidunt dui nulla aliquet porttitor lacus luctus arcu non sodales
                      neque sodales ut etiam sit amet. Enim nulla pul aliquet.
                    </p>
                  </div>

                  {/* Button */}
                  <div className="pt-4">
                    <a
                      target="_self"
                      className="inline-block border border-gray-800 text-gray-800 px-8 py-3 text-base sm:text-lg font-medium rounded hover:bg-[#0b6354] hover:text-white transition-all duration-300 hover:border-[#0b6354] hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Book A Stay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  );
};

export default Section4;