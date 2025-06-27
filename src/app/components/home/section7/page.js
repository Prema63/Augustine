"use client";

import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const Section7 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const instagramPosts = [
    {
      id: 1,
      src: "https://augustine.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/131539150_125235699317466_1680290495647579435_nfull.jpg",
      alt: "Delicious gourmet dish with fresh ingredients"
    },
    {
      id: 2,
      src: "https://augustine.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/131920241_3526890440734754_3117020506912236472_nfull.jpg",
      alt: "Chef preparing signature meal"
    },
    {
      id: 3,
      src: "https://augustine.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/131481379_139214661311965_182039977368910142_nfull.jpg",
      alt: "Restaurant interior ambiance"
    },
    {
      id: 4,
      src: "https://augustine.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/131311681_416534786204819_7072603335989766206_nfull.jpg",
      alt: "Fresh ingredients and cooking process"
    },
    {
      id: 5,
      src: "https://augustine.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/131895679_399105448204450_935902261033434569_nfull.jpg",
      alt: "Beautifully plated dessert"
    },
    {
      id: 6,
      src: "https://augustine.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/131572926_233605041466303_7243378587181072031_nfull.jpg",
      alt: "Restaurant team and kitchen"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('instagram-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="instagram-section"
      className="relative w-full py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Background  */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(11,99,84,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(11,99,84,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#0b6354]" />
            <p className="text-sm font-bold text-[#0b6354] tracking-[0.2em] uppercase">Follow Us</p>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#0b6354]" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 mb-6">
            Find Us on Instagram and See Our Latest Posts
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay connected with our culinary journey and discover the stories behind every dish
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {instagramPosts.map((post, idx) => (
            <div
              key={post.id}
              className={`relative group transition-all duration-700 transform hover:scale-105 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                <img
                  src={post.src}
                  alt={post.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Instagram Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Post Description */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-medium bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
                    {post.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-[#0d7a66] text-[#0b6354] hover:text-white font-semibold rounded-xl border border-[#0b6354] shadow-lg hover:shadow-xl transition-all duration-300">
            <Instagram className="w-5 h-5" />
            <span>Follow @Restaurant</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button> 
        </div>
      </div>
    </section>
  );
};

export default Section7;